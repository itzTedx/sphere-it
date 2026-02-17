import { cacheLife, cacheTag } from "next/cache";

import { payload } from "@/lib/payload";
import type { Service } from "@/payload-types";

export const listServices = async () => {
	"use cache";
	cacheTag("services");
	cacheLife("max");

	const data = await payload.find({
		collection: "services",
		draft: false,
		depth: 1,
		limit: 100,
		where: {
			_status: {
				equals: "published",
			},
		},
		select: {
			slug: true,
			title: true,
			service: true,
			publishedAt: true,
		},
		sort: ["_order", "createdAt"],
	});

	return data.docs as Service[];
};

export const findServiceBySlug = async (
	slug: string
): Promise<Service | null> => {
	"use cache";
	cacheTag("services", `service:${slug}`);
	cacheLife("max");

	const data = await payload.find({
		collection: "services",
		draft: false,
		depth: 2,
		where: {
			and: [
				{
					_status: {
						equals: "published",
					},
				},
				{
					slug: {
						equals: slug,
					},
				},
			],
		},
		limit: 1,
	});

	return (data.docs?.[0] as Service) ?? null;
};

