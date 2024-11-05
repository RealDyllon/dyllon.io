import { ArrowRight, Info } from "lucide-react";
import { Button } from "@repo/ui/components/ui/button";
import Link from "next/link";
import { getProjectMetadata } from "../../lib/getProjectMetadata.ts";

export default async function Projects(): Promise<JSX.Element> {
  const projects = await getProjectMetadata();

  // console.log("projects", projects);

  return (
    <div className="container">
      <h2 className="mt-2 font-semibold">projects</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-6">
        {projects.map((project) => (
          <div
            className="bg-black dark:bg-zinc-900 text-white px-5 py-5 hover:opacity-90 transition-all h-full flex flex-col"
            key={project.route}
          >
            <Link className="flex-1 gap-1 flex flex-col" href={project.route}>
              <h3 className="font-bold line-clamp-2 mt-1">
                {project.frontmatter.title}
              </h3>
              <div className="flex-1" />
              <p className="mt-2 line-clamp-2">
                {project.frontmatter.description}
              </p>
              {project.frontmatter.image ? (
                <img
                  alt={project.frontmatter.title}
                  className="mt-4 aspect-[16/9]"
                  src={project.frontmatter.image}
                />
              ) : null}
            </Link>
            <div className="flex gap-2">
              <Button
                asChild
                className="mt-4 border border-white"
                variant="ghost"
              >
                <Link className="flex-1 flex gap-1" href={project.route}>
                  Find out more <Info size={20} />
                </Link>
              </Button>
              <Button
                asChild
                className="mt-4 flex-1 flex gap-1 dark:bg-white dark:text-black"
                variant="secondary"
              >
                <a
                  className="flex-1"
                  href={project.frontmatter.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Visit <ArrowRight size={20} />
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
