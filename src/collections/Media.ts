import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
	slug: "media",
	access: {
		read: () => true,
	},
	fields: [
		{
			name: "alt",
			type: "text",
		},
	],
	upload: {
		formatOptions: {
			format: "webp",
		},
		adminThumbnail: "thumbnail",
		mimeTypes: ["image/*"],
	},
};
