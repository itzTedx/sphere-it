import Link from "next/link";

import { IconChevronRight } from "@/assets/icons";
import { Logo } from "@/assets/logo";

import { FOOTER } from "@/data/constants";

export const Footer = () => {
  return (
    <footer className="bg-foreground">
      <div className="text-stone-200">
        <div className="container grid max-w-7xl grid-cols-2 gap-4 border-x py-16">
          <div className="max-w-md space-y-6">
            <Logo className="text-primary-50" />
            <p className="text-balance text-muted-background">
              Innovating the way businesses connect, operate, and grow with cutting-edge technology solutions.
            </p>
          </div>
          <div className="flex justify-between gap-6">
            {FOOTER.map((item) => (
              <div key={item.id}>
                <h5 className="!font-mono text-badge text-muted-background uppercase">
                  {item.href ? (
                    <Link className="flex items-center justify-between" href={item.href}>
                      {item.heading}
                      <IconChevronRight />
                    </Link>
                  ) : (
                    item.heading
                  )}
                </h5>
                <ul className="space-y-2 py-6">
                  {item.links.map(({ Icon, href, id, label }) => (
                    <li className="group transition-colors duration-300 hover:text-primary-300" key={id}>
                      <Link className="inline-flex items-center gap-3 py-1 font-medium" href={href}>
                        {Icon && (
                          <div className="flex size-7 shrink-0 rounded-md bg-stone-800 transition-colors duration-300 group-hover:bg-primary-300">
                            <Icon className="m-auto size-4.5 transition-colors duration-300 group-hover:text-primary-950" />
                          </div>
                        )}
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="container flex max-w-7xl items-center justify-between border-x border-t py-6">
          <p className="text-muted-foreground">
            Copyright © {new Date().getFullYear()} Sphere IT Global. All rights reserved.
          </p>
          <ul className="flex items-center gap-6">
            <li>
              <Link href="/legal/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/legal/terms-of-services">Terms of Service</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
