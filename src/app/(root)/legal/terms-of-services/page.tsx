import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import { LEGAL_HANDLING_EMAIL, SERVICE_DEFINITIONS } from "@/data/legal";

import { Header } from "../components/header";
import { SectionTitle } from "../components/section-title";
import { TableOfContent } from "../components/table-of-content";

const TERMS_SERVICES_LAST_UPDATED = "October 6, 2025";

export default function TermsOfServicesPage() {
  return (
    <main>
      <Header title="Terms of Service" />
      <section className="mx-auto grid max-w-7xl grid-cols-4 justify-center">
        <div className="px-9 py-4">
          <TableOfContent />
        </div>
        <article className="prose prose-stone container col-span-3 max-w-none border-l px-12 py-12">
          <div>
            <p>Welcome to Sphere IT Global ("Sphere IT", "we", "our", or "us").</p>
            <p>
              By accessing or using our website www.sphereitglobal.com (the “Site”) and submitting information through
              our contact form or any other means, you agree to comply with these Terms of Service (“Terms”). If you do
              not agree, please do not use this Site.
            </p>
          </div>
          <div className="-mb-4 relative pt-4">
            <div className="relative">
              <div className="absolute top-0 bottom-0 left-4 w-px bg-stone-300" />
              <SectionTitle href="#overview" index={1}>
                Overview
              </SectionTitle>
              <div className="ml-12 pb-4">
                <p>
                  This website is operated by Sphere IT Global. Throughout this Site, the terms “we”, “us”, and “our”
                  refer to Sphere IT.
                </p>
                <p>
                  Sphere IT provides information about our services, expertise, and solutions, and allows you to contact
                  us via forms. By using the Site, you agree to be bound by these Terms, including any referenced
                  policies such as our Terms of service.
                </p>
                <p>
                  New features, tools, or updates on the Site are also subject to these Terms. We reserve the right to
                  update these Terms at any time by posting changes to this page. Your continued use of the Site
                  constitutes acceptance of any changes.
                </p>
              </div>
              <SectionTitle href="#use-of-website" index={2}>
                Use of the Website
              </SectionTitle>
              <div className="ml-12 pb-4">
                <p>You agree to use the Site only for lawful purposes. You must not:</p>
                <ul>
                  <li>Violate any laws, regulations, or third-party rights.</li>
                  <li>Attempt to gain unauthorized access to the Site, servers, or systems.</li>
                  <li>Disrupt or interfere with the Site, its content, or services.</li>
                  <li>Use automated tools to collect data or scrape content.</li>
                  <li>Submit malicious code, viruses, or harmful material.</li>
                </ul>
                <p>We reserve the right to suspend or terminate access for any violation.</p>
              </div>
              <SectionTitle href="#data-collection" index={3}>
                Contact Forms and Data Collection
              </SectionTitle>
              <div className="ml-12 pb-4">
                <p>When you submit your information via our contact forms, you agree that:</p>
                <ul>
                  <li>You provide accurate, current, and complete information.</li>
                  <li>Your submissions do not include unlawful, defamatory, or harmful content.</li>
                  <li>
                    Your data may be used by Sphere IT solely to respond to inquiries or provide requested services.
                  </li>
                </ul>
                <p>All data collection and handling are subject to our Terms of service.</p>
              </div>
              <SectionTitle href="#definitions" index={4}>
                Definitions
              </SectionTitle>
              <div className="ml-12 pb-4">
                <p>Below is a list of definitions for the terms used in this Terms of service:</p>
                <Table className="max-w-screen">
                  <TableHeader>
                    <TableRow>
                      <TableHead>Term</TableHead>
                      <TableHead>Definition</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {SERVICE_DEFINITIONS.map((invoice) => (
                      <TableRow key={invoice.title}>
                        <TableCell className="font-display text-subhead-base">{invoice.title}</TableCell>
                        <TableCell className="max-w-4xl text-base">{invoice.value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <SectionTitle href="#intellectual-property" index={5}>
                Intellectual Property
              </SectionTitle>
              <div className="ml-12 pb-4">
                <p>
                  All content on the Site, including text, images, logos, and software, is owned by Sphere IT or
                  licensed to us.
                </p>
                <h3 id="you-may">You may:</h3>
                <ul>
                  <li>View or download content for personal, non-commercial use.</li>
                </ul>
                <h3 id="you-may-not">You may not:</h3>
                <ul>
                  <li>Copy, reproduce, distribute, or commercialize any content without written permission.</li>
                  <li>Use our trademarks, logos, or branding without authorization.</li>
                </ul>
              </div>
              <SectionTitle href="#links" index={6}>
                Third-Party Links
              </SectionTitle>
              <div className="ml-12 pb-4">
                <p>
                  Our Site may contain links to third-party websites. We do not control or endorse these sites and are
                  not responsible for their content or privacy practices. Visiting these links is at your own risk.
                </p>
              </div>
              <SectionTitle href="#disclaimer" index={7}>
                Disclaimer of Warranties
              </SectionTitle>
              <div className="ml-12 pb-4">
                <p>The Site is provided “as is” without warranties of any kind. Sphere IT does not guarantee:</p>
                <ul>
                  <li>Continuous, secure, or error-free access.</li>
                  <li>Accuracy or completeness of content.</li>
                  <li>Correction of any errors or issues.</li>
                </ul>
                <p>Use of the Site is at your own risk.</p>
              </div>
              <SectionTitle href="#limitation-of-liability" index={8}>
                Limitation of Liability
              </SectionTitle>
              <div className="ml-12 pb-4">
                <p>
                  To the fullest extent permitted by law, Sphere IT is not liable for any direct, indirect, incidental,
                  or consequential damages arising from your use of the Site or reliance on its content.
                </p>
              </div>
              <SectionTitle href="#indemnification" index={9}>
                Indemnification
              </SectionTitle>
              <div className="ml-12 pb-4">
                <p>
                  You agree to defend, indemnify, and hold harmless Sphere IT, its affiliates, employees, and partners
                  from claims or damages resulting from your violation of these Terms or applicable law.
                </p>
              </div>
              <SectionTitle href="#termination" index={10}>
                Termination
              </SectionTitle>
              <div className="ml-12 pb-4">
                <p>
                  We may suspend or terminate your access at any time for violations of these Terms. Termination does
                  not relieve you of obligations incurred prior to termination.
                </p>
              </div>
              <SectionTitle href="#governing-law" index={11}>
                Governing Law
              </SectionTitle>
              <div className="ml-12 pb-4">
                <p>
                  These Terms are governed by the laws of the United Arab Emirates (UAE). Any disputes shall be resolved
                  exclusively in Dubai courts.
                </p>
              </div>
              <SectionTitle href="#terms" index={12}>
                Changes to Terms
              </SectionTitle>
              <div className="ml-12 pb-4">
                <p>
                  Sphere IT may update these Terms at any time. Updated versions will be posted on this page. Your
                  continued use constitutes acceptance of any changes.
                </p>
              </div>
              <SectionTitle href="#contact" index={13}>
                Contact Us
              </SectionTitle>
            </div>
            <div className="ml-12 pb-4">
              <p>
                If you have any questions, requests, or concerns about this Privacy Policy or how we handle your data,
                please contact us at:
              </p>
              <p>📧 {LEGAL_HANDLING_EMAIL}</p>
              <p>🌐 www.sphereitglobal.com</p>
              <p>📍 Dubai, United Arab Emirates</p>
            </div>
          </div>
        </article>
        <div className="col-span-full border-t p-12 text-center">
          <h5 className="text-badge text-stone-400">Last Updated: {TERMS_SERVICES_LAST_UPDATED}</h5>
        </div>
      </section>
    </main>
  );
}
