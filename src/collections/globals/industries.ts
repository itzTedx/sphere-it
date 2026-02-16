import { revalidatePath, revalidateTag } from "next/cache";

import type { CollectionConfig } from "payload";

import { isAdmin } from "@/modules/cms/access/isAdmin";
import { checkRole } from "@/modules/cms/access/utilities";
import { iconPickerField } from "@/modules/cms/fields/iconPickerField";

export const Industries: CollectionConfig = {
	slug: "industries",
	orderable: true,
	admin: {
		useAsTitle: "title",
		defaultColumns: ["title", "icon", "updatedAt"],
		hidden: ({ user }) => !checkRole(["admin"], user),
		group: "Globals",
	},
	access: {
		read: () => true,
		create: isAdmin,
		update: isAdmin,
		delete: isAdmin,
	},
	hooks: {
		afterChange: [
			({ doc, req: { context } }) => {
				if (!context.disableRevalidate) {
					revalidateTag("collection:industries", "max");
					revalidatePath("/");
				}
				return doc;
			},
		],
	},
	fields: [
		iconPickerField(),
		{
			type: "text",
			name: "title",
			required: true,
		},
	],
};
