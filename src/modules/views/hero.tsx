import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { IconCheckmark } from "@/assets/icons";

export const Hero = () => {
  return (
    <header className="bg-card">
      <section className="container max-w-7xl pt-28 pb-9 text-center">
        <div className="mx-auto max-w-3xl space-y-6">
          <Badge className="mx-auto" showDashes>
            <IconCheckmark className="text-accent" />
            ISO/IEC 42001 Certified
          </Badge>
          <h1 className="text-primary-900 text-title-3 md:text-title-2 xl:text-title-1">
            Delivering <span className="text-primary-700">Accuracy.</span> <br />
            Driving Outcomes.
          </h1>

          <p className="text-lg md:text-xl xl:text-2xl">
            Empowering forward-looking organizations with talent and technology that deliver measurable outcomes.
          </p>
          <div className="flex items-center justify-center gap-4 max-sm:flex-col">
            <Button className="max-sm:w-full">Explore Services</Button>
            <Button className="max-sm:w-full" variant="ghost">
              Contact us
            </Button>
          </div>
        </div>
        {/* <div className="flex items-center gap-6 py-12">
          <div className="flex flex-1 items-center">
            <div className="h-0.5 w-full bg-gradient-to-l from-primary-700 to-stone-100" />
            <div className="size-1.5 shrink-0 rounded-full bg-primary-700" />
          </div>
          <p className="font-mono text-muted-foreground uppercase">We can help you Manage</p>
          <div className="flex flex-1 items-center">
            <div className="size-1.5 shrink-0 rounded-full bg-primary-700" />
            <div className="h-0.5 w-full bg-gradient-to-r from-primary-700 to-stone-100" />
          </div>
        </div> */}
      </section>
    </header>
  );
};
