import { revalidatePath, revalidateTag } from "next/cache";

import type { GlobalConfig } from "payload";

import { isAdmin } from "@/modules/cms/access/isAdmin";
import { checkRole } from "@/modules/cms/access/utilities";

export const Clients: GlobalConfig = {
	slug: "clients",
	access: {
		read: () => true,
		update: isAdmin,
	},
	admin: {
		hidden: ({ user }) => !checkRole(["admin"], user),
	},
	hooks: {
		afterChange: [
			({ doc, req: { context } }) => {
				if (!context.disableRevalidate) {
					revalidateTag("global:clients", "max");
					revalidatePath("/");
				}
				return doc;
			},
		],
	},
	fields: [
		{
			name: "clients",
			type: "array",
			admin: {
				isSortable: true,
			},

			fields: [
				{
					name: "name",
					type: "text",
					required: true,
				},
				{
					name: "logo",
					type: "upload",
					relationTo: "media",
					required: true,
				},
			],
			minRows: 1,
			maxRows: 20,
		},
	],
};
