import type { CollectionConfig } from "payload";

import { adminOnly } from "@/modules/cms/access/admin-only";
import { adminOnlyFieldAccess } from "@/modules/cms/access/admin-only-field-access";
import { adminOrSelf } from "@/modules/cms/access/adminOrSelf";
import { publicAccess } from "@/modules/cms/access/publicAccess";
import { checkRole } from "@/modules/cms/access/utilities";

import { ensureFirstUserIsAdmin } from "./hooks/ensureFirstUserIsAdmin";

export const Users: CollectionConfig = {
	slug: "users",
	access: {
		admin: ({ req: { user } }) => checkRole(["admin", "editor"], user),
		create: publicAccess,
		delete: adminOnly,
		read: adminOrSelf,
		update: adminOrSelf,
	},
	admin: {
		defaultColumns: ["name", "email", "role"],
		useAsTitle: "name",
	},
	auth: true,
	fields: [
		{
			name: "name",
			type: "text",
		},
		{
			name: "roles",
			type: "select",
			access: {
				create: adminOnlyFieldAccess,
				read: adminOnlyFieldAccess,
				update: adminOnlyFieldAccess,
			},
			defaultValue: ["editor"],
			hasMany: true,
			hooks: {
				beforeChange: [ensureFirstUserIsAdmin],
			},
			options: [
				{
					label: "admin",
					value: "admin",
				},
				{
					label: "editor",
					value: "editor",
				},
			],
		},
	],
	timestamps: true,
};
