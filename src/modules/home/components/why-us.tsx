import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { IconArrowRight } from "@/assets/icons";

export const WhyUs = () => {
  return (
    <section>
      <div className="container">
        <div className="container h-24 max-w-7xl border-x" />
      </div>
      <div className="mx-3 rounded-3xl bg-card p-20">
        <div className="mx-auto max-w-7xl space-y-12">
          <div>
            <Badge variant="secondary">Why sphere it</Badge>
            <h2 className="text-primary-900 text-title-2">
              What sets <span className="text-primary-600">Sphere IT apart</span>
            </h2>
            <p className="max-w-3xl text-balance">
              We believe technology should be both precisely engineered and practically applied. That’s why
              forward-looking organizations across the GCC trust us to deliver AI-driven platforms, intelligent
              automation, resilient infrastructure, and on-demand expertise that create measurable outcomes.
            </p>
          </div>
          <div className="grid grid-cols-3 grid-rows-3 gap-6">
            <PrecisionCard />
            <PartnerCard />
            <ScalableCard />
            <ReliabilityCard />
            <TechStackCard />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="container h-24 max-w-7xl border-x" />
      </div>
    </section>
  );
};

function PrecisionCard() {
  return (
    <div className="row-span-2 flex flex-col justify-between rounded-2xl bg-card shadow-md">
      <div className="space-y-4 p-10">
        <div>
          <Badge variant="ghost">Guided by</Badge>
          <h3 className="text-primary-900 text-title-3">Precision & Pragmatism</h3>
        </div>
        <p className="text-lg text-muted-foreground">
          Every solution is built with technical accuracy and business sense - ensuring innovation that actually
          delivers.
        </p>
      </div>
      <div className="relative aspect-video">
        <Image alt="" className="object-cover" fill src="/svg/precision.svg" />
      </div>
      <div className="flex items-center justify-between gap-4 p-10">
        <div>
          <h4 className="text-primary-800 text-subhead-sm">Your Next Advantage</h4>
          <p className="text-muted-foreground text-xs">Technology, talent, and trust combined.</p>
        </div>
        <Button asChild variant="ghost">
          <Link href="/services">
            Explore Services
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-stone-300 transition-colors">
              <IconArrowRight className="text-stone-500" />
            </span>
          </Link>
        </Button>
      </div>
    </div>
  );
}

function PartnerCard() {
  return (
    <div className="col-span-2 rounded-2xl bg-card shadow-md">
      <div className="relative h-64 w-full">
        <Image alt="" className="object-cover object-top" fill src="/svg/trusted.svg" />
      </div>
      <div className="px-10 pb-10">
        <h3 className="text-primary-900 text-title-3">Trusted Partner in BFSI and Beyond</h3>

        <p className="text-lg text-muted-foreground">
          Deep domain expertise across banking, financial services, and industries that demand security, scalability,
          and speed.
        </p>
      </div>
    </div>
  );
}

function ScalableCard() {
  return (
    <div className="group rounded-2xl bg-card shadow-md">
      <div className="relative aspect-6/4 w-full">
        <Image
          alt=""
          className="object-cover object-center transition-transform group-hover:scale-105"
          fill
          src="/svg/flexible.svg"
        />
      </div>
      <div className="px-10 pb-10">
        <h3 className="text-center text-primary-900 text-title-3">Flexible, Scalable Talent Models</h3>
      </div>
    </div>
  );
}

function ReliabilityCard() {
  return (
    <div className="row-span-2 rounded-2xl bg-card shadow-md">
      <div className="px-10 pt-10">
        <h3 className="text-primary-900 text-title-3">Reliability at the Core</h3>
        <p className="text-lg text-muted-foreground">
          We don’t just design technology — we make it work for your business, reducing complexity and accelerating
          value.
        </p>
      </div>

      <div className="relative aspect-9/13 w-full">
        <Image alt="" className="object-cover" fill src="/svg/reliability.svg" />
      </div>
    </div>
  );
}

function TechStackCard() {
  return (
    <div className="col-span-2 flex rounded-2xl bg-card shadow-md">
      <div className="px-10 pt-10">
        <div>
          <Badge variant="ghost">Results-Driven Delivery</Badge>
          <h3 className="text-primary-900 text-title-3">Proven Delivery Framework</h3>
        </div>
        <p className="text-lg text-muted-foreground">
          Accelerate transformation with a results-driven methodology built for complex, enterprise-scale challenges.
        </p>
      </div>

      <div className="relative size-full">
        <Image alt="" className="object-cover" fill src="/svg/techstack.svg" />
      </div>
    </div>
  );
}
