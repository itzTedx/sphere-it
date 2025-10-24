import type { Route } from "next";
import Link from "next/link";

import { IconLink } from "@/assets/icons/copy";

export function SectionTitle({ children, href, index }: { children: React.ReactNode; href: Route; index: number }) {
  return (
    <div className="not-prose">
      <Link className="group relative flex items-center gap-4 py-0" href={href} title={children as string}>
        <div className="flex size-8 flex-none items-center justify-center rounded-full border border-gray-200 bg-white">
          <p className="font-display font-medium text-stone-500 text-xs group-hover:hidden">{index}</p>
          <IconLink
            aria-hidden="true"
            aria-label="Link to section"
            className="hidden size-4 text-gray-600 group-hover:block"
          />
        </div>
        <h2 className="!m-0 scroll-mt-20 font-display font-medium text-neutral-800 text-xl" id={href.replace("#", "")}>
          {children}
        </h2>
      </Link>
    </div>
  );
}
