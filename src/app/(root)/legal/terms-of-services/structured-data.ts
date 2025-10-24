import { BASE_URL, COMPANY_NAME } from "@/data/site-config";

export const termsStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Terms of Service - Sphere IT Global",
  description:
    "Read the Terms of Service for Sphere IT Global. Learn about our website usage policies, intellectual property rights, and user responsibilities.",
  url: `${BASE_URL}/legal/terms-of-services`,
  mainEntity: {
    "@type": "Organization",
    name: COMPANY_NAME,
    url: BASE_URL,
    termsOfService: `${BASE_URL}/legal/terms-of-services`,
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@sphereitglobal.com",
      contactType: "customer service",
      areaServed: "Worldwide",
    },
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Legal",
        item: `${BASE_URL}/legal`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Terms of Service",
        item: `${BASE_URL}/legal/terms-of-services`,
      },
    ],
  },
  dateModified: "2025-10-06",
  inLanguage: "en-US",
  isPartOf: {
    "@type": "WebSite",
    name: "Sphere IT Global",
    url: BASE_URL,
  },
};

export const termsFAQStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the Terms of Service for Sphere IT Global?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our Terms of Service govern your use of our website and services. They include rules for website usage, intellectual property rights, data collection practices, and user responsibilities.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use Sphere IT Global's content without permission?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, all content on our website is owned by Sphere IT Global or licensed to us. You may view or download content for personal, non-commercial use only. Commercial use requires written permission.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I violate the Terms of Service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We reserve the right to suspend or terminate access for any violation of our Terms of Service. This includes unauthorized access attempts, content scraping, or submission of malicious material.",
      },
    },
    {
      "@type": "Question",
      name: "How can I contact Sphere IT Global about the Terms of Service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can contact us at info@sphereitglobal.com for any questions about our Terms of Service. We're located in Dubai, United Arab Emirates.",
      },
    },
    {
      "@type": "Question",
      name: "Can Sphere IT Global change the Terms of Service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we may update our Terms of Service at any time. Updated versions will be posted on this page, and your continued use of the site constitutes acceptance of any changes.",
      },
    },
  ],
};
