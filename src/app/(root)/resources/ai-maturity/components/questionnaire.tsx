"use client";

import { useState } from "react";

import { Controller, useFormContext } from "react-hook-form";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { cn } from "@/lib/utils";
import { AI_MATURITY_QUESTIONS } from "@/modules/form/ai-maturity-questions";
import type { AiMaturityQuestionnaireType } from "@/modules/form/validators/ai-maturity-schema";

const SCORE_OPTIONS = [
	{ value: 5, label: "Fully established", description: "Best" },
	{ value: 4, label: "Well established", description: "Good" },
	{ value: 3, label: "Partially established", description: "Moderate" },
	{ value: 2, label: "Emerging", description: "Early stage" },
	{ value: 0, label: "Not established", description: "Needs work" },
] as const;

const QUESTIONS = AI_MATURITY_QUESTIONS;

interface QuestionnaireProps {
	className?: string;
}

export function Questionnaire({ className }: QuestionnaireProps) {
	const { control, trigger } = useFormContext<AiMaturityQuestionnaireType>();
	const [currentStep, setCurrentStep] = useState(0);

	const currentCategory = QUESTIONS[currentStep];
	const isLastStep = currentStep === QUESTIONS.length - 1;
	const isFirstStep = currentStep === 0;

	const handleNext = async () => {
		const fieldsToValidate = currentCategory.questions.map((q) => q.id);
		const isValid = await trigger(fieldsToValidate);

		if (isValid) {
			setCurrentStep((prev) => Math.min(prev + 1, QUESTIONS.length - 1));
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	};

	const handlePrev = () => {
		setCurrentStep((prev) => Math.max(prev - 1, 0));
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<div className={cn("space-y-6", className)}>
			{/* Stepper Indicator */}

			{/* <div className="flex items-center justify-between">
				{QUESTIONS.map((category, index) => {
					const isCompleted = index < currentStep;
					const isCurrent = index === currentStep;

					return (
						<div className="flex flex-1 items-center" key={category.categoryId}>
							<div
								className={cn(
									"flex flex-col items-center gap-2",
									index !== QUESTIONS.length - 1 && "w-full"
								)}
							>
								<div className="flex w-full items-center">
									<div
										className={cn(
											"flex size-8 shrink-0 items-center justify-center rounded-full border-2 font-semibold text-sm transition-colors",
											isCompleted || isCurrent
												? "border-primary-600 bg-primary-600 text-white"
												: "border-stone-200 bg-white text-stone-400"
										)}
									>
										{index + 1}
									</div>
									{index !== QUESTIONS.length - 1 && (
										<div
											className={cn(
												"mx-2 h-0.5 w-full flex-1",
												isCompleted ? "bg-primary-600" : "bg-stone-200"
											)}
										/>
									)}
								</div>
								<span
									className={cn(
										"absolute mt-10 hidden w-full text-center font-medium text-xs sm:block",
										isCurrent ? "text-primary-700" : "text-stone-500"
									)}
								>
									{category.category}
								</span>
							</div>
						</div>
					);
				})}
			</div> */}

			<Card className="mt-8">
				<CardHeader className="flex items-center gap-2 border-b bg-stone-50/50 p-6">
					<div className="flex items-center gap-3">
						<Badge
							className="flex aspect-square size-8 items-center justify-center text-base"
							variant="secondary"
						>
							{currentStep + 1}
						</Badge>
						<CardTitle className="text-primary-900">
							{currentCategory.category}
						</CardTitle>
					</div>
				</CardHeader>
				<CardContent className="space-y-8 p-6">
					{currentCategory.questions.map((question) => (
						<Controller
							control={control}
							key={question.id}
							name={question.id}
							render={({ field, fieldState }) => (
								<Field className="space-y-3" data-invalid={fieldState.invalid}>
									<FieldLabel
										className="font-medium text-base text-stone-900"
										htmlFor={question.id}
									>
										{question.question}
									</FieldLabel>

									<RadioGroup
										aria-label={question.question}
										className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5"
										onValueChange={(value) =>
											field.onChange(Number.parseInt(value, 10))
										}
										value={field.value?.toString()}
									>
										{SCORE_OPTIONS.map((option) => (
											<label
												className={cn(
													"group relative flex cursor-pointer flex-col gap-1.5 rounded-lg border p-3 transition-all duration-200",
													"hover:border-primary-300 hover:bg-primary-50/30 hover:shadow-sm",
													field.value === option.value
														? "border-primary-600 bg-primary-50 ring-1 ring-primary-600"
														: "border-stone-200 bg-white",
													fieldState.invalid &&
														"border-destructive/50 bg-destructive/5"
												)}
												htmlFor={`${question.id}-${option.value}`}
												key={option.value}
											>
												<div className="flex items-center justify-between">
													<span className="font-semibold text-sm text-stone-900">
														{option.label}
													</span>
													<RadioGroupItem
														aria-label={option.label}
														className="data-[state=checked]:border-primary-600 data-[state=checked]:text-primary-600"
														id={`${question.id}-${option.value}`}
														value={option.value.toString()}
													/>
												</div>
											</label>
										))}
									</RadioGroup>
									{fieldState.invalid && (
										<p
											className="flex items-center gap-1.5 font-medium text-destructive text-sm"
											role="alert"
										>
											<span className="size-1 rounded-full bg-destructive" />
											Please select an option
										</p>
									)}
								</Field>
							)}
						/>
					))}
				</CardContent>
			</Card>

			<div className="flex items-center justify-between pt-4">
				<Button
					className={cn(isFirstStep && "invisible")}
					disabled={isFirstStep}
					onClick={handlePrev}
					size="lg"
					type="button"
					variant="outline"
				>
					Previous
				</Button>

				{isLastStep ? (
					<Button className="min-w-[140px]" size="lg" type="submit">
						Submit for Results
					</Button>
				) : (
					<Button
						className="min-w-[140px]"
						onClick={handleNext}
						size="lg"
						type="button"
					>
						Next Step
					</Button>
				)}
			</div>
		</div>
	);
}
