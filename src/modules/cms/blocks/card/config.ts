import {
	FixedToolbarFeature,
	HeadingFeature,
	InlineToolbarFeature,
	lexicalEditor,
} from "@payloadcms/richtext-lexical";
import type { Block } from "payload";

import { iconPickerField } from "../../fields/iconPickerField";

export const CardBlock: Block = {
	slug: "card",
	fields: [
		{
			name: "style",
			type: "select",
			defaultValue: "info",
			options: [
				{ label: "Basic", value: "basic" },
				{ label: "Outlined", value: "outlined" },
			],
			required: true,
		},
		{
			type: "array",
			name: "cards",
			fields: [
				iconPickerField({
					name: "icon",
					label: "Icon",
					admin: {
						description: "Choose an icon to display with this card.",
					},
				}),
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
		},
	],
	interfaceName: "CardBlock",
};
