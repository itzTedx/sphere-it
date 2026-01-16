"use server";

import { Where } from "payload";

import { payload } from "@/lib/payload";

export const listBlogs = async (options?: {
	search?: string;
	categories?: string[];
	isFeatured?: boolean;
}) => {
	const { search, categories, isFeatured } = options || {};

	const where: Where = {
		and: [],
	};

	if (search) {
		where.and?.push({
			or: [
				{
					title: {
						like: search,
					},
				},
				{
					description: {
						like: search,
					},
				},
			],
		});
	}

	if (categories && categories.length > 0) {
		const categoryDocs = await payload.find({
			collection: "blogCategories",
			where: {
				slug: {
					in: categories,
				},
			},
		});

		const categoryIds = categoryDocs.docs.map((doc) => doc.id);

		if (categoryIds.length > 0) {
			where.and?.push({
				blogCategories: {
					in: categoryIds,
				},
			});
		} else {
			// If categories provided but none found, return empty matches
			return [];
		}
	}

	if (isFeatured) {
		where.and?.push({
			isFeatured: {
				equals: true,
			},
		});
	}

	const doc = await payload.find({
		collection: "blogs",
		draft: false,
		depth: 2,
		limit: 100,
		select: {
			blogCategories: true,
			title: true,
			heroImage: true,
			description: true,
			isFeatured: true,
			publishedAt: true,
			slug: true,
		},
		where,
		sort: ["-isFeatured", "-createdAt"],
	});
	return doc.docs;
};

export const listCategories = async () => {
	const data = await payload.find({
		collection: "blogCategories",
		draft: false,
		depth: 1,
		limit: 100,
		select: {
			category: true,
			slug: true,
		},
	});

	return data.docs;
};
