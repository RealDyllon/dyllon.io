"use client";

import React from "react";
import useScrollPosition from "@react-hook/window-scroll";

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
    <div className="h-16 w-full sticky top-0 px-6 py-4 flex items-center bg-white">
      <h4 className="m-0 font-medium">dyllon</h4>
      <div className="flex-1"></div> {/* Spacer */}
      <div className="hidden md:flex flex-row">
        {Object.entries(items).map(([key, value], index) => (
          <React.Fragment key={key}>
            <a
              className="mx-3 font-medium text-lg"
              key={key}
              href={value.url}
              >
              {value.label}
            </a>
          </React.Fragment>
        ))}
      </div>
      <div className="md:hidden">
        menu
      </div>
    </div>
  );
};

export default Navbar;
