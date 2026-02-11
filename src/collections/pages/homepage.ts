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
								condition: (_data, siblingData) =>
									siblingData?.enable === true,
							},
						},
						link({
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
	],
};
