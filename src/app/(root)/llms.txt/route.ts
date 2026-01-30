import { NextResponse } from "next/server";

import { env } from "@/lib/env/server";
import { listServices } from "@/modules/services/actions";

/**
 * GET /llms.txt - Generates a text file listing all websites implementing llms.txt
 * @returns Text response with website directory and resources
 */
export async function GET() {
  try {
    const services = listServices();
    const baseUrl = env.BASE_URL || "https://sphereitglobal.com";

    // Generate the text content following llms.txt specification
    let content = `# Sphere Global

> Sphere Global is a premier technology consulting and implementation partner specializing in digital transformation, banking solutions, and cutting-edge technology services. We help enterprises modernize their infrastructure, implement robust banking platforms, and leverage AI/ML technologies to drive business growth and operational excellence.

## About Sphere Global

Sphere Global provides comprehensive technology solutions including:
- Core banking platform implementation and management
- Digital transformation consulting and execution
- AI/ML integration and automation services
- Cybersecurity and infrastructure assurance
- Custom software development and system integration

Our team of experts delivers mission-critical solutions for financial institutions, enterprises, and government organizations worldwide.

## Services

Complete list of our core service offerings:\n\n`;

    // Add services with proper descriptions
    for (const website of services) {
      const serviceUrl = `${baseUrl}/services/${website.slug}`;
      const description = Array.isArray(website.description)
        ? website.description.join(" ")
        : website.description || "";

      content += `- [${website.badge.charAt(0).toUpperCase() + website.badge.slice(1)} - ${website.title}](${serviceUrl}/llms.txt): ${description}\n`;
    }

    // Add comprehensive resources section
    content += `\n## Resources

Comprehensive collection of insights, case studies, and research:\n\n`;
    content += `- [Blog Posts](${baseUrl}/resources/blogs/llms.txt): Latest insights, industry trends, and thought leadership articles on technology, banking, and digital transformation\n`;
    content += `- [Case Studies](${baseUrl}/resources/case-studies/llms.txt): Detailed success stories showcasing our implementations, challenges solved, and business outcomes achieved for clients across various industries\n`;
    content += `- [Research Papers](${baseUrl}/resources/research-papers/llms.txt): In-depth technical research, white papers, and analysis reports on emerging technologies, industry best practices, and innovation trends\n`;

    // Add company information section
    content += `\n## Company Information

Learn more about Sphere Global and connect with our team:\n\n`;
    content += `- [About Us](${baseUrl}/company/about/llms.txt): Our company history, mission, vision, leadership team, and what drives us to deliver excellence in technology solutions\n`;
    content += `- [Careers](${baseUrl}/company/careers/llms.txt): Join our team of experts - explore job opportunities, company culture, benefits, and career growth at Sphere Global\n`;
    content += `- [Contact Us](${baseUrl}/company/contact/llms.txt): Get in touch with our team for consultations, partnerships, or inquiries - multiple contact methods and office locations\n`;

    // Add support section
    content += `\n## Support & FAQ

Get help and find answers to common questions:\n\n`;
    content += `- [FAQ](${baseUrl}/resources/faqs/llms.txt): Frequently asked questions about our services, implementation process, support, pricing, and technical requirements\n`;
    content += `- [Support Center](${baseUrl}/company/contact/llms.txt): Technical support documentation, troubleshooting guides, and help resources for our clients\n`;

    // Add additional pages
    content += `\n## Additional Pages

Other important sections of our website:\n\n`;
    content += `- [News & Events](${baseUrl}/resources/blogs): Latest company news, press releases, upcoming events, webinars, and industry conference participation\n`;
    content += `- [Privacy Policy](${baseUrl}/legal/llms.txt): Our commitment to data protection, privacy practices, and how we handle client information\n`;
    content += `- [Terms of Service](${baseUrl}/legal/llms.txt): Service agreements, terms of engagement, and legal framework for our offerings\n`;

    // Add metadata section
    content += `\n## Metadata
Generated: ${new Date().toISOString()}
Total Services: ${services.length}
Format: LLMs.txt v1.0
Base URL: ${baseUrl}\n`;

    return new NextResponse(content, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "public, max-age=3600", // Cache for 1 hour
      },
    });
  } catch (error) {
    console.error("Error generating llms.txt:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
