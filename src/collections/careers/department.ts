import { type CollectionConfig, slugField } from "payload";

import { adminOrEditor } from "@/modules/cms/access/adminOrEditor";
import { checkRole } from "@/modules/cms/access/utilities";

export const Departments: CollectionConfig = {
	slug: "departments",
	access: {
		admin: ({ req: { user } }) => checkRole(["admin", "editor"], user),
		create: adminOrEditor,
		read: () => true,
		update: adminOrEditor,
		delete: adminOrEditor,
	},
	admin: {
		useAsTitle: "department",
		hidden: true,
	},

	fields: [
		{
			name: "department",
			label: "Department",
			type: "text",
			required: true,
			index: true,
		},
		slugField({
			useAsSlug: "department",
			position: undefined,
		}),
	],
};
