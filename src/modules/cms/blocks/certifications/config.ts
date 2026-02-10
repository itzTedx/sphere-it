import type { Block } from "payload";

export const CertificationsBlock: Block = {
	slug: "certifications",
	fields: [
		{
			type: "text",
			name: "title",
			required: true,
		},

		{
			type: "select",
			name: "industries",
			options: [
				{ label: "Retail Banking", value: "retail-banking" },
				{ label: "Corporate Banking", value: "corporate-banking" },
				{ label: "Wealth Management", value: "wealth-management" },
				{ label: "Insurance", value: "insurance" },
				{ label: "Conglomerates", value: "conglomerates" },
				{ label: "Government Entities", value: "government-entities" },
				{ label: "Telecommunications", value: "telecommunications" },
				{ label: "Energy & Utilities", value: "energy-utilities" },
			],
			hasMany: true,
		},
		{
			type: "array",
			name: "certifications",
			fields: [
				{
					type: "text",
					name: "title",
					required: true,
				},
				{
					type: "upload",
					name: "icon",
					relationTo: "media",
					admin: {
						description:
							"(Optional) Upload an icon for the certification. Recommended size: 200x200px",
					},
				},
			],
		},
	],
	interfaceName: "CertificationsBlock",
};
