import type { Metadata } from "next";
import Link from "next/link";

import { Cta } from "@/components/layout/cta";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { IconArrowRight, IconChevronDown } from "@/assets/icons";
import { IconCopy } from "@/assets/icons/copy";
import { IconSocialInstagram, IconSocialWhatsapp, IconSocialX } from "@/assets/icons/social";

import { BASE_URL, EMAIL_INFO } from "@/data/site-config";
import { EnquiryForm } from "@/modules/form/enquiry-form";

import { structuredData } from "./structured-data";

const meta = {
  title: "Contact Sphere IT | Connect with Our IT Experts",
  description:
    "Get in touch with Sphere IT for IT consulting, digital transformation, or project collaboration. Reach us via email, phone, or WhatsApp - we’re here to help you scale.",
};

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: [
    "contact sphere global",
    "AI consulting contact",
    "technology solutions contact",
    "digital transformation consulting",
    "automation frameworks contact",
    "enterprise technology support",
    "AI platform consultation",
    "business automation contact",
  ],
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: `${BASE_URL}/contact`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
  },
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} type="application/ld+json" />
      <main>
        <header className="container max-w-7xl py-16 sm:py-20 md:py-28">
          <Badge showDashes>Contact us</Badge>
          <h1 className="text-primary-900 text-title-1">Here to help</h1>
          <section className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            <article className="rounded-lg bg-card px-6 py-8 shadow-md sm:px-10 sm:py-12">
              <h2 className="text-stone-800 text-title-4">Support</h2>
              <p className="mt-3 text-base text-muted-foreground sm:text-lg">
                Whether you have questions about Sphere IT's offerings, partnerships, or just want to say hello!
              </p>
              <ul className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
                <li className="flex items-center justify-between rounded-xl bg-stone-alpha-10 p-3">
                  <div className="min-w-0 flex-1">
                    <label className="font-mono text-badge text-muted-background uppercase" htmlFor="email">
                      Email
                    </label>
                    <p className="text-base sm:text-lg" id="email">
                      {EMAIL_INFO}
                    </p>
                  </div>
                  <button aria-label="Copy email address" className="ml-2 flex-shrink-0">
                    <IconCopy className="text-stone-400" />
                  </button>
                </li>
                <li className="flex items-center justify-between rounded-xl bg-stone-alpha-10 p-3">
                  <div className="min-w-0 flex-1">
                    <label className="font-mono text-badge text-muted-background uppercase" htmlFor="inquiry-form">
                      Form
                    </label>
                    <p className="text-base sm:text-lg" id="inquiry-form">
                      Submit an inquiry
                    </p>
                  </div>
                  <button aria-label="Go to inquiry form" className="ml-2 flex-shrink-0">
                    <IconArrowRight className="text-stone-400" />
                  </button>
                </li>
              </ul>
            </article>
            <article className="flex flex-col justify-between rounded-lg bg-stone-alpha-10 px-6 py-8 sm:px-10 sm:py-12">
              <div>
                <h2 className="text-stone-800 text-title-4">Sales</h2>
                <p className="mt-3 text-base text-muted-foreground sm:text-lg">
                  Connect with our sales team to talk about pricing or to request a demo.
                </p>
              </div>
              <Button className="mt-6 w-fit sm:mt-0">Contact now</Button>
            </article>
            <article className="flex flex-col justify-between rounded-lg bg-stone-alpha-10 px-6 py-8 sm:px-10 sm:py-12">
              <div>
                <h2 className="text-stone-800 text-title-4">Careers</h2>
                <p className="mt-3 text-base text-muted-foreground sm:text-lg">
                  View opportunities to join our amazing team.
                </p>
              </div>
              <Button asChild className="mt-6 w-fit sm:mt-0" variant="ghost">
                <Link
                  aria-label="Explore career opportunities at Sphere Global"
                  href="/careers"
                  title="Explore open Opportunities"
                >
                  Explore Open Opportunities
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-stone-300">
                    <IconChevronDown aria-hidden="true" className="text-stone-500" />
                  </span>
                </Link>
              </Button>
            </article>
          </section>
        </header>
        <section className="container grid max-w-7xl gap-8 pb-16 sm:gap-12 sm:pb-24 lg:grid-cols-2">
          <div className="space-y-3 lg:sticky lg:top-[11vh] lg:h-fit">
            <h2 className="text-primary-900 text-title-2">Accelerate Your Growth with Sphere IT Global Solutions</h2>
            <p className="text-base text-stone-600 sm:text-lg">
              Whether it's IT consulting, project management, or custom solutions, our specialists are here to guide you
              every step of the way.
            </p>
          </div>
          <div className="rounded-2xl bg-card p-6 sm:p-10">
            <div className="mb-6">
              <Badge variant="ghost">General Inquiries</Badge>
              <h3 className="text-primary-800 text-title-3">Shall we talk</h3>
              <p className="text-base text-stone-500 sm:text-lg">
                Fill in your details our team will contact you to understand your needs and present Sphere solutions
              </p>
            </div>
            <EnquiryForm />
          </div>
        </section>
        <section className="container grid max-w-7xl gap-4 pb-16 sm:gap-6 sm:pb-24 md:grid-cols-2 lg:grid-cols-3">
          <article className="card flex flex-col items-center justify-center gap-4 rounded-3xl bg-card px-4 py-8 shadow-md transition-all hover:shadow-lg sm:gap-6 sm:px-6 sm:py-10">
            <IconSocialX className="size-12 text-stone-300 sm:size-14" />
            <div className="text-center">
              <h4 className="text-stone-700 text-subhead-lg">
                X <span className="font-normal text-sm text-stone-400 sm:text-base">(Formerly Twitter)</span>
              </h4>
              <p className="text-muted-foreground text-xs sm:text-sm">
                Stay updated with real-time updates, product launches, automation, and AI-driven transformation.
              </p>
            </div>
          </article>
          <article className="card flex flex-col items-center justify-center gap-4 rounded-3xl bg-card px-4 py-8 shadow-md transition-all hover:shadow-lg sm:gap-6 sm:px-6 sm:py-10">
            <IconSocialInstagram className="size-12 text-stone-300 sm:size-14" />
            <div className="text-center">
              <h4 className="text-stone-700 text-subhead-lg">Instagram</h4>
              <p className="text-muted-foreground text-xs sm:text-sm">
                Connect with us on Instagram to explore our visual content, company updates, and behind-the-scenes
                insights.
              </p>
            </div>
          </article>
          <article className="card flex flex-col items-center justify-center gap-4 rounded-3xl bg-card px-4 py-8 shadow-md transition-all hover:shadow-lg sm:gap-6 sm:px-6 sm:py-10 md:col-span-2 lg:col-span-1">
            <IconSocialWhatsapp className="size-12 text-stone-300 sm:size-14" />
            <div className="text-center">
              <h4 className="text-stone-700 text-subhead-lg">WhatsApp</h4>
              <p className="text-muted-foreground text-xs sm:text-sm">
                Join our WhatsApp channel for instant updates, and announcements - delivered right to your chat.
              </p>
            </div>
          </article>
        </section>
        <section className="container grid max-w-7xl gap-4 pb-16 sm:gap-6 sm:pb-24 md:grid-cols-2">
          <article className="card rounded-xl border px-4 py-8 text-center transition-all hover:border-0 hover:bg-card hover:shadow-md sm:px-6 sm:py-10">
            <div className="mb-4 sm:mb-6">
              <h5 className="text-stone-700 text-title-4">FAQs</h5>
              <p className="text-base text-muted-foreground sm:text-lg">
                View all frequently asked questions in the community.
              </p>
            </div>
            <Button asChild variant="secondary">
              <Link aria-label="Read frequently asked questions" href="/resources/faqs" title="Read our FAQs">
                Read our FAQs
              </Link>
            </Button>
          </article>
          <article className="card rounded-xl border px-4 py-8 text-center transition-all hover:border-0 hover:bg-card hover:shadow-md sm:px-6 sm:py-10">
            <div className="mb-4 sm:mb-6">
              <h5 className="text-stone-700 text-title-4">Client Stories</h5>
              <p className="text-base text-muted-foreground sm:text-lg">
                Discover how we've helped businesses transform with our solutions.
              </p>
            </div>
            <Button asChild variant="secondary">
              <Link
                aria-label="Read client success stories and case studies"
                href="/resources/case-studies"
                title="Read our Client Stories"
              >
                Read our Client Stories
              </Link>
            </Button>
          </article>
        </section>
        <Cta />
      </main>
    </>
  );
}
