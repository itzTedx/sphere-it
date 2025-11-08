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

import { IconChevronDownFill } from "@/assets/icons";
import { Logo } from "@/assets/logo";

import { NAV_LINKS } from "@/data/constants";
import { ResourcesSubmenu, SubmenuLink } from "@/types/layout";

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
      <DrawerContent aria-labelledby="mobile-nav-title" aria-modal="true" className="h-[85vh]" role="dialog">
        <DrawerHeader>
          <Logo />
          <DrawerTitle className="sr-only" id="mobile-nav-title">
            Sphere IT
          </DrawerTitle>

          <DrawerDescription className="sr-only">Navigate through our services and resources</DrawerDescription>
        </DrawerHeader>

        <div className="flex-1 overflow-y-auto px-4 pt-1">
          <nav aria-label="Main navigation" className="space-y-4" role="navigation">
            {NAV_LINKS.map(({ id, label, href, submenu, resources }) => (
              <div className="space-y-2" key={id}>
                {submenu ? (
                  <MobileSubmenu items={submenu} label={label} onLinkClick={() => setOpen(false)} />
                ) : resources ? (
                  <MobileResourcesSubmenu items={resources} label={label} onLinkClick={() => setOpen(false)} />
                ) : (
                  <Link
                    aria-label={`Navigate to ${label}`}
                    className="block rounded-lg px-3 py-2 font-medium text-base transition-colors hover:bg-stone-100 focus:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
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

function MobileSubmenu({
  label,
  items,
  onLinkClick,
}: {
  label: string;
  items: SubmenuLink[];
  onLinkClick: () => void;
}) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="space-y-2">
      <button
        aria-controls={`submenu-${label.toLowerCase().replace(/\s+/g, "-")}`}
        aria-expanded={isOpen}
        aria-label={`Toggle ${label} submenu`}
        className="flex w-full items-center justify-between rounded-lg px-3 py-2 font-medium text-base transition-colors hover:bg-stone-100 focus:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{label}</span>
        <span aria-hidden="true" className={`${isOpen ? "rotate-180" : ""} transition-transform`}>
          <IconChevronDownFill />
        </span>
      </button>

      {isOpen && (
        <div
          aria-label={`${label} submenu`}
          className="space-y-1"
          id={`submenu-${label.toLowerCase().replace(/\s+/g, "-")}`}
          role="region"
        >
          {items.map((item) => (
            <MobileSubmenuItem item={item} key={item.id} onLinkClick={onLinkClick} />
          ))}
        </div>
      )}
    </div>
  );
}

function MobileSubmenuItem({ item, onLinkClick }: { item: SubmenuLink; onLinkClick: () => void }) {
  return (
    <Link
      aria-label={`Navigate to ${item.label}`}
      className="flex items-start gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-stone-100 focus:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
      href={item.href}
      onClick={onLinkClick}
    >
      {item.Icon && (
        <IconBox className="shrink-0">
          <item.Icon aria-hidden="true" className="h-4 w-4" />
        </IconBox>
      )}
      <div className="min-w-0 flex-1">
        <div className="font-medium">{item.label}</div>
        {item.description && <p className="text-muted-foreground text-xs leading-tight">{item.description}</p>}
      </div>
    </Link>
  );
}

function MobileResourcesSubmenu({
  label,
  items,
  onLinkClick,
}: {
  label: string;
  items: ResourcesSubmenu[];
  onLinkClick: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-2">
      <button
        aria-controls={`submenu-${label.toLowerCase().replace(/\s+/g, "-")}`}
        aria-expanded={isOpen}
        aria-label={`Toggle ${label} submenu`}
        className="flex w-full items-center justify-between rounded-lg px-3 py-2 font-medium text-base transition-colors hover:bg-stone-100 focus:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{label}</span>
        <span aria-hidden="true" className={`${isOpen ? "rotate-180" : ""} transition-transform`}>
          <IconChevronDownFill />
        </span>
      </button>

      {isOpen && (
        <div
          aria-label={`${label} submenu`}
          className="space-y-4 px-3"
          id={`submenu-${label.toLowerCase().replace(/\s+/g, "-")}`}
          role="region"
        >
          {items.map((section) => (
            <div className="space-y-2" key={section.id}>
              <h5 className="font-display font-medium text-stone-400 text-xs uppercase">{section.id}</h5>
              {section.id === "explore" ? (
                <div className="grid grid-cols-2 gap-2">
                  {section.links.map((link) => (
                    <Link
                      aria-label={`Navigate to ${link.label}`}
                      className="flex flex-col gap-2 rounded-lg border bg-stone-100 p-3 transition-colors hover:bg-primary-100 focus:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      href={link.href}
                      key={link.label}
                      onClick={onLinkClick}
                    >
                      <link.Icon className="h-5 w-5 text-stone-500 transition-colors" />
                      <div>
                        <div className="font-medium text-sm">{link.label}</div>
                        <p className="text-muted-foreground text-xs leading-tight">{link.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <ul className="space-y-1">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        aria-label={`Navigate to ${link.label}`}
                        className="flex items-start gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-stone-100 focus:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        href={link.href}
                        onClick={onLinkClick}
                      >
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-md border transition-colors">
                          <link.Icon className="h-4 w-4 text-stone-500" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="font-medium">{link.label}</div>
                          <p className="text-muted-foreground text-xs leading-tight">{link.description}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
