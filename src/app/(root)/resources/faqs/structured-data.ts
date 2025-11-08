import { FAQS } from "@/data/faqs";
import { BASE_URL } from "@/data/site-config";

export const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.flatMap((category) =>
    category.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.content,
      },
    }))
  ),
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
      name: "FAQs",
      item: `${BASE_URL}/resources/faqs`,
    },
  ],
};

export const structuredData = [faqStructuredData, breadcrumbStructuredData];
