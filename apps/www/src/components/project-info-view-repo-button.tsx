import { Button } from "@repo/ui/components/ui/button";
import { Github } from "lucide-react";
import Link from "next/link";

interface ProjectInfoViewRepoButtonProps {
  url: string;
}

export function ProjectInfoViewRepoButton({
  url,
}: ProjectInfoViewRepoButtonProps): JSX.Element {
  return (
    <Button asChild className="flex-1 gap-1 text-lg mt-4">
      <Link href={url} target="_blank">
        <Github size={20} />
        View on Github
      </Link>
    </Button>
  );
}
