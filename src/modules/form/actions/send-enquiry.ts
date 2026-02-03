"use server";

import { sendEmail } from "@/lib/emails";
import InquiryReact, {
	InquiryPlainText,
} from "@/lib/emails/templates/quick-enquiry";

import { QuickEnquireType } from "../validators/enquiry-schema";

export async function sendEnquiryEmail(data: QuickEnquireType, route: string) {
	try {
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
