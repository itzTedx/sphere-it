import { type CollectionConfig, slugField } from "payload";

export const Departments: CollectionConfig = {
	slug: "departments",
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
