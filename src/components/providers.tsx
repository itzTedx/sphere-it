"use client";

import type { ReactNode } from "react";

import { ProgressProvider } from "@bprogress/next/app";
import { NuqsAdapter } from "nuqs/adapters/next/app";

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ProgressProvider color="#E9242A" height="2px" memo options={{ showSpinner: false }} shallowRouting>
      <NuqsAdapter>{children}</NuqsAdapter>
    </ProgressProvider>
  );
};
