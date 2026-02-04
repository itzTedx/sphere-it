import type { CollectionConfig } from "payload";

import { adminOnly } from "@/modules/cms/access/admin-only";
import { checkRole } from "@/modules/cms/access/utilities";

export const Media: CollectionConfig<"media"> = {
	slug: "media",
	access: {
		admin: ({ req: { user } }) => checkRole(["admin"], user),
		create: adminOnly,
		read: () => true,
		update: adminOnly,
		delete: adminOnly,
	},
	fields: [
		{
			name: "alt",
			type: "text",
		},
	],
	upload: {
		staticDir: "public/uploads",
		formatOptions: {
			format: "webp",
		},
		adminThumbnail: "thumbnail",
		mimeTypes: ["image/*"],
	},
};
