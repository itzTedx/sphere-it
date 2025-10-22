import { Fragment } from "react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { IconArrowRight } from "@/assets/icons";
import { IconTimeline } from "@/assets/icons/timeline";
import { LogoOutline } from "@/assets/logo";

import { TIMELINE } from "@/data/about";
import { Clients } from "@/modules/home/components";

export default function AboutPage() {
  return (
    <main>
      <header className="relative h-lvh overflow-hidden bg-gradient-to-b from-primary-800 to-primary-900">
        <div className="mx-auto h-full max-w-7xl border-x">
          <div className="container flex h-full flex-col justify-between py-16 text-background md:py-24">
            <div className="max-w-xl space-y-6 py-6 md:py-12">
              <p className="text-balance md:text-lg">
                Sphere IT Global delivers future-ready IT solutions — from software and cloud to design and resourcing.
                With decades of cross-industry expertise, we turn complex challenges into growth opportunities.
              </p>
              <Button asChild className="bg-stone-200/30 text-muted" variant="ghost">
                <Link aria-label="Explore our service capabilities" href="/services">
                  Explore Open Opportunities
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-stone-300/50">
                    <IconArrowRight className="text-stone-100" />
                  </span>
                </Link>
              </Button>
            </div>
            <div className="max-w-2xl">
              <Badge variant="ghost">About</Badge>
              <h1 className="text-title-3 md:text-title-1">
                We’re driving the new era of scalable, future-ready IT solutions.
              </h1>
            </div>
          </div>
        </div>
        <LogoOutline className="-top-1/2 absolute left-1/2 z-1000 rotate-35 text-primary-300 opacity-50" />
      </header>
      <div className="my-24 border-y">
        <Clients />
      </div>
      <section className="relative z-50 mx-4 rounded-4xl border bg-card">
        <div className="mx-auto max-w-7xl py-12">
          <Badge className="mx-auto" showDashes>
            <IconTimeline /> Timeline
          </Badge>
          <h2 className="mt-4 text-center text-primary-900 text-title-2">
            Our <span className="text-primary-600">Story</span>
          </h2>

          <div className="container mt-9">
            {TIMELINE.map((timeline, index) => (
              <Fragment key={timeline.serial}>
                <Card className="rounded-xl bg-muted p-1.5" key={timeline.serial}>
                  <CardHeader className="px-4 py-2">
                    <div className="flex items-center gap-4">
                      <span className="flex size-8 items-center justify-center rounded-full bg-card font-mono text-badge shadow-sm">
                        {timeline.serial}
                      </span>
                      <CardTitle className="font-bold text-subhead-base">{timeline.year}</CardTitle>
                      <CardDescription className="text-subhead-base">{timeline.title}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4 rounded-lg bg-card p-6 shadow-sm">
                    <p className="text-stone-500 text-xl">{timeline.description}</p>
                    <ul className="space-y-3">
                      {timeline.lists.map(({ id, Icon, item }) => (
                        <li className="flex items-center gap-3" key={id}>
                          <Icon className="text-accent" />
                          <p className="font-display text-stone-800 text-subhead-lg">{item}</p>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {TIMELINE.length !== index + 1 ? <DashedLine /> : null}
              </Fragment>
            ))}
          </div>
        </div>
      </section>
      <section className="container max-w-7xl py-20">
        <Badge showDashes>Our Values</Badge>
        <h2 className="mt-6 text-primary-900 text-title-2">Precision and Pragmatism</h2>
        <p className="mt-4 max-w-4xl text-balance text-lg text-muted-foreground">
          At Sphere IT, two values shape everything we do - Precision and Pragmatism. Together, they define how we
          deliver technology and how we build trust with every client we serve.
        </p>
        <Button asChild className="mt-6" variant="ghost">
          <Link aria-label="Explore our service capabilities" href="/services">
            See what our client says
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-stone-300">
              <IconArrowRight className="text-stone-500" />
            </span>
          </Link>
        </Button>
      </section>
    </main>
  );
}

function DashedLine() {
  return (
    <div className="px-9">
      <svg
        className="text-stone-300"
        fill="none"
        height="42"
        viewBox="0 0 2 42"
        width="2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0.750002 0L0.75 42" stroke="currentColor" strokeDasharray="6 4" strokeWidth="1.5" />
      </svg>
    </div>
  );
}
