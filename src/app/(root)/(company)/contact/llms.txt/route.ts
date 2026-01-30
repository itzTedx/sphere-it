import { NextResponse } from "next/server";

import { env } from "@/lib/env/server";

/**
 * GET /contact/llms.txt - Generates llms.txt for contact page
 * @returns Text response with contact information and communication channels
 */
export async function GET() {
	try {
		const baseUrl = env.BASE_URL || "https://sphereitglobal.com";
		const contactUrl = `${baseUrl}/contact`;

		// Generate the text content
		let content = `# Contact Sphere Global

> Get in touch with our team of technology experts. Whether you're looking for consulting services, partnership opportunities, or have questions about our solutions, we're here to help you transform your business through technology.

## Contact Information

Reach out to Sphere Global through our main contact page:\n\n`;

		// Add main contact page
		content += `- [Main Contact Page](${contactUrl}): Complete contact form and information for all inquiries\n`;
		content += `- [Schedule Consultation](${contactUrl}): Book a free consultation with our technology experts\n`;
		content += `- [Request Proposal](${contactUrl}): Get a customized proposal for your specific technology needs\n`;

		// Add service-specific contacts
		content += `\n## Service Inquiries

Connect with our service teams:\n\n`;
		content +=
			"- Platform Assurance: High-availability systems and managed services inquiries\n";
		content +=
			"- Process Automation: RPA and workflow optimization consulting\n";
		content +=
			"- AI & Analytics: Machine learning and data analytics solutions\n";
		content +=
			"- Digital Transformation: Legacy modernization and cloud migration\n";
		content +=
			"- Security & Compliance: Security assessments and compliance frameworks\n";

		// Add industry-specific contacts
		content += `\n## Industry Expertise

Specialized teams for different sectors:\n\n`;
		content +=
			"- Banking & Financial Services: Core banking and digital banking solutions\n";
		content += "- Insurance: Policy management and claims processing systems\n";
		content += "- Enterprise & Manufacturing: ERP and supply chain solutions\n";
		content +=
			"- Government & Public Sector: E-governance and public sector digitalization\n";

		// Add partnership and business opportunities
		content += `\n## Business Opportunities

Explore partnership and collaboration:\n\n`;
		content +=
			"- Technology Partnerships: Integration and technology alliance opportunities\n";
		content +=
			"- Channel Partners: Reseller and referral partnership programs\n";
		content +=
			"- Strategic Alliances: Long-term strategic partnership opportunities\n";
		content +=
			"- Academic Collaborations: Research and development partnerships\n";

		// Add related resources
		content += `\n## Additional Resources

More ways to engage with Sphere Global:\n\n`;
		content += `- [About Us](${baseUrl}/company/about/llms.txt): Learn more about our company and expertise\n`;
		content += `- [Services](${baseUrl}/services/llms.txt): Explore our comprehensive service offerings\n`;
		content += `- [Case Studies](${baseUrl}/resources/case-studies/llms.txt): See our work and success stories\n`;
		content += `- [Blog](${baseUrl}/resources/blogs/llms.txt): Latest insights from our technology experts\n`;
		content += `- [Careers](${baseUrl}/company/careers/llms.txt): Join our team of technology professionals\n`;
		content += `- [FAQ](${baseUrl}/resources/faqs/llms.txt): Find answers to common questions\n`;

		// Add engagement
		content += `\n## Next Steps

Ready to start your transformation journey:\n\n`;
		content += "- Contact our team for a free initial consultation\n";
		content += "- Schedule a discovery call to discuss your specific needs\n";
		content += "- Request a detailed proposal for your project requirements\n";
		content += "- Explore our case studies to see similar implementations\n";
		content += "- Follow us for the latest technology insights and updates\n";

		// Add metadata
		content += `\n## Metadata
Section: Contact Sphere Global
Content Type: Contact Information & Business Inquiries
Primary Focus: Technology Consulting & Implementation Services
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
		console.error("Error generating contact llms.txt:", error);
		return NextResponse.json(
			{ error: "Internal Server Error" },
			{ status: 500 }
		);
	}
}
