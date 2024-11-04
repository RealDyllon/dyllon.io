import "./global.css";

import { Outfit } from "next/font/google";
import React from "react";

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
        {children}
        <footer className="flex justify-center items-center py-8 border-t border-gray-200">
          <small>&copy; Copyright 2024 Dyllon Gunawardhana</small>
        </footer>
      </body>
    </html>
  );
}
