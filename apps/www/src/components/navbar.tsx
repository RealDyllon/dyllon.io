"use client";

import React from "react";
import useScrollPosition from "@react-hook/window-scroll";
import contactData from "../data/contact";

interface Options {
  hideAtTop?: boolean;
}

const Navbar = ({ hideAtTop = false }: Options) => {
  const scrollY = useScrollPosition(hideAtTop ? 0 : 60 /*fps*/);

  return (
    <div className="h-16 w-full sticky top-0 px-6 py-4 flex items-center md:bg-white">
      <h4 className="m-0 font-medium">dyllon</h4>
      <div className="flex-1"></div> {/* Spacer */}
      {Object.entries(contactData).map(([key, value], index) => (
        <React.Fragment key={key}>
          <a
            className="mx-3"
            key={key}
            href={value.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {value.displayText}
          </a>
          {index < Object.entries(contactData).length - 1 && (
            <p className="mx-1 inline">•</p>
          )}
        </React.Fragment>
      ))}
      {/*<div className="hidden sm:block"> /!* Hide on smaller screens *!/*/}
      {/*  <a*/}
      {/*    className="mx-3"*/}
      {/*    href={contactData.displayText}*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    /!*Replace the href with a valid one, I couldn't find one using contactData.displayText *!/*/}
      {/*    {contactData.displayText}*/}
      {/*  </a>*/}
      {/*</div>*/}
    </div>
  );
};

export default Navbar;
