"use server";

import { cookies } from "next/headers";

import config from "@payload-config";
import { getPayload } from "payload";

import { sendEmail } from "@/lib/emails";
import EnquiryFormEmail from "@/lib/emails/templates/enquiry-form";
import InquiryReact, {
	InquiryPlainText,
} from "@/lib/emails/templates/quick-enquiry";
import { env } from "@/lib/env/server";

import { checkRateLimit } from "../utils/rate-limiter";
import { EnquireType, QuickEnquireType } from "../validators/enquiry-schema";

export async function sendEnquiryEmail(data: QuickEnquireType, route: string) {
	try {
		// Check rate limit
		const rateLimitResult = await checkRateLimit("enquiry");
		if (!rateLimitResult.success) {
			return rateLimitResult;
		}
		const messageText =
			data.message || `This enquiry was submitted from the ${route} page.`;

		// Store in Payload
		const payload = await getPayload({ config });
		await payload.create({
			collection: "enquiries",
			data: {
				name: data.name,
				email: data.email,
				phone: data.phone ?? undefined,
				message: messageText,
				source: route,
			},
		});

		await sendEmail({
			receiver: env.RECEIVER_EMAIL,
			email: data.email,
			subject: `New Research Paper Enquiry - ${data.name}`,
			text: InquiryPlainText({
				name: data.name,
				email: data.email,
				phone: data.phone || "Not provided",
				message: messageText,
			}),
			react: InquiryReact({
				name: data.name,
				email: data.email,
				phone: data.phone || "Not provided",
				message: messageText,
			}),
		});

		if (route.includes("Research Paper")) {
			const cookieStore = await cookies();
			cookieStore.set("research-paper-access", "granted", {
				httpOnly: true,
				secure: process.env.NODE_ENV === "production",
				sameSite: "lax",
				maxAge: 60 * 60 * 24 * 7,
				path: "/",
			});
		}

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

		// Store in Payload
		const payload = await getPayload({ config });
		await payload.create({
			collection: "enquiries",
			data: {
				name: data.name,
				email: data.email,
				phone: data.phone ?? undefined,
				subject: data.subject ?? undefined,
				message: data.message,
			},
		});

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
