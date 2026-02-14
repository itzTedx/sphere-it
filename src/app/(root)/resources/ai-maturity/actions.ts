"use server";

import config from "@payload-config";
import { getPayload } from "payload";

import type {
	AiMaturityQuestionnaireType,
	AiMaturityUserInfoType,
} from "@/modules/form/validators/ai-maturity-schema";
import { calculateMaturityScore } from "@/modules/form/validators/ai-maturity-schema";

export type SubmitAiMaturityResult =
	| { success: true; result: ReturnType<typeof calculateMaturityScore> }
	| { success: false; error: string };

export async function submitAiMaturityAssessment(
	userInfo: AiMaturityUserInfoType,
	questionnaire: AiMaturityQuestionnaireType
): Promise<SubmitAiMaturityResult> {
	try {
		const result = calculateMaturityScore(questionnaire);
		const payload = await getPayload({ config });

		await payload.create({
			collection: "ai-maturity-submissions",
			data: {
				name: userInfo.name,
				email: userInfo.email,
				company: userInfo.company,
				phone: userInfo.phone ?? undefined,
				q1: questionnaire.q1,
				q2: questionnaire.q2,
				q3: questionnaire.q3,
				q4: questionnaire.q4,
				q5: questionnaire.q5,
				q6: questionnaire.q6,
				q7: questionnaire.q7,
				q8: questionnaire.q8,
				q9: questionnaire.q9,
				q10: questionnaire.q10,
				q11: questionnaire.q11,
				q12: questionnaire.q12,
				q13: questionnaire.q13,
				q14: questionnaire.q14,
				q15: questionnaire.q15,
				totalScore: result.totalScore,
				percentage: result.percentage,
				level: result.level,
				description: result.description,
			},
		});

		return { success: true, result };
	} catch (err) {
		console.error("AI maturity submission error:", err);
		return {
			success: false,
			error: err instanceof Error ? err.message : "Failed to submit assessment",
		};
	}
}
