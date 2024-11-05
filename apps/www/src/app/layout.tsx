import "./global.css";

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
      <body>
        <div className="h-[calc(100svh-64px)]">
          <Navbar />
          {children}
        </div>
        <footer className="flex justify-center items-center h-16 border-t border-gray-200">
          <small>&copy; Copyright 2024 Dyllon Gunawardhana</small>
        </footer>
      </body>
    </html>
  );
}
