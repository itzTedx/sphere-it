import Link from "next/link";

import { NAV_LINKS } from "@/data/constants";
import { cn } from "@/lib/utils";

const NAVBAR_LINKS_CLASSNAMES = "font-medium";

export const DesktopNavLinks = () => {
  return (
    <ul className="flex items-center gap-4">
      {NAV_LINKS.map(({ id, label, href }) => (
        <li key={id}>
          {/* // Conditionally renders a Next.js link if `href` is provided, otherwise renders a `span` element. */}
          {href ? (
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
