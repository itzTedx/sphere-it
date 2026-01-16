import { type CollectionConfig, slugField } from "payload";

export const BlogCategories: CollectionConfig = {
	slug: "blogCategories",
	admin: {
		useAsTitle: "category",
		hidden: true,
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
