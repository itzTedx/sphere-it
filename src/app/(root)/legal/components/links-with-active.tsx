"use client";

import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  href: Route;
}

export const HeaderLink = ({ children, href }: Props) => {
  const pathname = usePathname();
  return (
    <Link
      className={cn(
        "inline-block p-4 font-display font-medium text-subhead-base",
        pathname === href ? "text-primary-600 shadow-[0_2px_0_0] shadow-primary-600" : "text-stone-600"
      )}
      href={href}
      title={children as string}
    >
      {children}
    </Link>
  );
};
