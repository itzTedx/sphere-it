import { BASE_URL } from "@/data/site-config";
import { TESTIMONIALS } from "@/data/testimonials";

export const testimonialsStructuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Client Testimonials",
  description: "Read what our clients say about Sphere IT's services and solutions",
  url: `${BASE_URL}/resources/testimonials`,
  mainEntity: {
    "@type": "ItemList",
    itemListElement: TESTIMONIALS.map((testimonial, index) => ({
      "@type": "Review",
      position: index + 1,
      author: {
        "@type": "Person",
        name: testimonial.name,
        jobTitle: testimonial.designation,
      },
      reviewBody: testimonial.content,
      itemReviewed: {
        "@type": "Organization",
        name: "Sphere IT Global",
      },
    })),
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
      name: "Testimonials",
      item: `${BASE_URL}/resources/testimonials`,
    },
  ],
};

export const structuredData = [testimonialsStructuredData, breadcrumbStructuredData];
