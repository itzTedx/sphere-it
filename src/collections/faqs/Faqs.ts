import type { CollectionConfig } from "payload";

import { revalidatePath, revalidateTag } from "next/cache";

export const Faqs: CollectionConfig = {
	slug: "faqs",
	access: {
		read: () => true,
	},
	hooks: {
		afterChange: [({ doc, req: { context } }) => {
			if (!context.disableRevalidate) {
				revalidatePath("/resources/faqs");
				revalidateTag("faqs", "max");
			}
			return doc;
		}],
		afterDelete: [({ doc, req: { context } }) => {
			if (!context.disableRevalidate) {
				revalidatePath("/resources/faqs");
				revalidateTag("faqs", "max");
			}
			return doc;
		}],
	},
	admin: {
		group: "Resources",
		useAsTitle: "question",
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
