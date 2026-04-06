import { cacheLife, cacheTag } from "next/cache";

import { Where } from "payload";

import { payload } from "@/lib/payload";

export const listBlogs = async (options?: {
	search?: string;
	categories?: string[];
	isFeatured?: boolean;
	limit?: number;
}) => {
	"use cache";
	cacheTag("blogs", "blogCategories");
	cacheLife("hours");

	const { search, categories, isFeatured, limit = 48 } = options || {};

	const where: Where = {
		and: [],
	};

	where.and?.push({
		_status: {
			equals: "published",
		},
	});

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
		depth: 1,
		limit,
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

export const listBlogsPaged = async (options?: {
	search?: string;
	categories?: string[];
	isFeatured?: boolean;
	page?: number;
	limit?: number;
}) => {
	"use cache";
	cacheTag("blogs", "blogCategories");
	cacheLife("hours");

	const {
		search,
		categories,
		isFeatured,
		page = 1,
		limit = 12,
	} = options || {};

	const where: Where = {
		and: [],
	};

	where.and?.push({
		_status: {
			equals: "published",
		},
	});

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
			return {
				docs: [],
				totalDocs: 0,
				totalPages: 0,
				page,
				hasNextPage: false,
				hasPrevPage: page > 1,
				limit,
			} as const;
		}
	}

	if (isFeatured) {
		where.and?.push({
			isFeatured: {
				equals: true,
			},
		});
	}

	return payload.find({
		collection: "blogs",
		draft: false,
		depth: 1,
		limit,
		page,
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
};

export const listCategories = async () => {
	"use cache";
	cacheTag("blogCategories");
	cacheLife("max");

	const data = await payload.find({
		collection: "blogCategories",
		draft: false,
		depth: 0,
		limit: 50,
		select: {
			category: true,
			slug: true,
		},
	});

	return data.docs;
};

export const findBlogBySlug = async (slug: string) => {
	"use cache";
	cacheTag("blogs", `blog:${slug}`);
	cacheLife("max");

	const data = await payload.find({
		collection: "blogs",
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
