import { cacheLife, cacheTag } from "next/cache";

import { payload } from "@/lib/payload";

export const getTeamsGlobal = async () => {
	"use cache";
	cacheTag("global:teams");
	cacheLife("max");

	const res = await payload.findGlobal({
		slug: "teams",
		depth: 1,
	});

	return res;
};
