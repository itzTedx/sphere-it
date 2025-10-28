import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { IconCheckmark } from "@/assets/icons";

export const Hero = () => {
  return (
    <header className="bg-card" role="banner">
      <section aria-labelledby="hero-heading" className="container max-w-7xl pt-16 pb-9 text-center md:pt-12">
        <div className="mx-auto max-w-3xl space-y-6">
          <Badge className="mx-auto" showDashes>
            <IconCheckmark aria-hidden="true" className="text-accent" />
            ISO/IEC 42001 Certified
          </Badge>
          <h1 className="text-primary-900 text-title-3 md:text-title-2 xl:text-title-1" id="hero-heading">
            Delivering <span className="text-primary-700">Accuracy.</span> <br />
            Driving Outcomes.
          </h1>

          <p className="text-balance text-lg md:text-xl xl:text-2xl">
            Empowering forward-looking organizations with talent and technology that deliver measurable outcomes.
          </p>
          <div
            aria-label="Main actions"
            className="flex items-center justify-center gap-4 max-sm:flex-col"
            role="group"
          >
            <Button aria-describedby="hero-description" className="max-sm:w-full">
              Explore Services
            </Button>
            <Button aria-describedby="hero-description" className="max-sm:w-full" variant="ghost">
              Contact us
            </Button>
          </div>
        </div>
      </section>
    </header>
  );
};
