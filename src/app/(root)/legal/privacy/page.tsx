import type { Metadata } from "next/dist/types";
import Link from "next/link";

import { Cta } from "@/components/layout/cta";

import { LEGAL_HANDLING_EMAIL } from "@/data/legal";
import { BASE_URL } from "@/data/site-config";
import { TableOfContent } from "@/modules/views/components/table-of-content";

import { Header } from "../components/header";
import { SectionTitle } from "../components/section-title";
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

export default function PrivacyPage() {
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
						<section aria-labelledby="objective">
							<h2 className="sr-only" id="objective">
								Objective
							</h2>
							<p>
								Sphere IT Consultants DWC-LLC (Sphere IT) is dedicated to
								ensuring that personal data is handled responsibly, securely,
								and in compliance with the UAE Personal Data Protection Law
								(PDPL). This policy establishes clear guidelines for collecting,
								processing, storing, and disposing of personal data, ensuring
								data security, confidentiality, and privacy rights.
							</p>
							<p>
								The objective of this policy is to reinforce trust with
								employees, clients, and partners by promoting transparency in
								data handling and safeguarding sensitive information against
								unauthorized access or misuse.
							</p>
						</section>
						<div className="-mb-4 relative pt-4">
							<div className="relative">
								<div className="absolute top-0 bottom-0 left-4 w-px bg-stone-300" />
								<SectionTitle href="#scope" index={1}>
									Scope
								</SectionTitle>
								<div className="ml-12 pb-4">
									<p>
										This policy applies to all personal data processed by Sphere
										IT in the UAE and globally, regardless of the format or
										method of processing. It includes but is not limited to:
									</p>

									<ul>
										<li>
											<strong>
												Employees, customers, partners, vendors, and other
												stakeholders
											</strong>{" "}
											whose personal data is collected, stored, or processed
											during the course of business operations.
										</li>
										<li>
											<strong>All forms of data processing,</strong> including
											electronic databases, physical records, cloud-based
											storage, communication logs, customer interaction records,
											employee records, and financial transactions.
										</li>
										<li>
											<strong>Internal and external sources of data,</strong>{" "}
											ensuring that both Sphere IT internal operations and any
											interactions with external parties comply with UAE data
											protection regulations.
										</li>
										<li>
											<strong>
												Third-party service providers, contractors, and
												subsidiaries
											</strong>{" "}
											who process data on behalf of Sphere IT, requiring them to
											adhere to the same legal and regulatory standards as
											Sphere IT
										</li>
										<li>
											<strong>Cross-border data transfers,</strong> ensuring
											that any data transmitted outside the UAE meets strict
											security measures and regulatory approval requirements to
											prevent unauthorized access or misuse.
										</li>
										<li>
											<strong>Data collected through digital channels,</strong>{" "}
											including website analytics, customer feedback forms,
											email communications, and social media interactions.
										</li>
										<li>
											<strong>
												Data used for internal and external reporting,
												analytics, and decision-making,
											</strong>{" "}
											ensuring that the appropriate anonymization and security
											measures are applied.
										</li>
										<li>
											<strong>
												Personal data collected to comply with legal and
												regulatory requirements,
											</strong>{" "}
											including tax laws, employment laws, and industry
											standards.
										</li>
									</ul>
									<p>
										This policy applies to all employees, associates, and
										external partners, irrespective of their location, ensuring
										that the privacy of individuals is safeguarded throughout
										the organization’s operations.
									</p>
								</div>
								<SectionTitle href="#responsibility" index={2}>
									Responsibility
								</SectionTitle>
								<div className="ml-12 pb-4">
									<p>
										Sphere IT management holds the primary responsibility for
										ensuring compliance with this data privacy policy. They must
										establish security measures, implement data governance
										controls, and oversee compliance with UAE data protection
										laws. Employees and third-party service providers handling
										personal data are also required to adhere to this policy and
										complete periodic training on data privacy and security best
										practices.
									</p>
									<p>
										Additionally, the company assigns Local Privacy Responsible
										(LPR) personnel in each department to monitor and ensure
										adherence to data privacy measures. The Data Privacy Team
										oversees all data privacy efforts, ensuring that data
										processing is aligned with best practices and regulatory
										requirements.
									</p>
									<p>
										All employees, contractors, and third-party representatives
										must handle personal data in compliance with this policy.
										Failure to do so may result in disciplinary action, contract
										termination, or legal consequences.
									</p>
								</div>
								<SectionTitle href="#definitions" index={3}>
									Definitions
								</SectionTitle>
								<div className="ml-12 pb-4">
									<p>
										To provide clarity and consistency in data handling, the
										following definitions apply within this policy:
									</p>
									<ul>
										<li>
											<strong>Personal Data:</strong> Any information relating
											to an identified or identifiable natural person. This
											includes, but is not limited to, names, phone numbers,
											email addresses, identification numbers, biometric data,
											financial details, and geolocation data.
										</li>
										<li>
											<strong>Processing:</strong> Any action performed on
											personal data, whether automated or manual. This includes
											collecting, recording, organizing, storing, modifying,
											retrieving, analyzing, transmitting, disclosing, or
											erasing data.
										</li>
										<li>
											<strong>Data Subject:</strong> The individual whose
											personal data is being collected, processed, or stored.
										</li>
										<li>
											<strong>Data Controller:</strong> The entity Sphere IT
											that determines the purposes and means of personal data
											processing.
										</li>
										<li>
											<strong>Data Processor:</strong> A third party or service
											provider that processes personal data on behalf of Sphere
											IT under contractual obligations.
										</li>
										<li>
											<strong>Consent:</strong> A clear and affirmative action
											by the data subject to authorize the processing of their
											personal data for a specific purpose. Consent must be
											freely given, informed, and revocable at any time.
										</li>
										<li>
											<strong>Sensitive Data:</strong> Special categories of
											personal data that require heightened security measures,
											including racial or ethnic origin, religious beliefs,
											political opinions, trade union membership, biometric
											data, health-related data, and financial records.
										</li>
										<li>
											<strong>Data Breach:</strong> Any incident that results in
											the unauthorized access, loss, destruction, alteration, or
											disclosure of personal data.
										</li>
										<li>
											<strong>Anonymization:</strong> A process by which
											personal data is modified to prevent identification of an
											individual, ensuring irreversible de-identification.
										</li>
										<li>
											<strong>Pseudonymization:</strong> The technique of
											replacing identifiable data elements with pseudonyms,
											allowing limited re-identification under controlled
											conditions.
										</li>
										<li>
											<strong>Privacy Impact Assessment (PIA):</strong> A
											systematic review process to evaluate the risks and
											implications of data processing activities.
										</li>
										<li>
											<strong>Records of Processing Activities (ROPA):</strong>{" "}
											A documented record of all processing activities carried
											out by the company in compliance with UAE PDPL.
										</li>
									</ul>
									<p>
										By establishing clear definitions , Sphere IT ensures
										consistent interpretation and implementation of data
										protection principles across all operational areas.
									</p>
								</div>
								<SectionTitle href="#data-security" index={4}>
									Data Security and Confidentiality
								</SectionTitle>
								<div className="ml-12 pb-4">
									<p>
										Sphere IT applies strict technical and organizational
										measures to protect personal data. Access to data is granted
										only to authorized personnel based on their role and
										necessity. Data is encrypted during storage and
										transmission, and employees handling personal data are
										required to follow strict confidentiality guidelines.
										Security audits and compliance checks are performed
										regularly to prevent unauthorized access or breaches.
										Additionally, the organization implements a{" "}
										<strong>Privacy by Design</strong> approach, ensuring that
										data protection measures are integrated into all systems and
										processes from inception.
									</p>

									<p>
										Sphere IT also maintains{" "}
										<strong>Records of Processing Activities (ROPA)</strong> to
										ensure compliance with the UAE PDPL and monitor how personal
										data is managed throughout the organization.
									</p>
								</div>
								<SectionTitle href="#data-transfer" index={5}>
									Data Transfers
								</SectionTitle>
								<div className="ml-12 pb-4">
									<p>
										Sphere IT may transfer personal data outside the UAE under
										specific conditions that ensure the continued protection of
										such data. These include:
									</p>
									<ul>
										<li>
											<strong>Adequate Protection:</strong> Transfers are made
											to countries or entities that provide an adequate level of
											protection as recognized by the UAE Data Office.
										</li>

										<li>
											<strong>Contractual Safeguards:</strong> Where adequacy is
											not recognized Sphere IT relies on legally binding
											instruments such as Standard Contractual Clauses, data
											sharing agreements, or other approved mechanisms that
											enforce equivalent levels of protection.
										</li>
										<li>
											<strong>Explicit Consent:</strong> In cases where a data
											subject provides informed and unambiguous consent, and
											where such transfer is not prohibited by law.
										</li>
										<li>
											<strong>Legal and Regulatory Requirement:</strong>{" "}
											Transfers required for the performance of a contract,
											legal claims, or substantial public interest may also be
											permitted.
										</li>
									</ul>
									<p>
										Before any transfer takes place, Sphere IT ensures the risk
										is assessed through a transfer impact assessment and the
										necessary technical and organizational safeguards are in
										place. Any third parties receiving personal data must be
										contractually obligated to comply with data protection
										standards equivalent to those upheld by Sphere IT
									</p>
								</div>
								<SectionTitle href="#data-subject-rights" index={6}>
									Data Subject Rights
								</SectionTitle>
								<div className="ml-12 pb-4">
									<p>
										Sphere IT recognizes the following rights of data subjects
										under UAE PDPL:
									</p>

									<ul>
										<li>
											<strong>Right to Access:</strong> Data subjects can
											request a copy of their personal data held by Sphere IT
										</li>
										<li>
											<strong>Right to Correction:</strong> Individuals may
											request correction of inaccurate or outdated data.
										</li>
										<li>
											<strong>Right to Erasure:</strong> Data subjects can
											request deletion of personal data where legally
											applicable.
										</li>
										<li>
											<strong>Right to Restriction or Objection:</strong>{" "}
											Individuals may restrict or object to data processing
											under certain conditions.
										</li>
										<li>
											<strong>Right to Withdraw Consent:</strong> If processing
											is based on consent, data subjects can withdraw their
											consent at any time.
										</li>
									</ul>
									<p>
										Requests must be submitted in writing, and Sphere IT will
										verify the requester’s identity before taking action.
									</p>
								</div>
								<SectionTitle href="#data-breach" index={7}>
									Data Breach Reporting and Incident Management
								</SectionTitle>
								<div className="ml-12 pb-4">
									<p>
										Sphere IT takes data breaches seriously and has a structured
										response plan. In the event of a suspected or confirmed data
										breach:
									</p>

									<ul>
										<li>
											The incident is reported immediately to management and the
											Data Protection Officer.
										</li>
										<li>
											An investigation is conducted to assess the impact and
											determine corrective measures.
										</li>
										<li>
											If required, regulatory authorities and affected
											individuals are notified in compliance with UAE PDPL.
										</li>
										<li>
											Security measures are reviewed and reinforced to prevent
											future breaches.
										</li>
									</ul>
								</div>
								<SectionTitle href="#compliance-monitoring" index={8}>
									Compliance and Monitoring
								</SectionTitle>
								<div className="ml-12 pb-4">
									<p>
										Sphere IT maintains an active data protection compliance
										program that is overseen by the designated Data Protection
										Officer (DPO). This includes:
									</p>

									<ul>
										<li>
											<strong>Routine Audits and Risk Assessments:</strong>{" "}
											Internal and external audits are conducted to identify
											compliance gaps, with corrective actions implemented
											promptly.
										</li>
										<li>
											<strong>Records and Documentation:</strong> Detailed logs
											and records of processing activities are maintained to
											provide evidence of compliance, especially where Sphere IT
											acts as a Data Controller or Processor.
										</li>
										<li>
											<strong>Data Incident Management:</strong> A structured
											incident response plan is in place to detect, investigate,
											contain, and report any data protection breaches. This
											includes notifying authorities and impacted individuals
											where necessary.
										</li>
										<li>
											<strong>Third-party Risk Management:</strong> Contracts
											with vendors and service providers include strict data
											protection clauses. Due diligence is carried out regularly
											to assess compliance levels.
										</li>
										<li>
											<strong>Awareness and Training:</strong> All employees
											receive mandatory annual training on data protection,
											cybersecurity, and incident reporting. Specific modules
											are delivered based on department and role.
										</li>
										<li>
											<strong>Governance Oversight:</strong> A Data Privacy
											Governance Committee ensures policies remain current and
											effective, and reports directly to executive leadership on
											compliance status and risk.
										</li>
									</ul>
									<p>
										Failure to comply with this policy or related laws may
										result in disciplinary action, contract termination,
										regulatory penalties, and reputational damage.
									</p>
								</div>
								<SectionTitle href="#review-and-updates" index={9}>
									Review and Updates
								</SectionTitle>
								<div className="ml-12 pb-4">
									<p>
										This policy is reviewed annually and updated as required to
										align with UAE data protection laws, business needs, or
										emerging cybersecurity threats.
									</p>
								</div>
								<SectionTitle href="#communication" index={10}>
									Communication
								</SectionTitle>
								<div className="ml-12 pb-4">
									<p>
										For any clarification or Request, the User can contact LPR
										by Emailing to{" "}
										<Link href="mailto:Info-SecSphereIT@sphereitglobal.com">
											Info-SecSphereIT@sphereitglobal.com
										</Link>
									</p>
									<p>
										All Request will be Reviewed and Reverted within 3 working
										Days.
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
