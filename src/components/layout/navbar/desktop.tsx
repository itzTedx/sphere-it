"use client";

import type { SVGProps } from "react";
import Link from "next/link";

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
import { SubmenuLink } from "@/types/layout";

export const DesktopNavLinks = () => {
  return (
    <NavigationMenu viewport={true}>
      <NavigationMenuList>
        {NAV_LINKS.map(({ id, label, href, submenu }) => (
          <NavigationMenuItem key={id}>
            {submenu ? (
              <>
                <NavigationMenuTrigger>
                  {href ? (
                    <NavigationMenuLink asChild>
                      <Link href={href}>{label}</Link>
                    </NavigationMenuLink>
                  ) : (
                    label
                  )}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 md:w-[400px] lg:w-[1180]">
                    {id === 1 && <ServicesMegaMenu data={submenu} />}
                    {id === 2 && <ResourcesMegaMenu data={submenu} />}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                {href && <Link href={href}>{label}</Link>}
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
      <NavigationMenuLink asChild className="group rounded-xl px-4 py-5 transition-colors hover:bg-stone-100">
        <Link className="flex-row items-center gap-2" href={href as "/services"}>
          {Icon && (
            <IconBox>
              <Icon className="group-hover:text-primary-600" />
            </IconBox>
          )}
          <div>
            <div className="font-display text-subhead-base leading-none transition-colors group-hover:text-primary-500">
              {title}
            </div>
            <p className="line-clamp-2 font-display text-muted-foreground text-sm transition-colors group-hover:text-primary-500">
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
    <li className="grid gap-5 lg:grid-cols-[.35fr_1fr]">
      <NavigationMenuLink asChild>
        <Link
          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-stone-100 p-4 no-underline outline-hidden transition-all duration-200 hover:bg-primary-100 focus:shadow-md md:p-6"
          href="/services"
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

function ResourcesMegaMenu({ data }: { data: SubmenuLink[] }) {
  return (
    <li className="grid gap-5 font-display lg:grid-cols-2">
      <div>
        <span className="font-display font-medium text-sm text-stone-400 uppercase">Explore</span>
        <NavigationMenuLink asChild>
          <Link
            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-stone-100 p-4 no-underline outline-hidden transition-all duration-200 hover:bg-primary-100 focus:shadow-md md:p-6"
            href="/services"
          >
            <div className="font-medium text-lg sm:mt-4">Services</div>
            <p className="text-muted-foreground text-sm leading-tight">We are best at:</p>
          </Link>
        </NavigationMenuLink>
      </div>

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
