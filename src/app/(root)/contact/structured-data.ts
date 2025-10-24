import { BASE_URL, EMAIL_INFO, EMAIL_SALES } from "@/data/site-config";

export const structuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Sphere Global",
  description: "Contact Sphere Global for AI solutions, technology consulting, and digital transformation services.",
  url: `${BASE_URL}/contact`,
  mainEntity: {
    "@type": "Organization",
    name: "Sphere Global",
    url: BASE_URL,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+971-XX-XXXXXXX",
        contactType: "customer service",
        email: EMAIL_INFO,
        availableLanguage: "English",
      },
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: EMAIL_SALES,
        availableLanguage: "English",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "AE",
      addressLocality: "Dubai",
    },
    sameAs: ["https://twitter.com/sphereglobal", "https://instagram.com/sphereglobal", "https://wa.me/sphereglobal"],
  },
};
