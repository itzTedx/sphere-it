import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { IconCheckmark } from "@/assets/icons";

export const Hero = () => {
  return (
    <header className="relative z-50 bg-card" role="banner">
      <section aria-labelledby="hero-heading" className="container max-w-7xl pt-16 pb-9 text-center md:pt-12">
        <div className="mx-auto max-w-4xl space-y-6">
          <Badge className="mx-auto" showDashes>
            <IconCheckmark aria-hidden="true" className="text-accent" />
            ISO/IEC 42001 Certified
          </Badge>
          <h1 className="text-primary-900 text-title-3 md:text-title-2 xl:text-title-1" id="hero-heading">
            Transforming Business Through <span className="text-accent">Smart, Scalable Technology.</span>
          </h1>

          <p className="text-balance text-lg md:text-xl xl:text-2xl">
            Trusted partner for Digital Transformation and Technology services in Middle East in the BFSI and critical
            industries.
          </p>
          <div
            aria-label="Main actions"
            className="flex items-center justify-center gap-4 max-sm:flex-col"
            role="group"
          >
            <Button aria-describedby="hero-description" asChild className="max-sm:w-full">
              <Link href="/services">Explore Services</Link>
            </Button>
            <Button aria-describedby="hero-description" className="max-sm:w-full" variant="ghost">
              Contact us
            </Button>
          </div>
        </div>
      </section>
      <section aria-labelledby="hero-services-heading" className="container max-w-7xl pt-16 pb-9 text-center md:pt-12">
        <Badge>Services</Badge>
        <h2 className="text-primary-900 text-title-5 md:text-title-4" id="hero-services-heading">
          Delivering Technology That Works for You
        </h2>
      </section>
    </header>
  );
};
