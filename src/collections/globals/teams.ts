import { revalidatePath, revalidateTag } from "next/cache";

import type { GlobalConfig } from "payload";

import { isAdmin } from "@/modules/cms/access/isAdmin";
import { checkRole } from "@/modules/cms/access/utilities";

export const Teams: GlobalConfig = {
	slug: "teams",
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
			name: "leaderships",
			type: "array",
			admin: {
				isSortable: true,
			},

			fields: [
				{
					name: "logo",
					type: "upload",
					relationTo: "media",
					required: true,
				},
				{
					type: "row",
					fields: [
						{
							name: "name",
							type: "text",
							required: true,
						},
						{
							name: "position",
							type: "text",
							required: true,
						},
					],
				},
				{
					name: "linkedinUrl",
					type: "text",
				},
			],
		},
		{
			name: "members",
			type: "array",
			admin: {
				isSortable: true,
			},

			fields: [
				{
					name: "logo",
					type: "upload",
					relationTo: "media",
					required: true,
				},
				{
					type: "row",
					fields: [
						{
							name: "name",
							type: "text",
							required: true,
						},
						{
							name: "position",
							type: "text",
							required: true,
						},
					],
				},
				{
					name: "linkedinUrl",
					type: "text",
				},
			],
		},
	],
};
