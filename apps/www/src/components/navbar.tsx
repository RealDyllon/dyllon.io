import React from "react";
// import useScrollPosition from "@react-hook/window-scroll";
import { ThemeToggle } from "@repo/ui/components/theme/theme-toggle";
import { Button } from "@repo/ui/components/ui/button";
import Link from "next/link";
import { NavbarMobileMenu } from "./navbar-mobile-menu";
import { navigationItems } from "../data/navigation";

interface Options {
  hideAtTop?: boolean;
}

function Navbar({ hideAtTop = false }: Options) {
  // const scrollY = useScrollPosition(hideAtTop ? 0 : 60 /*fps*/);

  return (
    <div className="h-16 w-full sticky top-0 z-20 py-4 bg-white text-black dark:bg-black dark:text-white">
      <div className="flex items-center container">
        <Link href="/">
          <Button className="px-2 -ml-2" variant="ghost">
            <h4 className="m-0 font-medium">dyllon</h4>
          </Button>
        </Link>
        <div className="flex-1" /> {/* Spacer */}
        <div className="hidden md:flex flex-row items-center gap-2 -mr-3">
          <ThemeToggle
            buttonVariant="ghost"
            contentClassname="rounded-sm"
            triggerClassname="mx-2"
          />
          {Object.entries(navigationItems).map(([key, value], index) => (
            <Link href={value.url} key={key}>
              <Button className="font-medium text-lg" variant="ghost">
                {value.label}
              </Button>
            </Link>
          ))}
        </div>
        <NavbarMobileMenu />
      </div>
    </div>
  );
}

export default Navbar;
