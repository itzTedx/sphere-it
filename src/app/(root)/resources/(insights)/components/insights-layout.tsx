import { ReactNode } from "react";

import type { Route } from "next";

import { Cta } from "@/components/layout/cta";

import { getInsightsPageGlobal } from "@/modules/global/insights";

import { InsightsTabs } from "./insights-tabs";

interface Props {
	children: ReactNode;
}

function resolveCtaHref(link: {
	type?: string | null;
	page?: string | null;
	url?: string | null;
}): Route {
	if (link?.type === "page" && link.page) return link.page as Route;
	if (link?.type === "custom" && link.url) return link.url as Route;
	return "/contact";
}

export async function InsightsLayout({ children }: Props) {
	const data = await getInsightsPageGlobal();
	const header = data?.header;
	const cta = data?.cta;

	return (
		<>
			<header className="relative z-50 bg-card px-4">
				<div className="mx-auto max-w-xl py-8 text-center sm:py-10 lg:py-12">
					<h1 className="font-semibold text-primary-900 text-title-5 sm:text-title-4 md:text-title-3 lg:text-title-2">
						{header?.titlePrefix ?? "Explore the Latest From"}{" "}
						<span className="text-primary-600">
							{header?.titleHighlight ?? "Sphere IT Global"}
						</span>
					</h1>
					<p className="mt-3 text-balance text-lg text-muted-foreground">
						{header?.subtitle ??
							"Stay ahead with fresh perspectives, expert insights, and stories that inspire."}
					</p>
				</div>
			</header>
			<InsightsTabs>{children}</InsightsTabs>
			<Cta
				badge={cta?.badge ?? undefined}
				buttonLink={cta?.link ? resolveCtaHref(cta.link) : undefined}
				buttonText={cta?.buttonText ?? cta?.link?.label ?? undefined}
				description={cta?.description ?? undefined}
				showForm={cta?.showForm ?? false}
				title={cta?.title ?? undefined}
			/>
		</>
	);
}
