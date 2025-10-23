import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { IconArrowRight, IconInfoCircle } from "@/assets/icons";

import { WHY_MATTERS } from "@/data/constants";

import { ClientLogos } from "./components/client-logos";

export const WhyMatters = () => {
  return (
    <section className="my-20 border-y">
      <div className="container max-w-7xl space-y-10 rounded-4xl border bg-card p-12">
        <div className="flex items-end justify-between">
          <div className="max-w-3xl space-y-4">
            <Badge variant="secondary">
              <IconInfoCircle /> Why It Matters
            </Badge>
            <h3 className="text-primary-900 text-title-3">Why Our Approach Works</h3>
            <p className="text-balance text-lg text-stone-600">
              Because we blend precision with pragmatism, our services deliver results that are accurate, reliable, and
              practical - helping organizations achieve value faster and grow with confidence.
            </p>
          </div>
          <Button asChild className="shrink-0 bg-stone-alpha-10" variant="ghost">
            <Link aria-label="Explore our service capabilities and opportunities" href="/about">
              Explore our Capabilities
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-stone-300/50">
                <IconArrowRight aria-hidden="true" />
              </span>
            </Link>
          </Button>
        </div>
        <div>
          <h4 className="text-center font-display text-stone-600 text-subhead-base">
            Trusted by <span className="text-primary-500">500+ Leading</span> Organizations
          </h4>
          <ClientLogos columns={1} containerClassName="md:w-40" />
        </div>
        <ul className="grid grid-cols-4 gap-4">
          {WHY_MATTERS.map((why) => (
            <li key={why.badge}>
              <Card className="rounded-[calc(var(--radius-md)+calc(var(--spacing)*1))] bg-stone-alpha-10 p-1 shadow-md">
                <CardHeader>
                  <Badge className="text-muted-foreground" variant="ghost">
                    {why.badge}
                  </Badge>
                </CardHeader>
                <CardContent className="rounded-lg bg-card p-6 shadow-sm">
                  <CardTitle>{why.title}</CardTitle>
                  <CardDescription>{why.description}</CardDescription>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
