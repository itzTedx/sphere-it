import Link from "next/link";

import { IconChevronRight } from "@/assets/icons";
import { Logo } from "@/assets/logo";

import { FOOTER } from "@/data/constants";

export const Footer = () => {
  return (
    <footer className="bg-foreground" role="contentinfo">
      <div className="text-stone-200">
        {/* Main footer content */}
        <div className="container max-w-7xl border-x py-8 md:py-16">
          {/* Mobile-first responsive grid */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Company info section */}
            <div className="max-w-md space-y-6">
              <Logo className="text-primary-50" />
              <p className="text-balance text-muted-background">
                Innovating the way businesses connect, operate, and grow with cutting-edge technology solutions.
              </p>
              {/* Contact info for SEO */}
              <div className="space-y-2 text-muted-background text-sm">
                <p>
                  <strong>Headquarters:</strong> Dubai, UAE
                </p>
                <p>
                  <strong>Global Presence:</strong> India
                </p>
              </div>
            </div>

            {/* Navigation sections */}
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {FOOTER.map((item) => (
                <nav aria-labelledby={`footer-heading-${item.id}`} key={item.id}>
                  <h3
                    className="!font-mono mb-4 text-badge text-muted-background uppercase"
                    id={`footer-heading-${item.id}`}
                  >
                    {item.href ? (
                      <Link
                        aria-label={`Visit ${item.heading} page`}
                        className="flex items-center justify-between transition-colors duration-300 hover:text-primary-300"
                        href={item.href}
                      >
                        {item.heading}
                        <IconChevronRight className="h-4 w-4" />
                      </Link>
                    ) : (
                      item.heading
                    )}
                  </h3>
                  <ul className="space-y-3" role="list">
                    {item.links.map(({ Icon, href, id, label }) => (
                      <li key={id}>
                        <Link
                          aria-label={`Navigate to ${label}`}
                          className="group inline-flex items-center gap-3 rounded-sm py-1 font-medium transition-colors duration-300 hover:text-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2 focus:ring-offset-foreground"
                          href={href}
                        >
                          {Icon && (
                            <div className="flex size-7 shrink-0 rounded-md bg-stone-800 transition-colors duration-300 group-hover:bg-primary-300 group-focus:bg-primary-300">
                              <Icon className="m-auto size-4.5 transition-colors duration-300 group-hover:text-primary-950 group-focus:text-primary-950" />
                            </div>
                          )}
                          <span>{label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="container max-w-7xl border-x border-t py-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-muted-foreground text-sm">
              Copyright © {new Date().getFullYear()} Sphere IT Global. All rights reserved.
            </p>
            <nav aria-label="Legal links">
              <ul className="flex flex-wrap items-center gap-4 sm:gap-6">
                <li>
                  <Link
                    aria-label="Read our Privacy Policy"
                    className="rounded-sm text-muted-foreground text-sm transition-colors duration-300 hover:text-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2 focus:ring-offset-foreground"
                    href="/legal/privacy"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    aria-label="Read our Terms of Service"
                    className="rounded-sm text-muted-foreground text-sm transition-colors duration-300 hover:text-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2 focus:ring-offset-foreground"
                    href="/legal/terms-of-services"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
