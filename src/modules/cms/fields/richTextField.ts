import {
	FixedToolbarFeature,
	HeadingFeature,
	InlineToolbarFeature,
	lexicalEditor,
	TextStateFeature,
} from "@payloadcms/richtext-lexical";
import type { RichTextField } from "payload";

type HeadingSize = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type RichTextFieldOptions = {
	name?: string;
	headingSize?: HeadingSize;
	required?: boolean;
	overrides?: Partial<RichTextField>;
};

export const richTextField = ({
	name = "title",
	headingSize = "h2",
	required = true,
	overrides = {},
}: RichTextFieldOptions = {}): RichTextField => {
	return {
		name,
		type: "richText",
		editor: lexicalEditor({
			features: ({ rootFeatures }) => {
				return [
					...rootFeatures,
					HeadingFeature({
						enabledHeadingSizes: [headingSize],
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
		required,
		...overrides,
	};
};
