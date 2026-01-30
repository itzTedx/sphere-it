import { NextResponse } from "next/server";

import config from "@payload-config";
import { getPayload } from "payload";

import { env } from "@/lib/env/server";

/**
 * GET /faq/llms.txt - Generates llms.txt for FAQ page
 * @returns Text response with frequently asked questions and answers
 */
export async function GET() {
	try {
		const baseUrl = env.BASE_URL || "https://sphereitglobal.com";
		const faqUrl = `${baseUrl}/resources/faqs`;

		// Fetch real data from Payload CMS
		const payload = await getPayload({ config });
		const faqs = await payload.find({
			collection: "faqs",
			limit: 100,
		});

		// Fetch FAQ categories
		const categories = await payload.find({
			collection: "faq-categories",
		});

		// Generate the text content
		let content = `# Sphere Global FAQ

> Find answers to frequently asked questions about our services, implementation process, support, pricing, and technical requirements. Get the information you need to make informed decisions about your technology projects.

## Frequently Asked Questions

Our most common questions (${faqs.totalDocs} total):\n\n`;

		// Add actual FAQs
		for (const faq of faqs.docs) {
			content += `Q: ${faq.question}\n`;
			content += `A: ${faq.content}\n\n`;
		}

		// Add categories section if any exist
		if (categories.totalDocs > 0) {
			content += "## FAQ Categories\n\n";
			for (const category of categories.docs) {
				content += `- [${category.category}](${faqUrl}?category=${category.slug}): Questions about ${category.category}\n`;
			}
			content += "\n";
		}

		// Add related information
		content += "## Additional Resources\n\n";
		content += `- [Contact Support](${baseUrl}/company/contact/llms.txt): Get personalized help from our team\n`;
		content += `- [Support Center](${baseUrl}/company/contact/llms.txt): Extensive documentation and guides\n`;
		content += `- [Blog Posts](${baseUrl}/resources/blogs/llms.txt): Tips, tricks, and best practices\n`;
		content += `- [Case Studies](${baseUrl}/resources/case-studies/llms.txt): Real-world examples and implementations\n`;

		// Add engagement
		content += "## Still Need Help?\n\n";
		content += `- [Ask a Question](${baseUrl}/company/contact): Submit your own question if not answered here\n`;
		content += `- [Live Chat](${baseUrl}/company/contact): Real-time chat with our support team\n`;
		content += `- [Schedule Consultation](${baseUrl}/company/contact): Book a call with our experts\n`;

		// Add metadata
		content += `## Metadata
Section: Frequently Asked Questions
Total Questions: ${faqs.totalDocs}
Categories: ${categories.totalDocs}
Content Type: Q&A and Support Information
Generated: ${new Date().toISOString()}
Format: LLMs.txt v1.0
Base URL: ${baseUrl}\n`;

		return new NextResponse(content, {
			headers: {
				"Content-Type": "text/plain; charset=utf-8",
				"Cache-Control": "public, max-age=3600",
			},
		});
	} catch (error) {
		console.error("Error generating faq llms.txt:", error);
		return NextResponse.json(
			{ error: "Internal Server Error" },
			{ status: 500 }
		);
	}
}
