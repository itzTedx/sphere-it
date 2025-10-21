"use client";

import { useState } from "react";
import Link from "next/link";

import { Menu } from "lucide-react";

import { IconBox } from "@/components/icon-box";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { NAV_LINKS } from "@/data/constants";
import { SubmenuLink } from "@/types/layout";

export const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <Drawer onOpenChange={setOpen} open={open}>
      <DrawerTrigger asChild>
        <Button className="md:hidden" size="icon" variant="ghost">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open navigation menu</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-[85vh]">
        <DrawerHeader>
          <div className="flex items-center justify-between">
            <DrawerTitle>Navigation</DrawerTitle>
          </div>
          <DrawerDescription className="sr-only">Navigate through our services and resources</DrawerDescription>
        </DrawerHeader>

        <div className="flex-1 overflow-y-auto px-4">
          <nav className="space-y-4">
            {NAV_LINKS.map(({ id, label, href, submenu }) => (
              <div className="space-y-2" key={id}>
                {submenu ? (
                  <MobileSubmenu items={submenu} label={label} />
                ) : (
                  <Link
                    className="block rounded-lg px-3 py-2 font-medium text-base transition-colors hover:bg-stone-100"
                    href={href || "#"}
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>

        <DrawerFooter>
          <Button asChild className="w-full">
            <Link href="/contact" onClick={() => setOpen(false)}>
              Get in touch
            </Link>
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

function MobileSubmenu({ label, items }: { label: string; items: SubmenuLink[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-2">
      <button
        className="flex w-full items-center justify-between rounded-lg px-3 py-2 font-medium text-base transition-colors hover:bg-stone-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{label}</span>
        <span className={`${isOpen ? "rotate-180" : ""} transition-transform`}>▼</span>
      </button>

      {isOpen && (
        <div className="ml-4 space-y-1 border-stone-200 border-l-2 pl-4">
          {items.map((item) => (
            <MobileSubmenuItem item={item} key={item.id} />
          ))}
        </div>
      )}
    </div>
  );
}

function MobileSubmenuItem({ item }: { item: SubmenuLink }) {
  return (
    <Link
      className="flex items-start gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-stone-100"
      href={item.href}
    >
      {item.Icon && (
        <IconBox className="shrink-0">
          <item.Icon className="h-4 w-4" />
        </IconBox>
      )}
      <div className="min-w-0 flex-1">
        <div className="font-medium">{item.label}</div>
        {item.description && <p className="text-muted-foreground text-xs leading-tight">{item.description}</p>}
      </div>
    </Link>
  );
}
