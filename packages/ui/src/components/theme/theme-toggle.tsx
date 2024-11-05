"use client";

import * as React from "react";
import { Check, Laptop, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button, ButtonProps } from "@repo/ui/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@repo/ui/components/ui/dropdown-menu";

interface ThemeToggleProps {
  triggerClassname?: string;
  contentClassname?: string;
  buttonVariant?: ButtonProps["variant"];
}

export function ThemeToggle({
  triggerClassname,
  contentClassname,
  buttonVariant = "outline",
}: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={buttonVariant}
          size="icon"
          className={triggerClassname}
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className={contentClassname}>
        {/*<DropdownMenuLabel>*/}
        {/*  <span className="">Theme</span>*/}
        {/*</DropdownMenuLabel>*/}
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100" />
          <span className="flex-1">Light</span>
          {theme === "light" && <Check />}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100" />
          <span className="flex-1">Dark</span>
          {theme === "dark" && <Check />}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <Laptop className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100" />
          <span className="flex-1">System</span>
          {theme === "system" && <Check />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
