import { BASE_URL } from "@/data/site-config";

export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sphere Global",
    description:
      "Empowering forward-looking organizations with talent and technology that deliver measurable outcomes. ISO/IEC 42001 certified AI platforms, automation frameworks, and scalable solutions.",
    url: BASE_URL,
    logo: [`${BASE_URL}/logo.png`],
    image: "https://sphere-global.com/images/og-image.jpg",
    foundingDate: "2020",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
    sameAs: ["https://linkedin.com/company/sphere-global", "https://twitter.com/sphereglobal"],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+971-XX-XXX-XXXX",
      contactType: "customer service",
      areaServed: ["AE", "IN"],
      availableLanguage: ["English", "Arabic", "Hindi"],
    },
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "25.269711",
        longitude: "55.309446",
      },
      geoRadius: "5000",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI & Technology Solutions",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Elevate",
            description: "Build and Scale AI with Precision & Pragmatism",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Automate",
            description: "Simplify Core Processes, Reduce Errors, Maximize Value",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Evaluate",
            description: "Turn Data Into Reliable, Actionable Insights",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Assure",
            description: "Keep Your Platforms Stable, Secure, and Compliant",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Augment",
            description: "Scale Your Team with the Right Talent, On Demand",
          },
        },
      ],
    },
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Automation",
      "Data Analytics",
      "Enterprise Technology",
      "Digital Transformation",
      "ISO/IEC 42001",
    ],
    areaServed: [
      {
        "@type": "Country",
        name: "United Arab Emirates",
      },
      {
        "@type": "Country",
        name: "India",
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Sphere Global",
    url: BASE_URL,
    description: "AI & Technology Solutions - Delivering Accuracy. Driving Outcomes.",
    publisher: {
      "@type": "Organization",
      name: "Sphere Global",
    },
  };

  // const breadcrumbSchema = {
  //   "@context": "https://schema.org",
  //   "@type": "BreadcrumbList",
  //   itemListElement: [
  //     {
  //       "@type": "ListItem",
  //       position: 1,
  //       name: "Home",
  //       item: BASE_URL,
  //     },
  //   ],
  // };

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
        type="application/ld+json"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
        type="application/ld+json"
      />
      {/* <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
        type="application/ld+json"
      /> */}
    </>
  );
}
