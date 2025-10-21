import Link from "next/link";

import { IconAiCloud, IconArrowUpRight } from "@/assets/icons";
import { LogoOutline } from "@/assets/logo";

import { cn } from "@/lib/utils";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export const Cta = () => {
  return (
    <section>
      <div className="container">
        <div className="container h-24 max-w-7xl border-x" />
      </div>
      <div className="border-y">
        <div className="mx-auto max-w-7xl border-x">
          <div className="relative overflow-hidden rounded-3xl bg-primary-950 p-16">
            <div className="max-w-2xl space-y-4">
              <Badge>Your IT success story starts here</Badge>
              <h4 className="text-balance text-primary-100 text-title-2">
                Let’s build your next IT success story together.
              </h4>
              <p className="text-balance text-lg text-primary-300">
                Get the accuracy, scalability, and impact your business needs - delivered with precision and pragmatism.
              </p>
              <Button>Start the Conversation</Button>
            </div>
            <LogoOutline className="-translate-y-1/4 -translate-x-1/6 absolute top-16 left-1/2 rotate-30 text-primary-400" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="container h-24 max-w-7xl border-x" />
      </div>
    </section>
  );
};

interface CtaProps {
  title?: string;
  description?: string;
  className?: string;
  layout?: "vertical" | "horizontal";
}

export const MiniCta = ({
  title = "Empower Your Business with <span>Next-Gen IT</span> Solutions",
  description = "Explore cloud, cybersecurity, and digital transformation services built to scale with your growth.",
  className,
  layout = "horizontal",
}: CtaProps) => {
  return (
    <div
      className={cn(
        "relative z-10000 flex flex-col items-center gap-4 rounded-2xl bg-foreground px-3 py-4 md:flex-row md:px-6 md:py-8",
        className
      )}
    >
      <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary-950">
        <IconAiCloud className="text-purple-400" />
      </div>
      <div className="flex w-full flex-col items-center justify-between md:flex-row">
        <div className={cn(layout === "vertical" && "flex items-center gap-6")}>
          <h4
            className="font-semibold text-card text-xl leading-tight tracking-[0.01em] md:text-2xl [&>span]:text-accent"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p
            className={cn(
              "text-muted-background",
              layout === "vertical" ? "text-balance font-medium text-lg leading-tight md:text-xl" : "text-xs md:text-sm"
            )}
          >
            {description}
          </p>
        </div>
        <Button asChild className="bg-primary-900 pl-5 text-primary-400" size="lg" variant="ghost">
          <Link href="/services">
            Explore Solutions
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary-400">
              <IconArrowUpRight className="text-primary-900" />
            </span>
          </Link>
        </Button>
      </div>
    </div>
  );
};
