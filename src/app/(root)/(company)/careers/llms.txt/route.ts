import { NextResponse } from "next/server";

import config from "@payload-config";
import { getPayload } from "payload";

import { env } from "@/lib/env/server";

/**
 * GET /careers/llms.txt - Generates llms.txt for careers page
 * @returns Text response with career opportunities and company culture information
 */
export async function GET() {
	try {
		const baseUrl = env.BASE_URL || "https://sphereitglobal.com";
		const careersUrl = `${baseUrl}/careers`;

		// Fetch real data from Payload CMS
		const payload = await getPayload({ config });
		const careers = await payload.find({
			collection: "careers",
			where: {
				_status: {
					equals: "published",
				},
			},
			sort: "-createdAt",
			limit: 50,
		});

		// Fetch departments
		const departments = await payload.find({
			collection: "departments",
		});

		// Fetch employee testimonials
		const testimonials = await payload.find({
			collection: "employeeTestimonials",
			where: {
				_status: {
					equals: "published",
				},
			},
			limit: 10,
		});

		// Generate the text content
		let content = `# Careers at Sphere Global

> Join our team of technology experts and innovators. Explore career opportunities, company culture, and growth prospects at Sphere Global, where we're transforming businesses through cutting-edge technology solutions.

## Open Positions

Current job opportunities (${careers.totalDocs} available):\n\n`;

		// Add actual job positions
		for (const career of careers.docs) {
			const jobUrl = `${careersUrl}/${career.id}`;
			const description = career.description || career.meta?.description || "";
			const location = career.location || "Remote";
			const workMode =
				career.workMode && career.workMode.length > 0
					? career.workMode.join(", ")
					: "On-site";
			const validUntil = career.validUntil
				? new Date(career.validUntil).toISOString().split("T")[0]
				: "";

			content += `- [${career.title}](${jobUrl}): ${description}\n`;
			content += `  Location: ${location} | Work Mode: ${workMode}\n`;
			if (validUntil) {
				content += `  Valid Until: ${validUntil}\n`;
			}
			if (
				career.department &&
				typeof career.department === "object" &&
				career.department !== null
			) {
				const deptName =
					(career.department as { department?: string }).department || "";
				if (deptName) {
					content += `  Department: ${deptName}\n`;
				}
			}
			content += "\n";
		}

		// Add departments section
		if (departments.totalDocs > 0) {
			content += "## Departments\n\n";
			for (const department of departments.docs) {
				content += `- [${department.department}](${careersUrl}?department=${department.slug}): Career opportunities in ${department.department} department\n`;
			}
			content += "\n";
		}

		// Add employee testimonials
		if (testimonials.totalDocs > 0) {
			content += "## Employee Testimonials\n\n";
			for (const testimonial of testimonials.docs) {
				const jobRole = testimonial.jobRole ? ` - ${testimonial.jobRole}` : "";
				content += `- ${testimonial.name}${jobRole}: Works at Sphere Global\n`;
			}
			content += "\n";
		}

		// Add related information
		content += "## Related Information\n\n";
		content += `- [About Us](${baseUrl}/company/about/llms.txt): Learn more about our company and mission\n`;
		content += `- [Services](${baseUrl}/services/llms.txt): Explore our comprehensive service offerings\n`;
		content += `- [Blog](${baseUrl}/resources/blogs/llms.txt): Insights from our experts and thought leaders\n`;
		content += `- [Contact Us](${baseUrl}/company/contact/llms.txt): Get in touch with our team\n`;

		// Add engagement
		content += "## Connect With Our Team\n\n";
		content += `- [Apply Now](${careersUrl}): Submit your application and join our talent pool\n`;
		content += `- [Contact HR](${baseUrl}/company/contact): Reach out to our HR team with questions\n`;
		content += `- [Follow on LinkedIn](${baseUrl}/social/linkedin): Career updates and company news\n`;

		// Add metadata
		content += `## Metadata
Section: Careers
Open Positions: ${careers.totalDocs}
Departments: ${departments.totalDocs}
Testimonials: ${testimonials.totalDocs}
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
		console.error("Error generating careers llms.txt:", error);
		return NextResponse.json(
			{ error: "Internal Server Error" },
			{ status: 500 }
		);
	}
}
