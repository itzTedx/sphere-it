import { revalidatePath, revalidateTag } from "next/cache";

import { GlobalConfig } from "payload";

import { adminOnly } from "@/modules/cms/access/admin-only";
import { richTextField } from "@/modules/cms/fields/richTextField";

export const ServicesPage: GlobalConfig<"services-page"> = {
	slug: "services-page",
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
					revalidateTag("global:services-page", "max");
					revalidatePath("/services");
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
									name: "badge",
									type: "text",
									defaultValue: "Services",
									required: true,
								},
								richTextField({
									headingSize: "h1",
									overrides: {
										admin: {
											description:
												"Main heading. Use bold or accent color for the highlighted phrase (e.g. “Automation to Augmentation”).",
										},
									},
								}),
								{
									name: "subtitle",
									type: "text",
									label: "Subtitle (H2)",
									required: true,
									defaultValue:
										"We deliver solutions that are precise, pragmatic, and outcome-driven.",
								},
								{
									name: "description",
									type: "textarea",
									required: true,
									defaultValue:
										"Technology should deliver clarity, reliability, and measurable value. At Sphere IT, our services are designed to simplify complexity and accelerate outcomes. Guided by precision and pragmatism, we help organizations adopt AI, automate processes, harness data, secure platforms, and scale talent - without over-engineering.",
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
										"IT Services - AI, Automation & Digital Transformation | Sphere IT",
								},
								{
									name: "metaDescription",
									type: "textarea",
									required: true,
									defaultValue:
										"Transform your business with Sphere IT's comprehensive IT services including AI solutions, process automation, data analytics, managed platforms, and talent augmentation. Certified professionals delivering measurable outcomes.",
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
