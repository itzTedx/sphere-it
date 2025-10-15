import Link from "next/link";

import { IconChevronDownFill } from "@/assets/icons/chevrons";

import { NAV_LINKS } from "@/data/constants";
import { cn } from "@/lib/utils";

const NAVBAR_LINKS_CLASSNAMES = "font-medium text-stone-800";

export const DesktopNavLinks = () => {
  return (
    <ul className="flex items-center gap-4">
      {NAV_LINKS.map(({ id, label, href, submenu }) => (
        <li key={id} className="group">
          {href && submenu ? (
            <>
              <Link className={cn(NAVBAR_LINKS_CLASSNAMES, "flex items-center gap-2")} href={href}>
                {label}
                <IconChevronDownFill className="text-stone-500/20" />
              </Link>
              <ul className="hidden absolute group-hover:flex w-full top-16 left-0 bg-card gap-6 p-6">
                {submenu.map((menu) => (
                  <li key={menu.id} >
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
