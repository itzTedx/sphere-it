import { revalidatePath, revalidateTag } from "next/cache";

import { GlobalConfig } from "payload";

import { adminOnly } from "@/modules/cms/access/admin-only";
import { link } from "@/modules/cms/fields/link";
import { richTextField } from "@/modules/cms/fields/richTextField";

export const Homepage: GlobalConfig<"homepage"> = {
	slug: "homepage",
	admin: {
		group: "Pages",
	},
	access: {
		read: () => true,
		update: adminOnly,
	},
	hooks: {
		afterChange: [
			({ doc, req: { context } }) => {
				if (!context.disableRevalidate) {
					revalidateTag("global:homepage", "max");
					revalidatePath("/");
				}
				return doc;
			},
		],
	},
	fields: [
		{
			type: "group",
			label: "Hero Section",
			name: "hero",
			fields: [
				richTextField({ headingSize: "h1" }),
				{
					name: "description",
					type: "textarea",
					required: true,
				},
			],
		},
		{
			type: "group",
			label: "Services Section",
			name: "services",
			fields: [
				richTextField(),
				{
					type: "group",
					name: "cta",
					fields: [
						{ name: "enable", type: "checkbox", required: true },
						{
							name: "title",
							type: "text",
							required: true,
							admin: {
								condition: (_data, siblingData) => siblingData?.enable === true,
							},
						},
						link({
							appearances: false,
							overrides: {
								admin: {
									condition: (_data, siblingData) =>
										siblingData?.enable === true,
								},
							},
						}),
					],
				},
			],
		},
		{
			type: "group",
			label: "Industries Section",
			name: "industries",
			fields: [
				richTextField(),
				{ name: "description", type: "textarea" },
				{
					type: "relationship",
					name: "items",
					relationTo: "industries",
					hasMany: true,
				},
			],
		},
		{
			type: "group",
			label: "Why Us Section",
			name: "whyUs",
			fields: [
				richTextField(),
				{ name: "description", type: "textarea", required: true },
				{
					type: "group",
					name: "guidedByCard",
					label: "Guided By Card",
					fields: [
						{ name: "badge", type: "text", defaultValue: "Guided by" },
						{ name: "title", type: "text", required: true },
						{ name: "description", type: "textarea", required: true },
					],
				},
				{
					type: "group",
					name: "axisCard",
					label: "AXIS Methodology Card",
					fields: [
						{ name: "title", type: "text", required: true },
						link({
							appearances: false,
							overrides: { name: "learnMoreLink", label: "Learn More Link" },
						}),
						{
							type: "array",
							name: "phases",
							label: "AXIS Phases",
							minRows: 4,
							maxRows: 4,
							fields: [
								{ name: "letter", type: "text", required: true },
								{ name: "title", type: "text", required: true },
								{ name: "description", type: "textarea", required: true },
							],
						},
					],
				},
				{
					type: "group",
					name: "techStackCard",
					label: "Tech Stack Card",
					fields: [
						{
							name: "badge",
							type: "text",
							defaultValue: "Results-Driven Delivery",
						},
						{ name: "title", type: "text", required: true },
						link({
							appearances: false,
							overrides: { name: "ctaLink", label: "CTA Link" },
						}),
					],
				},
				{
					type: "group",
					name: "reliabilityCard",
					label: "Reliability Card",
					fields: [{ name: "title", type: "text", required: true }],
				},
				{
					type: "group",
					name: "miniCta",
					label: "Mini CTA",
					fields: [
						{ name: "title", type: "text", required: true },
						{ name: "description", type: "textarea", required: true },
					],
				},
			],
		},
		{
			type: "group",
			label: "CTA Section",
			name: "cta",
			fields: [
				{
					type: "row",
					fields: [
						{
							name: "badge",
							type: "text",
							admin: {
								width: "75%",
							},
						},
						{
							name: "showForm",
							type: "checkbox",
							label: "Show Form",
							admin: {
								width: "25%",
								description: "Check to show the enquiry form in the CTA",
							},
						},
					],
				},
				{ name: "title", type: "text", required: true },
				{ name: "description", type: "textarea" },

				link({
					appearances: false,
				}),
			],
		},
	],
};

// const techLogos = [
// 	{ node: <IconBank className="size-5" />, title: "Retail Banking" },
// 	{ node: <IconBriefcase className="size-5" />, title: "Corporate Banking" },
// 	{ node: <IconCoins className="size-5" />, title: "Wealth Management" },
// 	{ node: <IconShield className="size-5" />, title: "Insurance" },
// 	{ node: <IconBuilding className="size-5" />, title: "Conglomerates" },
// 	{ node: <IconGovernment className="size-5" />, title: "Government" },
// ];
