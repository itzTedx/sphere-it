import type { Field, GroupField } from "payload";

import deepMerge from "../utils/deepMerge";

export type LinkAppearances = "default" | "outline";

export const appearanceOptions: Record<
	LinkAppearances,
	{ label: string; value: string }
> = {
	default: {
		label: "Default",
		value: "default",
	},
	outline: {
		label: "Outline",
		value: "outline",
	},
};

type LinkType = (options?: {
	appearances?: LinkAppearances[] | false;
	disableLabel?: boolean;
	overrides?: Partial<GroupField>;
}) => Field;

export const link: LinkType = ({
	appearances,
	disableLabel = false,
	overrides = {},
} = {}) => {
	const linkResult: GroupField = {
		name: "link",
		type: "group",
		admin: {
			hideGutter: true,
		},
		fields: [
			{
				type: "row",
				fields: [
					{
						name: "type",
						type: "radio",
						admin: {
							layout: "horizontal",
							width: "50%",
						},
						defaultValue: "page",
						options: [
							{
								label: "Page",
								value: "page",
							},
							{
								label: "Internal link",
								value: "reference",
							},
							{
								label: "Custom URL",
								value: "custom",
							},
						],
					},
					{
						name: "newTab",
						type: "checkbox",
						admin: {
							style: {
								alignSelf: "flex-end",
							},
							width: "50%",
						},
						label: "Open in new tab",
					},
				],
			},
		],
	};

	const linkTypes: Field[] = [
		{
			name: "page",
			type: "select",
			admin: {
				condition: (_, siblingData) => siblingData?.type === "page",
			},
			label: "Page to link to",
			options: [
				{
					label: "Homepage",
					value: "/",
				},
				{
					label: "Services",
					value: "/services",
				},
				{
					label: "About",
					value: "/about",
				},
				{
					label: "Blogs",
					value: "/resources/blogs",
				},
				{
					label: "Case Studies",
					value: "/resources/case-studies",
				},
				{
					label: "Research Papers",
					value: "/resources/research-papers",
				},
				{
					label: "Faq",
					value: "/resources/faqs",
				},
				{
					label: "Careers",
					value: "/careers",
				},
				{
					label: "Contact",
					value: "/contact",
				},
				{
					label: "Methodology",
					value: "/methodology",
				},
				{
					label: "AI Maturity Assessment",
					value: "/resources/ai-maturity",
				},
			],
			required: true,
		},
		{
			name: "reference",
			type: "relationship",
			admin: {
				condition: (_, siblingData) => siblingData?.type === "reference",
			},
			label: "Document to link to",
			relationTo: ["services", "blogs", "case-studies", "researchPapers"],
			required: true,
		},

		{
			name: "url",
			type: "text",
			admin: {
				condition: (_, siblingData) => siblingData?.type === "custom",
			},
			label: "Custom URL",
			required: true,
		},
	];

	if (!disableLabel) {
		linkTypes.map((linkType) => ({
			...linkType,
			admin: {
				...linkType.admin,
				width: "50%",
			},
		}));

		linkResult.fields.push({
			type: "row",
			fields: [
				...linkTypes,
				{
					name: "label",
					type: "text",
					admin: {
						width: "50%",
					},
					label: "Label",
					required: true,
				},
			],
		});
	} else {
		linkResult.fields = [...linkResult.fields, ...linkTypes];
	}

	if (appearances !== false) {
		let appearanceOptionsToUse = [
			appearanceOptions.default,
			appearanceOptions.outline,
		];

		if (appearances) {
			appearanceOptionsToUse = appearances.map(
				(appearance) => appearanceOptions[appearance]
			);
		}

		linkResult.fields.push({
			name: "appearance",
			type: "select",
			admin: {
				description: "Choose how the link should be rendered.",
			},
			defaultValue: "default",
			options: appearanceOptionsToUse,
		});
	}

	return deepMerge(linkResult, overrides);
};
