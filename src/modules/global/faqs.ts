import { cacheLife, cacheTag } from "next/cache";

import { payload } from "@/lib/payload";

export const getFaqsPageGlobal = async () => {
	"use cache";
	cacheTag("global:faqs-page");
	cacheLife("max");

	const res = await payload.findGlobal({
		slug: "faqs-page",
		depth: 1,
	});

	return res;
};
