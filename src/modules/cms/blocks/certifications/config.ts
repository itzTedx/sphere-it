import {
	HeadingFeature,
	InlineToolbarFeature,
	lexicalEditor,
	TextStateFeature,
} from "@payloadcms/richtext-lexical";
import type { Block } from "payload";

const INDUSTRY_OPTIONS = [
	{ label: "Retail Banking", value: "retail-banking" },
	{ label: "Corporate Banking", value: "corporate-banking" },
	{ label: "Wealth Management", value: "wealth-management" },
	{ label: "Insurance", value: "insurance" },
	{ label: "Conglomerates", value: "conglomerates" },
	{ label: "Government Entities", value: "government-entities" },
	{ label: "Telecommunications", value: "telecommunications" },
	{ label: "Energy & Utilities", value: "energy-utilities" },
] as const;

const slugToLabelMap = new Map<string, string>(
	INDUSTRY_OPTIONS.map((opt) => [opt.value, opt.label])
);

/**
 * Converts an industry slug (e.g. "retail-banking") to its display label (e.g. "Retail Banking").
 * Falls back to a title-cased version of the slug if the value is not in the known options.
 */
export function industrySlugToLabel(slug: string): string {
	return (
		slugToLabelMap.get(slug) ??
		slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
	);
}

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
