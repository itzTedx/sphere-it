import { revalidatePath, revalidateTag } from "next/cache";

import { GlobalConfig } from "payload";

import { adminOnly } from "@/modules/cms/access/admin-only";
import { link } from "@/modules/cms/fields/link";

export const FaqsPage: GlobalConfig<"faqs-page"> = {
	slug: "faqs-page",
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
					revalidateTag("global:faqs-page", "max");
					revalidatePath("/resources/faqs");
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
							label: "Header Section",
							name: "header",
							fields: [
								{
									name: "badge",
									type: "text",
									required: true,
									defaultValue: "FAQs",
									admin: {
										description: "Badge text shown above the heading.",
									},
								},
								{
									name: "titleHighlight",
									type: "text",
									required: true,
									defaultValue: "Have Questions?",
									admin: {
										description: "Main heading shown in accent color.",
									},
								},
								{
									name: "titleSuffix",
									type: "text",
									required: true,
									defaultValue: "Here's what we hear often",
									admin: {
										description: "Secondary line below the heading.",
									},
								},
							],
						},
						{
							type: "group",
							label: "CTA Section",
							name: "cta",
							fields: [
								{
									name: "badge",
									type: "text",
									defaultValue: "Contact Us",
								},
								{
									name: "title",
									type: "text",
									required: true,
									defaultValue: "Couldn't find the answer you're looking for?",
								},
								{
									name: "description",
									type: "textarea",
									defaultValue:
										"Our team is here to help. Get in touch with us and we'll respond as soon as possible.",
								},
								{
									name: "showForm",
									type: "checkbox",
									label: "Show enquiry form",
									defaultValue: true,
								},
								{
									name: "buttonText",
									type: "text",
									label: "Button text",
									defaultValue: "Ask Question",
								},
								link({
									appearances: false,
									overrides: {
										name: "link",
										admin: { description: "Button link destination." },
									},
								}),
							],
						},
					],
				},
			],
		},
	],
};
