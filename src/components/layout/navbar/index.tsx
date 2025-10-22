"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Logo } from "@/assets/logo";

import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";

import { DesktopNavLinks } from "./desktop";
import { MobileNav } from "./mobile";

export const Navbar = () => {
  const { scrollDirection } = useScroll();
  return (
    <header
      className={cn(
        "fixed top-0 z-9999 w-full bg-[radial-gradient(transparent_1px,_#fff)] bg-[size:4px_4px] bg-card/60 backdrop-blur-xl transition-transform duration-500 ease-out md:top-2 md:mx-3 md:rounded-md",
        scrollDirection === "up" ? "translate-y-0" : "-translate-y-24"
      )}
    >
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between">
        <Link href="/">
          <Logo className="text-[#111111]" />
        </Link>
        <div className="hidden md:block">
          <DesktopNavLinks />
        </div>
        <div className="flex items-center gap-4">
          <Button asChild className="hidden md:inline-flex">
            <Link href="/contact">Get in touch</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
};
