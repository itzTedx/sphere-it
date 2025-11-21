import Link from "next/link";

import { Button } from "@/components/ui/button";
import { FlickeringGrid } from "@/components/ui/primitives/animate/flicker-grid";

import { IconSocialLinkedin } from "@/assets/icons";

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
    <section className="container grid max-w-7xl gap-4 pb-16 sm:gap-6 sm:pb-24 md:grid-cols-3">
      <article
        className={
          "card relative flex flex-col items-center justify-center gap-3 rounded-2xl bg-primary px-4 py-8 shadow-md transition-all hover:shadow-lg sm:px-6 sm:py-8"
        }
      >
        <Link className="absolute inset-0 z-10" href="https://www.linkedin.com/company/sphere-it-global/" />
        <div className="rounded-full bg-card/20 p-1.5">
          <div className="relative z-10 flex size-12 items-center justify-center rounded-full bg-card">
            <IconSocialLinkedin className="size-6 text-accent sm:size-7" />
          </div>
        </div>
        <div className="text-center">
          <h4 className="text-card text-title-4">LinkedIn</h4>
          <p className="text-primary-300 text-xs sm:text-sm">
            Connect with us on LinkedIn to explore our company updates, automation, and AI-driven transformation.
          </p>
        </div>
        <FlickeringGrid
          aria-hidden="true"
          className="absolute inset-0 z-1 opacity-60 [mask-image:radial-gradient(220px_circle_at_top,white,transparent)]"
          color="#C3A5FA"
          flickerChance={0.1}
          gridGap={3}
          height={240}
          maxOpacity={0.5}
          squareSize={3}
          width={380}
        />
      </article>
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
