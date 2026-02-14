/** Single source of truth for AI maturity assessment questions. Used by the frontend form and Payload admin labels. */

export const AI_MATURITY_QUESTIONS = [
	{
		category: "Strategy & Leadership Alignment",
		categoryId: "strategy",
		questions: [
			{
				id: "q1" as const,
				question:
					"1. Do you have a clear AI strategy aligned to measurable business outcomes?",
			},
			{
				id: "q2" as const,
				question:
					"2. Has C level leadership formally approved and endorsed the AI strategy?",
			},
			{
				id: "q3" as const,
				question:
					"3. Are success metrics for AI initiatives defined and tracked",
			},
			{
				id: "q4" as const,
				question:
					"4. Are there a dedicated AI budget for the coming financial year?",
			},
			{
				id: "q5" as const,
				question:
					"5. Are business leaders accountable for driving AI adoption in their areas?",
			},
		],
	},
	{
		category: "Data Foundation & Integration",
		categoryId: "data",
		questions: [
			{
				id: "q6" as const,
				question:
					"6.	Is your enterprise data catalogued, classified, and easily searchable?",
			},
			{
				id: "q7" as const,
				question:
					"7. How confident are you in data accuracy, completeness, and lineage?",
			},
			{
				id: "q8" as const,
				question:
					"8.	Do you have a unified data platform that supports analytics and AI?",
			},
			{
				id: "q9" as const,
				question:
					"9.	Are data access controls and residency rules aligned with regulatory expectations?",
			},
			{
				id: "q10" as const,
				question:
					"10.	Can teams reliably access clean governed datasets for AI and ML work?",
			},
		],
	},
	{
		category: "Technology & Architecture",
		categoryId: "technology",
		questions: [
			{
				id: "q11" as const,
				question:
					"11.	Do you have a clear and approved policy for LLM and generative AI usage?",
			},
			{
				id: "q12" as const,
				question:
					"12.	Is your current infrastructure capable of handling AI workloads at scale?",
			},
			{
				id: "q13" as const,
				question:
					"13.	Are you using MLOps or AIOps for model lifecycle and deployment management?",
			},
		],
	},
	{
		category: "Governance & Risk",
		categoryId: "governance",
		questions: [
			{
				id: "q14" as const,
				question:
					"14.	Do you have an AI governance framework with controls for privacy and bias?",
			},
			{
				id: "q15" as const,
				question:
					"15.	Are employees trained on responsible AI practices and escalation routes?",
			},
		],
	},
] as const;

/** Map of field id (q1–q15) to question text for Payload admin descriptions */
export const AI_MATURITY_QUESTION_LABELS: Record<string, string> = {};
for (const category of AI_MATURITY_QUESTIONS) {
	for (const q of category.questions) {
		AI_MATURITY_QUESTION_LABELS[q.id] = q.question;
	}
}
