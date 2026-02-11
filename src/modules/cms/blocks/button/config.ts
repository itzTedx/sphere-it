import type { Block } from "payload";

import { link } from "../../fields/link";

export const ButtonBlock: Block = {
	slug: "button",
	fields: [
		{
			type: "row",
			fields: [
				{
					name: "style",
					type: "select",
					defaultValue: "default",
					options: [
						{ label: "Default", value: "default" },
						{ label: "Secondary", value: "secondary" },
						{ label: "Outline", value: "outline" },
						{ label: "Ghost", value: "ghost" },
						{ label: "Link", value: "link" },
					],
					required: true,
					admin: {
						width: "75%",
					},
				},
				{
					type: "select",
					name: "size",
					defaultValue: "default",
					options: [
						{ label: "Default", value: "default" },
						{ label: "Small", value: "sm" },
						{ label: "Large", value: "lg" },
					],
					admin: {
						width: "25%",
					},
				},
				link({ appearances: false }),
			],
		},
	],
	interfaceName: "ButtonBlock",
};
