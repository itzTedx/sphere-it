import { NextResponse } from "next/server";

import { env } from "@/lib/env/server";
import { getMethodologyPageGlobal } from "@/modules/global/methodology";

/**
 * GET /methodology/llms.txt - Generates llms.txt for methodology page
 * @returns Text response with A.X.I.S methodology information
 */
export async function GET() {
	try {
		const baseUrl = env.BASE_URL || "https://sphereitglobal.com";
		const methodologyUrl = `${baseUrl}/company/methodology`;

		const pageData = await getMethodologyPageGlobal();
		const hero = pageData?.hero;
		const valueProposition = pageData?.valueProposition;
		const phaseItems = pageData?.phases?.items ?? [];

		const title = hero?.title ?? "A.X.I.S Methodology";
		const subtitle =
			hero?.subtitle ?? "Tested and proven Sphere methodology for excellence";
		const overview =
			valueProposition?.description ??
			"AXIS Methodology is a proven, structured, and data-driven framework designed to deliver clarity, predictability, and measurable outcomes for the clients. With precision and pragmatism at its core, AXIS enables faster decisions, predictable delivery, and strong business value.";

		const ctaLabel = hero?.ctaLink?.label ?? "Get Started";
		let ctaUrl = `${baseUrl}/services`;

		if (hero?.ctaLink?.type === "page" && hero.ctaLink.page) {
			ctaUrl = `${baseUrl}${hero.ctaLink.page}`;
		} else if (hero?.ctaLink?.type === "custom" && hero.ctaLink.url) {
			ctaUrl = hero.ctaLink.url.startsWith("http")
				? hero.ctaLink.url
				: `${baseUrl}${hero.ctaLink.url}`;
		}

		let content = `# ${title}

> ${subtitle}

## Methodology Overview

${overview}\n\n`;

		// Main methodology links
		content += `- [Main Methodology Page](${methodologyUrl}): Complete overview of A.X.I.S methodology and its value proposition\n`;
		content += `- [${ctaLabel}](${ctaUrl}): Apply A.X.I.S methodology to your technology projects\n`;

		// Methodology phases
		content += "\n## A.X.I.S Framework Phases\n\n";

		if (phaseItems.length > 0) {
			content += `The ${
				phaseItems.length
			}-phase methodology that ensures project success:\n\n`;

			for (const phase of phaseItems) {
				content += `### ${phase.title}\n\n`;
				content += `${phase.description}\n\n`;
			}
		} else {
			content += "The four-phase methodology that ensures project success:\n\n";
			content += "### Assess\n\n";
			content +=
				"Provides complete clarity and confidence by precisely defining the problem, scope, risks, success metrics, and stakeholder expectations.\n\n";
			content += "### eXplore\n\n";
			content +=
				"Delivers evidence-backed feasibility, stress-tested options, predictable cost and effort insights, and early validation before major implementation investment.\n\n";
			content += "### Implement\n\n";
			content +=
				"Ensures faster time to value through disciplined execution, structured governance, transparent progress checkpoints, and seamless integration.\n\n";
			content += "### Sustain\n\n";
			content +=
				"Enables long-term reliability with continuous performance monitoring, data-backed insights, governance rhythms, and proactive enhancements.\n\n";
		}

		// Metadata
		content += `## Metadata
Section: A.X.I.S Methodology
Content Source: Payload CMS (global: methodology-page)
Content Type: Methodology Framework & Process Documentation
Framework Phases: ${phaseItems.length || 4}
Primary Focus: Technology Consulting & Project Delivery
Generated: ${new Date().toISOString()}
Format: LLMs.txt v1.1
Base URL: ${baseUrl}\n`;

		return new NextResponse(content, {
			headers: {
				"Content-Type": "text/plain; charset=utf-8",
				"Cache-Control": "public, max-age=3600",
			},
		});
	} catch (error) {
		console.error("Error generating methodology llms.txt:", error);
		return NextResponse.json(
			{ error: "Internal Server Error" },
			{ status: 500 }
		);
	}
}
