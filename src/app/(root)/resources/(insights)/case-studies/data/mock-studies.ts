export const CASE_STUDIES: CaseStudy[] = [
  {
    title: "Digital Transformation at Mashreq Bank, UAE",

    image: "/images/dubai-skyline.webp",
    slug: "digital-transformation-at-mashreq-bank-uae",
    client: {
      name: "Mashreq Bank",
      logo: "/brands/mashreq.svg",
      url: "https://www.mashreq.com",
      description:
        "Gulf Capital is a leading investment firm in the Middle East, specializing in alternative asset management and growth capital. With over $3 billion in assets under management and offices across the GCC, Gulf Capital invests in high-growth sectors while maintaining lean operational models.",
      location: "Dubai, UAE",
      industry: "Finance & Investments",
      size: "1000+ employees",
      founded: "1967",
    },
    lists: [
      { value: "40% faster", label: "faster lead-to-meeting time" },
      { value: "15%", label: "increase in meeting show rates" },
    ],
    content: `
      
Digital transformation isn’t just about technology — it’s about rethinking how businesses operate, innovate, and serve customers in a digital-first world. At Sphere IT, we help enterprises unlock the full potential of technology to achieve meaningful change.


## Understanding True Digital Transformation

True transformation goes beyond automating tasks — it’s about enabling smarter decisions, seamless collaboration, and continuous innovation.  
Sphere IT works with businesses to **integrate cloud, data, and automation** strategies that simplify operations and accelerate growth.

## Our Approach

- **Assessment & Strategy:** Evaluating digital maturity and identifying opportunities for optimization.  
- **Modern Infrastructure:** Migrating legacy systems to the cloud for agility and scalability.  
- **Innovation Enablement:** Empowering teams with analytics, AI, and automation tools.

## Impact

From SMEs to large enterprises, our clients experience **reduced costs, faster delivery, and improved decision-making** — building a foundation for long-term success in the digital era.
      
Digital transformation isn’t just about technology — it’s about rethinking how businesses operate, innovate, and serve customers in a digital-first world. At Sphere IT, we help enterprises unlock the full potential of technology to achieve meaningful change.


## Understanding True Digital Transformation

True transformation goes beyond automating tasks — it’s about enabling smarter decisions, seamless collaboration, and continuous innovation.  
Sphere IT works with businesses to **integrate cloud, data, and automation** strategies that simplify operations and accelerate growth.

## Our Approach

- **Assessment & Strategy:** Evaluating digital maturity and identifying opportunities for optimization.  
- **Modern Infrastructure:** Migrating legacy systems to the cloud for agility and scalability.  
- **Innovation Enablement:** Empowering teams with analytics, AI, and automation tools.

## Impact

From SMEs to large enterprises, our clients experience **reduced costs, faster delivery, and improved decision-making** — building a foundation for long-term success in the digital era.
      
Digital transformation isn’t just about technology — it’s about rethinking how businesses operate, innovate, and serve customers in a digital-first world. At Sphere IT, we help enterprises unlock the full potential of technology to achieve meaningful change.


## Understanding True Digital Transformation

True transformation goes beyond automating tasks — it’s about enabling smarter decisions, seamless collaboration, and continuous innovation.  
Sphere IT works with businesses to **integrate cloud, data, and automation** strategies that simplify operations and accelerate growth.

## Our Approach

- **Assessment & Strategy:** Evaluating digital maturity and identifying opportunities for optimization.  
- **Modern Infrastructure:** Migrating legacy systems to the cloud for agility and scalability.  
- **Innovation Enablement:** Empowering teams with analytics, AI, and automation tools.

## Impact

From SMEs to large enterprises, our clients experience **reduced costs, faster delivery, and improved decision-making** — building a foundation for long-term success in the digital era.
    `,
  },
  {
    title: "How Gulf Capital Reduced Operational Costs by 37% with Sphere IT’s Automation Framework",

    image: "/images/desert.webp",
    slug: "how-gulf-capital-reduced-operational-costs-by-37-with-sphere-its-automation-framework",
    lists: [
      { value: "37% reduction", label: "reduction in operational costs" },
      { value: "60%", label: "increase in productivity" },
    ],
    client: {
      name: "Emirates NBD",
      logo: "/brands/enbd.svg",
      url: "https://www.enbd.com",
      description:
        "Emirates NBD is a leading bank in the UAE, providing a wide range of banking services to businesses and individuals.",
      location: "Dubai, UAE",
      industry: "Banking / Financial Services",
      size: "1000+ employees",
      founded: "1967",
    },
    content: `
      
Digital transformation isn’t just about technology — it’s about rethinking how businesses operate, innovate, and serve customers in a digital-first world. At Sphere IT, we help enterprises unlock the full potential of technology to achieve meaningful change.


## Understanding True Digital Transformation

True transformation goes beyond automating tasks — it’s about enabling smarter decisions, seamless collaboration, and continuous innovation.  
Sphere IT works with businesses to **integrate cloud, data, and automation** strategies that simplify operations and accelerate growth.

## Our Approach

- **Assessment & Strategy:** Evaluating digital maturity and identifying opportunities for optimization.  
- **Modern Infrastructure:** Migrating legacy systems to the cloud for agility and scalability.  
- **Innovation Enablement:** Empowering teams with analytics, AI, and automation tools.

## Impact

From SMEs to large enterprises, our clients experience **reduced costs, faster delivery, and improved decision-making** — building a foundation for long-term success in the digital era.
    `,
  },
  {
    title: "How Gulf Capital Reduced Operational Costs by 37% with Sphere IT’s Automation Framework",

    image: "/images/dubai-building.webp",
    slug: "how-gulf-capital-reduced-operational-costs-by-37-with-spe-its-automation-framework",
    lists: [
      { value: "37% reduction", label: "reduction in operational costs" },
      { value: "60%", label: "increase in productivity" },
    ],
    client: {
      name: "Capital Bank of Jordan",
      logo: "/brands/cbj.svg",
      url: "https://www.cbj.com",
      description:
        "Capital Bank of Jordan is a leading bank in Jordan, providing a wide range of banking services to businesses and individuals.",
      location: "Amman, Jordan",
      industry: "Banking / Financial Services",
      size: "1000+ employees",
      founded: "1967",
    },
    content: `
      
Digital transformation isn’t just about technology — it’s about rethinking how businesses operate, innovate, and serve customers in a digital-first world. At Sphere IT, we help enterprises unlock the full potential of technology to achieve meaningful change.


## Understanding True Digital Transformation

True transformation goes beyond automating tasks — it’s about enabling smarter decisions, seamless collaboration, and continuous innovation.  
Sphere IT works with businesses to **integrate cloud, data, and automation** strategies that simplify operations and accelerate growth.

## Our Approach

- **Assessment & Strategy:** Evaluating digital maturity and identifying opportunities for optimization.  
- **Modern Infrastructure:** Migrating legacy systems to the cloud for agility and scalability.  
- **Innovation Enablement:** Empowering teams with analytics, AI, and automation tools.

## Impact

From SMEs to large enterprises, our clients experience **reduced costs, faster delivery, and improved decision-making** — building a foundation for long-term success in the digital era.
    `,
  },
];

export interface CaseStudy {
  title: string;
  client: {
    name: string;
    logo: string;
    url: string;
    description: string;
    location: string;
    industry: string;
    size: string;
    founded: string;
  };
  lists: { value: string; label: string }[];
  image: string;
  slug: string;
  content: string;
}
