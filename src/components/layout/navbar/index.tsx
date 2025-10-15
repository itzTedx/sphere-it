import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Logo } from "@/assets/logo";

import { DesktopNavLinks } from "./desktop";

export const Navbar = () => {
  return (
    <header className="fixed top-3 z-999 mx-3 w-full rounded-md bg-[radial-gradient(transparent_1px,_#fff)] bg-[size:4px_4px] bg-card/60 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>
        <DesktopNavLinks />
        <Button asChild>
          <Link href="/contact">Get in touch</Link>
        </Button>
      </div>
    </header>
  );
};
