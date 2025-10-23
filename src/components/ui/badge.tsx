import * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "!font-mono !text-badge inline-flex w-fit shrink-0 items-center justify-center gap-3 overflow-hidden whitespace-nowrap rounded-full border px-3 py-1.5 uppercase transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-[>svg]:pl-2 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-5",
  {
    variants: {
      variant: {
        default: "border-transparent bg-card text-stone-700 shadow-sm [&>svg]:text-accent [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-primary-300/16 text-primary-600 [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40 [a&]:hover:bg-destructive/90",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        ghost: "border-transparent px-0 text-accent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({
  className,
  variant,
  children,
  showDashes = false,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants> & { asChild?: boolean; showDashes?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      className={cn(badgeVariants({ variant }), "flex items-center", showDashes ? "gap-1.5" : null, className)}
      data-slot="badge"
      {...props}
    >
      {showDashes && <span className="text-stone-300">//</span>}
      {children}
      {showDashes && <span className="-scale-x-100 text-stone-300">//</span>}
    </Comp>
  );
}

export { Badge, badgeVariants };
