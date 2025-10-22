import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { IconArrowRight } from "@/assets/icons";
import { LogoOutline } from "@/assets/logo";

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
          <Badge className="mx-auto">Timeline</Badge>
          <h2 className="mt-4 text-center text-primary-900 text-title-2">
            Our <span className="text-primary-600">Story</span>
          </h2>
        </div>
      </section>
    </main>
  );
}
