"use server";

import z from "zod";

import { sendEmail } from "@/lib/emails";
import {
	default as JobApplicationEmail,
	JobApplicationPlainText,
} from "@/lib/emails/templates/job-application";
import { env } from "@/lib/env/server";

import { checkRateLimit } from "../utils/rate-limiter";
import { jobApplicationSchema } from "../validators/job-application-schema";

export async function submitJobApplication(formData: FormData) {
	try {
		// Check rate limit
		const rateLimitResult = await checkRateLimit("jobApplication");
		if (!rateLimitResult.success) {
			return rateLimitResult;
		}

		// Extract basic fields
		const rawData = {
			name: formData.get("name"),
			email: formData.get("email"),
			phone: formData.get("phone"),
			location: formData.get("location"),
			department: formData.get("department"),
			preferredWorkMode: formData.get("preferredWorkMode"),
			message: formData.get("message"),
		};

		// Validate data
		const validatedFields = jobApplicationSchema.safeParse(rawData);

		if (!validatedFields.success) {
			return {
				success: false,
				error: "Invalid form data.",
				details: z.prettifyError(validatedFields.error),
				rateLimited: false,
			};
		}

		const data = validatedFields.data;
		const resumeFile = formData.get("resume") as File | null;

		const attachments = [];
		if (resumeFile && resumeFile.size > 0) {
			const buffer = Buffer.from(await resumeFile.arrayBuffer());
			attachments.push({
				filename: resumeFile.name,
				content: buffer,
			});
		}

		await sendEmail({
			receiver: env.CAREERS_EMAIL,
			email: data.email,
			subject: `Job Application: ${data.name} - ${data.department || "General"}`,
			react: JobApplicationEmail({
				name: data.name,
				email: data.email,
				phone: data.phone,
				location: data.location,
				department: data.department,
				preferredWorkMode: data.preferredWorkMode,
				message: data.message,
			}),
			text: JobApplicationPlainText({
				name: data.name,
				email: data.email,
				phone: data.phone,
				location: data.location,
				department: data.department,
				preferredWorkMode: data.preferredWorkMode,
				message: data.message,
			}),
			attachments,
		});

		return { success: true };
	} catch (error) {
		console.error("Failed to submit job application:", error);
		return {
			success: false,
			error: "Failed to send application. Please try again later.",
		};
	}
}
