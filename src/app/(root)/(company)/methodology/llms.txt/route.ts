import { NextResponse } from "next/server";

import { env } from "@/lib/env/server";

/**
 * GET /methodology/llms.txt - Generates llms.txt for methodology page
 * @returns Text response with A.X.I.S methodology information
 */
export async function GET() {
	try {
		const baseUrl = env.BASE_URL || "https://sphereitglobal.com";
		const methodologyUrl = `${baseUrl}/company/methodology`;

		// Generate the text content
		let content = `# A.X.I.S Methodology

> Sphere Global's tested and proven methodology for excellence - a structured, data-driven framework designed to deliver clarity, predictability, and measurable outcomes for technology consulting projects.

## Methodology Overview

A.X.I.S Methodology is a proven, structured, and data-driven framework that delivers precision, predictability, and strong business value through faster decisions and predictable delivery.\n\n`;

		// Add main methodology page
		content += `- [Main Methodology Page](${methodologyUrl}): Complete overview of A.X.I.S methodology and its value proposition\n`;
		content += `- [Get Started](${baseUrl}/services/llms.txt): Apply A.X.I.S methodology to your technology projects\n`;

		// Add methodology phases
		content += `\n## A.X.I.S Framework Phases

The four-phase methodology that ensures project success:\n\n`;

		// Assess phase
		content += "### Assess Phase\n\n";
		content +=
			"Provides complete clarity and confidence by precisely defining the problem, scope, risks, success metrics, and stakeholder expectations.\n\n";
		content += "- Problem definition and scope clarification\n";
		content += "- Risk assessment and mitigation planning\n";
		content += "- Success metrics and KPI establishment\n";
		content += "- Stakeholder expectation alignment\n";
		content += "- Current state analysis and roadmap development\n\n";

		// eXplore phase
		content += "### eXplore Phase\n\n";
		content +=
			"Delivers evidence-backed feasibility, stress-tested options, predictable cost and effort insights, and early validation before major implementation investment.\n\n";
		content += "- Feasibility studies and technical validation\n";
		content += "- Solution option stress testing\n";
		content += "- Cost and effort estimation\n";
		content += "- Early proof of concept development\n";
		content += "- Scalability and environment alignment assessment\n\n";

		// Implement phase
		content += "### Implement Phase\n\n";
		content +=
			"Ensures faster time to value through disciplined execution, structured governance, transparent progress checkpoints, and seamless integration.\n\n";
		content += "- Disciplined project execution\n";
		content += "- Structured governance and oversight\n";
		content += "- Transparent progress tracking and checkpoints\n";
		content += "- Cross-team coordination and integration\n";
		content += "- On-time, stable deployment management\n\n";

		// Sustain phase
		content += "### Sustain Phase\n\n";
		content +=
			"Enables long-term reliability with continuous performance monitoring, data-backed insights, governance rhythms, and proactive enhancements.\n\n";
		content += "- Continuous performance monitoring\n";
		content += "- Data-driven insights and analytics\n";
		content += "- Governance rhythms and compliance\n";
		content += "- Proactive system enhancements\n";
		content += "- Future scalability planning\n\n";

		// Add methodology benefits
		content += "## Key Benefits\n\n";
		content += "Why A.X.I.S methodology delivers superior results:\n\n";
		content +=
			"- **Precision**: Clear problem definition and scope management\n";
		content +=
			"- **Predictability**: Evidence-based cost and timeline estimates\n";
		content += "- **Risk Mitigation**: Early validation and stress testing\n";
		content +=
			"- **Quality Assurance**: Structured governance and checkpoints\n";
		content +=
			"- **Long-term Success**: Continuous monitoring and enhancement\n";
		content +=
			"- **Stakeholder Alignment**: Clear communication and expectation management\n\n";

		// Add applicable domains
		content += "## Applicable Domains\n\n";
		content +=
			"A.X.I.S methodology applies across various technology domains:\n\n";
		content += "- Digital Transformation Projects\n";
		content += "- Cloud Migration and Modernization\n";
		content += "- AI and Machine Learning Implementations\n";
		content += "- Process Automation Initiatives\n";
		content += "- Enterprise System Integration\n";
		content += "- Security and Compliance Projects\n";
		content += "- Performance Optimization Programs\n\n";

		// Add related resources
		content += "## Related Resources\n\n";
		content += "Learn more about our services and approach:\n\n";
		content += `- [Services](${baseUrl}/services/llms.txt): Detailed service offerings using A.X.I.S methodology\n`;
		content += `- [Case Studies](${baseUrl}/resources/case-studies/llms.txt): Examples of A.X.I.S methodology in action\n`;
		content += `- [About Us](${baseUrl}/company/about/llms.txt): Learn about Sphere Global's expertise\n`;
		content += `- [Contact Us](${baseUrl}/company/contact/llms.txt): Discuss how A.X.I.S can help your projects\n`;
		content += `- [Blog](${baseUrl}/resources/blogs/llms.txt): Insights on methodology best practices\n\n`;

		// Add engagement
		content += "## Apply A.X.I.S to Your Projects\n\n";
		content +=
			"Ready to experience predictable, successful technology implementations:\n\n";
		content += "- Schedule a methodology consultation with our experts\n";
		content += "- Request a project assessment using A.X.I.S framework\n";
		content += "- Explore case studies of successful A.X.I.S implementations\n";
		content += "- Get a customized implementation plan for your project\n";
		content += "- Learn about training programs for your team\n\n";

		// Add metadata
		content += `## Metadata
Section: A.X.I.S Methodology
Content Type: Methodology Framework & Process Documentation
Framework Phases: 4 (Assess, eXplore, Implement, Sustain)
Primary Focus: Technology Consulting & Project Delivery
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
		console.error("Error generating methodology llms.txt:", error);
		return NextResponse.json(
			{ error: "Internal Server Error" },
			{ status: 500 }
		);
	}
}
