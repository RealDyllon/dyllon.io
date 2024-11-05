import "@repo/ui/globals.css";

import { Outfit } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import React from "react";
import { ThemeProvider } from "@repo/ui/components/theme/provider";
import Navbar from "../components/navbar.tsx";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html className={`${outfit.variable} `} lang="en">
      <body className="bg-white text-black dark:bg-black dark:text-white w-screen overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          <div className="min-h-[calc(100svh-88px)]">
            <Navbar />
            {children}
          </div>
          <footer className="flex justify-center items-center h-16 border-t text-gray-600 dark:text-gray-400">
            <small>&copy; Copyright 2024 Dyllon Gunawardhana</small>
          </footer>
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-3M4V10RQEG" />
    </html>
  );
}
