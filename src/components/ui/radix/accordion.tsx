import {
  AccordionContent as AccordionContentPrimitive,
  type AccordionContentProps as AccordionContentPrimitiveProps,
  AccordionHeader as AccordionHeaderPrimitive,
  AccordionItem as AccordionItemPrimitive,
  type AccordionItemProps as AccordionItemPrimitiveProps,
  Accordion as AccordionPrimitive,
  type AccordionProps as AccordionPrimitiveProps,
  AccordionTrigger as AccordionTriggerPrimitive,
  type AccordionTriggerProps as AccordionTriggerPrimitiveProps,
} from "@/components/ui/primitives/radix/accordion";

import { IconPlus } from "@/assets/icons";

import { cn } from "@/lib/utils";

type AccordionProps = AccordionPrimitiveProps;

function Accordion(props: AccordionProps) {
  return <AccordionPrimitive {...props} />;
}

type AccordionItemProps = AccordionItemPrimitiveProps;

function AccordionItem({ className, ...props }: AccordionItemProps) {
  return <AccordionItemPrimitive className={cn("border-b last:border-b-0", className)} {...props} />;
}

type AccordionTriggerProps = AccordionTriggerPrimitiveProps & {
  showArrow?: boolean;
};

function AccordionTrigger({ className, children, showArrow = true, ...props }: AccordionTriggerProps) {
  return (
    <AccordionHeaderPrimitive className="flex">
      <AccordionTriggerPrimitive
        className={cn(
          "flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left font-medium text-sm outline-none transition-all hover:underline focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>div>svg]:rotate-180 [&[data-state=open]>div]:shadow-sm",
          className
        )}
        {...props}
      >
        {children}
        {showArrow && (
          <div className="flex size-9 items-center justify-center rounded-md border bg-background transition-shadow">
            <IconPlus className="pointer-events-none size-3 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200" />
          </div>
        )}
      </AccordionTriggerPrimitive>
    </AccordionHeaderPrimitive>
  );
}

type AccordionContentProps = AccordionContentPrimitiveProps;

function AccordionContent({ className, children, ...props }: AccordionContentProps) {
  return (
    <AccordionContentPrimitive {...props}>
      <div className={cn("pt-0 pb-2 text-xl", className)}>{children}</div>
    </AccordionContentPrimitive>
  );
}

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  type AccordionProps,
  type AccordionItemProps,
  type AccordionTriggerProps,
  type AccordionContentProps,
};
