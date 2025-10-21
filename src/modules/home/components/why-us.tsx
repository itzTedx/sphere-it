import Image from "next/image";
import Link from "next/link";

import { MiniCta } from "@/components/layout/cta";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { IconArrowRight } from "@/assets/icons";

export const WhyUs = () => {
  return (
    <section aria-labelledby="why-us-heading">
      <div className="container">
        <div className="container h-8 max-w-7xl border-x sm:h-12 md:h-16 lg:h-24" />
      </div>
      <div className="bg-card p-4 sm:p-6 md:mx-3 md:rounded-3xl md:p-12 lg:p-20">
        <div className="mx-auto max-w-7xl space-y-8 lg:space-y-12">
          <header className="space-y-4">
            <Badge variant="secondary">Why sphere it</Badge>
            <h2 className="text-primary-900 text-title-2" id="why-us-heading">
              What sets <span className="text-primary-600">Sphere IT apart</span>
            </h2>
            <p className="max-w-3xl text-balance text-base sm:text-lg">
              We believe technology should be both precisely engineered and practically applied. That's why
              forward-looking organizations across the GCC trust us to deliver AI-driven platforms, intelligent
              automation, resilient infrastructure, and on-demand expertise that create measurable outcomes.
            </p>
          </header>
          <div className="grid gap-4 sm:gap-6 lg:grid-cols-3 lg:grid-rows-3">
            <PrecisionCard />
            <PartnerCard />
            <ScalableCard />
            <ReliabilityCard />
            <TechStackCard />
            <div className="col-span-full">
              <MiniCta
                description="We make it work for your business, reducing complexity and accelerating value."
                layout="vertical"
                title="We don't just <span>design technology</span>"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="container h-8 max-w-7xl border-x sm:h-12 md:h-16 lg:h-24" />
      </div>
    </section>
  );
};

function PrecisionCard() {
  return (
    <article className="flex flex-col justify-between rounded-2xl bg-card shadow-md lg:row-span-2">
      <div className="space-y-4 p-6 sm:p-8 lg:p-10">
        <header>
          <Badge variant="ghost">Guided by</Badge>
          <h3 className="text-primary-900 text-title-3">Precision & Pragmatism</h3>
        </header>
        <p className="text-base text-muted-foreground sm:text-lg">
          Every solution is built with technical accuracy and business sense - ensuring innovation that actually
          delivers.
        </p>
      </div>
      <div className="relative aspect-video">
        <Image
          alt="Precision and pragmatism in technology solutions - technical accuracy meets business sense"
          className="object-cover"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src="/svg/precision.svg"
        />
      </div>
      <footer className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8 lg:p-10">
        <div>
          <h4 className="text-primary-800 text-subhead-sm">Your Next Advantage</h4>
          <p className="text-muted-foreground text-xs">Technology, talent, and trust combined.</p>
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

function PartnerCard() {
  return (
    <article className="rounded-2xl bg-card shadow-md lg:col-span-2">
      <div className="relative h-48 w-full sm:h-56 lg:h-64">
        <Image
          alt="Trusted partner in banking, financial services, and industries requiring security and scalability"
          className="object-cover object-top"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 66vw"
          src="/svg/trusted.svg"
        />
      </div>
      <div className="p-6 sm:p-8 lg:px-10 lg:pb-10">
        <h3 className="text-primary-900 text-title-3">Trusted Partner in BFSI and Beyond</h3>
        <p className="text-base text-muted-foreground sm:text-lg">
          Deep domain expertise across banking, financial services, and industries that demand security, scalability,
          and speed.
        </p>
      </div>
    </article>
  );
}

function ScalableCard() {
  return (
    <article className="group rounded-2xl bg-card shadow-md">
      <div className="relative aspect-6/4 w-full">
        <Image
          alt="Flexible and scalable talent models for enterprise technology solutions"
          className="object-cover object-center transition-transform group-hover:scale-105"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src="/svg/flexible.svg"
        />
      </div>
      <div className="p-6 sm:p-8 lg:px-10 lg:pb-10">
        <h3 className="text-center text-primary-900 text-title-3">Flexible, Scalable Talent Models</h3>
      </div>
    </article>
  );
}

function ReliabilityCard() {
  return (
    <article className="rounded-2xl bg-card shadow-md lg:row-span-2">
      <div className="p-6 sm:p-8 lg:px-10 lg:pt-10">
        <h3 className="text-primary-900 text-title-3">Reliability at the Core</h3>
        <p className="text-base text-muted-foreground sm:text-lg">
          We don't just design technology — we make it work for your business, reducing complexity and accelerating
          value.
        </p>
      </div>

      <div className="relative aspect-9/13 w-full">
        <Image
          alt="Reliability at the core of technology solutions - reducing complexity and accelerating business value"
          className="object-cover"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src="/svg/reliability.svg"
        />
      </div>
    </article>
  );
}

function TechStackCard() {
  return (
    <article className="flex flex-col rounded-2xl bg-card shadow-md lg:col-span-2 lg:flex-row">
      <div className="p-6 sm:p-8 lg:flex-1 lg:px-10 lg:pt-10">
        <header>
          <Badge variant="ghost">Results-Driven Delivery</Badge>
          <h3 className="text-primary-900 text-title-3">Proven Delivery Framework</h3>
        </header>
        <p className="text-base text-muted-foreground sm:text-lg">
          Accelerate transformation with a results-driven methodology built for complex, enterprise-scale challenges.
        </p>
      </div>

      <div className="relative h-48 w-full lg:h-auto lg:flex-1">
        <Image
          alt="Proven delivery framework for enterprise-scale technology transformation and results-driven methodology"
          className="object-cover"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 66vw"
          src="/svg/techstack.svg"
        />
      </div>
    </article>
  );
}
