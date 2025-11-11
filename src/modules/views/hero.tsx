import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { HeroPattern } from "@/assets/brand-pattern";
import { IconArrowDown } from "@/assets/icons";

export const Hero = () => {
  return (
    <header className="relative z-50 overflow-hidden bg-card" role="banner">
      <section
        aria-labelledby="hero-heading"
        className="container relative z-10 max-w-7xl pt-12 pb-9 text-center md:pt-16 md:pb-16 lg:pt-20"
      >
        <div className="mx-auto max-w-4xl space-y-6">
          {/* <Badge className="mx-auto" showDashes>
            <IconCheckmark aria-hidden="true" className="text-accent" />
            ISO/IEC 42001 Certified
          </Badge> */}

          <h1 className="text-primary-900 text-title-3 md:text-title-2 xl:text-title-1" id="hero-heading">
            Transforming Business Through <span className="text-accent">Smart, Scalable Technology.</span>
          </h1>

          <p className="text-balance text-lg md:text-xl">
            Trusted partner for Digital Transformation and Technology services in Middle East in the BFSI and critical
            industries.
          </p>
          <div
            aria-label="Main actions"
            className="flex items-center justify-center gap-4 max-sm:flex-col"
            role="group"
          >
            <Button
              aria-describedby="hero-description"
              asChild
              className="group relative overflow-hidden max-sm:w-full"
            >
              <Link href="/services">
                Explore Services
                <div className="-translate-x-64 absolute z-50 h-[150%] w-9 rotate-12 bg-gradient-to-r from-transparent via-primary-300/20 to-transparent opacity-0 mix-blend-plus-lighter transition-[translate_opacity] duration-500 ease-out group-hover:translate-x-64 group-hover:opacity-100" />
              </Link>
            </Button>
            <Button
              aria-describedby="hero-description"
              asChild
              className="backdrop-blur-md max-sm:w-full"
              variant="ghost"
            >
              <Link href="/contact">Contact us</Link>
            </Button>
          </div>
        </div>
      </section>
      <Link className="group mx-auto flex max-w-fit flex-col items-center justify-center gap-4" href="#services">
        <IconArrowDown className="size-4 animate-bounce text-stone-400 transition-transform duration-500 group-hover:translate-y-3 group-hover:animate-none" />
        <span className="text-stone-600 text-subhead-sm">Scroll to Explore</span>
      </Link>
      <section
        aria-labelledby="hero-services-heading"
        className="container relative z-10 max-w-md pt-16 pb-9 text-center md:pt-20"
        id="services"
      >
        <Badge className="mx-auto" variant="ghost">
          Services
        </Badge>
        <h2 className="text-primary-900 text-title-5 md:text-title-4" id="hero-services-heading">
          Delivering Technology That <span className="text-primary-700">Works for You</span>
        </h2>
      </section>
      <HeroPattern className="-translate-x-1/2 pointer-events-none absolute bottom-0 left-1/2 z-0 text-stone-500" />
    </header>
  );
};
