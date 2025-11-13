import Link from "next/link";

import { cn } from "@/lib/utils";

import { DesktopNavLinks } from "./desktop";
import { InquiryModal } from "./inquiry-modal";
import { Logo } from "./logo";
import { MobileNav } from "./mobile";

export const Navbar = () => {
  return (
    <header
      className={cn(
        "sticky top-0 z-9999 w-full border-b bg-[radial-gradient(transparent_1px,_#fff)] bg-[size:4px_4px] bg-card/90 text-foreground backdrop-blur-xl transition-all duration-500 ease-out"
      )}
    >
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between font-display">
        <Link className="-m-1 rounded-md p-1" href="/">
          <Logo />
        </Link>
        <div className="hidden md:block">
          <DesktopNavLinks />
        </div>
        <div className="flex items-center gap-4">
          <InquiryModal />

          <MobileNav />
        </div>
      </div>
    </header>
  );
};
