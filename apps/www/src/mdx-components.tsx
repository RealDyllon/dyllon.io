import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children }) => (
      <h1 className="text-5xl md:text-6xl bg-black dark:bg-zinc-800 text-white mb-4 p-2">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-4xl my-4 font-semibold">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-3xl my-4 font-semibold">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-2xl my-4 font-semibold">{children}</h4>
    ),
    h5: ({ children }) => (
      <h5 className="text-xl my-4 font-semibold">{children}</h5>
    ),
    h6: ({ children }) => (
      <h6 className="text-lg my-4 font-semibold">{children}</h6>
    ),
    p: ({ children }) => <p className="text-lg">{children}</p>,
    ul: ({ children }) => <ul className="list-disc list-inside">{children}</ul>,
    ol: ({ children }) => (
      <ol className="list-decimal list-inside">{children}</ol>
    ),
    li: ({ children }) => <li className="text-lg">{children}</li>,
    code: ({ children }) => (
      <code className="inline-block text-wrap bg-slate-800 text-emerald-300 px-3 py-3 w-full">
        {children}
      </code>
    ),
    img: ({ src, alt }) => (
      <img
        alt={alt}
        className="w-full border-2 border-black dark:border-white"
        src={src}
      />
    ),
  };
}
