import { NextResponse } from "next/server";

import { env } from "@/lib/env/server";

/**
 * GET /about/llms.txt - Generates llms.txt for about page
 * @returns Text response with company information and links
 */
export async function GET() {
	try {
		const baseUrl = env.BASE_URL || "https://sphereitglobal.com";
		const aboutUrl = `${baseUrl}/company/about`;

		// Generate the text content
		let content = `# About Sphere Global

> Sphere Global is a premier technology consulting and implementation partner specializing in digital transformation, cloud solutions, and enterprise software development for banking, finance, and enterprise sectors worldwide.

## Company Overview

Sphere Global delivers cutting-edge technology solutions that help enterprises modernize their operations, enhance customer experiences, and achieve digital excellence through innovative consulting and implementation services.\n\n`;

		// Add core services and expertise
		content += `- [Main About Page](${aboutUrl}): Complete overview of Sphere Global's mission, vision, and company information\n`;
		content += `- [Services](${baseUrl}/services/llms.txt): Explore our comprehensive service offerings including platform assurance, process automation, AI augmentation, and digital elevation\n`;
		content += `- [Case Studies](${baseUrl}/resources/case-studies/llms.txt): Real-world implementations and success stories from our clients\n`;
		content += `- [Blog & Insights](${baseUrl}/resources/blogs/llms.txt): Latest thought leadership and industry insights from our experts\n`;

		// Add key focus areas
		content += `\n## Core Expertise Areas

Our primary technology and service focus:\n\n`;
		content +=
			"- Platform Assurance: High-availability systems, disaster recovery, and 24/7 managed services\n";
		content +=
			"- Process Automation: Workflow optimization, RPA implementations, and operational efficiency\n";
		content +=
			"- AI & Analytics: Machine learning models, predictive analytics, and data-driven insights\n";
		content +=
			"- Digital Transformation: Legacy modernization, cloud migration, and digital experience enhancement\n";
		content +=
			"- Security & Compliance: Security assessments, compliance frameworks, and risk management\n";

		// Add industry focus
		content += `\n## Industry Focus

Specialized expertise in key sectors:\n\n`;
		content +=
			"- Banking & Financial Services: Core banking, digital banking platforms, regulatory compliance\n";
		content +=
			"- Insurance: Policy management, claims processing, customer experience transformation\n";
		content +=
			"- Enterprise & Manufacturing: ERP implementations, supply chain optimization, Industry 4.0\n";
		content +=
			"- Government & Public Sector: E-governance, citizen services, public sector digitalization\n";

		// Add related resources
		content += "\n## Learn More About Sphere Global\n\n";
		content += `- [Careers](${baseUrl}/company/careers/llms.txt): Join our team of technology experts and innovators\n`;
		content += `- [Contact Us](${baseUrl}/company/contact/llms.txt): Get in touch with our team for consultations and partnerships\n`;
		content += `- [FAQ](${baseUrl}/resources/faqs/llms.txt): Common questions about our services and approach\n`;
		content += `- [Research Papers](${baseUrl}/resources/research-papers/llms.txt): In-depth technical research and analysis from our team\n`;

		// Add engagement
		content += "\n## Connect With Sphere Global\n\n";
		content +=
			"- Schedule a consultation to discuss your digital transformation needs\n";
		content += "- Explore our case studies to see real-world implementations\n";
		content +=
			"- Read our blog for the latest industry insights and best practices\n";
		content +=
			"- Contact our team to learn how we can help your organization\n";

		// Add metadata
		content += `\n## Metadata
Section: About Sphere Global
Content Type: Company Information & Overview
Primary Focus: Technology Consulting & Implementation
Industries Served: Banking, Finance, Enterprise, Government
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
		console.error("Error generating about llms.txt:", error);
		return NextResponse.json(
			{ error: "Internal Server Error" },
			{ status: 500 }
		);
	}
}
