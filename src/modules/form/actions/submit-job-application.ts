"use server";

import { sendEmail } from "@/lib/emails";
import {
	default as JobApplicationEmail,
	JobApplicationPlainText,
} from "@/lib/emails/templates/job-application";

import { jobApplicationSchema } from "../validators/job-application-schema";

export async function submitJobApplication(formData: FormData) {
	try {
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
				details: validatedFields.error.flatten().fieldErrors,
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
