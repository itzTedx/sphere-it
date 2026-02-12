import { cacheLife, cacheTag } from "next/cache";

import { payload } from "@/lib/payload";

export const getFooterGlobal = async () => {
	"use cache";
	cacheTag("global:footer");
	cacheLife("max");

	return payload.findGlobal({
		slug: "footer",
		depth: 1,
	});
};
