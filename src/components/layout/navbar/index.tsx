import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Logo } from "@/assets/logo";

import { DesktopNavLinks } from "./desktop";

export const Navbar = () => {
  return (
    <header className="sticky top-3 z-999 mx-3 rounded-md border bg-[radial-gradient(transparent_1px,_#fafafa_1px)] bg-[size:4px_4px] bg-background/60 backdrop-blur-xl">
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
