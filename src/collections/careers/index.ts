import {
	MetaDescriptionField,
	MetaImageField,
	MetaTitleField,
	OverviewField,
	PreviewField,
} from "@payloadcms/plugin-seo/fields";
import {
	BlocksFeature,
	EXPERIMENTAL_TableFeature,
	FixedToolbarFeature,
	HeadingFeature,
	HorizontalRuleFeature,
	InlineToolbarFeature,
	lexicalEditor,
	OrderedListFeature,
	UnorderedListFeature,
	UploadFeature,
} from "@payloadcms/richtext-lexical";
import type { CollectionConfig } from "payload";
import { slugField } from "payload";

import { slugify } from "@/lib/utils";
import { adminOrEditor } from "@/modules/cms/access/adminOrEditor";
import { checkRole } from "@/modules/cms/access/utilities";
import { Banner } from "@/modules/cms/blocks/Banner/config";
import { MediaBlock } from "@/modules/cms/blocks/MediaBlock/config";
import { generatePreviewPath } from "@/modules/cms/utils/generatePreviewPath";

import { revalidateDelete, revalidateRoles } from "./hooks/revalidateRole";

export const Careers: CollectionConfig<"blogs"> = {
	slug: "careers",
	access: {
		admin: ({ req: { user } }) => checkRole(["admin", "editor"], user),
		create: adminOrEditor,
		read: () => true,
		update: adminOrEditor,
		delete: adminOrEditor,
	},

	defaultPopulate: {
		title: true,
		slug: true,
		meta: {
			image: true,
			description: true,
		},
	},
	admin: {
		defaultColumns: [
			"title",
			"department",
			"location",
			"time",
			"workMode",
			"updatedAt",
		],

		preview: (data, { req }) =>
			generatePreviewPath({
				slug: data?.slug as string,
				collection: "case-studies",
				req,
			}),
		group: "Employment",
		useAsTitle: "title",
	},
	fields: [
		{
			name: "title",
			type: "text",
			required: true,
		},
		{
			name: "description",
			type: "textarea",
		},

		{
			type: "tabs",
			tabs: [
				{
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

										BlocksFeature({ blocks: [Banner, MediaBlock] }),
										UnorderedListFeature(),
										OrderedListFeature(),
										UploadFeature(),
										FixedToolbarFeature({
											customGroups: {
												text: {
													type: "buttons",
												},
											},
										}),
										InlineToolbarFeature(),
										HorizontalRuleFeature(),
										EXPERIMENTAL_TableFeature(),
									];
								},
							}),
							label: false,
							required: true,
						},
					],
					label: "Content",
				},

				{
					name: "meta",
					label: "SEO",
					fields: [
						OverviewField({
							titlePath: "meta.title",
							descriptionPath: "meta.description",
							imagePath: "meta.image",
						}),
						MetaTitleField({
							hasGenerateFn: true,
						}),
						MetaImageField({
							relationTo: "media",
							hasGenerateFn: true,
						}),

						MetaDescriptionField({}),
						PreviewField({
							// if the `generateUrl` function is configured
							hasGenerateFn: true,

							// field paths to match the target field for data
							titlePath: "meta.title",
							descriptionPath: "meta.description",
						}),
					],
				},
			],
		},
		{
			name: "department",
			type: "relationship",
			admin: {
				position: "sidebar",
			},
			hasMany: false,
			relationTo: "departments",
		},

		{
			type: "text",
			name: "location",
			defaultValue: "Dubai, UAE",
			admin: {
				position: "sidebar",
			},
		},
		{
			type: "text",
			name: "time",
			defaultValue: "Full Time",
			admin: {
				position: "sidebar",
			},
		},
		{
			type: "select",
			name: "workMode",
			options: [
				{
					label: "On Site",
					value: "on-site",
				},
				{
					label: "Hybrid",
					value: "hybrid",
				},
				{
					label: "Remote",
					value: "remote",
				},
			],
			hasMany: true,
			defaultValue: "on-site",
			admin: {
				isSortable: true,
				isClearable: true,
				position: "sidebar",
			},
		},
		{
			name: "validUntil",
			type: "date",
			required: false,
			admin: {
				date: {
					pickerAppearance: "dayAndTime",
				},
				position: "sidebar",
			},
			hooks: {
				beforeChange: [
					({ siblingData, value }) => {
						if (siblingData._status === "published" && !value) {
							return new Date();
						}
						return value;
					},
				],
			},
		},
		slugField({
			slugify: ({ valueToSlugify }) => slugify(valueToSlugify),
		}),
	],
	hooks: {
		afterChange: [revalidateRoles],
		afterDelete: [revalidateDelete],
	},
	versions: {
		drafts: {
			autosave: {
				interval: 100, // We set this interval for optimal live preview
			},
			schedulePublish: true,
		},
		maxPerDoc: 50,
	},
};
