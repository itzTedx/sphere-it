import { IconCheckmark } from "@/assets/icons";

import { cn } from "@/lib/utils";

interface FeatureListProps {
  children: React.ReactNode;
  className?: string;
}

export function FeatureList({ children, className }: FeatureListProps) {
  return <ul className={cn("not-prose space-y-3 text-base text-stone-800 sm:text-lg", className)}>{children}</ul>;
}

interface FeatureItemProps {
  children: React.ReactNode;
}

export function FeatureItem({ children }: FeatureItemProps) {
  return (
    <li className="flex items-start gap-3">
      <IconCheckmark aria-hidden="true" className="mt-1.5 size-4 shrink-0 text-primary-600" />
      <span className="leading-relaxed">{children}</span>
    </li>
  );
}
