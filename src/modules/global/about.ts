import { cacheLife, cacheTag } from "next/cache";

import { payload } from "@/lib/payload";

export const getAboutPageGlobal = async () => {
	"use cache";
	cacheTag("global:about-page");
	cacheLife("max");

	const res = await payload.findGlobal({
		slug: "about-page",
		depth: 1,
	});

	return res;
};
