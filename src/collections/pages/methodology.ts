import { revalidatePath, revalidateTag } from "next/cache";

import { GlobalConfig } from "payload";

import { adminOnly } from "@/modules/cms/access/admin-only";
import { link } from "@/modules/cms/fields/link";

const AXIS_ICONS = [
	{ label: "Assess (Bullseye)", value: "bullseye" },
	{ label: "eXplore (Search)", value: "search" },
	{ label: "Implement (Rocket)", value: "rocket" },
	{ label: "Sustain (Shield)", value: "shield" },
] as const;

export const MethodologyPage: GlobalConfig<"methodology-page"> = {
	slug: "methodology-page",
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
					revalidateTag("global:methodology-page", "max");
					revalidatePath("/methodology");
				}
				return doc;
			},
		],
	},
	fields: [
		{
			type: "tabs",
			tabs: [
				{
					label: "Content",
					fields: [
						{
							type: "group",
							label: "Hero Section",
							name: "hero",
							fields: [
								{
									name: "title",
									type: "text",
									required: true,
									defaultValue: "A.X.I.S Methodology",
								},
								{
									name: "subtitle",
									type: "text",
									required: true,
									defaultValue:
										"Tested and proven Sphere methodology for excellence",
								},
								link({
									appearances: false,
									required: false,
									overrides: {
										name: "ctaLink",
										label: "CTA Button",
									},
								}),
								{
									name: "image",
									type: "upload",
									relationTo: "media",
									label: "Hero Image",
								},
							],
						},
						{
							type: "group",
							label: "Value Proposition Section",
							name: "valueProposition",
							fields: [
								{
									name: "badge",
									type: "text",
									required: true,
									defaultValue: "Value Proposition",
								},
								{
									name: "heading",
									type: "text",
									required: true,
									defaultValue: "Precision, Predictability, and Outcomes",
								},
								{
									name: "description",
									type: "textarea",
									required: true,
									defaultValue:
										"AXIS Methodology is a proven, structured, and data-driven framework designed to deliver clarity, predictability, and measurable outcomes for the clients. With precision and pragmatism at its core, AXIS enables faster decisions, predictable delivery, and strong business value.",
								},
							],
						},
						{
							type: "group",
							label: "AXIS Phases",
							name: "phases",
							fields: [
								{
									type: "array",
									name: "items",
									label: "Phase Cards",
									minRows: 1,
									maxRows: 8,
									admin: {
										isSortable: true,
									},
									fields: [
										{
											name: "icon",
											type: "select",
											required: true,
											options: [...AXIS_ICONS],
											defaultValue: "bullseye",
										},
										{
											name: "title",
											type: "text",
											required: true,
										},
										{
											name: "description",
											type: "textarea",
											required: true,
										},
									],
								},
							],
						},
					],
				},
				{
					label: "SEO",
					fields: [
						{
							type: "group",
							label: "SEO & Meta",
							name: "seo",
							fields: [
								{
									name: "metaTitle",
									type: "text",
									required: true,
									defaultValue:
										"AXIS Methodology - IT Strategy & Predictable Delivery Framework",
								},
								{
									name: "metaDescription",
									type: "textarea",
									required: true,
									defaultValue:
										"Explore Sphere IT's AXIS methodology, a structured, data-driven IT consulting framework that delivers clarity, cost predictability, and scalable outcomes.",
								},
								{
									name: "ogImage",
									type: "upload",
									relationTo: "media",
									label: "Open Graph Image",
								},
							],
						},
					],
				},
			],
		},
	],
};
