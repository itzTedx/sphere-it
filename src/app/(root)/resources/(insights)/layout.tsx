import { ReactNode } from "react";

import { InsightsTabs } from "./components/insights-tabs";

interface Props {
  children: ReactNode;
}

export default function InsightsLayout({ children }: Props) {
  return (
    <>
      <header className="relative z-50 bg-card">
        <div className="mx-auto max-w-2xl py-16 text-center">
          <h1 className="text-primary-900 text-title-1">
            Explore the Latest From <span className="text-primary-600">Sphere IT Global</span>
          </h1>
          <p className="mt-3 text-balance text-2xl text-muted-foreground">
            Stay ahead with fresh perspectives, expert insights, and stories that inspire.
          </p>
        </div>
      </header>
      <InsightsTabs>{children}</InsightsTabs>
    </>
  );
}
