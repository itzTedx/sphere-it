import {
	BlocksFeature,
	FixedToolbarFeature,
	HeadingFeature,
	HorizontalRuleFeature,
	InlineToolbarFeature,
	lexicalEditor,
	OrderedListFeature,
	UnorderedListFeature,
	UploadFeature,
} from "@payloadcms/richtext-lexical";
import type { Block } from "payload";

import { ButtonBlock } from "../button/config";
import { CardBlock } from "../card/config";
import { ListBlock } from "../list/config";
import { MediaBlock } from "../MediaBlock/config";

export const ColumnBlock: Block = {
	slug: "column",
	fields: [
		{
			type: "row",
			fields: [
				{
					type: "select",
					name: "columns",
					defaultValue: "2",
					options: [
						{ label: "2 Columns", value: "2" },
						{ label: "3 Columns", value: "3" },
						{ label: "4 Columns", value: "4" },
					],
				},
			],
		},

		{
			type: "array",
			name: "contents",

			fields: [
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
								BlocksFeature({
									blocks: [ButtonBlock, MediaBlock, CardBlock, ListBlock],
								}),
								UnorderedListFeature(),
								OrderedListFeature(),
								UploadFeature(),
								HorizontalRuleFeature(),
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
	interfaceName: "ColumnBlock",
};
