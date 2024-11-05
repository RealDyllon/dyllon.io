import path from "node:path";
import * as fs from "node:fs";
import matter from "gray-matter";

// Define the shape of your frontmatter
interface PostFrontmatter {
  title?: string;
  subtitle?: string;
  image?: string;
  date?: Date;
  [key: string]: unknown; // Allow for additional frontmatter fields
}

const postsDirectory = path.join(process.cwd(), "src", "app", "blog"); // Updated path to match your structure

// console.log("postsDirectory:", postsDirectory)

export async function getBlogPostMetadata() {
  const fileNames = await getFilesRecursively(postsDirectory);

  const allPostsData = await Promise.all(
    fileNames.map(async (fullPath) => {
      // Get the relative path from the blog directory as the route
      const relativePath = path.relative(postsDirectory, fullPath);
      const id = relativePath
        .replace(/\/page\.mdx$/, "")
        .replace(/\(blogpage\)/, "");

      // Read markdown file as string
      const fileContents = await fs.promises.readFile(fullPath, "utf8");
      // console.log("fileContents:", fileContents)

      try {
        const matterResult = matter(fileContents);

        // Get first sentence that's not a heading
        const firstSentence =
          matterResult.content
            .split("\n")
            .find((line) => !line.startsWith("#") && line.trim().length > 0) ||
          "";

        return {
          route: `/blog${id}`,
          frontmatter: {
            ...matterResult.data,
            subtitle: firstSentence.trim(),
          } as PostFrontmatter,
        };
      } catch (error) {
        console.error(`Error processing ${fullPath}:`, error);
        return {
          route: id,
          frontmatter: {} as PostFrontmatter,
        };
      }
    }),
  );

  // Sort posts by date if available, otherwise maintain order
  return allPostsData.sort((a, b) => {
    const dateA: Date = a.frontmatter.date || new Date(0);
    const dateB: Date = b.frontmatter.date || new Date(0);

    // console.log("dateA:", dateA)
    // console.log("dateB:", dateB)

    if (dateA.getTime() < dateB.getTime()) return 1;
    if (dateA.getTime() > dateB.getTime()) return -1;
    return 0;
  });
}

async function getFilesRecursively(directory: string): Promise<string[]> {
  let files: string[] = [];

  const items = await fs.promises.readdir(directory, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(directory, item.name);
    if (item.isDirectory()) {
      files = [...files, ...(await getFilesRecursively(fullPath))];
    } else if (item.isFile() && item.name === "page.mdx") {
      files.push(fullPath);
    }
  }

  return files;
}
