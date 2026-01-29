import { cacheLife, cacheTag } from "next/cache";

import { payload } from "@/lib/payload";

export const listCaseStudiesPaged = async (options?: {
	limit?: number;
	page?: number;
}) => {
	"use cache";
	cacheTag("case-studies");
	cacheLife("max");

	const { limit = 12, page = 1 } = options || {};

	return payload.find({
		collection: "case-studies",
		draft: false,
		depth: 2,
		limit,
		page,
		where: {
			_status: {
				equals: "published",
			},
		},
		select: {
			title: true,
			heroImage: true,
			publishedAt: true,
			slug: true,
			highlights: true,
		},

		sort: ["-createdAt"],
	});
};

export const listCaseStudies = async () => {
	const data = await listCaseStudiesPaged({ limit: 100, page: 1 });
	return data.docs;
};

export const findCaseStduyBySlug = async (slug: string) => {
	"use cache";
	cacheTag("case-studies", `case-study:${slug}`);
	cacheLife("max");

	const data = await payload.find({
		collection: "case-studies",
		draft: false,
		depth: 2,
		where: {
			slug: {
				equals: slug,
			},
		},
		limit: 1,
	});

	return data.docs?.[0] || null;
};
