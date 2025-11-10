import type * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { Slot as SlotPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full font-display font-medium text-base outline-none transition-all focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-98 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "border border-primary-900/40 border-b-2 bg-gradient-to-t from-primary-700 to-primary-600 text-primary-50 shadow-md shadow-primary-900/20 ring-1 ring-card/25 ring-inset ring-offset-background transition-[filter] duration-200 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:brightness-90 disabled:pointer-events-none disabled:opacity-60",
        destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20",
        outline:
          "border border-stone-400 bg-background text-stone-800 shadow-xs hover:bg-primary-500 hover:text-primary-50 focus-visible:border-primary-600",
        secondary:
          "border border-stone-900/40 border-b-2 bg-gradient-to-t from-stone-800 to-stone-700 text-stone-200 shadow-md shadow-stone-900/20 ring-1 ring-card/25 ring-inset ring-offset-background transition-[filter] duration-200 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:brightness-90 disabled:pointer-events-none disabled:opacity-60",
        ghost: "bg-stone-alpha-10 text-sm text-stone-600 hover:bg-stone-300 hover:text-foreground",
        link: "!px-0 !py-0 !text-label relative before:pointer-events-none before:absolute before:bottom-0 before:left-0 before:h-[0.05em] before:w-full before:origin-right before:scale-x-0 before:bg-current before:transition-transform before:duration-300 before:ease-[cubic-bezier(0.4,0,0.2,1)] before:content-[''] hover:before:origin-left hover:before:scale-x-100",
      },
      size: {
        default: "h-10 px-6 py-2 has-[>span]:pr-1 has-[>svg]:pr-5 has-[>span]:pl-4",
        sm: "h-8 gap-1.5 px-4 has-[>svg]:px-2.5",
        lg: "h-12 px-8 has-[>svg]:px-4 has-[>span]:pr-2",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? SlotPrimitive.Slot : "button";

  return <Comp className={cn(buttonVariants({ variant, size, className }))} data-slot="button" {...props} />;
}

export { Button, buttonVariants };
