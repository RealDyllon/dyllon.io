import {ArrowRight, Info} from "lucide-react";
import {getProjectMetadata} from "../../lib/getProjectMetadata.ts";
import {Button} from "@repo/ui/components/ui/button";
import Link from "next/link";

export default async function Projects() {
  const projects = await getProjectMetadata();

  console.log("projects", projects)

  return (
    <div>
      <h2 className="mt-2 px-6 font-semibold">projects</h2>
      <div className="grid grid-cols-1 xl:grid-cols-2 max-w-screen-2xl gap-5 my-6 px-6">
        {projects.map((project) => (
          <div
            className="bg-black dark:bg-white text-white dark:text-black px-5 py-5 hover:opacity-90 transition-all h-full flex flex-col">
            <Link href={project.route} className="flex-1 gap-1 flex flex-col">
              <h3 className="font-bold line-clamp-2 mt-1">{project.frontmatter.title}</h3>
              <div className="flex-1">
              </div>
              <p className="mt-2 line-clamp-2">{project.frontmatter.description}</p>
              {project.frontmatter.image && (
                <img className="mt-4 aspect-[16/9]" src={project.frontmatter.image} alt={project.frontmatter.title}/>
              )}
            </Link>
            <div className="flex gap-2">
              <Button asChild variant="ghost" className="mt-4 border border-white dark:border-black">
                <Link href={project.route} className="flex-1 flex gap-1">
                    Find out more <Info size={20}/>
                </Link>
              </Button>
              <Button asChild variant="secondary" className="mt-4 flex-1 flex gap-1">
                <a href={project.frontmatter.url} target="_blank" rel="noopener noreferrer" className="flex-1">
                  Visit <ArrowRight size={20}/>
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
