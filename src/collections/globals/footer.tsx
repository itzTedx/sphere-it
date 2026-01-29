import { revalidatePath, revalidateTag } from "next/cache";

import type { GlobalConfig } from "payload";

import { isAdmin } from "@/modules/cms/access/isAdmin";
import { checkRole } from "@/modules/cms/access/utilities";

export const Footer: GlobalConfig = {
	slug: "footer",
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
					revalidateTag("global:footer", "max");
					revalidatePath("/");
				}
				return doc;
			},
		],
	},
	fields: [
		{
			name: "description",
			type: "textarea",
			required: true,
		},
		{
			name: "socials",
			type: "array",
			fields: [
				{
					type: "select",
					name: "platform",
					options: [
						{
							label: "Facebook",
							value: "facebook",
						},
						{
							label: "Instagram",
							value: "instagram",
						},
						{
							label: "Linkedin",
							value: "linkedin",
						},
						{
							label: "Youtube",
							value: "youtube",
						},
						{
							label: "X (Formely Twitter)",
							value: "x",
						},
					],
				},
				{
					type: "text",
					name: "link",
					required: true,
					defaultValue: "https://",
				},
			],
			maxRows: 6,
		},
		{
			name: "locations",
			type: "array",
			fields: [
				{
					type: "text",
					name: "location",
					required: true,
				},
				{
					type: "text",
					name: "link",
					required: true,
					defaultValue: "https://",
				},
			],
			maxRows: 5,
		},
		{
			name: "copyright",
			type: "textarea",
			required: true,
		},
	],
};
