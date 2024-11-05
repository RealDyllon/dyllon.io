import { Button } from "@repo/ui/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ProjectInfoVisitButton } from "../../../components/project-info-visit-button";

export default function ProjectPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="px-6 pt-6">
      <div className="max-w-4xl mx-auto flex flex-col gap-2 mb-4">
        <BackToProjects />
        {children}
        <div className="my-4">
          <BackToProjects />
        </div>
      </div>
    </div>
  );
}

function BackToProjects(): JSX.Element {
  return (
    <Link href="/projects">
      <Button className="flex gap-1" variant="secondary">
        <ArrowLeft size={20} />
        All projects
      </Button>
    </Link>
  );
}
