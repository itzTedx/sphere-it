import type { ReactNode } from "react";
import { Suspense } from "react";

import { NuqsClientProviders } from "./providers/nuqs";
import OpenPanelProvider from "./providers/open-panel";

export const Providers = ({ children }: { children: ReactNode }) => {
	return (
		<Suspense fallback={null}>
			<NuqsClientProviders>
				<OpenPanelProvider>{children}</OpenPanelProvider>
			</NuqsClientProviders>
		</Suspense>
	);
};
