import type { GlobalConfig } from "payload";

export const Footer: GlobalConfig = {
	slug: "footer",
	access: {
		read: () => true,
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
