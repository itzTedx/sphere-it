import type { CollectionConfig } from "payload";

import { isAdmin } from "@/modules/cms/access/isAdmin";
import { checkRole } from "@/modules/cms/access/utilities";
import { AI_MATURITY_QUESTION_LABELS } from "@/modules/form/ai-maturity-questions";

const qFields = (
	[
		"q1",
		"q2",
		"q3",
		"q4",
		"q5",
		"q6",
		"q7",
		"q8",
		"q9",
		"q10",
		"q11",
		"q12",
		"q13",
		"q14",
		"q15",
	] as const
).map((name, index) => ({
	name,
	label: `Question ${index + 1}`,
	type: "number" as const,
	required: true,
	admin: {
		position: "sidebar" as const,
		description: AI_MATURITY_QUESTION_LABELS[name] ?? name,
	},
}));

export const AiMaturitySubmissions: CollectionConfig = {
	slug: "ai-maturity-submissions",
	access: {
		admin: ({ req: { user } }) => checkRole(["admin", "editor"], user),
		create: () => true, // Allow public form submission
		read: ({ req: { user } }) =>
			Boolean(user && checkRole(["admin", "editor"], user)),
		update: isAdmin,
		delete: isAdmin,
	},
	admin: {
		group: "Form Submissions",
		useAsTitle: "name",
		defaultColumns: ["name", "email", "company", "level", "createdAt"],
	},
	fields: [
		{
			name: "name",
			type: "text",
			required: true,
		},
		{
			name: "email",
			type: "email",
			required: true,
		},
		{
			name: "company",
			type: "text",
			required: true,
		},
		{
			name: "phone",
			type: "text",
			required: false,
		},
		// Questionnaire answers (q1–q15, scores 0–5); descriptions from shared questions
		...qFields,
		// Computed result
		{
			name: "totalScore",
			type: "number",
			required: true,
			admin: { readOnly: true, description: "Total questionnaire score" },
		},
		{
			name: "percentage",
			type: "number",
			required: true,
			admin: { readOnly: true, description: "Maturity percentage" },
		},
		{
			name: "level",
			type: "select",
			required: true,
			options: [
				{ label: "Foundation", value: "Foundation" },
				{ label: "Developing", value: "Developing" },
				{ label: "Progressive", value: "Progressive" },
				{ label: "Advanced", value: "Advanced" },
			],
			admin: { readOnly: true, description: "Maturity level" },
		},
		{
			name: "description",
			type: "textarea",
			required: true,
			admin: { readOnly: true, description: "Level description" },
		},
	],
};
