import { memo } from "react";
import type { Route } from "next";
import Link from "next/link";

import { IconChevronRight } from "@/assets/icons";
import { Logo } from "@/assets/logo";

import { FOOTER, SOCIALS } from "@/data/constants";

// Memoized sub-components for better performance
const SocialLink = memo(({ social }: { social: (typeof SOCIALS)[0] }) => (
  <li>
    <Link
      aria-label={`Follow us on ${social.Icon.name || "social media"}`}
      className="group flex size-10 items-center justify-center rounded-md border bg-stone-alpha-10 shadow-sm transition-colors hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2 focus:ring-offset-foreground"
      href={social.href as Route}
      title={`Follow us on ${social.Icon.name || "social media"}`}
    >
      <social.Icon className="text-stone-300 transition-colors group-hover:text-primary-300" />
    </Link>
  </li>
));

SocialLink.displayName = "SocialLink";

const FooterLink = memo(
  ({
    link,
  }: {
    link: { Icon?: React.ComponentType<{ className?: string }>; href: string; id: number; label: string };
  }) => (
    <li className="w-full">
      <Link
        aria-label={`Navigate to ${link.label}`}
        className="group inline-flex w-full items-center gap-3 rounded-sm px-1 py-1 font-medium transition-colors duration-300 hover:text-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2 focus:ring-offset-foreground"
        href={link.href as Route}
        title={`Navigate to ${link.label}`}
      >
        {link.Icon && (
          <div className="flex size-7 shrink-0 rounded-md bg-stone-800 transition-colors duration-300 group-hover:bg-primary-300 group-focus:bg-primary-300">
            <link.Icon className="m-auto size-4.5 transition-colors duration-300 group-hover:text-primary-950 group-focus:text-primary-950" />
          </div>
        )}
        <span>{link.label}</span>
      </Link>
    </li>
  )
);

FooterLink.displayName = "FooterLink";

const FooterSection = memo(({ item }: { item: (typeof FOOTER)[0] }) => (
  <nav aria-labelledby={`footer-heading-${item.id}`}>
    <h3 className="!font-mono mb-4 text-badge text-muted-background uppercase" id={`footer-heading-${item.id}`}>
      {item.href ? (
        <Link
          aria-label={`Visit ${item.heading} page`}
          className="flex items-center justify-between rounded-md p-2 transition-colors duration-300 hover:text-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2 focus:ring-offset-foreground"
          href={item.href}
          title={`Visit ${item.heading} page`}
        >
          {item.heading}
          <IconChevronRight aria-hidden="true" className="size-3" />
        </Link>
      ) : (
        item.heading
      )}
    </h3>
    <ul className="space-y-3" role="list">
      {item.links.map((link) => (
        <FooterLink key={link.id} link={link} />
      ))}
    </ul>
  </nav>
));

FooterSection.displayName = "FooterSection";

// Static copyright year to avoid re-computation
const currentYear = new Date().getFullYear();

export const Footer = memo(() => {
  return (
    <footer aria-label="Site footer" className="bg-foreground" id="footer" role="contentinfo">
      <div className="text-stone-200">
        <div className="container max-w-7xl border-x py-8 md:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex max-w-md flex-col justify-between gap-3">
              <div className="space-y-4 md:space-y-6">
                <Link
                  aria-label="Sphere IT Global - Home"
                  className="-m-2 block w-fit rounded-md p-2"
                  href="/"
                  title="Go to homepage"
                >
                  <Logo className="text-primary-50" />
                </Link>
                <p className="mt-6 text-balance text-muted-background">
                  Innovating the way businesses connect, operate, and grow with cutting-edge technology solutions.
                </p>
              </div>

              <ul aria-label="Social media links" className="flex items-center gap-2" role="list">
                {SOCIALS.map((social) => (
                  <SocialLink key={social.id} social={social} />
                ))}
              </ul>
            </div>

            {/* Navigation sections */}
            <div aria-label="Footer navigation" className="grid grid-cols-2 gap-8 lg:grid-cols-4" role="navigation">
              {FOOTER.map((item) => (
                <FooterSection item={item} key={item.id} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="container max-w-7xl border-x border-t py-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-muted-foreground text-sm">
              Copyright © {currentYear} Sphere IT Global. All rights reserved.
            </p>
            <nav aria-label="Legal and policy links">
              <ul className="flex flex-wrap items-center gap-4 sm:gap-6" role="list">
                <li>
                  <Link
                    aria-label="Read our Privacy Policy"
                    className="rounded-sm p-2 text-muted-foreground text-sm transition-colors duration-300 hover:text-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2 focus:ring-offset-foreground"
                    href="/legal/privacy"
                    title="Read our Privacy Policy"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    aria-label="Read our Terms of Service"
                    className="rounded-sm p-2 text-muted-foreground text-sm transition-colors duration-300 hover:text-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2 focus:ring-offset-foreground"
                    href="/legal/terms-of-services"
                    title="Read our Terms of Service"
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
});

Footer.displayName = "Footer";
