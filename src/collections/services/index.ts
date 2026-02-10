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

import { slugify } from "@/lib/utils";
import { adminOrEditor } from "@/modules/cms/access/adminOrEditor";
import { checkRole } from "@/modules/cms/access/utilities";
import { Banner } from "@/modules/cms/blocks/Banner/config";
import { CardBlock } from "@/modules/cms/blocks/card/config";
import { CertificationsBlock } from "@/modules/cms/blocks/certifications/config";
import { MediaBlock } from "@/modules/cms/blocks/MediaBlock/config";

import {
	revalidateService,
	revalidateServiceDelete,
} from "./hooks/revalidate-service";

export const Services: CollectionConfig = {
	slug: "services",
	trash: true,
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
		blogCategories: true,
		meta: {
			image: true,
			description: true,
		},
	},
	admin: {
		defaultColumns: ["title", "heroImage", "slug", "isFeatured", "updatedAt"],
		group: "Resources",
		useAsTitle: "service",
	},
	fields: [
		{
			type: "row",
			fields: [
				{
					name: "service",
					type: "text",
					required: true,
				},
			],
		},
		{
			type: "tabs",
			tabs: [
				{
					label: "Header",
					fields: [
						{
							name: "heroImage",
							type: "upload",
							relationTo: "media",
							required: true,
						},
						{
							name: "title",
							type: "text",
							required: true,
						},
						{
							name: "description",
							type: "richText",
							editor: lexicalEditor({
								features: () => {
									return [
										UnorderedListFeature(),
										OrderedListFeature(),
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
							required: true,
						},
						{
							type: "array",
							name: "partners",
							admin: {
								components: {
									RowLabel:
										"@/collections/services/components/variant-row-label#VariantRowLabel",
								},
							},
							fields: [
								{
									type: "upload",
									name: "logo",
									label: "Partner Logo",
									relationTo: "media",
									required: true,
								},
								{
									type: "row",
									fields: [
										{ type: "text", name: "name" },
										{ type: "text", name: "link" },
									],
								},
							],
						},
					],
				},
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

										BlocksFeature({
											blocks: [
												Banner,
												MediaBlock,
												CardBlock,
												CertificationsBlock,
											],
										}),
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

		slugField({
			useAsSlug: "service",
			slugify: ({ valueToSlugify }) => slugify(valueToSlugify),
		}),
	],
	hooks: {
		afterChange: [revalidateService],
		afterDelete: [revalidateServiceDelete],
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
