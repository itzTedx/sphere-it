import { NextResponse } from "next/server";

import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { convertLexicalToPlaintext } from "@payloadcms/richtext-lexical/plaintext";

import { env } from "@/lib/env/server";
import { getAboutPageGlobal } from "@/modules/global/about";

/**
 * GET /about/llms.txt - Generates llms.txt for the about page
 * using live content from the Payload CMS global: about-page
 */
export async function GET() {
	try {
		const baseUrl = env.BASE_URL || "https://sphereitglobal.com";
		const aboutUrl = `${baseUrl}/company/about`;

		const data = await getAboutPageGlobal();
		const { hero, story, values, team, hiring, seo } = data ?? {};

		const lexicalToPlain = (value: unknown | null | undefined) => {
			if (!value) return "";

			try {
				const text = convertLexicalToPlaintext({
					data: value as SerializedEditorState,
				});

				return text.trim();
			} catch {
				return "";
			}
		};

		const heroTitle =
			lexicalToPlain(hero?.title) || "About Sphere IT - Technology & Talent";
		const heroDescription = lexicalToPlain(hero?.description);
		const storyContent = lexicalToPlain(story?.content);
		const valuesTitle = lexicalToPlain(values?.title);
		const teamTitle = lexicalToPlain(team?.title);
		const hiringTitle = lexicalToPlain(hiring?.title);

		let content = `# ${heroTitle}

`;

		if (heroDescription) {
			content += `> ${heroDescription}

`;
		}

		content += `## Company Overview

${
	storyContent ||
	"Sphere IT exists to remove complexity and make technology work for business, combining precision engineering with pragmatic execution."
}

`;

		content += `## Core Values

${valuesTitle || values?.badge || "Precision and Pragmatism"}

${values?.description || ""}

`;

		if (values?.items?.length) {
			content += "### How Our Values Show Up in Practice\n\n";
			for (const valueItem of values.items) {
				content += `- **${valueItem.title}**: ${valueItem.description}\n`;
			}
			content += "\n";
		}

		content += `## Our People

${teamTitle || team?.badge || "Our People, Our Precision"}

${team?.description || ""}

`;

		content += `## Careers at Sphere IT

${hiringTitle || hiring?.badge || "We're Hiring"}

${hiring?.description || ""}

`;

		if (hiring?.benefits?.length) {
			content += "### Why Join Sphere IT\n\n";
			for (const benefit of hiring.benefits) {
				content += `- ${benefit.text}\n`;
			}
			content += "\n";
		}

		// Key navigation links
		content += `## Key Links

- [Main About Page](${aboutUrl}): Full overview of Sphere IT, our mission, story, and values
- [Careers](${baseUrl}/company/careers/llms.txt): Explore open roles and opportunities
- [Methodology](${baseUrl}/company/methodology/llms.txt): Learn about our A.X.I.S delivery framework
- [Services](${baseUrl}/services/llms.txt): Explore our IT services, automation, AI, and managed offerings
- [Testimonials](${baseUrl}/company/testimonials/llms.txt): Hear from people who power Sphere IT

`;

		// Metadata
		content += `## Metadata
Section: About Sphere IT
Content Source: Payload CMS (global: about-page)
Meta Title: ${seo?.metaTitle || ""}
Meta Description: ${seo?.metaDescription || ""}
Primary Values: Precision, Pragmatism
Generated: ${new Date().toISOString()}
Format: LLMs.txt v1.1
Base URL: ${baseUrl}
`;

		return new NextResponse(content, {
			headers: {
				"Content-Type": "text/plain; charset=utf-8",
				"Cache-Control": "public, max-age=3600",
			},
		});
	} catch (error) {
		console.error("Error generating about llms.txt:", error);
		return NextResponse.json(
			{ error: "Internal Server Error" },
			{ status: 500 }
		);
	}
}
