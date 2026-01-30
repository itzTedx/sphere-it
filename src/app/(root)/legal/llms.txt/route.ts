import { NextResponse } from "next/server";

import { env } from "@/lib/env/server";

/**
 * GET /legal/llms.txt - Generates llms.txt for legal section
 * @returns Text response with legal policies and compliance information
 */
export async function GET() {
	try {
		const baseUrl = env.BASE_URL || "https://sphereitglobal.com";
		const legalUrl = `${baseUrl}/legal`;

		// Generate the text content
		let content = `# Sphere Global Legal & Compliance

> Comprehensive legal policies, terms of service, privacy protections, and compliance information for Sphere Global's technology consulting services and digital platforms.

## Legal Framework

Our legal policies and compliance framework:\n\n`;

		// Add legal pages that actually exist
		content += `- [Main Legal Page](${legalUrl}): Overview of all legal policies and compliance information\n`;
		content += `- [Privacy Policy](${legalUrl}/privacy): Complete privacy policy covering data collection, usage, and user rights\n`;
		content += `- [Data Protection Policy](${legalUrl}/data-protection): Comprehensive data protection framework and security measures\n`;
		content += `- [Terms of Service](${legalUrl}/terms-of-services): Website usage terms and service agreements\n`;
		content += `- [Acceptable Use Policy](${legalUrl}/acceptable-use-policy): Guidelines for acceptable use of our services and platforms\n`;

		// Add privacy and data protection section
		content += `\n## Privacy & Data Protection

Our commitment to data privacy and protection:\n\n`;
		content += `- **Privacy Policy** (${legalUrl}/privacy): Comprehensive coverage of personal data handling, collection, and processing\n`;
		content += `- **Data Protection Policy** (${legalUrl}/data-protection): Technical and organizational measures for data security\n`;
		content +=
			"- **GDPR Compliance**: Full compliance with EU General Data Protection Regulation\n";
		content +=
			"- **Data Subject Rights**: Clear procedures for data access, correction, and deletion requests\n";
		content +=
			"- **Data Breach Procedures**: Established protocols for security incident response\n";
		content +=
			"- **International Data Transfers**: Framework for cross-border data transfers\n";

		// Add terms and usage section
		content += `\n## Terms & Usage

Legal terms for using our services and platforms:\n\n`;
		content += `- **Terms of Service** (${legalUrl}/terms-of-services): Complete terms for website usage and service engagement\n`;
		content += `- **Acceptable Use Policy** (${legalUrl}/acceptable-use-policy): Guidelines for appropriate use of our technology services\n`;
		content +=
			"- **Service Definitions**: Clear definitions of our consulting services and deliverables\n";
		content +=
			"- **User Responsibilities**: Obligations and responsibilities for service users\n";
		content +=
			"- **Intellectual Property**: Rights and protections for intellectual property\n";
		content +=
			"- **Limitation of Liability**: Legal limitations and disclaimers\n";
		content +=
			"- **Limitation of Liability**: Legal limitations and disclaimers\n";

		// Add compliance section
		content += `\n## Compliance & Standards

Our commitment to legal and regulatory compliance:\n\n`;
		content +=
			"- **Industry Regulations**: Compliance with technology and consulting industry standards\n";
		content +=
			"- **Security Standards**: Adherence to cybersecurity best practices and frameworks\n";
		content +=
			"- **Professional Ethics**: Commitment to professional ethical standards\n";
		content +=
			"- **Contract Compliance**: Ensuring all contractual obligations are met\n";
		content +=
			"- **Audit Readiness**: Maintaining documentation for regulatory audits\n";
		content +=
			"- **Continuous Improvement**: Regular updates to policies and procedures\n";

		// Add user rights section
		content += `\n## User Rights & Responsibilities

Your rights and responsibilities when using our services:\n\n`;
		content +=
			"- **Data Access Rights**: Right to access and review your personal data\n";
		content +=
			"- **Correction Rights**: Right to correct inaccurate personal information\n";
		content +=
			"- **Deletion Rights**: Right to request deletion of personal data\n";
		content +=
			"- **Portability Rights**: Right to transfer data to other services\n";
		content +=
			"- **Consent Management**: Control over data processing consents\n";
		content +=
			"- **Complaint Procedures**: Process for raising privacy or service concerns\n";

		// Add contact and support section
		content += `\n## Legal Contact & Support

How to reach us for legal matters:\n\n`;
		content +=
			"- **Legal Department**: Contact our legal team for policy questions\n";
		content +=
			"- **Data Protection Officer**: Reach out for data protection and privacy matters\n";
		content +=
			"- **Compliance Team**: Contact for regulatory compliance inquiries\n";
		content +=
			"- **Emergency Legal Issues**: Procedures for urgent legal matters\n";
		content +=
			"- **Third-Party Rights**: Process for third-party rights and DMCA requests\n";
		content +=
			"- **Law Enforcement**: Procedures for law enforcement requests\n";

		// Add related resources
		content += `\n## Related Resources

Additional legal and compliance information:\n\n`;
		content += `- [About Us](${baseUrl}/company/about/llms.txt): Learn about our company and values\n`;
		content += `- [Contact Us](${baseUrl}/company/contact/llms.txt): Get in touch with our team\n`;
		content += `- [Careers](${baseUrl}/company/careers/llms.txt): Join our team of professionals\n`;
		content += `- [Services](${baseUrl}/services/llms.txt): Explore our technology consulting services\n`;
		content += `- [Methodology](${baseUrl}/company/methodology/llms.txt): Our A.X.I.S approach to project delivery\n`;

		// Add policy updates section
		content += `\n## Policy Updates

How we keep our legal policies current:\n\n`;
		content +=
			"- **Regular Reviews**: Quarterly reviews of all legal policies\n";
		content +=
			"- **Regulatory Monitoring**: Continuous monitoring of legal and regulatory changes\n";
		content +=
			"- **Stakeholder Feedback**: Incorporating feedback from clients and partners\n";
		content +=
			"- **Industry Best Practices**: Adopting emerging legal best practices\n";
		content +=
			"- **Change Notifications**: Proactive communication of policy changes\n";
		content +=
			"- **Version Control**: Maintaining clear version history of all policies\n";

		// Add metadata
		content += `\n## Metadata
Section: Legal & Compliance
Content Type: Legal Policies & Compliance Documentation
Total Legal Documents: 5
Focus: Privacy, Data Protection, Terms of Service
Last Updated: October 6, 2025
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
		console.error("Error generating legal llms.txt:", error);
		return NextResponse.json(
			{ error: "Internal Server Error" },
			{ status: 500 }
		);
	}
}
