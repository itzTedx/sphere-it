import {
	HorizontalRuleFeature,
	InlineToolbarFeature,
	lexicalEditor,
	OrderedListFeature,
	UnorderedListFeature,
	UploadFeature,
} from "@payloadcms/richtext-lexical";
import type { CollectionConfig } from "payload";

import { adminOnly } from "@/modules/cms/access/admin-only";
import { checkRole } from "@/modules/cms/access/utilities";
import { generatePreviewPath } from "@/modules/cms/utils/generatePreviewPath";

import { revalidateDelete, revalidateRoles } from "./hooks/revalidateRole";

export const EmployeeTestimonials: CollectionConfig<"blogs"> = {
	slug: "employeeTestimonials",
	access: {
		admin: ({ req: { user } }) => checkRole(["admin"], user),
		create: adminOnly,
		read: () => true,
		update: adminOnly,
		delete: adminOnly,
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
		defaultColumns: ["name", "jobRole"],

		preview: (data, { req }) =>
			generatePreviewPath({
				slug: data?.slug as string,
				collection: "case-studies",
				req,
			}),
		group: "Employment",
		useAsTitle: "name",
	},
	fields: [
		{
			name: "name",
			type: "text",
			required: true,
		},
		{
			name: "jobRole",
			type: "textarea",
		},
		{
			name: "content",
			type: "richText",
			editor: lexicalEditor({
				features: ({ rootFeatures }) => {
					return [
						...rootFeatures,

						UnorderedListFeature(),
						OrderedListFeature(),
						UploadFeature(),

						InlineToolbarFeature(),
						HorizontalRuleFeature(),
					];
				},
			}),

			required: true,
		},
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
