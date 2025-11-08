import { memo } from "react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";

import { TESTIMONIALS } from "@/data/testimonials";

import { TestimonialCard } from "./components/testimonial-card";

export const Testimonials = memo(() => {
  return (
    <section aria-labelledby="testimonials-heading" className="mx-auto max-w-7xl max-xl:container">
      <div className="max-w-7xl pb-12 md:container md:pb-16 xl:pb-20">
        <div className="mb-12 flex flex-col items-center gap-4">
          <Badge aria-label="Section category" role="text">
            Client Testimonials
          </Badge>
          <h2 className="text-primary-900 text-title-4 md:text-title-3 xl:text-title-2" id="testimonials-heading">
            Wall of <span className="text-primary-600">love</span>
          </h2>
        </div>
        <div
          aria-label="Client testimonials carousel"
          className="relative grid h-[90svh] gap-1 md:grid-cols-3 xl:gap-4"
          role="region"
        >
          <div
            aria-hidden="true"
            className="absolute inset-x-0 z-10 h-40 bg-gradient-to-b from-background to-transparent"
          />

          <Marquee aria-label="Testimonials column 1" className="[--duration:15s]" vertical>
            {TESTIMONIALS.slice(0, 4).map((t) => (
              <TestimonialCard data={t} key={t.id} />
            ))}
          </Marquee>
          <Marquee aria-label="Testimonials column 2" className="hidden [--duration:18s] md:flex" reverse vertical>
            {TESTIMONIALS.slice(4, 8).map((t) => (
              <TestimonialCard data={t} key={t.id} />
            ))}
          </Marquee>
          <Marquee aria-label="Testimonials column 3" className="hidden [--duration:20s] md:flex" vertical>
            {TESTIMONIALS.slice(8, 12).map((t) => (
              <TestimonialCard data={t} key={t.id} />
            ))}
          </Marquee>

          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 z-10 h-48 bg-gradient-to-t from-20% from-background to-transparent"
          />
        </div>
        <div className="-mt-6 relative z-10 mx-auto flex w-fit items-center justify-center gap-1.5 rounded-full bg-card p-1.5 shadow-lg">
          <p className="px-3 font-sans text-muted-foreground text-xs lg:text-base">View the impact on our clients</p>
          <Button asChild variant="secondary">
            <Link href="/resources/testimonials">Browse customer stories</Link>
          </Button>
        </div>
      </div>
    </section>
  );
});

Testimonials.displayName = "Testimonials";
