import {
	betterAuthStrategy,
	canUpdateOwnFields,
	isAdmin,
	isAdminField,
	isAdminOrSelf,
} from "@delmaredigital/payload-better-auth";
import type { CollectionConfig } from "payload";

import { publicAccess } from "@/modules/cms/access/publicAccess";
import { checkRole } from "@/modules/cms/access/utilities";

import { ensureFirstUserIsAdmin } from "./hooks/ensureFirstUserIsAdmin";

export const Users: CollectionConfig<"users"> = {
	slug: "users",
	access: {
		admin: ({ req }) => checkRole(["admin", "editor"], req.user),
		create: publicAccess,
		delete: isAdmin(),
		read: isAdminOrSelf(),
		update: canUpdateOwnFields({
			allowedFields: ["name", "image", "password"],
			userSlug: "users",

			// requireCurrentPassword: true, // Require currentPassword for password changes
		}),
	},
	admin: {
		defaultColumns: ["name", "email", "role"],
		useAsTitle: "name",
		group: "Auth",
	},

	auth: {
		disableLocalStrategy: true,
		strategies: [betterAuthStrategy()],
	},
	fields: [
		{ name: "email", type: "email", required: true, unique: true },
		{ name: "emailVerified", type: "checkbox", defaultValue: false },

		{
			name: "name",
			type: "text",
		},
		{ name: "image", type: "text", admin: { hidden: true } },
		{
			name: "role",
			type: "select",
			defaultValue: "user",
			access: {
				create: isAdminField(),
				read: isAdminField(),
				update: isAdminField(),
			},
			hooks: {
				beforeChange: [ensureFirstUserIsAdmin],
			},
			options: [
				{ label: "User", value: "user" },
				{ label: "Editor", value: "editor" },
				{ label: "Admin", value: "admin" },
			],
		},
	],
	timestamps: true,
};
