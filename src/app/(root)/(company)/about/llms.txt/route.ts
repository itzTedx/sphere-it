import { NextResponse } from "next/server";

import { env } from "@/lib/env/server";

/**
 * GET /about/llms.txt - Generates llms.txt for about page
 * @returns Text response with company information and links
 */
export async function GET() {
	try {
		const baseUrl = env.BASE_URL || "https://sphereitglobal.com";
		const aboutUrl = `${baseUrl}/about`;
		
		// Generate the text content
		let content = `# About Sphere Global

> Learn about Sphere Global's journey, mission, vision, and the team that drives excellence in technology consulting and implementation services worldwide.

## Company Overview

Sphere Global is a premier technology consulting and implementation partner with a proven track record of delivering transformative solutions to enterprises worldwide.\n\n`;

		// Add company sections
		content += `- [Our Story](${aboutUrl}/story): From inception to becoming a trusted technology partner for global enterprises\n`;
		content += `- [Mission & Vision](${aboutUrl}/mission): Our commitment to driving digital transformation and technological excellence\n`;
		content += `- [Core Values](${aboutUrl}/values): The principles that guide our operations, client relationships, and team culture\n`;
		content += `- [Leadership Team](${aboutUrl}/leadership): Meet our experienced executives and technology leaders\n`;

		// Add company achievements
		content += `\n## Achievements & Recognition

Our commitment to excellence has been recognized through:\n\n`;
		content += `- [Awards & Certifications](${aboutUrl}/awards): Industry recognition, quality certifications, and technology partnerships\n`;
		content += `- [Client Testimonials](${aboutUrl}/testimonials): Success stories and feedback from our valued clients\n`;
		content += `- [Industry Recognition](${aboutUrl}/recognition): Media coverage, industry rankings, and expert acknowledgments\n`;
		content += `- [Milestones](${aboutUrl}/milestones): Key achievements and growth milestones throughout our journey\n`;

		// Add global presence
		content += `\n## Global Presence

Our worldwide footprint and service capabilities:\n\n`;
		content += `- [Office Locations](${aboutUrl}/locations): Our global offices and service delivery centers\n`;
		content += `- [Regional Operations](${aboutUrl}/regions): How we serve different markets and regions effectively\n`;
		content += `- [Delivery Centers](${aboutUrl}/delivery): Our development centers and support facilities\n`;
		content += `- [Partner Network](${baseUrl}/partners/llms.txt): Our global ecosystem of technology partners\n`;

		// Add expertise areas
		content += `\n## Areas of Expertise

Our core competencies and specialized knowledge:\n\n`;
		content += `- [Technology Stack](${aboutUrl}/technologies): Our expertise across modern technology platforms and frameworks\n`;
		content += `- [Industry Domains](${aboutUrl}/industries): Deep domain knowledge in banking, finance, healthcare, and more\n`;
		content += `- [Service Methodologies](${aboutUrl}/methodologies): Our proven approaches to project delivery and client success\n`;
		content += `- [Inovation Labs](${aboutUrl}/innovation): Our R&D initiatives and cutting-edge technology exploration\n`;

		// Add company culture
		content += `\n## Our Culture & People

What makes Sphere Global a great place to work:\n\n`;
		content += `- [Work Environment](${aboutUrl}/culture): Our collaborative, innovative, and growth-oriented workplace\n`;
		content += `- [Diversity & Inclusion](${aboutUrl}/diversity): Our commitment to creating an inclusive and diverse team\n`;
		content += `- [Learning & Development](${aboutUrl}/learning): Continuous learning opportunities and skill development programs\n`;
		content += `- [Employee Stories](${aboutUrl}/stories): Experiences and insights from our team members\n`;

		// Add related information
		content += `\n## Related Information

More ways to learn about Sphere Global:\n\n`;
		content += `- [Careers](${baseUrl}/careers/llms.txt): Join our team and grow your career with us\n`;
		content += `- [Services](${baseUrl}/services/llms.txt): Explore our comprehensive service offerings\n`;
		content += `- [Case Studies](${baseUrl}/resources/case-studies/llms.txt): See our work in action\n`;
		content += `- [Blog](${baseUrl}/resources/blogs/llms.txt): Insights from our experts and thought leaders\n`;

		// Add contact and engagement
		content += `\n## Connect With Us

Reach out and learn more about Sphere Global:\n\n`;
		content += `- [Contact Us](${baseUrl}/contact/llms.txt): Get in touch with our team for inquiries and partnerships\n`;
		content += `- [Schedule Meeting](${baseUrl}/contact): Book a consultation with our experts\n`;
		content += `- [Follow on LinkedIn](${baseUrl}/social/linkedin): Professional updates and company news\n`;
		content += `- [Subscribe Newsletter](${baseUrl}/newsletter): Stay updated with our latest news and insights\n`;

		// Add metadata
		content += `\n## Metadata
Section: About Sphere Global
Content Type: Company Information
Total Sections: 6
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
