import "@repo/ui/globals.css";

import { Outfit } from "next/font/google";
import React from "react";
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
    <html lang="en" className={`${outfit.variable} `}>
      <body className="bg-white text-black dark:bg-black dark:text-white">
        <div className="min-h-[calc(100svh-64px)]">
          <Navbar />
          {children}
        </div>
        <footer className="flex justify-center items-center h-16 border-t">
          <small>&copy; Copyright 2024 Dyllon Gunawardhana</small>
        </footer>
      </body>
    </html>
  );
}
