import type { CollectionConfig } from "payload";

export const Faqs: CollectionConfig = {
	slug: "faqs",

	fields: [
		{
			name: "Question",
			type: "text",
			required: true,
		},
		{
			name: "Content",
			type: "textarea",
			required: true,
		},

		{
			name: "category",
			type: "relationship",
			relationTo: "faq-categories",
			admin: {
				position: "sidebar",
			},
		},
	],
};
