"use server";

import { payload } from "@/lib/payload";

export const listBlogs = async () => {
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
