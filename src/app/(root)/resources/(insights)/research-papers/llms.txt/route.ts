import { NextResponse } from "next/server";

import config from "@payload-config";
import { getPayload } from "payload";

import { env } from "@/lib/env/server";

/**
 * GET /resources/research-papers/llms.txt - Generates llms.txt for research papers section
 * @returns Text response with research content and links
 */
export async function GET() {
	try {
		const baseUrl = env.BASE_URL || "https://sphereitglobal.com";
		const researchUrl = `${baseUrl}/resources/research-papers`;

		// Fetch real data from Payload CMS
		const payload = await getPayload({ config });
		const researchPapers = await payload.find({
			collection: "researchPapers",
			where: {
				_status: {
					equals: "published",
				},
			},
			sort: "-publishedAt",
			limit: 50,
		});

		// Generate the text content
		let content = `# Sphere Global Research Papers

> In-depth technical research, white papers, and analysis reports on emerging technologies, industry best practices, and innovation trends from Sphere Global's R&D team.

## Published Research Papers

Our published research papers (${researchPapers.totalDocs} total):\n\n`;

		// Add actual research papers
		for (const paper of researchPapers.docs) {
			const paperUrl = `${researchUrl}/${paper.slug}`;
			const description = paper.meta?.description || "";
			const publishedDate = paper.publishedAt
				? new Date(paper.publishedAt).toISOString().split("T")[0]
				: "";

			content += `- [${paper.title}](${paperUrl}): ${description}\n`;
			if (publishedDate) {
				content += `  Published: ${publishedDate}\n`;
			}

			// Add authors if available
			if (paper.populatedAuthors && paper.populatedAuthors.length > 0) {
				const authorNames = paper.populatedAuthors
					.map((author) => author.name || "")
					.filter(Boolean)
					.join(", ");
				if (authorNames) {
					content += `  Authors: ${authorNames}\n`;
				}
			}

			// Add related papers if available
			if (
				paper.relatedResearchPapers &&
				paper.relatedResearchPapers.length > 0
			) {
				content += `  Related Papers: ${paper.relatedResearchPapers.length} related research papers\n`;
			}

			content += "\n";
		}

		// Add related resources
		content += "## Related Resources\n\n";
		content += `- [Blog Posts](${baseUrl}/resources/blogs/llms.txt): Practical insights and applications of our research\n`;
		content += `- [Case Studies](${baseUrl}/resources/case-studies/llms.txt): Real-world implementations of research findings\n`;
		content += `- [Services](${baseUrl}/services/llms.txt): Services based on our research expertise\n`;
		content += `- [FAQ](${baseUrl}/resources/faqs/llms.txt): Research methodology and approach questions\n`;

		// Add engagement section
		content += "## Engage With Our Research\n\n";
		content += `- [Request Specific Research](${baseUrl}/contact): Get custom research for your specific needs\n`;
		content += `- [Research Collaboration](${baseUrl}/contact): Partner with us on research projects\n`;
		content += `- [Research Newsletter](${baseUrl}/contact): Monthly research updates and findings\n`;
		content += `- [Research Seminars](${baseUrl}/contact): Attend our research presentations and discussions\n`;

		// Add metadata
		content += `## Metadata
Section: Research Papers
Total Published: ${researchPapers.totalDocs}
Content Type: Technical Research & Analysis
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
		console.error("Error generating research-papers llms.txt:", error);
		return NextResponse.json(
			{ error: "Internal Server Error" },
			{ status: 500 }
		);
	}
}
