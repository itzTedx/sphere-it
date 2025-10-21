import Link from "next/link";

import { IconChevronDownFill } from "@/assets/icons/chevrons";

import { NAV_LINKS } from "@/data/constants";
import { cn } from "@/lib/utils";

const NAVBAR_LINKS_CLASSNAMES = "font-medium text-stone-800";

export const DesktopNavLinks = () => {
  return (
    <ul className="flex items-center gap-4">
      {NAV_LINKS.map(({ id, label, href, submenu }) => (
        <li className="group" key={id}>
          {href && submenu ? (
            <>
              <Link className={cn(NAVBAR_LINKS_CLASSNAMES, "flex items-center gap-2")} href={href}>
                {label}
                <IconChevronDownFill className="text-stone-500/20" />
              </Link>
              <ul className="absolute top-16 left-0 hidden w-full gap-6 bg-card p-6 group-hover:flex">
                {submenu.map((menu) => (
                  <li key={menu.id}>
                    <Link className={cn(NAVBAR_LINKS_CLASSNAMES)} href={menu.href}>
                      {menu.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : href ? (
            <Link className={cn(NAVBAR_LINKS_CLASSNAMES)} href={href}>
              {label}
            </Link>
          ) : (
            <span className={cn(NAVBAR_LINKS_CLASSNAMES)}>{label}</span>
          )}
        </li>
      ))}
    </ul>
  );
};
