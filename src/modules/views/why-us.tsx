import { memo } from "react";
import Image from "next/image";
import Link from "next/link";

import { MiniCta } from "@/components/layout/cta";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";
import { FlickeringGrid } from "@/components/ui/primitives/animate/flicker-grid";

import { IconArrowRight, IconChevronRight } from "@/assets/icons";
import { IconLayers } from "@/assets/icons/layers";

import { TECH_STACKS } from "@/data/constants";
import { cn } from "@/lib/utils";

export const WhyUs = memo(() => {
  return (
    <section
      aria-labelledby="why-us-heading"
      className="relative z-50 mb-20 border bg-card p-4 sm:p-6 md:mx-3 md:rounded-3xl md:p-12 xl:p-20"
    >
      <div className="mx-auto max-w-7xl space-y-4 lg:space-y-6">
        <header className="space-y-2 md:space-y-4">
          {/* <Badge variant="secondary">Why sphere it</Badge> */}
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
          <TechStackCard className="md:col-span-6" />
          <ReliabilityCard className="md:col-span-6" />
          <div className="col-span-full">
            <MiniCta
              description="We make it work for your business, reducing complexity and accelerating value."
              layout="horizontal"
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
    <article
      className={cn(
        "relative flex flex-col justify-between overflow-hidden rounded-2xl border bg-background",
        className
      )}
    >
      <figure className="relative">
        <div className="mx-auto h-9 w-md rounded-b-4xl border border-t-0" />
        <div className="relative py-6">
          {/* <LogoIcon className="-translate-1/2 absolute top-1/2 left-1/2 z-20" /> */}
          {/* <div className="absolute inset-y-0 right-1/2 z-10 w-1/4 bg-[linear-gradient(-90deg,rgba(105,33,196,1)0%,rgba(105,33,196,0.50)5%,rgba(105,33,196,0.25)20%,rgba(105,33,196,0)100%)] opacity-40" />
          <div className="absolute inset-y-0 right-1/2 z-10 w-1/3 bg-[linear-gradient(-90deg,rgba(105,33,196,0.8)0%,rgba(105,33,196,0.4)5%,rgba(105,33,196,0.2)20%,rgba(105,33,196,0)100%)] opacity-60" /> */}
          <svg
            className="-translate-y-1/2 absolute top-1/2 left-0 z-70 hidden md:block"
            fill="none"
            height="180"
            viewBox="0 0 54 180"
            width="54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 55.9321H17.839C35.7237 55.9321 50.222 70.4305 50.222 88.3151C50.222 106.2 35.7236 120.698 17.839 120.698H0"
              stroke="#A3A3A3"
              strokeOpacity="0.1"
              strokeWidth="2"
            />
            <path d="M0 173.11H52.022M52.2406 165.79V180" stroke="#A3A3A3" strokeOpacity="0.1" strokeWidth="2" />
            <path d="M0 7.32056H52.022M52.2406 0V14.2105" stroke="#A3A3A3" strokeOpacity="0.1" strokeWidth="2" />
          </svg>

          <div className="absolute z-60 h-full w-48 bg-gradient-to-r from-background via-25% via-background to-transparent" />
          <Marquee className="relative z-50 w-full [--duration:40s] [--gap:0.75rem]" repeat={3} reverse>
            {TECH_STACKS.map((review) => (
              <div
                className="flex aspect-square w-24 items-center justify-center rounded-full border p-1"
                key={review.name}
              >
                <div className="flex aspect-square w-20 items-center justify-center rounded-full border bg-stone-alpha-10 backdrop-blur-md">
                  <div className="relative aspect-square size-10">
                    <Image alt={review.name} className="object-contain" fill src={review.img} />
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
          <div className="absolute top-0 right-0 z-60 h-full w-48 bg-gradient-to-l from-background via-25% via-background to-transparent" />
          <svg
            className="-translate-y-1/2 absolute top-1/2 right-0 z-70 hidden md:block"
            fill="none"
            height="180"
            viewBox="0 0 54 180"
            width="54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M53.2402 55.9321H35.4012C17.5166 55.9321 3.01823 70.4305 3.01823 88.3151C3.01823 106.2 17.5166 120.698 35.4012 120.698H52.5585"
              stroke="#A3A3A3"
              strokeOpacity="0.1"
              strokeWidth="2"
            />
            <path d="M53.2402 173.11H1.2182M0.999623 165.79V180" stroke="#A3A3A3" strokeOpacity="0.1" strokeWidth="2" />
            <path d="M53.2402 7.32056H1.2182M0.999623 0V14.2105" stroke="#A3A3A3" strokeOpacity="0.1" strokeWidth="2" />
          </svg>
        </div>

        <div className="mx-auto h-9 w-md rounded-t-4xl border border-b-0" />
        <FlickeringGrid
          aria-hidden="true"
          className="absolute inset-0 z-1 opacity-50 [mask-image:radial-gradient(160px_circle_at_center,white,transparent)]"
          color="#C3A5FA"
          flickerChance={0.1}
          gridGap={4}
          height={1080}
          maxOpacity={0.5}
          squareSize={4}
          width={1920}
        />
      </figure>

      <div className="p-6 sm:p-8 lg:p-6 xl:p-10">
        <h3 className="text-primary-900 text-title-5 xl:text-title-3">
          Trusted Partner For Your Technology Transformation.
        </h3>
      </div>
    </article>
  );
}

function TechStackCard({ className }: CardProps) {
  return (
    <article className={cn("relative grid overflow-hidden rounded-2xl border bg-background md:grid-cols-2", className)}>
      <div className="p-6 pr-0 sm:p-8 lg:flex-1">
        <header>
          <Badge variant="ghost">Results-Driven Delivery</Badge>
          <h3 className="text-primary-900 text-title-5 xl:text-title-3">Driven by People, Powered by Technology.</h3>
        </header>
      </div>
      <div className="relative">
        <div className="relative z-10 m-6 mb-0 space-y-3 rounded-t-xl bg-stone-alpha-10 p-3 pb-0 shadow-lg backdrop-blur-md">
          <span className="flex items-center gap-2 text-muted-background">
            <IconLayers /> Tech Stack
          </span>
          <div className="relative flex h-[240px] w-full overflow-hidden rounded-xl bg-card shadow-md">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 z-10 h-1/4 bg-gradient-to-b from-background/80 to-transparent"
            />
            <Marquee className="w-full p-4 [--duration:40s] [--gap:0.75rem]" repeat={3} vertical>
              {TECH_STACKS.map((review) => (
                <StackCard key={review.name} {...review} />
              ))}
            </Marquee>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-1/2 bg-gradient-to-t from-background to-transparent"
        />
      </div>
    </article>
  );
}

function StackCard({ img, name }: (typeof TECH_STACKS)[number]) {
  return (
    <figure className="group/stack flex w-full items-center justify-between gap-2.5">
      <div className="flex items-center gap-2.5">
        <div className="flex size-10 items-center justify-center rounded-lg bg-card shadow-sm transition-transform group-hover/stack:scale-110">
          <Image alt={`Tech-stack: ${name}`} className="object-contain" height={24} src={img} width={24} />
        </div>
        <figcaption className="font-medium text-foreground text-sm">{name}</figcaption>
      </div>
      <div className="flex size-7 items-center justify-center rounded-full border">
        <IconChevronRight />
      </div>
    </figure>
  );
}

function ReliabilityCard({ className }: CardProps) {
  return (
    <article className={cn("grid grid-cols-5 overflow-hidden rounded-2xl border bg-background", className)}>
      <div className="col-span-3 p-6 sm:p-8 lg:px-10 lg:pt-10">
        <h3 className="text-balance text-primary-900 text-title-5 xl:text-title-3">Reliability at the Core</h3>
      </div>

      <div className="relative col-span-2 h-full w-full xl:aspect-square">
        <Image
          alt="Reliability at the core of technology solutions - reducing complexity and accelerating business value"
          className="z-10 object-contain"
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src="/svg/reliability.svg"
        />
        <FlickeringGrid
          aria-hidden="true"
          className="absolute inset-0 z-1 opacity-50 [mask-image:radial-gradient(120px_circle_at_bottom,white,transparent)]"
          color="#C3A5FA"
          flickerChance={0.1}
          gridGap={4}
          height={1080}
          maxOpacity={0.5}
          squareSize={4}
          width={1920}
        />
      </div>
    </article>
  );
}
