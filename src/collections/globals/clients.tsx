import { revalidatePath, revalidateTag } from "next/cache";

import type { CollectionConfig } from "payload";

import { isAdmin } from "@/modules/cms/access/isAdmin";
import { checkRole } from "@/modules/cms/access/utilities";

export const Clients: CollectionConfig = {
	slug: "clients",
	access: {
		read: () => true,
		update: isAdmin,
	},
	admin: {
		hidden: ({ user }) => !checkRole(["admin"], user),
		useAsTitle: "name",
		group: "Globals",
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
};
