"use client";

import * as React from "react";

import { AnimatePresence, type HTMLMotionProps, motion } from "motion/react";
import { Collapsible as CollapsiblePrimitive } from "radix-ui";

import { useControlledState } from "@/hooks/use-controlled-state";
import { getStrictContext } from "@/lib/get-strict-context";

type CollapsibleContextType = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const [CollapsibleProvider, useCollapsible] = getStrictContext<CollapsibleContextType>("CollapsibleContext");

type CollapsibleProps = React.ComponentProps<typeof CollapsiblePrimitive.Root>;

function Collapsible(props: CollapsibleProps) {
  const [isOpen, setIsOpen] = useControlledState({
    value: props?.open,
    defaultValue: props?.defaultOpen,
    onChange: props?.onOpenChange,
  });

  return (
    <CollapsibleProvider value={{ isOpen, setIsOpen }}>
      <CollapsiblePrimitive.Root data-slot="collapsible" {...props} onOpenChange={setIsOpen} />
    </CollapsibleProvider>
  );
}

type CollapsibleTriggerProps = React.ComponentProps<typeof CollapsiblePrimitive.Trigger>;

function CollapsibleTrigger(props: CollapsibleTriggerProps) {
  return <CollapsiblePrimitive.Trigger data-slot="collapsible-trigger" {...props} />;
}

type CollapsibleContentProps = Omit<
  React.ComponentProps<typeof CollapsiblePrimitive.Content>,
  "asChild" | "forceMount"
> &
  HTMLMotionProps<"div"> & {
    keepRendered?: boolean;
    defaultOpen?: boolean;
  };

function CollapsibleContent({
  keepRendered = false,
  defaultOpen = true,
  transition = { duration: 0.35, ease: "easeInOut" },
  ...props
}: CollapsibleContentProps) {
  const { isOpen } = useCollapsible();

  return (
    <AnimatePresence>
      {keepRendered ? (
        <CollapsiblePrimitive.Content asChild forceMount>
          <motion.div
            animate={
              isOpen
                ? { opacity: 1, height: "auto", overflow: "hidden", y: 0 }
                : { opacity: 0, height: 0, overflow: "hidden", y: 20 }
            }
            data-slot="collapsible-content"
            initial={defaultOpen ? undefined : { opacity: 0, height: 0, overflow: "hidden", y: 20 }}
            key="collapsible-content"
            layout
            transition={transition}
            {...props}
          />
        </CollapsiblePrimitive.Content>
      ) : (
        isOpen && (
          <CollapsiblePrimitive.Content asChild forceMount>
            <motion.div
              animate={{ opacity: 1, height: "auto", overflow: "hidden", y: 0 }}
              data-slot="collapsible-content"
              exit={{ opacity: 0, height: 0, overflow: "hidden", y: 20 }}
              initial={{ opacity: 0, height: 0, overflow: "hidden", y: 20 }}
              key="collapsible-content"
              layout
              transition={transition}
              {...props}
            />
          </CollapsiblePrimitive.Content>
        )
      )}
    </AnimatePresence>
  );
}

export {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
  useCollapsible,
  type CollapsibleProps,
  type CollapsibleTriggerProps,
  type CollapsibleContentProps,
  type CollapsibleContextType,
};
