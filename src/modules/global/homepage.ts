import { cacheLife, cacheTag } from "next/cache";

import { payload } from "@/lib/payload";

export const getHomepageGlobal = async () => {
	"use cache";
	cacheTag("global:homepage");
	cacheLife("max");

	const res = await payload.findGlobal({
		slug: "homepage",
		depth: 1,
	});

	return res;
};
