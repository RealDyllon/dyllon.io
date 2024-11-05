import React from "react";
import Link from "next/link";
import { getBlogPostMetadata } from "../../lib/getBlogPostMetadata.ts";

export default async function Blog(): Promise<JSX.Element> {
  const posts = await getBlogPostMetadata();

  // console.log("posts", posts)

  return (
    <div>
      <h2 className="mt-2 px-6 font-semibold">blog</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 max-w-screen-2xl gap-5 my-6 px-6">
        {posts.map((post) => (
          <Link href={post.route} key={post.route}>
            <div className="bg-black dark:bg-zinc-900 text-white px-4 py-6 hover:opacity-90 transition-all h-full flex flex-col">
              <h3 className="font-bold line-clamp-2">
                {post.frontmatter.title}
              </h3>
              <div className="flex-1" />
              <p className="mt-2 line-clamp-2">{post.frontmatter.subtitle}</p>
              {/* <p>{JSON.stringify(post.frontmatter.date)}</p> */}
              {post.frontmatter.image ? (
                <img
                  alt={post.frontmatter.title}
                  className="mt-4 aspect-[4/3]"
                  src={post.frontmatter.image}
                />
              ) : null}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
