import { NextResponse } from "next/server";

import { env } from "@/lib/env/server";
import { getServiceBySlug } from "@/modules/services/actions";

interface Props {
	params: Promise<{ slug: string }>;
}

/**
 * GET /services/[slug]/llms.txt - Generates llms.txt for individual service pages
 * @returns Text response with service-specific content and links
 */
export async function GET(_request: Request, { params }: Props) {
	try {
		const { slug } = await params;
		const service = await getServiceBySlug(slug);

		if (!service) {
			return NextResponse.json({ error: "Service not found" }, { status: 404 });
		}

		const baseUrl = env.BASE_URL || "https://sphereitglobal.com";
		const serviceUrl = `${baseUrl}/services/${slug}`;

		// Handle description formatting
		const description = Array.isArray(service.metadata.description)
			? service.metadata.description.join(" ")
			: service.metadata.description || "";

		// Generate the text content
		let content = `# ${service.metadata.title}

> ${description}

## Service Overview

This service is part of Sphere Global's comprehensive technology solutions portfolio, designed to help enterprises achieve digital transformation excellence and operational efficiency.

## Service Details

- **Category**: ${service.metadata.category}
- **Service Page**: ${serviceUrl}
- **Implementation**: Expert team with proven track record
- **Support**: 24/7 technical support and maintenance

## Key Features

${service.content ? `${service.content}` : "Comprehensive service implementation and management with expert support and proven methodologies."}

## Related Services

Explore our other services that complement this solution:\n\n`;

		// Add links to related services (you may want to implement actual related services logic)
		content += `- [Sphere Global Services](${baseUrl}/services/llms.txt): Complete list of all our service offerings\n`;
		content += `- [Case Studies](${baseUrl}/resources/case-studies/llms.txt): Success stories and implementations\n`;
		content += `- [Blog Posts](${baseUrl}/resources/blogs/llms.txt): Latest insights and best practices\n`;

		// Add contact information
		content += `\n## Get Started

Ready to implement this service for your organization?\n\n`;
		content += `- [Contact Us](${baseUrl}/contact/llms.txt): Get in touch with our experts\n`;
		content += `- [Schedule Consultation](${baseUrl}/contact): Book a free consultation call\n`;
		content += `- [Request Proposal](${baseUrl}/contact): Get a customized proposal\n`;

		// Add metadata
		content += `\n## Metadata
Service: ${service.metadata.title}
Slug: ${slug}
Category: ${service.metadata.category}
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
		console.error("Error generating service llms.txt:", error);
		return NextResponse.json(
			{ error: "Internal Server Error" },
			{ status: 500 }
		);
	}
}
