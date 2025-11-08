import { ReactNode } from "react";

import { InsightsTabs } from "./insights-tabs";

interface Props {
  children: ReactNode;
}

export function InsightsLayout({ children }: Props) {
  return (
    <>
      <header className="relative z-50 bg-card">
        <div className="mx-auto max-w-xl py-8 text-center sm:py-10 lg:py-12">
          <h1 className="text-primary-900 text-title-2">
            Explore the Latest From <span className="text-primary-600">Sphere IT Global</span>
          </h1>
          <p className="mt-3 text-balance text-lg text-muted-foreground">
            Stay ahead with fresh perspectives, expert insights, and stories that inspire.
          </p>
        </div>
      </header>
      <InsightsTabs>{children}</InsightsTabs>
    </>
  );
}
