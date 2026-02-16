import { cacheLife, cacheTag } from "next/cache";

import { payload } from "@/lib/payload";

export const getPartners = async () => {
	"use cache";
	cacheTag("global:partners");
	cacheLife("max");

	const res = await payload.find({
		collection: "partners",
		depth: 2,
		limit: 100,
		pagination: false,
		sort: "_order",
	});

	return res.docs;
};
