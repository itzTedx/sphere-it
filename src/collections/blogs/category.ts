import { revalidateTag } from "next/cache";

import { type CollectionConfig, slugField } from "payload";

import { adminOrEditor } from "@/modules/cms/access/adminOrEditor";
import { checkRole } from "@/modules/cms/access/utilities";

export const BlogCategories: CollectionConfig = {
	slug: "blogCategories",
	access: {
		admin: ({ req: { user } }) => checkRole(["admin", "editor"], user),
		create: adminOrEditor,
		read: () => true,
		update: adminOrEditor,
		delete: adminOrEditor,
	},
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
