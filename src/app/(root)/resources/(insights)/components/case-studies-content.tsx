"use client";

import { useRef } from "react";

import Image from "next/image";

import { ScrollProgress, ScrollProgressIndicator, ScrollProgressRoot } from "@/components/ui/scroll-progress";

import { CaseStudy } from "../case-studies/data/mock-studies";

export const CaseStudiesContent = ({ study, children }: { study: CaseStudy; children: React.ReactNode }) => {
  const articleRef = useRef<HTMLElement>(null);
  return (
    <ScrollProgressRoot
      containerRef={articleRef}
      springOptions={{
        stiffness: 280,
        damping: 18,
        mass: 0.3,
      }}
    >
      <div className="grid gap-6 overscroll-auto lg:grid-cols-[1fr_1.65fr]">
        <aside className="hidden border-r lg:block lg:py-6 lg:pr-6">
          <div className="sticky top-20 space-y-6 rounded-lg bg-card p-6">
            <Image
              alt={`${study.client.name} logo`}
              className="object-contain"
              height={60}
              src={study.client.logo}
              width={100}
            />
            <div className="space-y-2">
              <h3 className="font-mono text-badge text-muted-background uppercase">About</h3>
              <p className="text-pretty text-sm">{study.client.description}</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-mono text-badge text-muted-background uppercase">Industry</h3>
              <p className="text-pretty text-subhead-base">{study.client.industry}</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-mono text-badge text-muted-background uppercase">Company Size</h3>
              <p className="text-pretty text-subhead-base">{study.client.size}</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-mono text-badge text-muted-background uppercase">Founded</h3>
              <p className="text-pretty text-subhead-base">{study.client.founded}</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-mono text-badge text-muted-background uppercase">Location</h3>
              <p className="text-pretty text-subhead-base">{study.client.location}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-full flex-1 bg-muted">
                <ScrollProgress className="rounded-full bg-primary" />
              </div>
              <ScrollProgressIndicator />
            </div>
          </div>
        </aside>
        <article
          className="prose prose-stone prose-lg mx-auto max-w-none py-4 prose-h1:font-medium prose-headings:text-primary-900 sm:py-6"
          itemProp="articleBody"
          ref={articleRef}
        >
          {children}
        </article>
      </div>
    </ScrollProgressRoot>
  );
};
