import type { CollectionConfig } from "payload";

export const FaqCategories: CollectionConfig = {
	slug: "faq-categories",
	admin: {
		useAsTitle: "category",
	},

	fields: [
		{
			name: "category",
			label: "Category",
			type: "text",
			required: true,
			index: true,
		},
	],
};
