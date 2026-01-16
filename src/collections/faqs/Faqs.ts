import type { CollectionConfig } from "payload";

export const Faqs: CollectionConfig = {
	slug: "faqs",
	access: {
		read: () => true,
	},
	fields: [
		{
			name: "question",
			type: "text",
			required: true,
		},
		{
			name: "content",
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
