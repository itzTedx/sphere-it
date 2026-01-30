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

import { populateAuthors } from "./hooks/populateAuthors";
import {
	revalidateDeleteStudies,
	revalidateStudies,
} from "./hooks/revalidate-studies";

export const CaseStudies: CollectionConfig<"blogs"> = {
	slug: "case-studies",
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
		defaultColumns: ["title", "heroImage", "slug", "updatedAt"],

		preview: (data, { req }) =>
			generatePreviewPath({
				slug: data?.slug as string,
				collection: "case-studies",
				req,
			}),
		group: "Resources",
		useAsTitle: "title",
	},
	fields: [
		{
			name: "title",
			type: "text",
			required: true,
		},

		{
			type: "tabs",
			tabs: [
				{
					fields: [
						{
							name: "heroImage",
							type: "upload",
							relationTo: "media",
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
					fields: [
						{
							type: "array",
							name: "highlights",
							maxRows: 2,
							fields: [
								{
									name: "value",
									type: "text",
								},
								{
									name: "label",
									type: "text",
								},
							],
						},
						{
							name: "relatedStudies",
							type: "relationship",
							admin: {
								position: "sidebar",
							},
							filterOptions: ({ id }) => {
								return {
									id: {
										not_in: [id],
									},
								};
							},
							hasMany: true,
							relationTo: "case-studies",
						},
					],
					label: "Meta",
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
			name: "publishedAt",
			type: "date",
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
		{
			name: "authors",
			type: "relationship",
			admin: {
				position: "sidebar",
			},
			hasMany: true,
			relationTo: "users",
		},
		// This field is only used to populate the user data via the `populateAuthors` hook
		// This is because the `user` collection has access control locked to protect user privacy
		// GraphQL will also not return mutated user data that differs from the underlying schema
		{
			name: "populatedAuthors",
			type: "array",
			access: {
				update: () => false,
			},
			admin: {
				disabled: true,
				readOnly: true,
			},
			fields: [
				{
					name: "id",
					type: "text",
				},
				{
					name: "name",
					type: "text",
				},
			],
		},
		slugField({
			slugify: ({ valueToSlugify }) => slugify(valueToSlugify),
		}),
	],
	hooks: {
		afterChange: [revalidateStudies],
		afterRead: [populateAuthors],
		afterDelete: [revalidateDeleteStudies],
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
