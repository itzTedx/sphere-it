import { revalidatePath, revalidateTag } from "next/cache";

import { GlobalConfig } from "payload";

import { adminOnly } from "@/modules/cms/access/admin-only";
import { link } from "@/modules/cms/fields/link";
import { richTextField } from "@/modules/cms/fields/richTextField";

export const AboutPage: GlobalConfig<"about-page"> = {
	slug: "about-page",
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
					revalidateTag("global:about-page", "max");
					revalidatePath("/about");
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
									defaultValue: "About",
									required: true,
								},
								richTextField({ headingSize: "h1" }),
								richTextField({ name: "description" }),
							],
						},
						// Our Story Section
						{
							type: "group",
							label: "Our Story Section",
							name: "story",
							fields: [
								{
									name: "badge",
									type: "text",
									defaultValue: "Our Story",
									required: true,
								},
								richTextField({
									name: "content",
								}),
							],
						},
						// Our Values Section
						{
							type: "group",
							label: "Our Values Section",
							name: "values",
							fields: [
								{
									name: "badge",
									type: "text",
									defaultValue: "Our Values",
									required: true,
								},
								richTextField(),
								{
									name: "description",
									type: "textarea",
									required: true,
								},
								{
									type: "array",
									name: "items",
									label: "Value Cards",
									minRows: 1,
									maxRows: 4,
									admin: {
										isSortable: true,
									},
									fields: [
										{
											name: "image",
											type: "upload",
											relationTo: "media",
											required: true,
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
						// Team Section
						{
							type: "group",
							label: "Team Section",
							name: "team",
							fields: [
								{
									name: "badge",
									type: "text",
									defaultValue: "Our People, Our Precision",
									required: true,
								},
								richTextField(),
								{
									name: "description",
									type: "textarea",
									required: true,
								},
								{
									name: "leadershipLabel",
									type: "text",
									defaultValue: "Leadership at Sphere IT",
									required: true,
								},
								{
									name: "teamLabel",
									type: "text",
									defaultValue: "People Who Power Sphere IT",
									required: true,
								},
							],
						},
						// Hiring Section
						{
							type: "group",
							label: "Hiring Section",
							name: "hiring",
							fields: [
								{
									name: "badge",
									type: "text",
									defaultValue: "We're Hiring",
									required: true,
								},
								richTextField(),
								{
									name: "description",
									type: "textarea",
									required: true,
								},
								link({
									appearances: false,
									overrides: {
										name: "ctaLink",
										label: "CTA Button",
									},
								}),
								{
									type: "array",
									name: "benefits",
									label: "Hiring Benefits",
									minRows: 1,
									admin: {
										isSortable: true,
									},
									fields: [
										{
											name: "text",
											type: "text",
											required: true,
										},
									],
								},
							],
						},
						// CTA Section
						{
							type: "group",
							label: "CTA Section",
							name: "cta",
							fields: [
								{
									name: "badge",
									type: "text",
									label: "Badge",
									defaultValue: "Your IT success story starts here",
									required: true,
								},
								{
									name: "title",
									type: "text",
									label: "Title",
									defaultValue:
										"Let's build your next IT success story together.",
									required: true,
								},
								{
									name: "description",
									type: "textarea",
									label: "Description",
									defaultValue:
										"Get the accuracy, scalability, and impact your business needs - delivered with precision and pragmatism.",
									required: true,
								},
								link({
									appearances: false,
									overrides: {
										name: "button",
									},
								}),
								{
									type: "row",
									fields: [
										{
											name: "showForm",
											type: "checkbox",
											label: "Show Form",
											defaultValue: true,
											admin: {
												width: "25%",
												description:
													"Check to show the enquiry form in the CTA",
											},
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
										"About Sphere IT Global - Digital Transformation & IT Innovation Partner",
								},
								{
									name: "metaDescription",
									type: "textarea",
									required: true,
									defaultValue:
										"Learn how Sphere IT drives enterprise transformation through AI, automation, and cloud engineering. Discover our mission, leadership, and global team powering innovation across industries.",
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
