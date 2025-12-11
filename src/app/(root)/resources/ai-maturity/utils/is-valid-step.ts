export type Step = "questionnaire" | "user-info" | "results";

const STEP_OPTIONS: Step[] = ["questionnaire", "user-info", "results"];

export const isValidStep = (value: string | null): value is Step => {
	return value !== null && STEP_OPTIONS.includes(value as Step);
};
