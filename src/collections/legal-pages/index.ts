import { revalidatePath, revalidateTag } from "next/cache";

import {
	MetaDescriptionField,
	MetaImageField,
	MetaTitleField,
	OverviewField,
	PreviewField,
} from "@payloadcms/plugin-seo/fields";
import {
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

export const LegalPages: CollectionConfig<"legal-pages"> = {
	slug: "legal-pages",
	access: {
		admin: ({ req: { user } }) => checkRole(["admin", "editor"], user),
		create: adminOrEditor,
		read: () => true,
		update: adminOrEditor,
		delete: adminOrEditor,
	},
	hooks: {
		afterChange: [
			({ doc, req: { context } }) => {
				if (!context.disableRevalidate) {
					revalidateTag("legal-pages", "max");
					if (doc.slug) {
						revalidateTag(`legal-page:${doc.slug}`, "max");
						revalidatePath(`/legal/${doc.slug}`);
					}
				}
				return doc;
			},
		],
		afterDelete: [
			({ doc, req: { context } }) => {
				if (!context.disableRevalidate) {
					revalidateTag("legal-pages", "max");
					if (doc.slug) {
						revalidateTag(`legal-page:${doc.slug}`, "max");
						revalidatePath(`/legal/${doc.slug}`);
					}
				}
				return doc;
			},
		],
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
		defaultColumns: ["title", "slug", "updatedAt"],
		group: "Pages",
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
					label: "Content",
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
										EXPERIMENTAL_TableFeature(),
										HorizontalRuleFeature(),
									];
								},
							}),
							label: false,
							required: true,
						},
					],
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
						MetaDescriptionField({
							hasGenerateFn: true,
						}),
						PreviewField({
							hasGenerateFn: true,
							titlePath: "meta.title",
							descriptionPath: "meta.description",
						}),
					],
				},
			],
		},
		slugField({
			useAsSlug: "title",
			slugify: ({ valueToSlugify }) => slugify(valueToSlugify),
		}),
	],
	versions: {
		drafts: {
			autosave: {
				interval: 100,
			},
			schedulePublish: true,
		},
		maxPerDoc: 50,
	},
};
