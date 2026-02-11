import {
	HeadingFeature,
	InlineToolbarFeature,
	lexicalEditor,
	TextStateFeature,
} from "@payloadcms/richtext-lexical";
import type { Block } from "payload";

import { INDUSTRY_OPTIONS } from "./industry-utils";

export const CertificationsBlock: Block = {
	slug: "certifications",
	fields: [
		{
			name: "title",
			type: "richText",
			editor: lexicalEditor({
				features: ({ rootFeatures }) => {
					return [
						...rootFeatures,
						HeadingFeature({
							enabledHeadingSizes: ["h3"],
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
									muted: {
										label: "Muted",
										css: {
											color: "oklch(0.545 0.0226 304.98)",
										},
									},
								},
							},
						}),
						InlineToolbarFeature(),
					];
				},
			}),
			label: false,
			required: true,
		},

		{
			type: "select",
			name: "industries",
			options: [...INDUSTRY_OPTIONS],
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
