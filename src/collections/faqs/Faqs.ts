import { revalidatePath, revalidateTag } from "next/cache";

import type { CollectionConfig } from "payload";

import { adminOrEditor } from "@/modules/cms/access/adminOrEditor";
import { checkRole } from "@/modules/cms/access/utilities";

export const Faqs: CollectionConfig = {
	slug: "faqs",
	access: {
		admin: ({ req: { user } }) => checkRole(["admin", "editor"], user),
		create: adminOrEditor,
		read: () => true,
		update: adminOrEditor,
		delete: adminOrEditor,
	},
	hooks: {
		afterChange: [
			({ doc, req: { context } }) => {
				if (!context.disableRevalidate) {
					revalidatePath("/resources/faqs");
					revalidateTag("faqs", "max");
				}
				return doc;
			},
		],
		afterDelete: [
			({ doc, req: { context } }) => {
				if (!context.disableRevalidate) {
					revalidatePath("/resources/faqs");
					revalidateTag("faqs", "max");
				}
				return doc;
			},
		],
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
