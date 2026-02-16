import { cacheLife, cacheTag } from "next/cache";

import { payload } from "@/lib/payload";

export const getClients = async () => {
	"use cache";
	cacheTag("global:clients");
	cacheLife("max");

	const res = await payload.find({
		collection: "clients",
		depth: 2,
		limit: 100,
		pagination: false,
	});

	return res.docs;
};
