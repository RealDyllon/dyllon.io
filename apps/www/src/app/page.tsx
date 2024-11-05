import React from "react";
import contactData from "../data/contact";
import { LanguagesCarousel } from "../components/languages-carousel";

export const metadata = {
  title: "dyllon's website",
};

export default function Home(): JSX.Element {
  // log("Hey! This is the Store page.");

  return (
    <>
      <div className="">
        <main className="min-h-screen flex flex-col justify-center items-center">
          <div className="mx-4 flex flex-wrap justify-center">
            <h1 className="m-1 text-center">hello,</h1>
            <h1 className="m-1 text-center">i&apos;m dyllon</h1>
          </div>

          <h4 className="my-16 mb-8 text-center">
            i&apos;m a software engineer in Singapore
          </h4>

          <h6 className="mt-8 mb-16 text-center font-medium">
            i build neat things in these languages:
          </h6>

          <LanguagesCarousel />

          <div className="mt-20 flex flex-row items-center">
            {Object.entries(contactData).map(([key, value], index) => (
              <React.Fragment key={key}>
                <a
                  className="mx-2"
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
          </div>
        </main>
      </div>
    </>
  );
}
