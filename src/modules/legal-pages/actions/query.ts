import { cacheLife, cacheTag } from "next/cache";

import { payload } from "@/lib/payload";
import type { LegalPage } from "@/payload-types";

export const findLegalPageBySlug = async (
	slug: string
): Promise<LegalPage | null> => {
	"use cache";
	cacheTag("legal-pages", `legal-page:${slug}`);
	cacheLife("max");

	const data = await payload.find({
		collection: "legal-pages",
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

	return (data.docs?.[0] as LegalPage) ?? null;
};

export const listLegalPages = async (): Promise<LegalPage[]> => {
	"use cache";
	cacheTag("legal-pages");
	cacheLife("max");

	const data = await payload.find({
		collection: "legal-pages",
		draft: false,
		depth: 0,
		where: {
			_status: {
				equals: "published",
			},
		},
		limit: 12,
		select: {
			slug: true,
			title: true,
			updatedAt: true,
		},
	});

	return data.docs as LegalPage[];
};
