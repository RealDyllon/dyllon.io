import { Button } from "@repo/ui/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="px-6 pt-6">
      <div className="max-w-3xl mx-auto flex flex-col gap-2 mb-4">
        <BackToBlogMain />
        {children}
        <div className="my-4">
          <BackToBlogMain />
        </div>
      </div>
    </div>
  );
}

function BackToBlogMain(): JSX.Element {
  return (
    <Link href="/blog">
      <Button className="flex gap-1" variant="secondary">
        <ArrowLeft size={20} />
        All blog posts
      </Button>
    </Link>
  );
}
