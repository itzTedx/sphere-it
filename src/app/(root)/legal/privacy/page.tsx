import type { Metadata } from "next";
import Link from "next/link";

import { Cta } from "@/components/layout/cta";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import { LEGAL_HANDLING_EMAIL, PRIVACY_DEFINITIONS } from "@/data/legal";
import { BASE_URL } from "@/data/site-config";
import { TableOfContent } from "@/modules/views/components/table-of-content";

import { Header } from "../components/header";
import { SectionTitle } from "../components/section-title";
import { privacyFAQStructuredData, privacyStructuredData } from "./structured-data";

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
    description: "Learn how Sphere IT Global protects your privacy and handles your personal data.",
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
            <section aria-labelledby="introduction">
              <h2 className="sr-only" id="introduction">
                Introduction
              </h2>
              <p>Welcome to Sphere IT Global ("Sphere IT", "we", "our", or "us").</p>
              <p>
                Sphere IT provides technology, consulting, automation, and integration solutions to enterprises
                worldwide (the "Services").
              </p>
              <p>
                We value your privacy and are committed to protecting your personal data. This Privacy Policy explains
                how we collect, use, and protect information when you visit our website, communicate with us, or use our
                Services.
              </p>
              <p>
                By using our website or submitting your information through our contact forms, you agree to the
                practices described in this Privacy Policy.
              </p>
            </section>
            <div className="-mb-4 relative pt-4">
              <div className="relative">
                <div className="absolute top-0 bottom-0 left-4 w-px bg-stone-300" />
                <SectionTitle href="#definitions" index={1}>
                  Definitions
                </SectionTitle>
                <div className="ml-12 pb-4">
                  <p>Below is a list of definitions for the terms used in this Privacy Policy:</p>
                  <div className="overflow-x-auto">
                    <Table className="w-full min-w-[600px]">
                      <TableHeader>
                        <TableRow>
                          <TableHead className="font-semibold">Term</TableHead>
                          <TableHead className="font-semibold">Definition</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {PRIVACY_DEFINITIONS.map((definition) => (
                          <TableRow key={definition.title}>
                            <TableCell className="min-w-[120px] font-display font-medium text-subhead-base">
                              {definition.title}
                            </TableCell>
                            <TableCell className="text-base leading-relaxed">{definition.value}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
                <SectionTitle href="#information-collection" index={2}>
                  Information We Collect
                </SectionTitle>
                <div className="ml-12 pb-4">
                  <p>
                    We collect several different types of information for various purposes to provide and improve our
                    Service to you.
                  </p>
                  <h3 id="personal-data">Personal Data</h3>
                  <p>
                    While using our Service, we may ask you to provide us with certain personally identifiable
                    information that can be used to contact or identify you (“Personal Data”). Personally identifiable
                    information may include, but is not limited to:
                  </p>
                  <ul>
                    <li>Your Name</li>
                    <li>Your Email Address</li>
                    <li>Your Phone Number</li>
                    <li>The Subject and Message you submit</li>
                  </ul>
                  <p>
                    We may use your Personal Data to contact you with newsletters, marketing or promotional materials
                    and other information that may be of interest to you. You may opt out of receiving any, or all, of
                    these communications from us by following the unsubscribe link or by emailing at{" "}
                    <Link href={`mailto:${email}`} title="Contact us via email">
                      {email}
                    </Link>
                  </p>
                  <h3 id="usage-data">Usage Data</h3>
                  <p>
                    We may also collect information that your browser sends whenever you visit our Service or when you
                    access Service by or through a mobile device (“Usage Data”).
                  </p>
                  <p>
                    This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP
                    address), browser type, browser version, the pages of our Service that you visit, the time and date
                    of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                  </p>
                  <p>
                    When you access Service with a mobile device, this Usage Data may include information such as the
                    type of mobile device you use, your mobile device unique ID, the IP address of your mobile device,
                    your mobile operating system, the type of mobile Internet browser you use, unique device identifiers
                    and other diagnostic data.
                  </p>
                </div>
                <SectionTitle href="#how-we-use-information" index={3}>
                  How We Use Your Information
                </SectionTitle>
                <div className="ml-12 pb-4">
                  <p>Sphere IT Global use the information you provide to:</p>
                  <ul>
                    <li>Respond to your inquiries or service requests</li>
                    <li>Provide information about our IT solutions and services</li>
                    <li>Improve customer service and communication quality</li>
                  </ul>
                  <p>
                    Your information is used only for the purpose for which you provided it and will never be sold or
                    shared for marketing purposes.
                  </p>
                </div>
                <SectionTitle href="#data-storage-security" index={4}>
                  Data Storage and Security
                </SectionTitle>
                <div className="ml-12 pb-4">
                  <p>
                    We use secure technologies and hosting infrastructure to safeguard your data. Your form submissions
                    are transmitted over encrypted HTTPS connections and stored securely.
                  </p>

                  <p>
                    While we strive to use industry-standard methods to protect your personal data, no system is
                    completely secure. We encourage you to exercise caution when sharing sensitive information online.
                  </p>
                </div>
                <SectionTitle href="#data-retention" index={5}>
                  Data Retention
                </SectionTitle>
                <div className="ml-12 pb-4">
                  <p>
                    We retain personal data only for as long as necessary to respond to your inquiry or fulfill the
                    purpose for which it was collected.
                  </p>
                  <p>After that period, your data will be securely deleted or anonymized.</p>
                  <p>
                    We will retain your Personal Data only for as long as is necessary for the purposes set out in this
                    Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our
                    legal obligations (for example, if we are required to retain your data to comply with applicable
                    laws), resolve disputes, and enforce our legal agreements and policies.
                  </p>
                  <p>
                    We will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for
                    a shorter period, except when this data is used to strengthen the security or to improve the
                    functionality of our Service, or we are legally obligated to retain this data for longer time
                    periods.
                  </p>
                </div>
                <SectionTitle href="#sharing-information" index={6}>
                  Sharing of Information
                </SectionTitle>
                <div className="ml-12 pb-4">
                  <p>We do not sell or lease your personal information.</p>
                  <p>We may share limited data only with:</p>
                  <ul>
                    <li>Authorized personnel within Sphere IT who are handling your inquiry</li>
                    <li>
                      Trusted third-party service providers (e.g., web hosting or email delivery) who assist in
                      operating our website, under strict confidentiality agreements
                    </li>
                    <li>Legal authorities, when required by applicable law</li>
                  </ul>
                </div>
                <SectionTitle href="#cookies-analytics" index={7}>
                  Cookies and Analytics
                </SectionTitle>
                <div className="ml-12 pb-4">
                  <p>Our website may use cookies to:</p>
                  <ul>
                    <li>Enable basic website functionality</li>
                    <li>Analyze website performance and visitor behavior (e.g., Google Analytics)</li>
                  </ul>
                  <p>
                    These cookies do not collect personal data or track your identity.
                    <br />
                    You may disable cookies in your browser settings at any time.
                  </p>
                </div>
                <SectionTitle href="#your-rights" index={7}>
                  Your Rights
                </SectionTitle>
                <div className="ml-12 pb-4">
                  <p>Depending on your region, you may have the right to:</p>
                  <ul>
                    <li>Request access to the personal data we hold about you</li>
                    <li>Request correction or deletion of your personal data</li>
                    <li>Withdraw consent for data processing at any time</li>
                  </ul>
                  <p>
                    To exercise these rights, please contact us at{" "}
                    <Link href={`mailto:${email}`} title="Contact us via Email">
                      {email}
                    </Link>
                  </p>
                </div>
                <SectionTitle href="#links" index={8}>
                  Links to Other Websites
                </SectionTitle>
                <div className="ml-12 pb-4">
                  <p>Our website may include links to third-party sites for additional resources.</p>

                  <p>
                    We are not responsible for their privacy practices and encourage you to review their policies before
                    providing any personal data.
                  </p>
                </div>
                <SectionTitle href="#updates" index={9}>
                  Updates to This Policy
                </SectionTitle>
                <div className="ml-12 pb-4">
                  <p>
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the
                    new Privacy Policy on this page.
                  </p>
                  <p>
                    We will let you know via email and/or a prominent notice on our Service, prior to the change
                    becoming effective and update "effective date" at the top of this Privacy Policy.
                  </p>
                  <p>
                    You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy
                    Policy are effective when they are posted on this page.
                  </p>
                </div>
              </div>
              <SectionTitle href="#contact" index={10}>
                Contact Us
              </SectionTitle>
              <div className="ml-12 pb-4">
                <p>
                  If you have any questions, requests, or concerns about this Privacy Policy or how we handle your data,
                  please contact us at:
                </p>
                <div className="mt-4 space-y-2">
                  <p className="flex items-center gap-2">
                    <span>📧</span>
                    <Link href={`mailto:${email}`} title="Contact us via Email">
                      {email}
                    </Link>
                  </p>
                  <p className="flex items-center gap-2">
                    <span>🌐</span>
                    <span>{BASE_URL.replace("https://", "")}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span>📍</span>
                    <span>Dubai, United Arab Emirates</span>
                  </p>
                </div>
              </div>
            </div>
          </article>
        </section>
        <div className="col-span-full border-t p-6 text-center lg:p-12">
          <p className="text-sm text-stone-500">Last Updated: {POLICY_LAST_UPDATED}</p>
        </div>
        <Cta />
      </main>
    </>
  );
}
