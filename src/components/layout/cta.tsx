import { memo } from "react";
import Link from "next/link";

import { IconAiCloud, IconArrowUpRight } from "@/assets/icons";
import { LogoOutline } from "@/assets/logo";

import { cn } from "@/lib/utils";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export const Cta = memo(() => {
  return (
    <section className="max-md:container max-sm:pb-12 xl:mb-12">
      <div className="xl:border-y">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-2xl bg-primary-950 p-6 sm:p-8 md:p-12 lg:rounded-none lg:p-16 xl:rounded-3xl">
            <div className="max-w-2xl space-y-3 sm:space-y-4">
              <Badge className="bg-primary-400/10 text-primary-500 text-xs sm:text-sm">
                Your IT success story starts here
              </Badge>
              <h4 className="text-balance text-primary-100 text-xl leading-tight sm:text-2xl md:text-title-3 lg:text-title-2">
                Let's build your next IT success story together.
              </h4>
              <p className="text-balance text-primary-300 text-sm sm:text-base md:text-lg">
                Get the accuracy, scalability, and impact your business needs - delivered with precision and pragmatism.
              </p>
              <Button className="w-full sm:w-auto" size="lg">
                Start the Conversation
              </Button>
            </div>
            <LogoOutline className="-translate-x-1/2 -translate-y-1/4 lg:-translate-x-1/6 absolute top-4 left-1/2 rotate-30 text-primary-400 opacity-60 sm:top-8 sm:opacity-80 md:top-12 lg:top-16 lg:opacity-100" />
          </div>
        </div>
      </div>
    </section>
  );
});

Cta.displayName = "Cta";

interface CtaProps {
  title?: string;
  description?: string;
  className?: string;
  layout?: "vertical" | "horizontal";
  showButton?: boolean;
}

export const MiniCta = memo(
  ({
    title = "Empower Your Business with <span>Next-Gen IT</span> Solutions",
    description = "Explore cloud, cybersecurity, and digital transformation services built to scale with your growth.",
    className,
    layout = "vertical",
    showButton = true,
  }: CtaProps) => {
    return (
      <div
        className={cn(
          "relative z-999 flex flex-col items-center gap-3 rounded-xl bg-foreground px-3 py-4 sm:gap-4 sm:rounded-2xl sm:px-4 sm:py-6 md:flex-row md:px-6 md:py-8",
          className
        )}
      >
        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary-950 sm:size-12">
          <IconAiCloud className="text-purple-400" />
        </div>
        <div className="flex w-full flex-col items-center justify-between gap-3 sm:gap-4 md:flex-row">
          <div
            className={cn(
              "text-center md:text-left",
              layout === "horizontal" && "flex flex-col items-center gap-4 sm:flex-row sm:gap-6"
            )}
          >
            <h4
              className="font-semibold text-card text-lg leading-tight tracking-[0.01em] sm:text-xl md:text-2xl [&>span]:text-accent"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <p
              className={cn(
                "text-muted-background",
                layout === "horizontal"
                  ? "text-balance font-medium text-base leading-tight sm:text-lg md:text-xl"
                  : "text-xs leading-relaxed sm:text-sm"
              )}
            >
              {description}
            </p>
          </div>
          {showButton && (
            <Button asChild className="w-full bg-primary-900 pl-4 text-primary-400 sm:w-auto" size="lg" variant="ghost">
              <Link href="/services">
                Explore Solutions
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary-400 sm:size-9">
                  <IconArrowUpRight className="text-primary-900" />
                </span>
              </Link>
            </Button>
          )}
        </div>
      </div>
    );
  }
);

MiniCta.displayName = "MiniCta";
