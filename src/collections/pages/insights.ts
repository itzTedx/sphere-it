import { revalidatePath, revalidateTag } from "next/cache";

import { GlobalConfig } from "payload";

import { adminOnly } from "@/modules/cms/access/admin-only";
import { link } from "@/modules/cms/fields/link";

export const InsightsPage: GlobalConfig<"insights-page"> = {
	slug: "insights-page",
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
					revalidateTag("global:insights-page", "max");
					revalidatePath("/resources/blogs");
					revalidatePath("/resources/case-studies");
					revalidatePath("/resources/research-papers");
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
									name: "titlePrefix",
									type: "text",
									required: true,
									defaultValue: "Explore the Latest From",
									admin: {
										description: "Text before the highlighted company name.",
									},
								},
								{
									name: "titleHighlight",
									type: "text",
									required: true,
									defaultValue: "Sphere IT Global",
									admin: {
										description: "Company name shown in accent color.",
									},
								},
								{
									name: "subtitle",
									type: "textarea",
									required: true,
									defaultValue:
										"Stay ahead with fresh perspectives, expert insights, and stories that inspire.",
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
									defaultValue: "Your IT success story starts here",
								},
								{
									name: "title",
									type: "text",
									required: true,
									defaultValue:
										"Let's build your next IT success story together.",
								},
								{
									name: "description",
									type: "textarea",
									defaultValue:
										"Get the accuracy, scalability, and impact your business needs - delivered with precision and pragmatism.",
								},
								{
									name: "showForm",
									type: "checkbox",
									label: "Show enquiry form",
									defaultValue: false,
								},
								{
									name: "buttonText",
									type: "text",
									label: "Button text",
									defaultValue: "Start the Conversation",
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
