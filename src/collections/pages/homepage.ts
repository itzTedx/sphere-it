import { revalidatePath, revalidateTag } from "next/cache";

import {
	FixedToolbarFeature,
	HeadingFeature,
	InlineToolbarFeature,
	lexicalEditor,
	TextStateFeature,
} from "@payloadcms/richtext-lexical";
import { GlobalConfig } from "payload";

import { adminOnly } from "@/modules/cms/access/admin-only";
import { link } from "@/modules/cms/fields/link";

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
				{
					name: "title",
					type: "richText",
					editor: lexicalEditor({
						features: ({ rootFeatures }) => {
							return [
								...rootFeatures,
								HeadingFeature({
									enabledHeadingSizes: ["h1"],
								}),
								InlineToolbarFeature(),
								FixedToolbarFeature({
									customGroups: {
										text: {
											type: "buttons",
										},
									},
								}),
								TextStateFeature({
									state: {
										color: {
											primary: {
												label: "Primary",
												css: {
													color: "oklch(0.5123 0.2295 297.24)",
												},
											},
											accent: {
												label: "Accent",
												css: {
													color: "oklch(0.5921 0.2269 26.84)",
												},
											},
											muted: {
												label: "Muted",
												css: {
													color: "oklch(0.545 0.0226 304.98)",
												},
											},
										},
									},
								}),
							];
						},
					}),
					required: true,
				},
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
				{
					name: "title",
					type: "richText",
					editor: lexicalEditor({
						features: ({ rootFeatures }) => {
							return [
								...rootFeatures,
								HeadingFeature({
									enabledHeadingSizes: ["h2"],
								}),
								InlineToolbarFeature(),
								FixedToolbarFeature({
									customGroups: {
										text: {
											type: "buttons",
										},
									},
								}),
								TextStateFeature({
									state: {
										color: {
											primary: {
												label: "Primary",
												css: {
													color: "oklch(0.5123 0.2295 297.24)",
												},
											},
											accent: {
												label: "Accent",
												css: {
													color: "oklch(0.5921 0.2269 26.84)",
												},
											},
											muted: {
												label: "Muted",
												css: {
													color: "oklch(0.545 0.0226 304.98)",
												},
											},
										},
									},
								}),
							];
						},
					}),
					required: true,
				},
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
				{
					name: "title",
					type: "richText",
					editor: lexicalEditor({
						features: ({ rootFeatures }) => {
							return [
								...rootFeatures,
								HeadingFeature({
									enabledHeadingSizes: ["h2"],
								}),
								InlineToolbarFeature(),
								FixedToolbarFeature({
									customGroups: {
										text: {
											type: "buttons",
										},
									},
								}),
								TextStateFeature({
									state: {
										color: {
											primary: {
												label: "Primary",
												css: {
													color: "oklch(0.5123 0.2295 297.24)",
												},
											},
											accent: {
												label: "Accent",
												css: {
													color: "oklch(0.5921 0.2269 26.84)",
												},
											},
											muted: {
												label: "Muted",
												css: {
													color: "oklch(0.545 0.0226 304.98)",
												},
											},
										},
									},
								}),
							];
						},
					}),
					required: true,
				},
				{ name: "description", type: "textarea" },
				{
					type: "relationship",
					name: "items",
					relationTo: "industries",
					hasMany: true,
				},
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
