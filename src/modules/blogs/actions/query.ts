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
			featuredBlog: true,
		},
	});
	return doc.docs;
};
