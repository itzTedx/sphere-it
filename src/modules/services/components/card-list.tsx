import { IconBox } from "@/components/icon-box";
import { Card as CardContainer } from "@/components/ui/card";

import { cn } from "@/lib/utils";

export const CardGroup = ({ className, cols = 2, ...props }: React.ComponentProps<"div"> & { cols?: 2 | 3 }) => {
  return (
    <div
      className={cn("not-prose grid gap-4", cols === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 md:grid-cols-3", className)}
      {...props}
    />
  );
};

export function Card({
  className,
  variant = "card",
  ...props
}: React.ComponentProps<typeof CardContainer> & { variant?: "outlined" | "card" }) {
  if (variant === "outlined")
    return (
      <div
        className={cn(
          "card rounded-[calc(var(--radius-xl)+calc(var(--spacing)*1.5))] bg-stone-alpha-10 p-1.5 shadow-sm transition-all hover:shadow-md",
          className
        )}
      >
        <div className="h-full space-y-3 rounded-xl bg-card p-4 shadow-sm sm:p-6" {...props} />
      </div>
    );

  return <CardContainer className={cn("space-y-6 rounded-3xl p-6 shadow-md", className)} {...props} />;
}

export function CardIcon({ icon }: { icon: React.ReactNode }) {
  return <IconBox state="active">{icon}</IconBox>;
}

interface CardContentProps {
  title: string;
  description: string;
}

export function CardContent({ title, description }: CardContentProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-primary-900 text-title-5">{title}</h3>
      <p className="text-base text-stone-800 tracking-tight sm:text-lg">{description}</p>
    </div>
  );
}
