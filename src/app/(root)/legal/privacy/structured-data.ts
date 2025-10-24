import { BASE_URL, COMPANY_NAME } from "@/data/site-config";

export const privacyStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Privacy Policy - Sphere IT Global",
  description:
    "Learn how Sphere IT Global protects your privacy and handles your personal data. Comprehensive privacy policy covering data collection, usage, and your rights.",
  url: `${BASE_URL}/legal/privacy`,
  mainEntity: {
    "@type": "Organization",
    name: COMPANY_NAME,
    url: BASE_URL,
    privacyPolicy: `${BASE_URL}/legal/privacy`,
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
        name: "Privacy Policy",
        item: `${BASE_URL}/legal/privacy`,
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

export const privacyFAQStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What personal data does Sphere IT Global collect?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We collect personal data including your name, email address, phone number, and any messages you submit through our contact forms. We also collect usage data such as IP address, browser type, and pages visited.",
      },
    },
    {
      "@type": "Question",
      name: "How does Sphere IT Global use my personal data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We use your personal data to respond to your inquiries, provide information about our IT solutions and services, and improve our customer service quality. Your information is never sold or shared for marketing purposes.",
      },
    },
    {
      "@type": "Question",
      name: "How long does Sphere IT Global retain my data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We retain personal data only for as long as necessary to respond to your inquiry or fulfill the purpose for which it was collected. After that period, your data is securely deleted or anonymized.",
      },
    },
    {
      "@type": "Question",
      name: "What are my rights regarding my personal data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You have the right to request access to your personal data, request correction or deletion of your data, and withdraw consent for data processing at any time. Contact us at info@sphereitglobal.com to exercise these rights.",
      },
    },
    {
      "@type": "Question",
      name: "Does Sphere IT Global use cookies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we use cookies to enable basic website functionality and analyze website performance. These cookies do not collect personal data or track your identity. You can disable cookies in your browser settings.",
      },
    },
  ],
};
