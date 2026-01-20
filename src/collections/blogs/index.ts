import {
	MetaDescriptionField,
	MetaImageField,
	MetaTitleField,
	OverviewField,
	PreviewField,
} from "@payloadcms/plugin-seo/fields";
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
import type { CollectionConfig } from "payload";
import { slugField } from "payload";

import { Banner } from "@/modules/cms/blocks/Banner/config";
import { MediaBlock } from "@/modules/cms/blocks/MediaBlock/config";

import { populateAuthors } from "./hooks/populateAuthors";
import { revalidateDelete, revalidatePost } from "./hooks/revalidatePost";

export const Blogs: CollectionConfig<"blogs"> = {
	slug: "blogs",
	trash: true,
	defaultPopulate: {
		title: true,
		slug: true,
		blogCategories: true,
		meta: {
			image: true,
			description: true,
		},
	},
	admin: {
		defaultColumns: ["title", "heroImage", "slug", "isFeatured", "updatedAt"],
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
			name: "description",
			type: "textarea",
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
						}),

						MetaDescriptionField({ hasGenerateFn: true }),
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
			name: "isFeatured",
			label: "Featured?",
			type: "checkbox",
			defaultValue: "false",
			admin: {
				position: "sidebar",
			},
			hooks: {
				beforeChange: [
					async ({ value, req, originalDoc }) => {
						if (value === true) {
							// Find existing featured posts
							const existingFeatured = await req.payload.find({
								collection: "blogs",
								where: {
									isFeatured: {
										equals: true,
									},
									...(originalDoc?.id
										? {
												id: {
													not_equals: originalDoc.id,
												},
											}
										: {}),
								},
							});

							// specific check to update other posts only if they exist
							if (existingFeatured.docs.length > 0) {
								await Promise.all(
									existingFeatured.docs.map((doc) =>
										req.payload.update({
											collection: "blogs",
											id: doc.id,
											data: {
												isFeatured: false,
											},
											req,
										})
									)
								);
							}
						}
						return value;
					},
				],
			},
		},
		{
			name: "relatedPosts",
			label: "Related Blogs",
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
			relationTo: "blogs",
		},
		{
			name: "blogCategories",
			label: "Category",
			type: "relationship",
			admin: {
				position: "sidebar",
				isSortable: true,
			},
			hasMany: true,
			relationTo: "blogCategories",
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
		slugField(),
	],
	hooks: {
		afterChange: [revalidatePost],
		afterRead: [populateAuthors],
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
