import type { CollectionConfig } from "payload";

export const FaqCategories: CollectionConfig = {
	slug: "faq-categories",

	fields: [
		{
			name: "location",
			type: "text",
			required: true,
			index: true,
		},
	],
};
