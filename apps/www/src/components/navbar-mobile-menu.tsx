"use client";

import { Button } from "@repo/ui/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@repo/ui/components/ui/drawer";
import Link from "next/link";
import { XIcon } from "lucide-react";
import { useState } from "react";
import { navigationItems } from "../data/navigation";

export function NavbarMobileMenu(): JSX.Element {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="md:hidden mx-3">
      <Drawer onOpenChange={setOpen} open={isOpen}>
        <DrawerTrigger asChild>
          <Button className="font-medium text-lg" variant="ghost">
            menu
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader className="-mt-6 -mb-12 flex flex-col items-end">
              <DrawerClose>
                <Button size="icon" variant="secondary">
                  <XIcon />
                </Button>
              </DrawerClose>
            </DrawerHeader>

            {/*<div className="bg-blue-500 h-96">hello</div>*/}

            <div className="mt-4 mb-8 flex flex-col gap-4 items-center">
              {Object.entries(navigationItems).map(([key, value], index) => (
                <Button
                  asChild
                  className="font-medium text-lg"
                  key={key}
                  size="lg"
                  variant="ghost"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <Link href={value.url}>
                    <span className="text-3xl">{value.label}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
