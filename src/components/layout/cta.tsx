import { memo } from "react";
import Link from "next/link";

import { IconAiCloud, IconArrowUpRight } from "@/assets/icons";
import { LogoOutline } from "@/assets/logo";

import { cn } from "@/lib/utils";
import { QuickEnquiryForm } from "@/modules/form/quick-enquiry-form";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

interface CtaProps {
  badge?: string;
  title?: string;
  description?: string;
  showForm?: boolean;
  buttonText?: string;
}

export const Cta = memo(
  ({
    showForm = false,
    buttonText = "Start the Conversation",
    badge = "Your IT success story starts here",
    title = "Let's build your next IT success story together.",
    description = "Get the accuracy, scalability, and impact your business needs - delivered with precision and pragmatism.",
  }: CtaProps) => {
    return (
      <section
        aria-labelledby="cta-heading"
        className={cn("relative max-md:container max-sm:pb-12", showForm ? "md:mt-20 md:mb-32" : "xl:mb-12")}
      >
        <div className="xl:border-y">
          <div className="relative mx-auto max-w-7xl">
            <div className="relative overflow-hidden rounded-2xl bg-primary-950 p-6 sm:p-8 md:p-12 lg:rounded-none lg:p-16 xl:rounded-3xl">
              <div className="relative z-10 max-w-2xl space-y-3 sm:space-y-4">
                <Badge
                  aria-label="Call to action category"
                  className="bg-primary-400/10 text-primary-500 text-xs sm:text-sm"
                  role="text"
                >
                  {badge}
                </Badge>
                <h4
                  className="text-balance text-primary-100 text-xl leading-tight sm:text-2xl md:text-title-3 lg:text-title-2"
                  id="cta-heading"
                >
                  {title}
                </h4>
                <p className="text-balance text-primary-300 text-sm sm:text-base md:text-lg">{description}</p>
                <Button aria-describedby="cta-description" className="w-full sm:w-auto" size="lg">
                  {buttonText}
                </Button>
              </div>
              <LogoOutline
                aria-hidden="true"
                className="-translate-x-1/4 -translate-y-1/4 lg:-translate-x-1/6 absolute top-4 left-1/2 rotate-30 text-primary-400 opacity-60 max-sm:size-[38rem] sm:top-8 sm:opacity-80 md:top-12 lg:top-16 lg:opacity-100"
              />
            </div>
            {showForm && (
              <div className="md:-translate-y-1/2 z-50 mt-5 rounded-2xl bg-card p-9 shadow-md md:absolute md:top-1/2 md:right-9 md:mt-0 md:w-lg">
                <h5 className="mb-4 text-stone-800 text-title-4">Shall we talk</h5>
                <QuickEnquiryForm />
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }
);

Cta.displayName = "Cta";

interface MiniCtaProps {
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
  }: MiniCtaProps) => {
    return (
      <div
        className={cn(
          "relative z-999 flex flex-col items-center justify-between gap-9 rounded-[calc(var(--radius-xl)+calc(var(--spacing)*3))] bg-foreground p-4 sm:gap-4 sm:rounded-2xl sm:px-4 sm:py-6 md:flex-row md:px-6 md:py-8",
          className
        )}
      >
        <div className="flex items-start gap-2 sm:gap-3 md:items-center md:gap-4">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary-950 sm:size-12">
            <IconAiCloud className="text-purple-400" />
          </div>
          <div className="flex w-full flex-col items-center justify-between gap-3 sm:gap-4 md:flex-row">
            <div className={cn(layout === "horizontal" && "flex flex-col items-center gap-4 sm:flex-row sm:gap-6")}>
              <h3
                className="text-balance font-semibold text-card text-lg leading-tight tracking-[0.01em] sm:text-xl md:text-2xl [&>span]:text-accent"
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
          </div>
        </div>
        {showButton && (
          <Button
            asChild
            className="w-full justify-between bg-primary-900 pl-4 text-primary-300 sm:w-auto"
            size="lg"
            variant="ghost"
          >
            <Link href="/services" title="Explore our services">
              Explore Services
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary-400 sm:size-9">
                <IconArrowUpRight className="text-primary-900" />
              </span>
            </Link>
          </Button>
        )}
      </div>
    );
  }
);

MiniCta.displayName = "MiniCta";
