import { BASE_URL } from "@/data/site-config";

export const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sphere IT Global",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  description:
    "Sphere IT Global delivers future-ready IT solutions — from software and cloud to design and resourcing. With decades of cross-industry expertise, we turn complex challenges into growth opportunities.",
  foundingDate: "2016",
  address: {
    "@type": "PostalAddress",
    addressCountry: "UAE",
  },
  sameAs: ["https://linkedin.com/company/sphere-it-global"],
  knowsAbout: [
    "IT Solutions",
    "Digital Transformation",
    "BFSI Technology",
    "Software Development",
    "Cloud Solutions",
    "Technology Services",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "IT Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Software Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cloud Solutions",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Digital Transformation",
        },
      },
    ],
  },
};

export const breadcrumbStructuredData = {
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
      name: "About",
      item: `${BASE_URL}/about`,
    },
  ],
};
