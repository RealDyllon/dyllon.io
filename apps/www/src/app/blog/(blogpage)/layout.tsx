import {Button} from "@repo/ui/components/ui/button";
import {ArrowLeft} from "lucide-react";
import Link from "next/link";
import {cn} from "@repo/ui/lib/utils";

export default function BlogPostLayout({
                                         children,
                                       }: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="container pt-6">
      <div className="max-w-4xl mx-auto flex flex-col gap-3 mb-4">
        <BackToBlogMain/>
        {children}
        <BackToBlogMain/>
      </div>
    </div>
  );
}

interface BackToBlogMainProps {
  className?: string;
}

function BackToBlogMain({className}: BackToBlogMainProps): JSX.Element {
  return (
    <Button className={cn("grow-0 self-start flex gap-1", className)} variant="secondary" asChild>
      <Link href="/blog" className="">
        <ArrowLeft size={20}/>
        All blog posts
      </Link>
    </Button>
  );
}
