import z from "zod";

// Question scores are 1-5 (1 = best, 5 = worst)
const questionScore = z
  .number({
    error: "Please select an option for this question",
  })
  .int()
  .min(1, { message: "Please select an option for this question" })
  .max(5, { message: "Please select an option for this question" });

export const aiMaturityQuestionnaireSchema = z.object({
  // Strategy & Leadership Alignment (Q1-5)
  q1: questionScore, // AI strategy exists
  q2: questionScore, // Strategy approved
  q3: questionScore, // Success tracking
  q4: questionScore, // Budget allocation
  q5: questionScore, // Leadership ownership

  // Data Foundation & Integration (Q6-10)
  q6: questionScore, // Data catalogued
  q7: questionScore, // Data accuracy
  q8: questionScore, // Unified data platform
  q9: questionScore, // Governance compliant
  q10: questionScore, // Easy data access

  // Technology & Architecture (Q11-13)
  q11: questionScore, // LLM/GenAI policies
  q12: questionScore, // Infrastructure
  q13: questionScore, // MLOps/AIOps

  // Governance & Risk (Q14-15)
  q14: questionScore, // AI governance
  q15: questionScore, // Responsible AI training
});

export const aiMaturityUserInfoSchema = z.object({
  name: z
    .string({
      error: (issue) => {
        if (issue.input === undefined) return "Name is required";
        return "Name must be a valid string";
      },
    })
    .min(2, { error: "Name must be at least 2 characters" })
    .max(100, { error: "Name must be less than 100 characters" })
    .transform((val) => val.trim())
    .refine((val) => val.length >= 2, { error: "Name must be at least 2 characters after trimming" }),
  email: z
    .email({
      error: "Please enter a valid email address",
      pattern: z.regexes.email,
    })
    .min(2, { error: "Email is required" })
    .max(100, { error: "Email must be less than 100 characters" })
    .toLowerCase(),
  company: z
    .string({
      error: (issue) => {
        if (issue.input === undefined) return "Company name is required";
        return "Company name must be a valid string";
      },
    })
    .min(2, { error: "Company name must be at least 2 characters" })
    .max(100, { error: "Company name must be less than 100 characters" })
    .transform((val) => val.trim())
    .refine((val) => val.length >= 2, { error: "Company name must be at least 2 characters after trimming" }),
  phone: z
    .string()
    .optional()
    .refine((val) => !val || /^[\+]?[0-9\s\-\(\)]{7,20}$/.test(val), { error: "Please enter a valid phone number" }),
});

export type AiMaturityQuestionnaireType = z.infer<typeof aiMaturityQuestionnaireSchema>;
export type AiMaturityUserInfoType = z.infer<typeof aiMaturityUserInfoSchema>;

// Maturity level calculation
export type MaturityLevel = "Foundation" | "Developing" | "Progressive" | "Advanced";

export interface MaturityResult {
  totalScore: number;
  percentage: number;
  level: MaturityLevel;
  description: string;
}

export function calculateMaturityScore(answers: AiMaturityQuestionnaireType): MaturityResult {
  const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0);
  const percentage = (totalScore / 75) * 100;

  let level: MaturityLevel;
  let description: string;

  if (percentage <= 30) {
    level = "Foundation";
    description =
      "Early thinking and scattered actions. Basic awareness but no coordinated movement. High opportunity for structured interventions.";
  } else if (percentage <= 50) {
    level = "Developing";
    description =
      "Some progress and active initiatives. Gaps in consistency, governance, and adoption. Teams are experimenting but not scaling.";
  } else if (percentage <= 75) {
    level = "Progressive";
    description =
      "Strong organizational commitment. Data and platforms improving. Clear governance beginning to form. Ready for structured scaling.";
  } else {
    level = "Advanced";
    description =
      "AI is embedded in processes. Leadership and data foundations are strong. Governance is mature. Organization is positioned to scale with confidence.";
  }

  return {
    totalScore,
    percentage: Math.round(percentage * 100) / 100, // Round to 2 decimal places
    level,
    description,
  };
}
