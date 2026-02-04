"use server";

import { sendEmail } from "@/lib/emails";
import InquiryReact, {
	InquiryPlainText,
} from "@/lib/emails/templates/quick-enquiry";

import { checkRateLimit } from "../utils/rate-limiter";
import { deckSchema } from "../validators/deck-schema";

export async function submitDeckDownload(data: unknown) {
	try {
		// Check rate limit
		const rateLimitResult = await checkRateLimit("deckDownload");
		if (!rateLimitResult.success) {
			return rateLimitResult;
		}

		// Validate the data
		const validatedData = deckSchema.parse(data);

		// Send email notification
		await sendEmail({
			email: validatedData.email,
			subject: "New Intro Deck Download Request ",
			react: InquiryReact({
				name: validatedData.name,
				email: validatedData.email,
				phone: validatedData.phone || "Not provided",
				message: "Requested to download the intro deck.",
			}),
			text: InquiryPlainText({
				name: validatedData.name,
				email: validatedData.email,
				phone: validatedData.phone || "Not provided",
				message: "Requested to download the intro deck.",
			}),
		});

		return { success: true, name: validatedData.name };
	} catch (error) {
		console.error("Error submitting deck download form:", error);
		return {
			success: false,
			error: error instanceof Error ? error.message : "Failed to submit form",
			rateLimited: false,
		};
	}
}
