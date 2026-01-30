import { NextResponse } from "next/server";

import config from "@payload-config";
import { getPayload } from "payload";

import { env } from "@/lib/env/server";

/**
 * GET /resources/blogs/llms.txt - Generates llms.txt for blog posts section
 * @returns Text response with blog content and links
 */
export async function GET() {
	try {
		const baseUrl = env.BASE_URL || "https://sphereitglobal.com";
		const blogsUrl = `${baseUrl}/resources/blogs`;

		// Fetch real data from Payload CMS
		const payload = await getPayload({ config });
		const blogs = await payload.find({
			collection: "blogs",
			where: {
				_status: {
					equals: "published",
				},
			},
			sort: "-publishedAt",
			limit: 50,
		});

		// Fetch categories
		const categories = await payload.find({
			collection: "blogCategories",
		});

		// Generate the text content
		let content = `# Sphere Global Blog Posts

> Latest insights, industry trends, and thought leadership articles from Sphere Global's expert team on technology, banking, digital transformation, and innovation.

## Published Blogs

Our published blog posts (${blogs.totalDocs} total):\n\n`;

		// Add actual blog posts
		for (const blog of blogs.docs) {
			const blogUrl = `${blogsUrl}/${blog.slug}`;
			const description = blog.description || blog.meta?.description || "";
			const publishedDate = blog.publishedAt
				? new Date(blog.publishedAt).toISOString().split("T")[0]
				: "";
			const featured = blog.isFeatured ? " (Featured)" : "";

			content += `- [${blog.title}](${blogUrl}): ${description}${featured ? ` ${featured}` : ""}\n`;
			if (publishedDate) {
				content += `  Published: ${publishedDate}\n`;
			}
			if (blog.blogCategories && blog.blogCategories.length > 0) {
				const categoryNames = blog.blogCategories
					.map((cat) => {
						if (typeof cat === "object" && cat !== null && "category" in cat) {
							return (cat as { category?: string }).category || "";
						}
						return "";
					})
					.filter(Boolean)
					.join(", ");
				if (categoryNames) {
					content += `  Categories: ${categoryNames}\n`;
				}
			}
			content += "\n";
		}

		// Add categories section if any exist
		if (categories.totalDocs > 0) {
			content += "## Blog Categories\n\n";
			for (const category of categories.docs) {
				content += `- [${category.category}](${blogsUrl}?category=${category.slug}): Blog posts in ${category.category} category\n`;
			}
			content += "\n";
		}

		// Add featured blogs section if any exist
		const featuredBlogs = blogs.docs.filter((blog) => blog.isFeatured);
		if (featuredBlogs.length > 0) {
			content += "## Featured Articles\n\n";
			for (const blog of featuredBlogs) {
				const blogUrl = `${blogsUrl}/${blog.slug}`;
				content += `- [${blog.title}](${blogUrl}): ${blog.description || blog.meta?.description || ""}\n`;
			}
			content += "\n";
		}

		// Add related resources
		content += "## Related Resources\n\n";
		content += `- [Case Studies](${baseUrl}/resources/case-studies/llms.txt): Real-world implementations and success stories\n`;
		content += `- [Research Papers](${baseUrl}/resources/research-papers/llms.txt): In-depth technical research and analysis\n`;
		content += `- [Services](${baseUrl}/services/llms.txt): Our comprehensive service offerings\n`;
		content += `- [FAQ](${baseUrl}/resources/faqs/llms.txt): Frequently asked questions\n`;

		// Add metadata
		content += `## Metadata
Section: Blog Posts
Total Published: ${blogs.totalDocs}
Total Categories: ${categories.totalDocs}
Content Type: Articles and Insights
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
		console.error("Error generating blogs llms.txt:", error);
		return NextResponse.json(
			{ error: "Internal Server Error" },
			{ status: 500 }
		);
	}
}
