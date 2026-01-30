import { NextResponse } from "next/server";

import { env } from "@/lib/env/server";

/**
 * GET /privacy/llms.txt - Generates llms.txt for privacy policy page
 * @returns Text response with privacy policy information and data protection details
 */
export async function GET() {
	try {
		const baseUrl = env.BASE_URL || "https://sphereitglobal.com";
		const privacyUrl = `${baseUrl}/privacy`;
		
		// Generate the text content
		let content = `# Sphere Global Privacy Policy

> Our commitment to data protection, privacy practices, and how we handle client information. Learn about our privacy policies, data protection measures, and your rights regarding personal information.

## Privacy Overview

Our commitment to protecting your privacy:\n\n`;

		// Add privacy principles
		content += `- [Privacy Principles](${privacyUrl}/principles): Our core privacy principles and commitment to data protection\n`;
		content += `- [Data Protection Policy](${privacyUrl}/data-protection): Comprehensive data protection framework and policies\n`;
		content += `- [Privacy Commitment](${privacyUrl}/commitment): Our formal commitment to privacy and data security\n`;
		content += `- [Privacy by Design](${privacyUrl}/privacy-by-design): How we embed privacy into our products and services\n`;
		content += `- [Privacy Governance](${privacyUrl}/governance): Privacy governance structure and oversight\n`;

		// Add data collection
		content += `\n## Data Collection

What information we collect and why:\n\n`;
		content += `- [Personal Data](${privacyUrl}/personal-data): Types of personal information we collect\n`;
		content += `- [Collection Methods](${privacyUrl}/collection): How and when we collect information\n`;
		content += `- [Legal Basis](${privacyUrl}/legal-basis): Legal basis for data collection and processing\n`;
		content += `- [Data Categories](${privacyUrl}/categories): Categories of data we collect and process\n`;
		content += `- [Minimization Principle](${privacyUrl}/minimization): How we minimize data collection\n`;

		// Add data usage
		content += `\n## Data Usage

How we use your information:\n\n`;
		content += `- [Purpose of Use](${privacyUrl}/purpose): Specific purposes for which we use your data\n`;
		content += `- [Service Delivery](${privacyUrl}/services): Using data to deliver our services\n`;
		content += `- [Analytics and Improvement](${privacyUrl}/analytics): Using data for service improvement and analytics\n`;
		content += `- [Marketing Communications](${privacyUrl}/marketing): How we use data for marketing (with consent)\n`;
		content += `- [Data Processing Limits](${privacyUrl}/limits): Limits on how we process your data\n`;

		// Add data sharing
		content += `\n## Data Sharing

When and how we share information:\n\n`;
		content += `- [Third-Party Sharing](${privacyUrl}/sharing): When we share data with third parties\n`;
		content += `- [Service Providers](${privacyUrl}/providers): Data shared with essential service providers\n`;
		content += `- [Legal Requirements](${privacyUrl}/legal): Data sharing required by law\n`;
		content += `- [Business Transfers](${privacyUrl}/transfers): Data sharing during business transfers\n`;
		content += `- [International Transfers](${privacyUrl}/international): Cross-border data transfers\n`;

		// Add data security
		content += `\n## Data Security

How we protect your information:\n\n`;
		content += `- [Security Measures](${privacyUrl}/security): Technical and organizational security measures\n`;
		content += `- [Encryption](${privacyUrl}/encryption): Encryption methods and data protection\n`;
		content += `- [Access Controls](${privacyUrl}/access): Access control mechanisms and authorization\n`;
		content += `- [Security Audits](${privacyUrl}/audits): Regular security audits and assessments\n`;
		content += `- [Incident Response](${privacyUrl}/incident): Security incident response procedures\n`;

		// Add user rights
		content += `\n## Your Rights

Your rights regarding your data:\n\n`;
		content += `- [Access Rights](${privacyUrl}/access): Your right to access your personal data\n`;
		content += `- [Correction Rights](${privacyUrl}/correction): Your right to correct inaccurate data\n`;
		content += `- [Deletion Rights](${privacyUrl}/deletion): Your right to request data deletion\n`;
		content += `- [Portability Rights](${privacyUrl}/portability): Your right to data portability\n`;
		content += `- [Objection Rights](${privacyUrl}/objection): Your right to object to data processing\n`;

		// Add cookies and tracking
		content += `\n## Cookies & Tracking

How we use cookies and tracking technologies:\n\n`;
		content += `- [Cookie Policy](${privacyUrl}/cookies): Detailed cookie policy and usage\n`;
		content += `- [Cookie Categories](${privacyUrl}/cookie-types): Types of cookies we use\n`;
		content += `- [Cookie Consent](${privacyUrl}/consent): How we obtain cookie consent\n`;
		content += `- [Tracking Technologies](${privacyUrl}/tracking): Other tracking technologies we use\n`;
		content += `- [Cookie Management](${privacyUrl}/management): How to manage cookie preferences\n`;

		// Add compliance
		content += `\n## Compliance

Legal and regulatory compliance:\n\n`;
		content += `- [GDPR Compliance](${privacyUrl}/gdpr): Our GDPR compliance measures\n`;
		content += `- [CCPA Compliance](${privacyUrl}/ccpa): California Consumer Privacy Act compliance\n`;
		content += `- [Industry Regulations](${privacyUrl}/regulations): Industry-specific compliance requirements\n`;
		content += `- [Data Protection Officer](${privacyUrl}/dpo): Contact information for our Data Protection Officer\n`;
		content += `- [Compliance Certifications](${privacyUrl}/certifications): Privacy and security certifications\n`;

		// Add international data transfers
		content += `\n## International Data Transfers

Cross-border data protection:\n\n`;
		content += `- [Transfer Mechanisms](${privacyUrl}/transfers): Legal mechanisms for international transfers\n`;
		content += `- [Standard Contractual Clauses](${privacyUrl}/scc): Use of Standard Contractual Clauses\n`;
		content += `- [Adequacy Decisions](${privacyUrl}/adequacy): Reliance on EU adequacy decisions\n`;
		content += `- [Binding Corporate Rules](${privacyUrl}/bcr): Binding Corporate Rules for intra-group transfers\n`;
		content += `- [Transfer Impact Assessments](${privacyUrl}/tia): Transfer Impact Assessments for high-risk transfers\n`;

		// Add data retention
		content += `\n## Data Retention

How long we keep your data:\n\n`;
		content += `- [Retention Policy](${privacyUrl}/retention): Data retention periods and policies\n`;
		content += `- [Retention Criteria](${privacyUrl}/criteria): Criteria for determining retention periods\n`;
		content += `- [Data Disposal](${privacyUrl}/disposal): Secure data disposal methods\n`;
		content += `- [Archival Requirements](${privacyUrl}/archival): Legal and regulatory archival requirements\n`;
		content += `- [Retention Schedules](${privacyUrl}/schedules): Detailed data retention schedules\n`;

		// Add children's privacy
		content += `\n## Children's Privacy

Protection of children's data:\n\n`;
		content += `- [Children's Policy](${privacyUrl}/children): Our policy on children's data protection\n`;
		content += `- [Age Verification](${privacyUrl}/age-verification): Age verification measures\n`;
		content += `- [Parental Consent](${privacyUrl}/parental-consent): Parental consent requirements\n`;
		content += `- [Educational Services](${privacyUrl}/educational): Data collection for educational services\n`;
		content += `- [COPPA Compliance](${privacyUrl}/coppa): Children's Online Privacy Protection Act compliance\n`;

		// Add contact and complaints
		content += `\n## Contact & Complaints

How to reach us about privacy matters:\n\n`;
		content += `- [Privacy Contact](${privacyUrl}/contact): Contact information for privacy inquiries\n`;
		content += `- [Data Protection Officer](${privacyUrl}/dpo-contact): Contact our Data Protection Officer\n`;
		content += `- [Complaint Process](${privacyUrl}/complaints): How to file privacy complaints\n`;
		content += `- [Regulatory Authorities](${privacyUrl}/authorities): Contact information for regulatory authorities\n`;
		content += `- [Dispute Resolution](${privacyUrl}/disputes): Privacy dispute resolution process\n`;

		// Add policy updates
		content += `\n## Policy Updates

How we keep our privacy policy current:\n\n`;
		content += `- [Update Process](${privacyUrl}/updates): How and when we update our privacy policy\n`;
		content += `- [Change Notifications](${privacyUrl}/notifications): How we notify users of policy changes\n`;
		content += `- [Version History](${privacyUrl}/history): Historical versions of our privacy policy\n`;
		content += `- [Effective Dates](${privacyUrl}/effective): Effective dates of policy changes\n`;
		content += `- [Feedback Process](${privacyUrl}/feedback): How to provide feedback on our privacy practices\n`;

		// Add related information
		content += `\n## Related Policies

Other relevant policies and information:\n\n`;
		content += `- [Terms of Service](${baseUrl}/terms/llms.txt): Our terms of service and user agreements\n`;
		content += `- [Security Policy](${baseUrl}/security/llms.txt): Our security policies and practices\n`;
		content += `- [Cookie Policy](${baseUrl}/cookies/llms.txt): Detailed cookie policy information\n`;
		content += `- [Data Processing Agreement](${baseUrl}/dpa/llms.txt): Data processing agreements for clients\n`;

		// Add metadata
		content += `\n## Metadata
Section: Privacy Policy
Content Type: Privacy & Data Protection Information
Policy Sections: 12
Last Updated: Regularly reviewed and updated
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
		console.error("Error generating privacy llms.txt:", error);
		return NextResponse.json(
			{ error: "Internal Server Error" },
			{ status: 500 }
		);
	}
}
