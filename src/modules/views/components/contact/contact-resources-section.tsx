import Link from "next/link";

import { Button } from "@/components/ui/button";

const resources = [
  {
    title: "FAQs",
    description: "View all frequently asked questions in the community.",
    href: "/resources/faqs",
    ariaLabel: "Read frequently asked questions",
    linkTitle: "Read our FAQs",
    buttonText: "Read our FAQs",
  },
  {
    title: "Client Stories",
    description: "Discover how we've helped businesses transform with our solutions.",
    href: "/resources/case-studies",
    ariaLabel: "Read client success stories and case studies",
    linkTitle: "Read our Client Stories",
    buttonText: "Read our Client Stories",
  },
] as const;

export function ContactResourcesSection() {
  return (
    <section className="container grid max-w-7xl gap-4 pb-16 sm:gap-6 sm:pb-24 md:grid-cols-2">
      {resources.map(({ title, description, href, ariaLabel, linkTitle, buttonText }) => (
        <article
          className="card rounded-xl border px-4 py-8 text-center transition-all hover:border-0 hover:bg-card hover:shadow-md sm:px-6 sm:py-10"
          key={title}
        >
          <div className="mb-4 sm:mb-6">
            <h5 className="text-stone-700 text-title-4">{title}</h5>
            <p className="text-base text-muted-foreground">{description}</p>
          </div>
          <Button asChild variant="secondary">
            <Link aria-label={ariaLabel} href={href} title={linkTitle}>
              {buttonText}
            </Link>
          </Button>
        </article>
      ))}
    </section>
  );
}
