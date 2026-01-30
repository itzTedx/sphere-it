import { NextResponse } from "next/server";

import config from "@payload-config";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { convertLexicalToPlaintext } from "@payloadcms/richtext-lexical/plaintext";
import { getPayload } from "payload";

import { env } from "@/lib/env/server";

/**
 * GET /testimonials/llms.txt - Generates llms.txt for testimonials page
 * @returns Text response with employee testimonials and company culture information
 */
export async function GET() {
	try {
		const baseUrl = env.BASE_URL || "https://sphereitglobal.com";

		// Fetch real data from Payload CMS
		const payload = await getPayload({ config });
		const testimonials = await payload.find({
			collection: "employeeTestimonials",
			where: {
				_status: {
					equals: "published",
				},
			},
			sort: "-createdAt",
			limit: 50,
		});

		// Generate the text content
		let content = `# Employee Testimonials - Sphere Global

> Real experiences and insights from our team members about working at Sphere Global. Discover our culture, growth opportunities, and what makes Sphere Global a great place to build your career in technology consulting.

## Employee Experiences

What our team members say about working at Sphere Global (${testimonials.totalDocs} testimonials):\n\n`;

		// Add actual testimonials from Payload CMS
		for (const testimonial of testimonials.docs) {
			const jobRole = testimonial.jobRole ? ` - ${testimonial.jobRole}` : "";

			content += `### ${testimonial.name}${jobRole}\n\n`;

			// Extract text content from the rich text content using Payload's converter
			if (testimonial.content) {
				const plainText = convertLexicalToPlaintext({
					data: testimonial.content as SerializedEditorState,
				});

				if (plainText.trim()) {
					content += `${plainText.trim()}\n\n`;
				}
			}
		}

		// Add culture and values section
		content += `## Our Culture & Values

Key aspects of working at Sphere Global:\n\n`;
		content +=
			"- **Collaborative Environment**: Team-based approach to solving complex technology challenges\n";
		content +=
			"- **Continuous Learning**: Opportunities for professional growth and skill development\n";
		content +=
			"- **Innovation Focus**: Encouragement to explore new technologies and creative solutions\n";
		content +=
			"- **Client-Centric Mindset**: Focus on delivering exceptional value to enterprise clients\n";
		content +=
			"- **Work-Life Balance**: Support for maintaining healthy work-life integration\n";
		content +=
			"- **Diverse Projects**: Exposure to various industries and technology stacks\n\n";

		// Add career growth section
		content += `## Career Growth & Development

How we support our employees' professional journey:\n\n`;
		content +=
			"- **Training Programs**: Regular skill development and certification opportunities\n";
		content +=
			"- **Mentorship**: Guidance from experienced technology leaders and consultants\n";
		content +=
			"- **Project Leadership**: Opportunities to lead and manage complex implementations\n";
		content +=
			"- **Industry Exposure**: Work with leading enterprises across different sectors\n";
		content +=
			"- **Technology Innovation**: Access to cutting-edge tools and methodologies\n";
		content +=
			"- **Career Pathing**: Clear progression routes and advancement opportunities\n\n";

		// Add work environment section
		content += `## Work Environment

What makes Sphere Global a great workplace:\n\n`;
		content +=
			"- **Modern Office Spaces**: Well-equipped facilities designed for collaboration\n";
		content +=
			"- **Flexible Work Options**: Hybrid and remote work arrangements where possible\n";
		content +=
			"- **Team Activities**: Regular team building and social events\n";
		content +=
			"- **Open Communication**: Transparent leadership and open-door policy\n";
		content +=
			"- **Recognition Programs**: Acknowledgment of achievements and contributions\n";
		content +=
			"- **Supportive Culture**: Environment that encourages asking questions and sharing ideas\n\n";

		// Add related resources
		content += `## Related Resources

Learn more about careers and opportunities at Sphere Global:\n\n`;
		content += `- [Careers](${baseUrl}/company/careers/llms.txt): Current job openings and career opportunities\n`;
		content += `- [About Us](${baseUrl}/company/about/llms.txt): Learn more about our company and mission\n`;
		content += `- [Services](${baseUrl}/services/llms.txt): Explore our technology consulting services\n`;
		content += `- [Methodology](${baseUrl}/company/methodology/llms.txt): Our A.X.I.S approach to project delivery\n`;
		content += `- [Contact Us](${baseUrl}/company/contact/llms.txt): Get in touch with our team\n`;
		content += `- [Blog](${baseUrl}/resources/blogs/llms.txt): Insights from our technology experts\n\n`;

		// Add call to action
		content += `## Join Our Team

Ready to be part of Sphere Global's success story:\n\n`;
		content += "- Explore current openings on our careers page\n";
		content += "- Connect with our recruiters on LinkedIn\n";
		content += "- Attend our recruitment events and webinars\n";
		content += "- Schedule a conversation with our team\n";
		content += "- Share your own Sphere Global experience\n\n";

		// Add metadata
		content += `## Metadata
Section: Employee Testimonials
Content Type: Employee Experiences & Company Culture
Total Testimonials: ${testimonials.totalDocs}
Focus: Technology Consulting Careers
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
		console.error("Error generating testimonials llms.txt:", error);
		return NextResponse.json(
			{ error: "Internal Server Error" },
			{ status: 500 }
		);
	}
}
