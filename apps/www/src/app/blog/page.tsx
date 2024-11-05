import Link from "next/link";
import {getBlogPostMetadata} from "../../lib/getBlogPostMetadata.ts";

export default async function Blog() {
  const posts = await getBlogPostMetadata()

  console.log("posts", posts)

  return (
    <div>
      <h2 className="mt-2 px-6 font-semibold">
        blog
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-6 px-6">
        {posts.map((post) => (
          <Link key={post.route} href={`/blog/${post.route}`}>
            <div className="bg-black text-white px-4 py-6 hover:bg-black/85 transition-all">
              <h3 className="font-bold">{post.frontmatter.title}</h3>
              <p>{post.frontmatter.subtitle}</p>
              <p>{post.frontmatter.date}</p>
              <img className="mt-4" src={post.frontmatter.image} alt={post.frontmatter.title} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}