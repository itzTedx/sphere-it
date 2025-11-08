import type { Metadata } from "next";

import { Cta } from "@/components/layout/cta";
import { Badge } from "@/components/ui/badge";

import { IconCalloutQuote } from "@/assets/icons";

import { BASE_URL } from "@/data/site-config";
import { TESTIMONIALS } from "@/data/testimonials";
import { BreadcrumbJsonLd } from "@/modules/seo/breadcrumb-jsonld";
import { TestimonialCard } from "@/modules/views/components/testimonial-card";

import { structuredData } from "./structured-data";

const meta = {
  title: "Client Testimonials | Sphere IT",
  description:
    "Read testimonials from our clients about Sphere IT's services, including AI enablement, process automation, data management, managed services, and talent augmentation. Discover how we've helped businesses transform.",
};

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: [
    "client testimonials",
    "customer reviews",
    "Sphere IT reviews",
    "client feedback",
    "success stories",
    "customer satisfaction",
    "IT services testimonials",
    "digital transformation reviews",
    "enterprise IT feedback",
  ],
  openGraph: {
    title: meta.title,
    description: meta.description,
    type: "website",
    url: `${BASE_URL}/resources/testimonials`,
  },
  alternates: {
    canonical: `${BASE_URL}/resources/testimonials`,
  },
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
};

export default function TestimonialsPage() {
  return (
    <>
      {structuredData.map((data, index) => (
        <script dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} key={index} type="application/ld+json" />
      ))}
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: `${BASE_URL}` },
          { name: "Resources", item: `${BASE_URL}/resources` },
          { name: "Testimonials", item: `${BASE_URL}/resources/testimonials` },
        ]}
      />
      <main aria-label="Client Testimonials" id="main-content" role="main">
        <section
          aria-labelledby="testimonials-heading"
          className="relative z-10 border-b bg-card py-6 sm:py-8 md:py-12 lg:py-16"
        >
          <header className="container max-w-7xl space-y-2 sm:space-y-3 md:space-y-4">
            <Badge showDashes>
              <IconCalloutQuote aria-hidden="true" /> Testimonials
            </Badge>
            <h1
              className="text-primary-900 text-title-4 sm:text-title-3 md:text-title-2 lg:text-title-2"
              id="testimonials-heading"
            >
              <span className="text-primary-600">What Our Clients</span>
              <br />
              Say About Us
            </h1>
          </header>
        </section>
        <div
          aria-label="Testimonials grid"
          className="container mt-8 mb-16 max-w-7xl space-y-8 sm:mt-12 sm:mb-20 sm:space-y-10 md:mt-16 md:mb-24 md:space-y-12 lg:mb-32"
          role="region"
        >
          <div className="columns-1 gap-6 space-y-6 sm:columns-2 md:columns-3">
            {TESTIMONIALS.map((testimonial) => (
              <TestimonialCard data={testimonial} key={testimonial.id} />
            ))}
          </div>
        </div>

        <Cta
          badge="Share Your Experience"
          buttonText="Contact Us"
          description="Have you worked with us? We'd love to hear about your experience and how we can continue to serve you better."
          title="Ready to share your success story?"
        />
      </main>
    </>
  );
}
