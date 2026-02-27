import type { Metadata } from "next/dist/types";

import { Cta } from "@/components/layout/cta";

import { LEGAL_HANDLING_EMAIL } from "@/data/legal";
import { BASE_URL, COMPANY_NAME } from "@/data/site-config";

import { Header } from "../components/header";
import { SectionTitle } from "../components/section-title";
import {
	privacyFAQStructuredData,
	privacyStructuredData,
} from "./structured-data";

export const email = LEGAL_HANDLING_EMAIL;
const POLICY_LAST_UPDATED = "October 6, 2025";

const meta = {
	title: "Data Protection Policy - Sphere IT Global",
	description:
		"Learn how Sphere IT Global protects your privacy and handles your personal data. Comprehensive Data Protection Policy covering data collection, usage, security, and your rights.",
};

export const metadata: Metadata = {
	title: meta.title,
	description: meta.description,
	keywords: [
		"Data Protection Policy",
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
	authors: [{ name: COMPANY_NAME }],
	creator: COMPANY_NAME,
	publisher: COMPANY_NAME,
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
		url: `${BASE_URL}/legal/data-protection`,
		title: meta.title,
		description: meta.description,
		siteName: COMPANY_NAME,
		images: [
			{
				url: `${BASE_URL}/images/privacy-policy-og.jpg`,
				width: 1200,
				height: 630,
				alt: meta.title,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: meta.title,
		description: meta.description,
		images: [`${BASE_URL}/images/privacy-policy-og.jpg`],
	},
	alternates: {
		canonical: `${BASE_URL}/legal/data-protection`,
	},
	other: {
		"last-modified": POLICY_LAST_UPDATED,
	},
};

export default function DataProtectionPage() {
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

			<main aria-label="Data protection policy" role="main">
				<Header />
				<section className="mx-auto max-w-6xl">
					{/* Table of Contents - Hidden on mobile, visible on desktop */}
					{/* <div className="hidden px-4 py-4 lg:block lg:px-9">
						<TableOfContent />
					</div> */}

					<article
						aria-label="Data protection policy Content"
						className="prose prose-stone container max-w-none py-6 prose-a:text-primary-600 prose-a:transition-colors prose-a:hover:text-accent"
					>
						<div className="-mb-4 relative pt-4">
							<div className="relative">
								<div className="absolute top-0 bottom-0 left-4 w-px bg-stone-300" />
								<SectionTitle href="#aim-of-data-protection" index={1}>
									Aim of the Data Protection Policy
								</SectionTitle>
								<div className="ml-12 pb-4">
									<p>
										<strong>Sphere IT Consultants DWC-LLC (Sphere IT)</strong>{" "}
										acknowledges that information technology must serve
										individuals, protect privacy, and uphold the principles of
										human dignity and fundamental rights. Our Data Protection
										Policy aligns with the UAE Personal Data Protection Law
										(PDPL) and reflects internationally recognized best
										practices for the protection of personal data.
									</p>
									<p>
										Data protection forms the foundation of trust between Sphere
										IT and its clients, partners, suppliers, employees, and
										other stakeholders. This policy aims to ensure that Sphere
										IT maintains a consistent and lawful approach to handling
										personal data across its operations.
									</p>
								</div>

								<SectionTitle href="#scope" index={2}>
									Scope
								</SectionTitle>
								<div className="ml-12 pb-4">
									<p>
										This policy applies to all entities, operations, and
										personnel of{" "}
										<strong>Sphere IT Consultants DWC-LLC (Sphere IT)</strong>,
										including:
									</p>
									<ul>
										<li>Employees, contractors, and governance members</li>
										<li>
											Implementing partners, vendors, suppliers, and service
											providers
										</li>
										<li>
											All personal data processed in digital or physical form
										</li>
									</ul>
								</div>

								<SectionTitle href="#definitions" index={3}>
									Definitions and Covered Data Sets
								</SectionTitle>
								<div className="ml-12 pb-4">
									<p>
										This policy applies to all personal data managed or
										processed by Sphere IT, including but not limited to:
									</p>
									<ul>
										<li>
											Employee records (national/international staff, interns,
											volunteers)
										</li>
										<li>
											Customer and client data (individuals, organizations)
										</li>
										<li>Beneficiaries of services</li>
										<li>Contractors, suppliers, and partners</li>
									</ul>
									<p>Personal data includes, but is not limited to:</p>
									<ul>
										<li>Name, address, phone number, email, Bank details</li>
										<li>Passport, ID details</li>
										<li>Biometric data (e.g., fingerprints)</li>
										<li>Employment or contractual information</li>
										<li>Geo-location data</li>
									</ul>
									<p>
										Processing includes collection, storage, access, transfer,
										analysis, and deletion.
									</p>
								</div>

								<SectionTitle href="#compliance" index={4}>
									Compliance with UAE National Law
								</SectionTitle>
								<div className="ml-12 pb-4">
									<p>
										Sphere IT is headquartered in the UAE and strictly follows
										the UAE Federal Decree-Law No. 45 of 2021 on the Protection
										of Personal Data. Where stricter internal standards apply,
										Sphere IT may implement additional safeguards.
									</p>
									<p>
										In any event where national legal obligations conflict with
										internal policy, legal obligations under UAE PDPL shall
										prevail.
									</p>
								</div>

								<SectionTitle href="#processing-principles" index={5}>
									Principles for Processing Personal Data
								</SectionTitle>
								<div className="ml-12 pb-4">
									<p>
										Sphere IT adheres to key principles outlined in the UAE PDPL
										when handling personal data. All personal data is processed
										lawfully and fairly, ensuring that individuals’ rights are
										protected and their information is handled with integrity
										and transparency. Data is collected for specific, clear, and
										legitimate purposes and not used in ways that conflict with
										those original purposes. We ensure that only the minimum
										amount of personal data necessary is collected and retained,
										and we take all reasonable steps to ensure the data is
										accurate and kept up to date. Data is stored only for as
										long as needed to fulfil its intended purpose, and strong
										security controls are implemented to protect it from
										unauthorized access or loss. Finally, we are committed to
										transparency, ensuring individuals are informed about how
										their data is used and protected.
									</p>
								</div>

								<SectionTitle href="#data-security" index={6}>
									Data Security and Confidentiality
								</SectionTitle>
								<div className="ml-12 pb-4">
									<ul>
										<li>
											Access to personal data is restricted to authorized
											personnel based on role and necessity.
										</li>
										<li>Data is encrypted during storage and transmission.</li>
										<li>
											Staff members receive training in data confidentiality and
											are bound by confidentiality agreements.
										</li>
										<li>
											Security incidents and access to sensitive data are logged
											and reviewed regularly.
										</li>
									</ul>
								</div>

								<SectionTitle href="#data-subject-rights" index={7}>
									Data Subject Rights
								</SectionTitle>
								<div className="ml-12 pb-4">
									<ul>
										<li>Right to access personal data held by Sphere IT.</li>
										<li>
											Right to request correction of inaccurate or outdated
											information.
										</li>
										<li>
											Right to request deletion of data under applicable legal
											conditions.
										</li>
										<li>
											Right to restrict or object to certain types of data
											processing.
										</li>
										<li>
											All rights requests must be made in writing and are
											subject to identity verification.
										</li>
									</ul>
								</div>

								<SectionTitle href="#retention-deletion" index={8}>
									Retention and Deletion
								</SectionTitle>
								<div className="ml-12 pb-4">
									<p>
										Personal data is retained only for as long as necessary to
										fulfil its purpose or meet legal obligations. Once expired,
										data is securely deleted unless justified by historical,
										statistical, or legal grounds.
									</p>
								</div>

								<SectionTitle href="#data-transfers" index={9}>
									Data Transfers
								</SectionTitle>
								<div className="ml-12 pb-4">
									<ul>
										<li>
											Data is transferred outside the UAE only to jurisdictions
											with adequate data protection or under contractual
											safeguards.
										</li>
										<li>
											Transfers require prior consent from the data subject
											unless legally justified.
										</li>
										<li>Transfers are recorded and reviewed for compliance.</li>
									</ul>
								</div>

								<SectionTitle href="#communications" index={10}>
									Telecommunications, Email, and Internet Use
								</SectionTitle>
								<div className="ml-12 pb-4">
									<p>
										Company-provided communication tools are for official use.
										Any monitoring will be limited to protecting IT
										infrastructure and require justified suspicion. Data is
										evaluated only in documented and authorized cases.
									</p>
								</div>

								<SectionTitle href="#subject-access-requests" index={11}>
									Subject Access Requests (SARs)
								</SectionTitle>
								<div className="ml-12 pb-4">
									<ul>
										<li>
											SARs may be submitted by individuals wishing to review,
											correct, or delete their personal data.
										</li>
										<li>
											Requests are handled by authorized personnel following
											identity verification.
										</li>
										<li>
											Sphere IT maintains logs of SARs and responds within the
											timeframes set by UAE PDPL.
										</li>
									</ul>
								</div>

								<SectionTitle href="#breach-reporting" index={12}>
									Breach Reporting and Sanctions
								</SectionTitle>
								<div className="ml-12 pb-4">
									<ul>
										<li>
											All staff and third parties must report suspected data
											breaches immediately.
										</li>
										<li>Investigations will be conducted and documented.</li>
										<li>
											Sanctions for violations may include disciplinary action,
											termination, or legal reporting.
										</li>
									</ul>
								</div>

								<SectionTitle href="#security-processing" index={13}>
									Security of Processing
								</SectionTitle>
								<div className="ml-12 pb-4">
									<ul>
										<li>
											Sphere IT uses up-to-date technical and organizational
											measures to ensure data security.
										</li>
										<li>
											Risk assessments are conducted before deploying new
											processing systems.
										</li>
										<li>
											Security policies are reviewed periodically and adapted to
											evolving threats.
										</li>
									</ul>
								</div>

								<SectionTitle href="#review-audit" index={14}>
									Review and Audit
								</SectionTitle>
								<div className="ml-12 pb-4">
									<p>
										This policy is reviewed annually. Regular internal audits
										are conducted to ensure compliance with PDPL and internal
										standards. External audits may be conducted when required.
									</p>
								</div>

								<SectionTitle href="#communication" index={15}>
									Communication
								</SectionTitle>
								<div className="ml-12 pb-4">
									<p>
										For any clarification or request, the user can contact LPR
										by emailing:{" "}
										<a href="mailto:Info-SecSphereIT@sphereitglobal.com">
											Info-SecSphereIT@sphereitglobal.com
										</a>
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
