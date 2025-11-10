import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { IconChevronDown } from "@/assets/icons";

import { EMAIL_INFO } from "@/data/site-config";
import { CopyButton } from "@/modules/form/components/copy-button";
import { FocusForm } from "@/modules/form/components/focus-form";

export function ContactHeader() {
  return (
    <header className="container max-w-7xl py-16 sm:py-20">
      <Badge showDashes>Contact us</Badge>
      <h1 className="text-primary-900 text-title-1">Here to help</h1>
      <section className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        <SupportCard />
        <SalesCard />
        <CareersCard />
      </section>
    </header>
  );
}

function SupportCard() {
  return (
    <article className="rounded-lg bg-card px-6 py-8 shadow-md">
      <h2 className="text-stone-800 text-title-4">Support</h2>
      <p className="mt-3 text-base text-muted-foreground sm:text-lg">
        Whether you have questions about Sphere IT's offerings, partnerships, or just want to say hello!
      </p>
      <ul className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
        <li className="flex items-center justify-between rounded-xl bg-stone-alpha-10 p-3">
          <div className="min-w-0 flex-1">
            <label className="font-mono text-badge text-muted-background uppercase" htmlFor="email">
              Email
            </label>
            <p className="text-base sm:text-lg" id="email">
              {EMAIL_INFO}
            </p>
          </div>
          <CopyButton
            aria-label="Copy email address"
            className="flex-shrink-0"
            size="icon"
            text={EMAIL_INFO}
            variant="ghost"
          />
        </li>
        <li className="rounded-xl bg-stone-alpha-10">
          <FocusForm />
        </li>
      </ul>
    </article>
  );
}

function SalesCard() {
  return (
    <article className="flex flex-col justify-between rounded-lg bg-stone-alpha-10 px-6 py-8">
      <div>
        <h2 className="text-stone-800 text-title-4">Sales</h2>
        <p className="mt-3 text-base text-muted-foreground sm:text-lg">
          Connect with our sales team to talk about pricing or to request a demo.
        </p>
      </div>
      <Button className="mt-6 w-fit sm:mt-0">Contact now</Button>
    </article>
  );
}

function CareersCard() {
  return (
    <article className="flex flex-col justify-between rounded-lg bg-stone-alpha-10 px-6 py-8">
      <div>
        <h2 className="text-stone-800 text-title-4">Careers</h2>
        <p className="mt-3 text-base text-muted-foreground sm:text-lg">View opportunities to join our amazing team.</p>
      </div>
      <Button asChild className="mt-6 w-fit sm:mt-0" variant="ghost">
        <Link
          aria-label="Explore career opportunities at Sphere Global"
          href="/careers"
          title="Explore open Opportunities"
        >
          Explore Open Opportunities
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-stone-300">
            <IconChevronDown aria-hidden="true" className="text-stone-500" />
          </span>
        </Link>
      </Button>
    </article>
  );
}
