"use client";

import React from "react";
import useScrollPosition from "@react-hook/window-scroll";
import {ThemeToggle} from "@repo/ui/components/theme/theme-toggle";
import {Button} from "@repo/ui/components/ui/button";
import Link from "next/link";

interface Options {
  hideAtTop?: boolean;
}

const items = [
  { label: "home", url: "/" },
  { label: "about", url: "/about" },
  { label: "projects", url: "/projects" },
  { label: "blog", url: "/blog" },
]

const Navbar = ({ hideAtTop = false }: Options) => {
  const scrollY = useScrollPosition(hideAtTop ? 0 : 60 /*fps*/);

  return (
    <div className="h-16 w-full sticky top-0 px-4 py-4 flex items-center bg-white text-black dark:bg-black dark:text-white">
      <Link href="/">
        <Button variant="ghost" className="px-2">
          <h4 className="m-0 font-medium">dyllon</h4>
        </Button>
      </Link>
      <div className="flex-1"></div> {/* Spacer */}
      <div className="hidden md:flex flex-row items-center gap-2 mx-3">
      <ThemeToggle className="mx-2" buttonVariant="ghost" />
        {Object.entries(items).map(([key, value], index) => (
          <Link href={value.url} key={key}>
            <Button
              className="font-medium text-lg"
              variant="ghost"
              >
              {value.label}
            </Button>
          </Link>
        ))}
      </div>
      <div className="md:hidden">
        menu
      </div>
    </div>
  );
};

export default Navbar;
