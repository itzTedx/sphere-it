import { cacheLife, cacheTag } from "next/cache";

import { payload } from "@/lib/payload";

export const getInsightsPageGlobal = async () => {
	"use cache";
	cacheTag("global:insights-page");
	cacheLife("max");

	const res = await payload.findGlobal({
		slug: "insights-page",
		depth: 1,
	});

	return res;
};
