import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { IconArrowDown } from "@/assets/icons";

export const Hero = () => {
  return (
    <header className="relative overflow-hidden bg-foreground" role="banner">
      <section aria-labelledby="hero-heading" className="relative z-10 flex min-h-[calc(100svh-4rem)]">
        <div className="-translate-x-1/2 container absolute bottom-0 left-1/2 z-50 flex w-full max-w-7xl flex-col items-center gap-6 pt-12 pb-9 text-center md:h-full md:flex-1 md:justify-between md:pt-16 md:pb-16 lg:pt-28">
          <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-6 text-background md:flex-1">
            <h1 className="text-card text-title-3 md:text-title-2 xl:text-title-1" id="hero-heading">
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
                className="z-50 bg-stone-200/25 text-stone-100 max-sm:w-full"
                variant="ghost"
              >
                <Link href="/contact">Contact us</Link>
              </Button>
            </div>
          </div>
          <Link
            className="group relative z-50 mx-auto flex max-w-fit flex-col items-center justify-center gap-4"
            href="#services"
          >
            <IconArrowDown className="size-4 animate-bounce text-stone-200 transition-transform duration-500 group-hover:translate-y-3 group-hover:animate-none" />
            <span className="text-stone-200 text-subhead-sm">Scroll to Explore</span>
          </Link>
        </div>
        <video
          autoPlay
          className="mask-b-to-95% pointer-events-none absolute inset-0 h-full w-full object-cover"
          loop
          muted
          playsInline
          slot="media"
        >
          <source src="/videos/hero-reel.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </section>

      <section
        aria-labelledby="hero-services-heading"
        className="container relative z-10 max-w-md pt-16 pb-9 text-center md:pt-20"
        id="services"
      >
        <Badge className="mx-auto" variant="ghost">
          Services
        </Badge>
        <h2 className="text-primary-100 text-title-5 md:text-title-4" id="hero-services-heading">
          Delivering Technology That <span className="text-primary-600">Works for You</span>
        </h2>
      </section>
    </header>
  );
};
