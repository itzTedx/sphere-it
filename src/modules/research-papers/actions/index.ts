import { cacheLife, cacheTag } from "next/cache";

import { payload } from "@/lib/payload";
import { ResearchPaper } from "@/payload-types";

export async function listResearchPapersPaged(options?: {
	limit?: number;
	page?: number;
}) {
	"use cache";
	cacheTag("researchPapers");
	cacheLife("max");

	const { limit = 12, page = 1 } = options || {};

	return payload.find({
		collection: "researchPapers",
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
			slug: true,
			publishedAt: true,
		},
		sort: ["-createdAt"],
	});
}

export async function listResearchPapers(limit?: number) {
	"use cache";
	cacheTag("researchPapers");
	cacheLife("max");

	const data = await payload.find({
		collection: "researchPapers",
		draft: false,
		depth: 2,
		limit: limit ?? 100,
		where: {
			_status: {
				equals: "published",
			},
		},
		select: {
			title: true,
			heroImage: true,
			slug: true,
			publishedAt: true,
		},
		sort: ["-createdAt"],
	});

	return data.docs;
}

export async function geResearchBySlug(
	slug: string
): Promise<ResearchPaper | null> {
	"use cache";
	cacheTag("researchPapers", `research-paper:${slug}`);
	cacheLife("max");

	const data = await payload.find({
		collection: "researchPapers",
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

	return data.docs?.[0] ?? null;
}
