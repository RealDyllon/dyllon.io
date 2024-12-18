import { Button } from "@repo/ui/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ProjectInfoVisitButtonProps {
  url: string;
}

export function ProjectInfoVisitButton({ url }: ProjectInfoVisitButtonProps) {
  return (
    <Button asChild className="flex-1 gap-1 text-lg mt-4">
      <Link href={url} target="_blank">
        Visit this Project
        <ArrowRight size={20} />
      </Link>
    </Button>
  );
}
