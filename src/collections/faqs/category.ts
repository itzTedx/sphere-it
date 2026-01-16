import { type CollectionConfig, slugField } from "payload";

export const FaqCategories: CollectionConfig = {
	slug: "faq-categories",
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
