"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";

import { Logo } from "@/assets/logo";

import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";

import { DesktopNavLinks } from "./desktop";
import { MobileNav } from "./mobile";

export const Navbar = () => {
  const { scrollDir, isScrolled } = useScroll({ scrollBgThreshold: 420, scrollDirThreshold: 40 });
  const pathname = usePathname();
  return (
    <header
      className={cn(
        "fixed top-0 z-9999 w-full bg-[size:4px_4px] transition-all duration-500 ease-out md:top-2 md:mx-3 md:rounded-md",
        scrollDir === "up" ? "translate-y-0 text-foreground" : "-translate-y-24",
        isScrolled
          ? "bg-[radial-gradient(transparent_1px,_#fff)] bg-card/60 text-foreground backdrop-blur-xl"
          : "bg-[radial-gradient(transparent)] bg-transparent",
        (pathname === "/about") !== isScrolled ? "text-background" : "text-foreground"
      )}
    >
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between">
        <Link href="/">
          <Logo />
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
