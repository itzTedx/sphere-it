import Link from "next/link";

import { NAV_LINKS } from "@/data/constants";
import { cn } from "@/lib/utils";

const NAVBAR_LINKS_CLASSNAMES = "font-medium";

export const DesktopNavLinks = () => {
  return (
    <ul className="flex items-center gap-4">
      {NAV_LINKS.map(({ id, label, href, submenu }) => (
        <li key={id}>
          {href && submenu ? (
            <>
              <Link className={cn(NAVBAR_LINKS_CLASSNAMES)} href={href}>
                {label}
              </Link>
              <ul>
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
