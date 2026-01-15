import type { CollectionConfig } from "payload";

export const Blogs: CollectionConfig = {
	slug: "blogs",

	fields: [
		{
			name: "Title",
			type: "text",
			required: true,
		},
		{
			name: "Content",
			type: "richText",
		},
		{
			name: "category",
			type: "relationship",
			relationTo: "blog-categories",
			admin: {
				position: "sidebar",
			},
		},
		{
			name: "Featured",
			type: "checkbox",
			defaultValue: false,
			admin: {
				position: "sidebar",
				description: "Feature this blog prominently",
			},
		},
		{
			name: "excerpt",
			type: "textarea",

			admin: {
				position: "sidebar",
			},
		},
	],
};
