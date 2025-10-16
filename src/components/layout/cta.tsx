import Link from "next/link";

import { IconAiCloud, IconArrowUpRight } from "@/assets/icons";

import { cn } from "@/lib/utils";

import { Button } from "../ui/button";

interface CtaProps {
  title?: string;
  description?: string;
  className?: string;
}

export const MiniCta = ({
  title = "Empower Your Business with <span>Next-Gen IT</span> Solutions",
  description = "Explore cloud, cybersecurity, and digital transformation services built to scale with your growth.",
  className,
}: CtaProps) => {
  return (
    <div className={cn("flex items-center gap-4 rounded-2xl bg-foreground px-6 py-8", className)}>
      <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary-950">
        <IconAiCloud className="text-purple-400" />
      </div>
      <div className="flex w-full items-center justify-between">
        <div>
          <h4
            className="font-semibold text-2xl text-card leading-tight tracking-[0.01em] [&>span]:text-accent"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p className="text-muted-background text-sm">{description}</p>
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
