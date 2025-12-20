import { NextResponse } from "next/server";

import { listServices } from "@/modules/services/actions";

/**
 * GET /llms.txt - Generates a text file listing all websites implementing llms.txt
 * @returns Text response with website directory and resources
 */
export async function GET() {
	try {
		const services = listServices();
		// Generate the text content
		let content = `# LLMs.txt Hub Directory

## Overview
This is an automatically generated list of all websites implementing llms.txt, along with related blog posts and resources.

## Services
The following services have implemented llms.txt:\n\n`;

		// Add websites
		for (const website of services) {
			content += `- [${website.title}](${website.slug})${website.description ? `: ${website.description}` : ""}\n`;
		}

		return new NextResponse(content, {
			headers: {
				"Content-Type": "text/plain",
			},
		});
	} catch {
		return NextResponse.json(
			{ error: "Internal Server Error" },
			{ status: 500 }
		);
	}
}
