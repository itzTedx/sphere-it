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
			type: "row",
			fields: [
				{
					name: "style",
					type: "select",
					defaultValue: "basic",
					options: [
						{ label: "Basic", value: "basic" },
						{ label: "Outlined", value: "outlined" },
					],
					required: true,
					admin: {
						width: "75%",
					},
				},
				{
					type: "select",
					name: "columns",
					defaultValue: "2",
					options: [
						{ label: "2 Columns", value: "2" },
						{ label: "3 Columns", value: "3" },
						{ label: "4 Columns", value: "4" },
					],
					admin: {
						width: "25%",
					},
				},
			],
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
