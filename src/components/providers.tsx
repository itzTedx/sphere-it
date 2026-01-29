import type { ReactNode } from "react";
import { Suspense } from "react";

import { NuqsClientProviders } from "./providers/nuqs";

export const Providers = ({ children }: { children: ReactNode }) => {
	return (
		<Suspense fallback={null}>
			<NuqsClientProviders>{children}</NuqsClientProviders>
		</Suspense>
	);
};
