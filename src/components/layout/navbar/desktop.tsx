"use client";

import { type SVGProps, useState } from "react";
import Link from "next/link";

import { AnimatePresence, motion } from "motion/react";

import { IconBox } from "@/components/icon-box";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { NAV_LINKS } from "@/data/constants";
import { cn } from "@/lib/utils";
import { ResourcesSubmenu, SubmenuLink } from "@/types/layout";

export const DesktopNavLinks = () => {
  return (
    <NavigationMenu aria-label="Main navigation" viewport={true}>
      <NavigationMenuList role="menubar">
        {NAV_LINKS.map(({ id, label, href, submenu, resources }) => (
          <NavigationMenuItem key={id}>
            {submenu || resources ? (
              <>
                <NavigationMenuTrigger aria-expanded="false" aria-haspopup="true">
                  {href ? (
                    <Link aria-label={label} href={href} tabIndex={-1} title={label}>
                      {label}
                    </Link>
                  ) : (
                    label
                  )}
                </NavigationMenuTrigger>
                <NavigationMenuContent aria-label={`${label} submenu`} role="menu">
                  <ul className="grid gap-2 md:w-[400px] lg:w-[1180px]" role="none">
                    {id === 1 && submenu && <ServicesMegaMenu data={submenu} />}
                    {id === 2 && resources && <ResourcesMegaMenu data={resources} />}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                {href && (
                  <Link aria-label={label} href={href} title={label}>
                    {label}
                  </Link>
                )}
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

// ListItem component for navigation menu links
function ListItem({
  title,
  children,
  href,
  Icon,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & {
  href: string;
  title: string;
  Icon?: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
}) {
  return (
    <li {...props}>
      <NavigationMenuLink
        asChild
        className="group rounded-xl border border-transparent px-4 py-5 transition-colors hover:bg-stone-100/50 focus-visible:border-primary-500"
      >
        <Link className="flex-row items-center gap-2" href={href as "/services"} title={title}>
          {Icon && (
            <IconBox>
              <Icon className="group-hover:text-primary-600 group-focus-visible:text-primary-600" />
            </IconBox>
          )}
          <div className="space-y-1">
            <div className="font-display text-subhead-base leading-none transition-colors group-hover:text-primary-500 group-focus-visible:text-primary-500">
              {title}
            </div>
            <p className="line-clamp-2 font-display font-light text-muted-foreground text-xs transition-colors group-hover:text-primary-500 group-focus-visible:text-primary-500">
              {children}
            </p>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

function ServicesMegaMenu({ data }: { data: SubmenuLink[] }) {
  return (
    <li className="grid gap-5 p-2 lg:grid-cols-[.35fr_1fr]">
      <NavigationMenuLink asChild>
        <Link
          className="flex h-full w-full select-none flex-col justify-end rounded-md border bg-stone-100 p-4 no-underline outline-hidden transition-all duration-200 hover:bg-primary-100 focus:shadow-md focus-visible:border-primary-500 md:p-6"
          href="/services"
          title="Explore our services"
        >
          <div className="font-medium text-lg sm:mt-4">Services</div>
          <p className="text-muted-foreground text-sm leading-tight">We are best at:</p>
        </Link>
      </NavigationMenuLink>

      <div className="space-y-3 p-3">
        <h5 className="font-display font-medium text-sm text-stone-400 uppercase">Explore</h5>
        <ul className="grid grid-cols-2 gap-2">
          {data.map((menu) => (
            <ListItem href={menu.href} Icon={menu.Icon} key={menu.id} title={menu.label}>
              {menu.description}
            </ListItem>
          ))}
        </ul>
      </div>
    </li>
  );
}

function ResourcesMegaMenu({ data }: { data: ResourcesSubmenu[] }) {
  const [hoveredIdx, setHoveredIdx] = useState<string | null>(null);
  return (
    <li className="grid font-display lg:grid-cols-[1fr_.60fr_.60fr]">
      {data.map((link) =>
        link.id === "explore" ? (
          <div className="flex h-full flex-col p-2" key={link.id}>
            <small className="px-2 pb-3 font-display font-medium text-sm text-stone-400 uppercase">{link.id}</small>
            <div className="grid h-full grid-cols-2 gap-2">
              {link.links.map((link) => (
                <NavigationMenuLink asChild className="group" key={link.label}>
                  <Link
                    className="flex h-full w-full flex-1 select-none flex-col justify-between rounded-md border bg-stone-100 p-4 no-underline outline-hidden transition-all duration-200 hover:bg-primary-100 focus:shadow-md group-hover:border-primary-500 group-focus-visible:border-primary-500 group-focus-visible:bg-primary-100 md:p-6"
                    href="/services"
                    title="Explore our services"
                  >
                    <link.Icon className="size-7 text-stone-500 transition-colors group-hover:text-primary-600 group-focus-visible:text-primary-600" />
                    <div>
                      <div className="font-medium text-lg sm:mt-4">{link.label}</div>
                      <p className="text-muted-foreground text-sm leading-tight">{link.description}</p>
                    </div>
                  </Link>
                </NavigationMenuLink>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-1 border-l p-2" key={link.id}>
            <span className="px-3 font-display font-medium text-sm text-stone-400 uppercase">{link.id}</span>
            <ul>
              {link.links.map((menu) => (
                <li
                  className="relative"
                  key={menu.label}
                  onMouseEnter={() => setHoveredIdx(menu.label)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  <Link
                    className="group relative z-10 flex items-center gap-3 rounded-md p-3"
                    href={menu.href}
                    title={menu.label}
                  >
                    <div className="flex size-12 items-center justify-center rounded-md border transition-colors group-hover:border-primary-500/10 group-hover:bg-primary-500/10 group-focus-visible:border-primary-600 group-focus-visible:bg-primary-500/10">
                      <menu.Icon className="size-5 shrink-0 text-stone-500 transition-colors group-hover:text-primary-600 group-focus-visible:text-primary-600" />
                    </div>
                    <div>
                      <span className="font-display text-subhead-base leading-none transition-colors group-hover:text-primary-600 group-focus-visible:text-primary-600">
                        {menu.label}
                      </span>
                      <p className="line-clamp-2 font-display text-muted-foreground text-sm transition-colors group-hover:text-primary-500 group-focus-visible:text-primary-500">
                        {menu.description}
                      </p>
                    </div>
                  </Link>
                  <AnimatePresence>
                    {hoveredIdx === menu.label && (
                      <motion.span
                        animate={{
                          opacity: 1,
                          transition: { duration: 0.05 },
                        }}
                        className={cn("absolute inset-0 z-0 block h-full w-full rounded-xl bg-stone-100")}
                        exit={{
                          opacity: 0,
                          transition: { duration: 0.01, delay: 0.1 },
                        }}
                        initial={{ opacity: 0 }}
                        layoutId="cardHoverEffect"
                      />
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>
          </div>
        )
      )}
    </li>
  );
}
