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
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 max-w-screen-2xl gap-5 my-6 px-6">
        {posts.map((post) => (
          <Link key={post.route} href={post.route}>
            <div className="bg-black dark:bg-white text-white dark:text-black px-4 py-6 hover:opacity-90 transition-all h-full flex flex-col">

              <h3 className="font-bold line-clamp-2">{post.frontmatter.title}</h3>
              <div className="flex-1">
              </div>
              <p className="mt-2 line-clamp-2">{post.frontmatter.subtitle}</p>
              {/* <p>{JSON.stringify(post.frontmatter.date)}</p> */}
              {post.frontmatter.image && (
                <img className="mt-4 aspect-[4/3]" src={post.frontmatter.image} alt={post.frontmatter.title} />
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}