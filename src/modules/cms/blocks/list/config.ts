import {
	FixedToolbarFeature,
	InlineToolbarFeature,
	lexicalEditor,
} from "@payloadcms/richtext-lexical";
import type { Block } from "payload";

export const ListBlock: Block = {
	slug: "list",
	fields: [
		{
			type: "row",
			fields: [
				{
					name: "style",
					type: "select",
					defaultValue: "default",
					options: [{ label: "Default", value: "default" }],
					required: true,
					admin: {
						width: "75%",
					},
				},
				{
					type: "select",
					name: "columns",
					defaultValue: "4",
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
			name: "items",
			admin: {
				components: {
					RowLabel: "@/modules/cms/blocks/list/row-label#ListRowLabel",
				},
			},
			fields: [
				{
					name: "title",
					type: "text",
					label: "Title",
					required: true,
				},
				{
					name: "description",
					type: "textarea",
					label: "Description",
					required: true,
				},
				{
					name: "content",
					type: "richText",
					editor: lexicalEditor({
						features: ({ rootFeatures }) => {
							return [
								...rootFeatures,

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
	interfaceName: "ListBlock",
};
