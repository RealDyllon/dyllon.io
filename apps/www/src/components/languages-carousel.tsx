"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import languageData from "../data/languages";

export function LanguagesCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      direction: "ltr",
      axis: "x",
    },
    [
      AutoScroll({
        startDelay: 0,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
        stopOnFocusIn: false,
        playOnInit: true,
        active: true,
        speed: 0.6,
        direction: "forward",
      }),
    ],
  );

  return (
    <div className="overflow-hidden w-full h-16 relative" ref={emblaRef}>
      <div className="flex">
        {Object.entries(languageData).map(([key, value]) => (
          <div
            className="flex-none w-40 md:w-48 lg:w-64 xl:w-[calc(100vw/6)]"
            key={key}
          >
            <img src={value.imageUri} className="h-16 w-16" alt={key} />{" "}
            {/* Added alt attribute for accessibility */}
          </div>
        ))}
      </div>
    </div>
  );
}
