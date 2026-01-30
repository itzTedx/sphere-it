import { NextResponse } from "next/server";

import config from "@payload-config";
import { getPayload } from "payload";

import { env } from "@/lib/env/server";

/**
 * GET /resources/case-studies/llms.txt - Generates llms.txt for case studies section
 * @returns Text response with case study content and links
 */
export async function GET() {
	try {
		const baseUrl = env.BASE_URL || "https://sphereitglobal.com";
		const caseStudiesUrl = `${baseUrl}/resources/case-studies`;

		// Fetch real data from Payload CMS
		const payload = await getPayload({ config });
		const caseStudies = await payload.find({
			collection: "case-studies",
			where: {
				_status: {
					equals: "published",
				},
			},
			sort: "-publishedAt",
			limit: 50,
		});

		// Generate the text content
		let content = `# Sphere Global Case Studies

> Detailed success stories showcasing our implementations, challenges solved, and business outcomes achieved for clients across banking, finance, and enterprise sectors worldwide.

## Published Case Studies

Our published case studies (${caseStudies.totalDocs} total):\n\n`;

		// Add actual case studies
		for (const caseStudy of caseStudies.docs) {
			const studyUrl = `${caseStudiesUrl}/${caseStudy.slug}`;
			const description = caseStudy.meta?.description || "";
			const publishedDate = caseStudy.publishedAt
				? new Date(caseStudy.publishedAt).toISOString().split("T")[0]
				: "";

			content += `- [${caseStudy.title}](${studyUrl}): ${description}\n`;
			if (publishedDate) {
				content += `  Published: ${publishedDate}\n`;
			}

			// Add highlights if available
			if (caseStudy.highlights && caseStudy.highlights.length > 0) {
				const highlights = caseStudy.highlights
					.map((h) =>
						h.label && h.value
							? `${h.label}: ${h.value}`
							: h.label || h.value || ""
					)
					.filter(Boolean)
					.slice(0, 3); // Limit to first 3 highlights
				if (highlights.length > 0) {
					content += `  Key Highlights: ${highlights.join(" | ")}\n`;
				}
			}

			// Add authors if available
			if (caseStudy.populatedAuthors && caseStudy.populatedAuthors.length > 0) {
				const authorNames = caseStudy.populatedAuthors
					.map((author) => author.name || "")
					.filter(Boolean)
					.join(", ");
				if (authorNames) {
					content += `  Authors: ${authorNames}\n`;
				}
			}

			content += "\n";
		}

		// Add related resources
		content += "## Related Resources\n\n";
		content += `- [Blog Posts](${baseUrl}/resources/blogs/llms.txt): Latest insights and best practices from our experts\n`;
		content += `- [Research Papers](${baseUrl}/resources/research-papers/llms.txt): In-depth technical research and analysis\n`;
		content += `- [Services](${baseUrl}/services/llms.txt): Detailed service descriptions and offerings\n`;
		content += `- [FAQ](${baseUrl}/resources/faqs/llms.txt): Common questions about our implementations\n`;

		// Add engagement section
		content += "## Learn From Our Experience\n\n";
		content += `- [Request Similar Case Study](${baseUrl}/contact): Get detailed case studies relevant to your industry\n`;
		content += `- [Schedule Consultation](${baseUrl}/contact): Discuss how we can replicate success for your organization\n`;
		content += `- [Download Implementation Guide](${baseUrl}/contact): Get implementation guides based on our case studies\n`;

		// Add metadata
		content += `## Metadata
Section: Case Studies
Total Published: ${caseStudies.totalDocs}
Content Type: Success Stories & Implementation Examples
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
		console.error("Error generating case-studies llms.txt:", error);
		return NextResponse.json(
			{ error: "Internal Server Error" },
			{ status: 500 }
		);
	}
}
