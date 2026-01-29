"use client";

import { ReactNode } from "react";

import { ProgressProvider } from "@bprogress/next/app";
import { NuqsAdapter } from "nuqs/adapters/next/app";
export function NuqsClientProviders({ children }: { children: ReactNode }) {
	return (
		<ProgressProvider
			color="#E9242A"
			height="2px"
			memo
			options={{ showSpinner: false }}
			shallowRouting
		>
			<NuqsAdapter>{children}</NuqsAdapter>
		</ProgressProvider>
	);
}
