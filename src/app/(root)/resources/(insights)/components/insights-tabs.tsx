"use client";
import React, { ViewTransition } from "react";
import { Route } from "next";
import { usePathname, useRouter } from "next/navigation";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
}

interface Tabs {
  link: Route;
  value: string;
  title: string;
}

export const TABS: Tabs[] = [
  {
    link: "/resources/blogs",
    value: "blogs",
    title: "Blogs",
  },
  {
    link: "/resources/case-studies",
    value: "case-studies",
    title: "Case Studies",
  },
  {
    link: "/resources/research-papers",
    value: "research-papers",
    title: "Research Papers",
  },
];

export const InsightsTabs = ({ children }: Props) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Tabs
      aria-label="Job details navigation"
      className="w-full"
      onValueChange={(value: string) => {
        router.push(value as Route);
      }}
      value={pathname}
    >
      <div className="relative z-50 w-full border-b bg-card">
        <TabsList
          aria-label="Job information tabs"
          className="h-auto w-full gap-2 rounded-none border-b bg-transparent px-0 py-1"
        >
          {TABS.map((tab) => {
            return (
              <TabsTrigger
                aria-controls={`${tab.link}-panel`}
                className="relative max-w-fit cursor-pointer bg-transparent font-display text-muted-background text-sm hover:bg-muted hover:text-muted-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none sm:text-base"
                id={`${tab.link}-tab`}
                key={tab.link}
                value={tab.link}
              >
                {tab.title}
                {pathname === tab.link && (
                  <ViewTransition name={"tab-indicator"}>
                    <span
                      aria-hidden="true"
                      className={cn("-bottom-1.5 absolute z-0 block h-0.5 w-full rounded-xl bg-primary-600")}
                    />
                  </ViewTransition>
                )}
              </TabsTrigger>
            );
          })}
        </TabsList>
      </div>
      {children}
    </Tabs>
  );
};
