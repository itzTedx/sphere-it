import { type CollectionConfig, slugField } from "payload";

import { slugify } from "@/lib/utils";
import { adminOrEditor } from "@/modules/cms/access/adminOrEditor";
import { checkRole } from "@/modules/cms/access/utilities";

export const FaqCategories: CollectionConfig = {
	slug: "faq-categories",
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
			slugify: ({ valueToSlugify }) => slugify(valueToSlugify),
		}),
	],
};
