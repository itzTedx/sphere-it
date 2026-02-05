"use server";

import { sendEmail } from "@/lib/emails";
import EnquiryFormEmail from "@/lib/emails/templates/enquiry-form";
import InquiryReact, {
	InquiryPlainText,
} from "@/lib/emails/templates/quick-enquiry";

import { checkRateLimit } from "../utils/rate-limiter";
import { EnquireType, QuickEnquireType } from "../validators/enquiry-schema";

export async function sendEnquiryEmail(data: QuickEnquireType, route: string) {
	try {
		// Check rate limit
		const rateLimitResult = await checkRateLimit("enquiry");
		if (!rateLimitResult.success) {
			return rateLimitResult;
		}
		const _emailContent = `
			New Research Paper Enquiry

			Name: ${data.name}
			Email: ${data.email}
			Phone: ${data.phone || "Not provided"}

			${data.message ? `Message: ${data.message}` : ""}
			---
			This enquiry was submitted from the ${route} page.
		`;

		await sendEmail({
			email: data.email,
			subject: `New Research Paper Enquiry - ${data.name}`,
			text: InquiryPlainText({
				name: data.name,
				email: data.email,
				phone: data.phone || "Not provided",
				message:
					data.message || `This enquiry was submitted from the ${route} page.`,
			}),
			react: InquiryReact({
				name: data.name,
				email: data.email,
				phone: data.phone || "Not provided",
				message:
					data.message || `This enquiry was submitted from the ${route} page.`,
			}),
		});

		return { success: true };
	} catch (error) {
		console.error("Error sending enquiry email:", error);
		return { success: false, error: "Failed to send email" };
	}
}

export async function sendFullEnquiry(data: EnquireType) {
	try {
		// Check rate limit
		const rateLimitResult = await checkRateLimit("enquiry");
		if (!rateLimitResult.success) {
			return rateLimitResult;
		}

		// Send email notification
		await sendEmail({
			email: data.email,
			subject: `New Enquiry: ${data.subject || "General Inquiry"} from ${data.name}`,
			react: EnquiryFormEmail({
				name: data.name,
				email: data.email,
				phone: data.phone,
				subject: data.subject,
				message: data.message,
			}),
		});

		return { success: true, message: "Enquiry submitted successfully" };
	} catch (error) {
		console.error("[DEBUG] Enquiry submission error:", error);

		// Handle validation errors
		if (error instanceof Error && error.message.includes("ZodError")) {
			return {
				success: false,
				message: "Invalid form data. Please check your inputs and try again.",
				error: error.message,
			};
		}

		// Handle email sending errors
		if (error instanceof Error) {
			return {
				success: false,
				message: "Failed to send enquiry. Please try again later.",
				error: error.message,
			};
		}

		// Generic error
		return {
			success: false,
			message: "An unexpected error occurred. Please try again.",
		};
	}
}
