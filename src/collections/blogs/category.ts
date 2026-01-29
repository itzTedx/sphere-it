import { revalidateTag } from "next/cache";

import { type CollectionConfig, slugField } from "payload";

export const BlogCategories: CollectionConfig = {
	slug: "blogCategories",
	admin: {
		useAsTitle: "category",
		hidden: true,
	},
	hooks: {
		afterChange: [
			({ doc, req: { context } }) => {
				if (!context.disableRevalidate) {
					revalidateTag("blogCategories", "max");
					revalidateTag("blogs", "max");
				}
				return doc;
			},
		],
		afterDelete: [
			({ doc, req: { context } }) => {
				if (!context.disableRevalidate) {
					revalidateTag("blogCategories", "max");
					revalidateTag("blogs", "max");
				}
				return doc;
			},
		],
	},

	fields: [
		{
			name: "category",
			label: "Category",
			type: "text",
			required: true,
			index: true,
		},
		slugField({
			useAsSlug: "category",
			position: undefined,
		}),
	],
};
