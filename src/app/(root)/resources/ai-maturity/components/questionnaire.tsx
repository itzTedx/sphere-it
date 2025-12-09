"use client";

import { Controller, useFormContext } from "react-hook-form";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { cn } from "@/lib/utils";
import type { AiMaturityQuestionnaireType } from "@/modules/form/validators/ai-maturity-schema";

const SCORE_OPTIONS = [
	{ value: 1, label: "Fully established", description: "Best" },
	{ value: 2, label: "Well established", description: "Good" },
	{ value: 3, label: "Partially established", description: "Moderate" },
	{ value: 4, label: "Emerging", description: "Early stage" },
	{ value: 5, label: "Not established", description: "Needs work" },
] as const;

const QUESTIONS = [
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

interface QuestionnaireProps {
	className?: string;
}

export function Questionnaire({ className }: QuestionnaireProps) {
	const { control } = useFormContext<AiMaturityQuestionnaireType>();

	return (
		<div className={cn("space-y-6", className)}>
			{QUESTIONS.map((category, categoryIndex) => (
				<Card key={category.categoryId}>
					<CardHeader className="flex items-center gap-2 p-4">
						<Badge className="aspect-square size-7 text-xs" variant="secondary">
							{categoryIndex + 1}
						</Badge>
						<CardTitle className="text-lg text-primary-700 xl:text-title-5">
							{category.category}
						</CardTitle>
					</CardHeader>
					<CardContent className="space-y-8 pt-4">
						{category.questions.map((question) => (
							<Controller
								control={control}
								key={question.id}
								name={question.id}
								render={({ field, fieldState }) => (
									<Field
										className="space-y-1.5"
										data-invalid={fieldState.invalid}
									>
										<FieldLabel
											className="font-semibold text-lg leading-none"
											htmlFor={question.id}
										>
											{question.question}
										</FieldLabel>

										<RadioGroup
											aria-label={question.question}
											className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-5"
											onValueChange={(value) =>
												field.onChange(Number.parseInt(value, 10))
											}
											value={field.value?.toString()}
										>
											{SCORE_OPTIONS.map((option) => (
												<label
													className={cn(
														"group flex cursor-pointer items-start gap-2 rounded-lg border p-2.5 transition-colors",
														"bg-stone-50 hover:border-primary-300 hover:bg-card",
														field.value === option.value &&
															"border-primary-500 bg-primary-50",
														fieldState.invalid && "border-destructive"
													)}
													htmlFor={`${question.id}-${option.value}`}
													key={option.value}
												>
													<RadioGroupItem
														aria-label={option.label}
														id={`${question.id}-${option.value}`}
														value={option.value.toString()}
													/>
													<div className="flex-1 space-y-0.5">
														<div className="font-semibold text-[13px] text-stone-900">
															{option.label}
														</div>
														{/* <div className="text-muted-foreground text-xs">{option.description}</div> */}
													</div>
												</label>
											))}
										</RadioGroup>
										{fieldState.invalid && (
											<p className="text-destructive text-sm" role="alert">
												Please select an option for this question.
											</p>
										)}
									</Field>
								)}
							/>
						))}
					</CardContent>
				</Card>
			))}
		</div>
	);
}
