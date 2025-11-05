import { memo } from "react";
import Image from "next/image";
import Link from "next/link";

import { MiniCta } from "@/components/layout/cta";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { IconArrowRight } from "@/assets/icons";

import { cn } from "@/lib/utils";

export const WhyUs = memo(() => {
  return (
    <section
      aria-labelledby="why-us-heading"
      className="relative z-50 my-20 border bg-card p-4 sm:p-6 md:mx-3 md:rounded-3xl md:p-12 xl:p-20"
    >
      <div className="mx-auto max-w-7xl space-y-4 lg:space-y-6">
        <header className="space-y-2 md:space-y-4">
          <Badge variant="secondary">Why sphere it</Badge>
          <div className="grid gap-2 md:grid-cols-3 md:gap-4">
            <h2 className="text-primary-900 text-title-4 md:text-title-3 xl:text-title-2" id="why-us-heading">
              What sets <span className="text-primary-600">Sphere IT apart</span>
            </h2>
            <p className="text-balance text-base text-muted-foreground md:col-span-2">
              We believe technology should be both precisely engineered and practically applied. That’s why
              forward-looking technology organizations across the Middle East trust us to deliver AL-driven platforms,
              intelligent automation, resilient infrastructure, and on-demand expertise that create measurable outcomes.
            </p>
          </div>
        </header>
        <div className="grid gap-4 md:grid-cols-12 xl:gap-6">
          <PrecisionCard className="md:col-span-4" />
          <PartnerCard className="md:col-span-8" />
          {/* <ScalableCard className="md:col-span-6" /> */}
          <TechStackCard className="md:col-span-6" />
          <ReliabilityCard className="md:col-span-6" />
          <div className="col-span-full">
            <MiniCta
              description="We make it work for your business, reducing complexity and accelerating value."
              layout="vertical"
              title="We don't just <span>design technology</span>"
            />
          </div>
        </div>
      </div>
    </section>
  );
});

WhyUs.displayName = "WhyUs";

interface CardProps {
  className?: string;
}

function PrecisionCard({ className }: CardProps) {
  return (
    <article className={cn("flex flex-col justify-between rounded-2xl border bg-background", className)}>
      <div className="space-y-2 p-6 xl:space-y-4 xl:p-10">
        <header>
          <Badge variant="ghost">Guided by</Badge>
          <h3 className="text-primary-900 text-title-5 xl:text-title-3">Precision & Pragmatism</h3>
        </header>
        <p className="text-base text-muted-foreground lg:text-sm xl:text-lg">
          Every solution is built with technical accuracy and business sense - ensuring innovation that actually
          delivers.
        </p>
      </div>

      <footer className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between xl:p-10">
        <div>
          <h4 className="text-primary-800 text-subhead-sm">Your Next Advantage</h4>
          <p className="text-[0.65rem] text-muted-foreground xl:text-xs">Technology, talent, and trust combined.</p>
        </div>
        <Button asChild className="self-start sm:self-auto" variant="ghost">
          <Link aria-label="Explore our services to discover your next advantage" href="/services">
            Explore Services
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-stone-300 transition-colors">
              <IconArrowRight className="text-stone-500" />
            </span>
          </Link>
        </Button>
      </footer>
    </article>
  );
}

function PartnerCard({ className }: CardProps) {
  return (
    <article className={cn("rounded-2xl border bg-background", className)}>
      <div className="relative h-48 w-full sm:h-56 lg:h-48 xl:h-64">
        <Image
          alt="Trusted partner in banking, financial, and industries requiring security and scalability"
          className="object-cover object-top"
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 66vw"
          src="/svg/trusted.svg"
        />
      </div>
      <div className="p-6 sm:p-8 lg:p-6 xl:p-10">
        <h3 className="text-primary-900 text-title-5 xl:text-title-3">
          Trusted Partner For Your Technology Transformation.
        </h3>
        {/* <p className="text-base text-muted-foreground lg:text-sm xl:text-base">
          Deep domain expertise across banking, financial, and industries that demand security, scalability, and speed.
        </p> */}
      </div>
    </article>
  );
}

function ScalableCard({ className }: CardProps) {
  return (
    <article className={cn("group rounded-2xl border bg-background", className)}>
      <div className="relative aspect-6/4 w-full overflow-hidden lg:aspect-6/3 xl:aspect-6/4">
        {/* <div>
          <Marquee className="p-1 [--duration:40s] [--gap:0.5rem]">
            <div className="aspect-video h-24 rounded-xl bg-muted" />
          </Marquee>
          <Marquee className="p-1 [--duration:40s] [--gap:0.5rem]" reverse>
            <div className="aspect-video h-24 rounded-xl bg-muted" />
          </Marquee>
          <Marquee className="p-1 [--duration:40s] [--gap:0.5rem]">
            <div className="aspect-video h-24 rounded-xl bg-muted" />
          </Marquee>
        </div> */}
        <Image
          alt="Flexible and scalable talent models for enterprise technology solutions"
          className="object-cover object-center transition-transform group-hover:scale-105"
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src="/svg/flexible.svg"
        />
      </div>
      <div className="p-6 pt-0 sm:p-8 sm:pt-0 xl:p-10 xl:pt-0">
        <h3 className="text-center font-semibold text-primary-900 text-title-5 xl:text-title-3">
          <span className="text-accent">Flexible,</span> Scalable <br />
          Talent Models
        </h3>
      </div>
    </article>
  );
}

function TechStackCard({ className }: CardProps) {
  return (
    <article className={cn("flex rounded-2xl border bg-background", className)}>
      <div className="p-6 pr-0 sm:p-8 lg:flex-1">
        <header>
          <Badge variant="ghost">Results-Driven Delivery</Badge>
          <h3 className="text-primary-900 text-title-5 xl:text-title-3">Driven by People, Powered by Technology.</h3>
        </header>
        {/* <p className="text-base text-muted-foreground xl:text-lg">
          Accelerate transformation with a results-driven methodology built for complex, enterprise-scale challenges.
        </p> */}
      </div>

      <div className="relative h-48 w-auto lg:h-auto lg:flex-1">
        <Image
          alt="Proven delivery framework for enterprise-scale technology transformation and results-driven methodology"
          className="object-contain"
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 66vw"
          src="/svg/techstack.svg"
        />
      </div>
    </article>
  );
}

function ReliabilityCard({ className }: CardProps) {
  return (
    <article className={cn("flex overflow-hidden rounded-2xl border bg-background", className)}>
      <div className="p-6 sm:p-8 lg:px-10 lg:pt-10">
        <h3 className="text-primary-900 text-title-5 xl:text-title-3">Reliability at the Core</h3>
        <p className="text-base text-muted-foreground lg:text-sm xl:text-lg">
          We don't just design technology — we make it work for your business, reducing complexity and accelerating
          value.
        </p>
      </div>

      <div className="relative h-full w-full xl:aspect-9/13">
        <Image
          alt="Reliability at the core of technology solutions - reducing complexity and accelerating business value"
          className="object-contain"
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src="/svg/reliability.svg"
        />
      </div>
    </article>
  );
}
