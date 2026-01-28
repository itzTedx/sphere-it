import type { Metadata } from "next/dist/types";

import { Cta } from "@/components/layout/cta";

import { LEGAL_HANDLING_EMAIL } from "@/data/legal";
import { BASE_URL } from "@/data/site-config";
import { TableOfContent } from "@/modules/views/components/table-of-content";

import { Header } from "./components/header";
import { SectionTitle } from "./components/section-title";
import {
	privacyFAQStructuredData,
	privacyStructuredData,
} from "./structured-data";

export const email = LEGAL_HANDLING_EMAIL;
const POLICY_LAST_UPDATED = "October 6, 2025";

export const metadata: Metadata = {
	title: "Privacy Policy | Sphere IT Global - Data Protection & Privacy",
	description:
		"Learn how Sphere IT Global protects your privacy and handles your personal data. Comprehensive privacy policy covering data collection, usage, security, and your rights.",
	keywords: [
		"privacy policy",
		"data protection",
		"personal data",
		"GDPR compliance",
		"data security",
		"privacy rights",
		"data collection",
		"Sphere IT Global",
		"IT services privacy",
		"data retention",
	],
	authors: [{ name: "Sphere IT Global" }],
	creator: "Sphere IT Global",
	publisher: "Sphere IT Global",
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: `${BASE_URL}/legal/privacy`,
		title: "Privacy Policy | Sphere IT Global",
		description:
			"Learn how Sphere IT Global protects your privacy and handles your personal data. Comprehensive privacy policy covering data collection, usage, and your rights.",
		siteName: "Sphere IT Global",
		images: [
			{
				url: `${BASE_URL}/images/privacy-policy-og.jpg`,
				width: 1200,
				height: 630,
				alt: "Sphere IT Global Privacy Policy",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Privacy Policy | Sphere IT Global",
		description:
			"Learn how Sphere IT Global protects your privacy and handles your personal data.",
		images: [`${BASE_URL}/images/privacy-policy-og.jpg`],
	},
	alternates: {
		canonical: `${BASE_URL}/legal/privacy`,
	},
	other: {
		"last-modified": POLICY_LAST_UPDATED,
	},
};

export default function AcceptableUsePage() {
	return (
		<>
			{/* Structured Data */}
			<script
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(privacyStructuredData),
				}}
				type="application/ld+json"
			/>
			<script
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(privacyFAQStructuredData),
				}}
				type="application/ld+json"
			/>

			<main aria-label="Privacy Policy" role="main">
				<Header title="Privacy Policy" />
				<section className="mx-auto grid max-w-7xl grid-cols-1 justify-center lg:grid-cols-4">
					{/* Table of Contents - Hidden on mobile, visible on desktop */}
					<div className="hidden px-4 py-4 lg:block lg:px-9">
						<TableOfContent />
					</div>

					<article
						aria-label="Privacy Policy Content"
						className="prose prose-stone container col-span-1 max-w-none border-l-0 py-6 prose-a:text-primary-600 prose-a:transition-colors prose-a:hover:text-accent lg:col-span-3 lg:border-l lg:py-12"
					>
						<div className="-mb-4 relative pt-4">
							<div className="relative">
								<div className="absolute top-0 bottom-0 left-4 w-px bg-stone-300" />
								<SectionTitle href="#policy-statement" index={1}>
									Policy Statement
								</SectionTitle>
								<div className="ml-12 pb-4">
									<p>
										This Acceptable Use Policy outlines the responsibilities of
										all personnel when using{" "}
										<strong>Sphere IT Consultants DWC-LLC (Sphere IT)</strong>{" "}
										information resources. All users must support legitimate
										business functions and comply with UAE laws and Sphere IT
										systems policies.
									</p>
									<p>
										Personnel are responsible for complying with all Sphere IT
										policies when using company information resources and/or
										working during company hours. If any policy requirements are
										unclear, employees or users must seek clarification from the
										Information Security Committee (Email:{" "}
										<a href="mailto:Info-SecSphereIT@sphereitglobal.com">
											Info-SecSphereIT@sphereitglobal.com
										</a>
										).
									</p>
								</div>

								<SectionTitle href="#incident-reporting" index={2}>
									Incident Reporting
								</SectionTitle>
								<div className="ml-12 pb-4">
									<p>
										Personnel must promptly report harmful events or violations
										involving company assets or information to their manager or
										a member of the Incident Handling Team. Reportable events
										include, but are not limited to:
									</p>
									<ul>
										<li>
											<strong>Technology incidents:</strong> Any event causing
											failure, interruption, or loss in the availability of
											Sphere IT’s Information Resources.
										</li>
										<li>
											<strong>Data incidents:</strong> Any loss, theft, or
											compromise of Sphere IT information.
										</li>
										<li>
											<strong>Unauthorized access incidents:</strong> Any
											unauthorized access or attempted access to Sphere IT.
										</li>
										<li>
											<strong>Facility security incidents:</strong> Any damage
											or unauthorized access to Sphere IT owned, leased, or
											managed facilities.
										</li>
										<li>
											<strong>Policy violations:</strong> Any suspected
											violation of this or other Sphere IT policies, standards,
											or procedures.
										</li>
									</ul>
								</div>

								<SectionTitle href="#prohibited-activities" index={3}>
									Prohibited Activities
								</SectionTitle>
								<div className="ml-12 pb-4">
									<p>Personnel must not intentionally:</p>
									<ul>
										<li>Harass, threaten, impersonate, or abuse others.</li>
										<li>
											Degrade the performance of Sphere IT information
											resources.
										</li>
										<li>
											Deny authorized personnel access to systems or data.
										</li>
										<li>
											Obtain additional computing resources without approval.
										</li>
										<li>Circumvent Sphere IT security controls.</li>
									</ul>
									<p>Additionally, employees must not:</p>
									<ul>
										<li>
											Download, install, or run unauthorized software, including
											password crackers, packet sniffers, port scanners, or
											similar tools.
										</li>
										<li>
											Intentionally access, create, store, or transmit materials
											deemed offensive, indecent, or obscene by Sphere IT.
										</li>
									</ul>
								</div>

								<SectionTitle href="#intellectual-property" index={4}>
									Intellectual Property and Data Ownership
								</SectionTitle>
								<div className="ml-12 pb-4">
									<ul>
										<li>
											All inventions, intellectual property, and proprietary
											materials—including but not limited to reports, software
											code, designs, workflows, data, blueprints, and technical
											documentation—developed during working hours or using
											Sphere IT’s resources are considered the sole property of
											Sphere IT Consultants DWC-LLC (Sphere IT).
										</li>
										<li>
											Employees are prohibited from removing, distributing, or
											disclosing such information to external parties without
											proper authorization. Upon termination or change in
											employment, individuals must return or securely delete any
											proprietary information in their possession.
										</li>
										<li>
											Any use or sharing of proprietary materials must align
											with Sphere IT's confidentiality agreements, data
											protection policies, and applicable intellectual property
											laws.
										</li>
									</ul>
								</div>

								<SectionTitle href="#encryption-data-access" index={5}>
									Encryption and Data Access
								</SectionTitle>
								<div className="ml-12 pb-4">
									<ul>
										<li>
											Encryption tools must be used in accordance with company
											policies to protect sensitive and confidential data during
											storage or transmission. However, the use of encryption
											must not impede access by authorized personnel when needed
											for operational, legal, or investigative purposes.
										</li>
										<li>
											All encryption solutions must be approved and implemented
											by the Information Security team. Employees may not use
											personal or unapproved encryption tools to protect or
											obscure company data.
										</li>
										<li>
											Access credentials and encryption keys must be securely
											stored and shared only with designated personnel.
										</li>
									</ul>
								</div>

								<SectionTitle href="#personal-use" index={6}>
									Personal Use and Legal Compliance
								</SectionTitle>
								<div className="ml-12 pb-4">
									<p>
										Use of Sphere IT resources, including internet access,
										systems, email, and hardware, must be primarily for business
										purposes. Limited personal use is permitted only if it does
										not:
									</p>
									<ul>
										<li>Interfere with job responsibilities.</li>
										<li>Consume significant bandwidth or storage.</li>
										<li>Violate Sphere IT policies or any applicable laws.</li>
									</ul>
									<p>
										Sphere IT strictly prohibits the use of its resources for
										activities related to personal business ventures, gambling,
										spreading malware, engaging in political campaigns, or
										viewing or distributing obscene, defamatory, or
										discriminatory content.
									</p>
									<p>
										Employees are expected to respect intellectual property laws
										and adhere to proper licensing terms for all software,
										media, and content used during their employment. Downloading
										or sharing pirated materials is strictly forbidden.
									</p>
								</div>

								<SectionTitle href="#cooperation-enforcement" index={7}>
									Cooperation and Enforcement
								</SectionTitle>
								<div className="ml-12 pb-4">
									<p>
										Employees are required to fully cooperate with all internal
										and external investigations, including regulatory audits,
										cybersecurity inquiries, and legal proceedings. This
										includes providing timely responses, accurate records, and
										unrestricted access to systems when authorized.
									</p>
									<ul>
										<li>
											Monitor network traffic, user activity, and data
											transfers.
										</li>
										<li>Audit usage of company resources.</li>
										<li>Investigate policy violations.</li>
										<li>
											Take disciplinary action up to and including termination,
											depending on the severity of the violation.
										</li>
									</ul>
									<p>
										Repeated or serious violations may result in civil or
										criminal liability under UAE law.
									</p>
								</div>

								<SectionTitle href="#limitation-of-liability" index={8}>
									Limitation of Liability
								</SectionTitle>
								<div className="ml-12 pb-4">
									<p>
										Sphere IT Consultants DWC-LLC (Sphere IT) provides its
										services, systems, and resources on an “as-is” and
										“as-available” basis. While we take all reasonable steps to
										ensure the security, availability, and reliability of our IT
										infrastructure and services, Sphere IT expressly disclaims
										liability for any damages resulting from:
									</p>
									<ul>
										<li>
											Loss of data, unauthorized access, system downtime, or
											service interruption.
										</li>
										<li>
											Malware, viruses, or harmful code introduced through
											third-party software or network vulnerabilities.
										</li>
										<li>
											Delays or failures in performance due to acts of God,
											cyberattacks, utility failures, or other force majeure
											events.
										</li>
										<li>
											Errors or omissions in data input, configuration, or
											software development.
										</li>
										<li>
											Unauthorized use of credentials, access rights, or
											employee negligence.
										</li>
									</ul>
									<p>
										To the maximum extent permitted by applicable law, Sphere IT
										shall not be held liable for:
									</p>
									<ul>
										<li>
											Indirect, incidental, consequential, special, punitive, or
											exemplary damages, including loss of profits, revenue,
											business opportunities, or goodwill.
										</li>
										<li>
											Any claims arising from user misuse of IT resources in
											violation of this policy or applicable laws.
										</li>
										<li>
											Legal action resulting from an employee’s unauthorized or
											malicious use of systems.
										</li>
									</ul>
									<p>
										In no event shall Sphere IT total cumulative liability
										exceed the total fees paid to Sphere IT for the specific
										services or period during which the incident occurred, or{" "}
										<strong>AED 50,000</strong>, whichever is lower, unless
										otherwise required by applicable law or contract.
									</p>
									<p>This limitation shall not apply in cases involving:</p>
									<ul>
										<li>
											Proven gross negligence or willful misconduct by Sphere IT
											personnel.
										</li>
										<li>
											Legal obligations under UAE Data Protection Law where data
											subject rights are affected.
										</li>
										<li>
											Liability that cannot be excluded under applicable local
											law.
										</li>
									</ul>
								</div>

								<SectionTitle href="#acknowledgment" index={9}>
									Acknowledgment
								</SectionTitle>
								<div className="ml-12 pb-4">
									<p>
										All personnel are required to read, understand, and sign an
										acknowledgment form indicating that they agree to comply
										with this Acceptable Use Policy. Continued use of Sphere IT
										and resources constitutes implied acceptance of these terms.
									</p>
									<p>
										Personnel who do not understand any aspect of this policy
										must contact the Information Security Committee for
										clarification before engaging in any related activities.
									</p>
								</div>
							</div>
						</div>
					</article>
				</section>
				<div className="col-span-full border-t p-6 text-center lg:p-12">
					<p className="text-sm text-stone-500">
						Last Updated: {POLICY_LAST_UPDATED}
					</p>
				</div>
				<Cta />
			</main>
		</>
	);
}
