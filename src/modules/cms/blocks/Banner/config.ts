import type { Block } from "payload";

export const Banner: Block = {
	slug: "banner",
	fields: [
		{
			name: "content",
			type: "text",

			label: false,
			required: true,
		},
		{
			type: "row",
			fields: [
				{
					name: "link",
					type: "text",
					label: "Link",
					required: true,
				},
				{
					name: "linkText",
					type: "text",
					label: "Link Text",
					required: true,
				},
			],
		},
	],
	interfaceName: "BannerBlock",
};
