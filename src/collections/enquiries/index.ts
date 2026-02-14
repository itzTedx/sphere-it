import type { CollectionConfig } from "payload";

import { isAdmin } from "@/modules/cms/access/isAdmin";
import { checkRole } from "@/modules/cms/access/utilities";

export const Enquiries: CollectionConfig = {
	slug: "enquiries",
	access: {
		admin: ({ req: { user } }) => checkRole(["admin", "editor"], user),
		create: () => true, // Allow public form submission
		read: ({ req: { user } }) =>
			Boolean(user && checkRole(["admin", "editor"], user)),
		update: () => false, // User-submitted data; do not allow edits
		delete: isAdmin,
	},
	admin: {
		group: "Form Submissions",
		useAsTitle: "name",
		defaultColumns: ["name", "email", "subject", "source", "createdAt"],
	},
	fields: [
		{
			name: "name",
			type: "text",
			required: true,
		},
		{
			name: "email",
			type: "email",
			required: true,
		},
		{
			name: "phone",
			type: "text",
			required: false,
		},
		{
			name: "subject",
			type: "text",
			required: false,
			admin: {
				description: "Subject (full contact form only)",
			},
		},
		{
			name: "message",
			type: "textarea",
			required: true,
		},
		{
			name: "source",
			type: "text",
			required: false,
			admin: {
				description: "Page or context (e.g. route) for quick enquiries",
			},
		},
	],
};
