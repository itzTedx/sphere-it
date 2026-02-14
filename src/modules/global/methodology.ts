import { cacheLife, cacheTag } from "next/cache";

import { payload } from "@/lib/payload";

export const getMethodologyPageGlobal = async () => {
	"use cache";
	cacheTag("global:methodology-page");
	cacheLife("max");

	const res = await payload.findGlobal({
		slug: "methodology-page",
		depth: 1,
	});

	return res;
};
