import { SERVICES } from "@/data/services";
import { BASE_URL, COMPANY_NAME } from "@/data/site-config";

export const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "IT Services",
    description:
      "Comprehensive IT services including AI solutions, process automation, data analytics, managed platforms, and talent augmentation",
    provider: {
      "@type": "Organization",
      name: COMPANY_NAME,
      url: BASE_URL,
    },
    serviceType: "IT Services",
    areaServed: "Global",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "IT Services",
      itemListElement: SERVICES.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.serviceTitle,
          description: service.overview,
        },
        position: index + 1,
      })),
    },
  },
  {
    "@context": "https://schema.org",
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
        name: "Services",
        item: `${BASE_URL}/services`,
      },
    ],
  },
];
