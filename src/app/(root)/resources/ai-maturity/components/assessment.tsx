"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { parseAsString, useQueryState } from "nuqs";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import {
	type AiMaturityQuestionnaireType,
	type AiMaturityUserInfoType,
	aiMaturityQuestionnaireSchema,
	aiMaturityUserInfoSchema,
	calculateMaturityScore,
} from "@/modules/form/validators/ai-maturity-schema";

import { submitAiMaturityAssessment } from "../actions";
import { isValidStep, Step } from "../utils/is-valid-step";
import { Questionnaire } from "./questionnaire";
import { Results } from "./results";
import { UserInfoForm } from "./user-info-form";

export function AiMaturityAssessment() {
	return (
		<NuqsAdapter>
			<AiMaturityAssessmentContent />
		</NuqsAdapter>
	);
}

function AiMaturityAssessmentContent() {
	const [stepParam, setStep] = useQueryState(
		"step",
		parseAsString.withDefault("questionnaire").withOptions({ history: "push" })
	);

	// Ensure step is always a valid Step type
	const step: Step = isValidStep(stepParam) ? stepParam : "questionnaire";
	const [maturityResult, setMaturityResult] = useState<ReturnType<
		typeof calculateMaturityScore
	> | null>(null);
	const [userName, setUserName] = useState<string>("");
	const [isSubmitting, setIsSubmitting] = useState(false);

	const questionnaireForm = useForm<AiMaturityQuestionnaireType>({
		resolver: zodResolver(aiMaturityQuestionnaireSchema),
		mode: "onBlur",
		defaultValues: {
			q1: undefined,
			q2: undefined,
			q3: undefined,
			q4: undefined,
			q5: undefined,
			q6: undefined,
			q7: undefined,
			q8: undefined,
			q9: undefined,
			q10: undefined,
			q11: undefined,
			q12: undefined,
			q13: undefined,
			q14: undefined,
			q15: undefined,
		},
	});

	const userInfoForm = useForm<AiMaturityUserInfoType>({
		resolver: zodResolver(aiMaturityUserInfoSchema),
		mode: "onBlur",
	});

	const handleQuestionnaireSubmit = () => {
		setStep("user-info");
	};

	const handleQuestionnaireError = () => {
		toast.error("Please fill all fields", {
			description: "All questions must be answered before proceeding.",
		});
	};

	const handleUserInfoSubmit = async (data: AiMaturityUserInfoType) => {
		setIsSubmitting(true);
		setUserName(data.name);

		try {
			const questionnaireData = questionnaireForm.getValues();
			const response = await submitAiMaturityAssessment(
				data,
				questionnaireData
			);

			if (response.success) {
				setMaturityResult(response.result);
				setStep("results");
				toast.success("Assessment completed successfully!", {
					description: "Your AI maturity results are ready.",
				});
			} else {
				toast.error("Something went wrong", {
					description: response.error,
				});
			}
		} catch {
			toast.error("Something went wrong", {
				description: "Please try again later.",
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleUserInfoError = () => {
		toast.error("Please fill all fields", {
			description: "All required fields must be completed before submitting.",
		});
	};

	return (
		<>
			{/* Progress Indicator */}
			{step !== "results" && (
				<div className="flex items-center justify-center gap-2">
					<div
						className={`flex size-7 items-center justify-center rounded-full font-semibold text-sm ${
							step === "questionnaire"
								? "bg-primary-600 text-white"
								: "bg-primary-100 text-primary-600"
						}`}
					>
						1
					</div>
					<div
						className={`h-0.5 w-8 ${step === "user-info" ? "bg-primary-600" : "bg-stone-200"}`}
					/>
					<div
						className={`flex size-7 items-center justify-center rounded-full font-semibold text-sm ${
							step === "user-info"
								? "bg-primary-600 text-white"
								: "bg-stone-200 text-stone-500"
						}`}
					>
						2
					</div>
				</div>
			)}

			{/* Step Content */}
			{step === "questionnaire" && (
				<FormProvider {...questionnaireForm}>
					<form
						onSubmit={questionnaireForm.handleSubmit(
							handleQuestionnaireSubmit,
							handleQuestionnaireError
						)}
					>
						<Questionnaire />
					</form>
				</FormProvider>
			)}

			{step === "user-info" && (
				<FormProvider {...userInfoForm}>
					<UserInfoForm
						isSubmitting={isSubmitting}
						onSubmit={userInfoForm.handleSubmit(
							handleUserInfoSubmit,
							handleUserInfoError
						)}
					>
						<Button
							onClick={() => {
								setStep("questionnaire");
							}}
							variant="outline"
						>
							Back to Assessment
						</Button>
					</UserInfoForm>
				</FormProvider>
			)}

			{step === "results" && maturityResult && (
				<div className="space-y-6">
					<Results result={maturityResult} userName={userName} />
					<Card>
						<CardHeader className="p-6">
							<CardTitle className="font-semibold text-primary-900">
								What's Next?
							</CardTitle>
							<CardDescription>
								Ready to improve your AI maturity? Let's discuss how we can help
								your organization advance.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="flex flex-col gap-3 sm:flex-row">
								<Button asChild size="lg">
									<a href="/contact">Get in Touch</a>
								</Button>
								<Button
									onClick={() => {
										setStep("questionnaire");
										questionnaireForm.reset();
										userInfoForm.reset();
										setMaturityResult(null);
										setUserName("");
									}}
									size="lg"
									variant="outline"
								>
									Take Assessment Again
								</Button>
							</div>
						</CardContent>
					</Card>
				</div>
			)}
		</>
	);
}
