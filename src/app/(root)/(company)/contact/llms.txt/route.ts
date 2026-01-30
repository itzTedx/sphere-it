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

## Get in Touch

Multiple ways to connect with our team:\n\n`;

		// Add contact methods
		content += `- [Contact Form](${contactUrl}/form): Send us a message directly through our secure contact form\n`;
		content += `- [Schedule Consultation](${contactUrl}/consultation): Book a free consultation with our technology experts\n`;
		content += `- [Request Proposal](${contactUrl}/proposal): Get a customized proposal for your specific needs\n`;
		content += `- [General Inquiries](${contactUrl}/inquiries): For general questions and information requests\n`;

		// Add office locations
		content += `\n## Office Locations

Visit us at our global offices:\n\n`;
		content += `- [Headquarters](${contactUrl}/hq): Main office location and corporate headquarters\n`;
		content += `- [Regional Offices](${contactUrl}/regional): Our offices across different regions and countries\n`;
		content += `- [Delivery Centers](${contactUrl}/delivery): Development centers and support facilities\n`;
		content += `- [Sales Offices](${contactUrl}/sales): Regional sales and client meeting locations\n`;

		// Add specific inquiry types
		content += `\n## Inquiry Types

Connect with the right team for your needs:\n\n`;
		content += `- [Sales & Solutions](${contactUrl}/sales): For service inquiries, pricing, and solution discussions\n`;
		content += `- [Technical Support](${contactUrl}/support): For existing clients needing technical assistance\n`;
		content += `- [Partnerships](${contactUrl}/partnerships): For business partnership and alliance opportunities\n`;
		content += `- [Media & Press](${contactUrl}/media): For media inquiries and press relations\n`;
		content += `- [Careers & HR](${contactUrl}/hr): For job applications and HR-related questions\n`;

		// Add communication channels
		content += `\n## Communication Channels

Reach out through your preferred channel:\n\n`;
		content += `- [Phone Support](${contactUrl}/phone): Direct phone lines for different regions and departments\n`;
		content += `- [Email Contacts](${contactUrl}/email): Email addresses for various departments and inquiries\n`;
		content += `- [Live Chat](${contactUrl}/chat): Real-time chat support during business hours\n`;
		content += `- [Video Conferencing](${contactUrl}/video): Schedule video calls with our consultants\n`;

		// Add business hours
		content += `\n## Business Hours

When you can reach us:\n\n`;
		content += `- [Global Business Hours](${contactUrl}/hours): Our operating hours across different time zones\n`;
		content += `- [Emergency Support](${contactUrl}/emergency): 24/7 emergency contact for critical issues\n`;
		content += `- [Appointment Scheduling](${contactUrl}/appointments): Schedule meetings outside regular hours\n`;
		content += `- [Holiday Schedule](${contactUrl}/holidays): Office closures and holiday schedules\n`;

		// Add response times
		content += `\n## Response Times

What to expect when you contact us:\n\n`;
		content += `- [Response SLA](${contactUrl}/sla): Our service level agreements and response time commitments\n`;
		content += `- [Emergency Response](${contactUrl}/emergency-response): Priority handling for urgent matters\n`;
		content += `- [Follow-up Process](${contactUrl}/followup): How we handle follow-up communications\n`;
		content += `- [Escalation Process](${contactUrl}/escalation): How urgent matters are escalated appropriately\n`;

		// Add social media
		content += `\n## Social Media

Connect with us on social platforms:\n\n`;
		content += `- [LinkedIn](${baseUrl}/social/linkedin): Professional updates and company news\n`;
		content += `- [Twitter](${baseUrl}/social/twitter): Real-time updates and industry insights\n`;
		content += `- [Facebook](${baseUrl}/social/facebook): Company updates and community engagement\n`;
		content += `- [YouTube](${baseUrl}/social/youtube): Video content, webinars, and presentations\n`;

		// Add newsletter and updates
		content += `\n## Stay Updated

Keep in touch with our latest news and insights:\n\n`;
		content += `- [Newsletter Subscription](${baseUrl}/newsletter): Subscribe to our monthly newsletter\n`;
		content += `- [Blog Updates](${baseUrl}/resources/blogs/llms.txt): Latest insights from our experts\n`;
		content += `- [Event Notifications](${baseUrl}/events): Get notified about webinars and events\n`;
		content += `- [Product Updates](${baseUrl}/updates): Latest service announcements and enhancements\n`;

		// Add specific services contact
		content += `\n## Service-Specific Contacts

Reach out to our specialized teams:\n\n`;
		content += `- [Banking Solutions](${contactUrl}/banking): Contact our banking and FinTech experts\n`;
		content += `- [Cloud Services](${contactUrl}/cloud): Get in touch with our cloud architecture team\n`;
		content += `- [AI/ML Solutions](${contactUrl}/aiml): Connect with our artificial intelligence specialists\n`;
		content += `- [Security Services](${contactUrl}/security): Contact our cybersecurity and compliance team\n`;

		// Add international support
		content += `\n## International Support

Global contact options:\n\n`;
		content += `- [Multi-language Support](${contactUrl}/languages): Support available in multiple languages\n`;
		content += `- [Regional Contacts](${contactUrl}/regional-contacts): Local representatives in your region\n`;
		content += `- [International Projects](${contactUrl}/international): For cross-border and multinational projects\n`;
		content += `- [Time Zone Coordination](${contactUrl}/timezones): Coordinating across different time zones\n`;

		// Add related information
		content += `\n## Additional Resources

More ways to engage with Sphere Global:\n\n`;
		content += `- [About Us](${baseUrl}/about/llms.txt): Learn more about our company and expertise\n`;
		content += `- [Services](${baseUrl}/services/llms.txt): Explore our comprehensive service offerings\n`;
		content += `- [Case Studies](${baseUrl}/resources/case-studies/llms.txt): See our work and success stories\n`;
		content += `- [FAQ](${baseUrl}/faq/llms.txt): Find answers to common questions\n`;

		// Add metadata
		content += `\n## Metadata
Section: Contact Information
Content Type: Communication Channels & Support
Contact Methods: 15+
Global Locations: Multiple
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
