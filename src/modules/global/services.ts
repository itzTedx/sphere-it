import { cacheLife, cacheTag } from "next/cache";

import { payload } from "@/lib/payload";

export const getServicesPageGlobal = async () => {
	"use cache";
	cacheTag("global:services-page");
	cacheLife("max");

	const res = await payload.findGlobal({
		slug: "services-page",
		depth: 1,
	});

	return res;
};
