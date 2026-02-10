import {
	FixedToolbarFeature,
	HeadingFeature,
	InlineToolbarFeature,
	lexicalEditor,
	TextStateFeature,
} from "@payloadcms/richtext-lexical";
import type { Block } from "payload";

export const MediaBlock: Block = {
	slug: "mediaBlock",
	interfaceName: "MediaBlock",
	fields: [
		{
			name: "media",
			type: "upload",
			relationTo: "media",
			required: true,
		},
		{
			name: "content",
			type: "richText",
			editor: lexicalEditor({
				features: ({ rootFeatures }) => {
					return [
						...rootFeatures,
						HeadingFeature({
							enabledHeadingSizes: ["h2", "h3", "h4", "h5"],
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
									sunset: {
										label: "Sunset",
										css: {
											background: "linear-gradient(to top, #ff5f6d, #6a3093)",
										},
									},
								},
							},
						}),
						InlineToolbarFeature(),
						FixedToolbarFeature({
							customGroups: {
								text: {
									type: "buttons",
								},
							},
						}),
					];
				},
			}),
			label: false,
			required: true,
		},
	],
};
