import { BASE_URL, COMPANY_NAME } from "@/data/site-config";

export const blogCollectionStructuredData = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Sphere IT Blog",
  description:
    "Stay ahead with fresh perspectives, expert insights, and stories that inspire. Explore our latest articles on digital transformation, AI solutions, automation, and technology trends.",
  url: `${BASE_URL}/resources/blogs`,
  publisher: {
    "@type": "Organization",
    name: COMPANY_NAME,
    url: BASE_URL,
  },
  blogPost: [
    // This will be populated with actual blog posts when available
    {
      "@type": "BlogPosting",
      headline: "Digital Transformation at Mashreq Bank, UAE",
      description: "Stay ahead with fresh perspectives, expert insights, and stories that inspire.",
      url: `${BASE_URL}/resources/blogs/digital-transformation-mashreq-bank`,
      datePublished: "2025-09-12",
      author: {
        "@type": "Organization",
        name: COMPANY_NAME,
      },
      publisher: {
        "@type": "Organization",
        name: COMPANY_NAME,
        url: BASE_URL,
      },
      image: `${BASE_URL}/images/blogs/banking.jpg`,
      articleSection: "Consultancy",
    },
  ],
};

export const collectionPageStructuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Blogs - Sphere IT",
  description:
    "Explore our collection of blog posts covering digital transformation, AI solutions, automation, and technology insights.",
  url: `${BASE_URL}/resources/blogs`,
  publisher: {
    "@type": "Organization",
    name: COMPANY_NAME,
    url: BASE_URL,
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
      name: "Resources",
      item: `${BASE_URL}/resources`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Blogs",
      item: `${BASE_URL}/resources/blogs`,
    },
  ],
};

export const structuredData = [blogCollectionStructuredData, collectionPageStructuredData, breadcrumbStructuredData];
