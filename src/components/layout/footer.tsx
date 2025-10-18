import type { Route } from "next";
import Link from "next/link";

import { IconChevronRight } from "@/assets/icons";
import { Logo } from "@/assets/logo";

import { FOOTER } from "@/data/constants";

export const Footer = () => {
  return (
    <footer className="bg-foreground">
      <div className="container max-w-7xl border-x py-16 text-stone-200">
        <div className="grid grid-cols-2 gap-4">
          <div className="max-w-md space-y-6">
            <Logo className="text-primary-50" />
            <p className="text-balance text-muted-background">
              Innovating the way businesses connect, operate, and grow with cutting-edge technology solutions.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-6">
            {FOOTER.map((item) => (
              <div key={item.id}>
                <h5 className="font-mono text-badge text-muted-background">
                  {item.href ? (
                    <Link className="flex items-center justify-between" href={item.href as Route}>
                      {item.heading}
                      <IconChevronRight />
                    </Link>
                  ) : (
                    item.heading
                  )}
                </h5>
                <ul className="space-y-2 py-6">
                  {item.links.map(({ href, id, label }) => (
                    <li key={id}>
                      <Link className="inline-block py-1" href={href as Route}>
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
