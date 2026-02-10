import {
	BoldFeature,
	IndentFeature,
	ItalicFeature,
	LinkFeature,
	type LinkFields,
	lexicalEditor,
	OrderedListFeature,
	ParagraphFeature,
	TextStateFeature,
	UnderlineFeature,
	UnorderedListFeature,
} from "@payloadcms/richtext-lexical";
import type { TextFieldSingleValidation } from "payload";

export const defaultLexical = lexicalEditor({
	features: [
		ParagraphFeature(),
		UnderlineFeature(),
		BoldFeature(),
		ItalicFeature(),
		UnorderedListFeature(),
		OrderedListFeature(),
		IndentFeature(),
		TextStateFeature({
			state: {
				color: {
					primary: {
						label: "Primary",
						css: {
							color: "oklch(0.5123 0.2295 297.24)",
						},
					},
					sunset: {
						label: "Sunset",
						css: {
							background: "linear-gradient(to top, #ff5f6d, #6a3093)",
						},
					},
				},
			},
		}),
		LinkFeature({
			enabledCollections: ["blogs"],
			fields: ({ defaultFields }) => {
				const defaultFieldsWithoutUrl = defaultFields.filter((field) => {
					if ("name" in field && field.name === "url") return false;
					return true;
				});

				return [
					...defaultFieldsWithoutUrl,
					{
						name: "url",
						type: "text",
						admin: {
							condition: (_data, siblingData) =>
								siblingData?.linkType !== "internal",
						},
						label: ({ t }) => t("fields:enterURL"),
						required: true,
						validate: ((value, options) => {
							if (
								(options?.siblingData as LinkFields)?.linkType === "internal"
							) {
								return true; // no validation needed, as no url should exist for internal links
							}
							return value ? true : "URL is required";
						}) as TextFieldSingleValidation,
					},
				];
			},
		}),
	],
});
