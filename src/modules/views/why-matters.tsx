import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { IconArrowRight, IconInfoCircle } from "@/assets/icons";

import { WHY_MATTERS } from "@/data/constants";

import { ClientLogos } from "./components/client-logos";

export const WhyMatters = () => {
  return (
    <section aria-labelledby="why-matters-heading" className="my-12 border-y sm:my-16 lg:my-20">
      <div className="container max-w-7xl space-y-8 rounded-4xl border bg-card p-6 sm:space-y-10 sm:p-8 lg:p-12">
        {/* Header Section - Responsive Layout */}
        <header className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
          <div className="max-w-3xl space-y-4">
            <Badge className="inline-flex items-center gap-2" variant="secondary">
              <IconInfoCircle aria-hidden="true" />
              Why It Matters
            </Badge>
            <h2 className="text-primary-900 text-title-3" id="why-matters-heading">
              Why Our Approach Works
            </h2>
            <p className="text-balance text-base text-stone-600 sm:text-lg">
              Because we blend precision with pragmatism, our services deliver results that are accurate, reliable, and
              practical - helping organizations achieve value faster and grow with confidence.
            </p>
          </div>
          <Button asChild className="shrink-0 self-start bg-stone-alpha-10 lg:self-auto" variant="ghost">
            <Link aria-label="Explore our service capabilities and opportunities" href="/about">
              Explore our Capabilities
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-stone-300/50">
                <IconArrowRight aria-hidden="true" />
              </span>
            </Link>
          </Button>
        </header>

        {/* Client Logos Section */}
        <div className="space-y-4">
          <h3 className="text-center font-display text-stone-600 text-subhead-base">
            Trusted by <span className="text-primary-500">500+ Leading</span> Organizations
          </h3>
          <ClientLogos columns={1} containerClassName="md:w-40" />
        </div>

        {/* Features Grid - Responsive Layout */}
        <div className="space-y-4">
          <h3 className="sr-only">Key Features and Benefits</h3>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_MATTERS.map((why, index) => (
              <li key={why.badge}>
                <Card
                  aria-labelledby={`feature-${index}-title`}
                  className="rounded-[calc(var(--radius-md)+calc(var(--spacing)*1))] bg-stone-alpha-10 p-1 shadow-md transition-all duration-200 hover:shadow-lg"
                  role="article"
                >
                  <CardHeader>
                    <Badge className="text-muted-foreground" variant="ghost">
                      {why.badge}
                    </Badge>
                  </CardHeader>
                  <CardContent className="rounded-lg bg-card p-4 shadow-sm sm:p-6">
                    <CardTitle className="text-base sm:text-lg" id={`feature-${index}-title`}>
                      {why.title}
                    </CardTitle>
                    <CardDescription className="mt-2 text-sm sm:text-base">{why.description}</CardDescription>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
