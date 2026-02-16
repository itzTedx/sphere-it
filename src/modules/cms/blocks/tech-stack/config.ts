import type { Block } from "payload";

export const TechStackBlock: Block = {
	slug: "techStack",
	fields: [
		{
			name: "label",
			label: "Label",
			type: "text",
			required: true,
			defaultValue: "300+ People & Quick ramp up time",
		},
	],
	interfaceName: "TechStackBlock",
};

