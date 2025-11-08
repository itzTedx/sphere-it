"use client";

import React from "react";

import { AnimatePresence, motion } from "motion/react";
import { parseAsString, useQueryState } from "nuqs";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
}

export const TABS = [
  {
    value: "overview",
    title: "Overview",
  },
  {
    value: "application",
    title: "Application",
  },
];

export const CareersTab = ({ children }: Props) => {
  const [currentTab, setTab] = useQueryState(
    "tab",
    parseAsString.withDefault(TABS[0].value).withOptions({ history: "push" })
  );

  return (
    <Tabs aria-label="Job details navigation" className="mt-4 w-full sm:mt-6" onValueChange={setTab} value={currentTab}>
      <TabsList
        aria-label="Job information tabs"
        className="h-auto w-full justify-start gap-2 rounded-none border-b bg-transparent px-0 py-1 text-foreground"
      >
        {TABS.map((tab) => (
          <TabsTrigger
            aria-controls={`${tab.value}-panel`}
            className="relative max-w-fit justify-start bg-transparent pr-12 text-sm after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 hover:bg-muted hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none sm:pr-24 sm:text-base"
            id={`${tab.value}-tab`}
            key={tab.value}
            value={tab.value}
          >
            {tab.title}
            <AnimatePresence>
              {currentTab === tab.value && (
                <motion.span
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.05 },
                  }}
                  aria-hidden="true"
                  className={cn("-bottom-1.5 absolute z-0 block h-0.5 w-full rounded-xl bg-primary-600")}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.01, delay: 0.1 },
                  }}
                  layoutId="cardHoverEffect"
                />
              )}
            </AnimatePresence>
          </TabsTrigger>
        ))}
      </TabsList>
      {children}
    </Tabs>
  );
};

export function ApplyNowButton({ className, ...props }: React.ComponentProps<typeof Button>) {
  const [_, setTab] = useQueryState("tab");

  function handleClick() {
    setTab(TABS[1].value);
    // Wait for tab content to render before focusing
    setTimeout(() => {
      const nameInput = document.getElementById("name");
      if (nameInput) {
        nameInput.focus();
        nameInput.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 100);
  }

  return (
    <Button
      aria-label={props["aria-label"] || "Apply for this position"}
      className={cn("md:px-12", className)}
      size="lg"
      {...props}
      onClick={handleClick}
    >
      Apply Now
    </Button>
  );
}
