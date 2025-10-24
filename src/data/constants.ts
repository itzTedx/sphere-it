import type { Route } from "next";

import { IconAssure, IconAugment, IconAutomate, IconElevate, IconEvaluate } from "@/assets/icons/services";
import { IconSocialInstagram, IconSocialLinkedin, IconSocialWhatsapp, IconSocialX } from "@/assets/icons/social";

import { Footer, NavLink } from "@/types/layout";

export const NAV_LINKS: NavLink[] = [
  {
    id: 1,
    label: "Services",
    href: "/services",
    submenu: [
      {
        id: 1,
        Icon: IconElevate,
        label: "Elevate",
        description: "Build and Scale AI with Precision & Pragmatism",
        href: "/services/elevate" as Route,
      },
      {
        id: 2,
        Icon: IconAutomate,
        label: "Automate",
        description: "Simplify Core Processes, Reduce Errors, Maximize Value",
        href: "/services/automate" as Route,
      },
      {
        id: 3,
        Icon: IconEvaluate,
        label: "Evaluate",
        description: "Turn Data Into Reliable, Actionable Insights",
        href: "/services/evaluate" as Route,
      },
      {
        id: 4,
        Icon: IconAssure,
        label: "Assure",
        description: "Keep Your Platforms Stable, Secure, and Compliant",
        href: "/services/assure" as Route,
      },
      {
        id: 5,
        Icon: IconAugment,
        label: "Augment",
        description: "Scale Your Team with the Right Talent, On Demand",
        href: "/services/augment" as Route,
      },
    ],
  },
  {
    id: 2,
    label: "Resources",
    resources: [
      {
        id: "explore",
        links: [
          {
            Icon: IconElevate,
            label: "FAQs",
            description: "Frequently Asked Questions",
            href: "/resources/faqs",
          },
          {
            Icon: IconElevate,
            label: "Blogs",
            description: "Frequently Asked Questions",
            href: "/resources/blogs",
          },
        ],
      },
      {
        id: "company",
        links: [
          {
            Icon: IconElevate,
            label: "About",
            description: "Company, Values, and team",
            href: "/about",
          },
          {
            Icon: IconElevate,
            label: "Careers",
            description: "Join the team",
            href: "/careers",
          },
          {
            Icon: IconElevate,
            label: "Contact Support",
            description: "Reach out to support",
            href: "/contact",
          },
        ],
      },
      {
        id: "updates",
        links: [
          {
            Icon: IconElevate,
            label: "Case Studies",
            description: "Proof of success",
            href: "/resources/case-studies",
          },
          {
            Icon: IconElevate,
            label: "Research Papers",
            description: "Proof of success",
            href: "/resources/research-papers",
          },
          {
            Icon: IconElevate,
            label: "Testimonials",
            description: "Hear from our clients",
            href: "/resources/testimonials",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    label: "About us",
    href: "/about",
  },
  {
    id: 4,
    label: "Contact",
    href: "/contact",
  },
];

export const FOOTER: Footer[] = [
  {
    id: 1,
    heading: "Services",
    href: "/services",
    links: [
      {
        id: 1,
        Icon: IconElevate,
        label: "Elevate",
        href: "/services/elevate" as Route,
      },
      {
        id: 2,
        Icon: IconAutomate,
        label: "Automate",
        href: "/services/automate" as Route,
      },
      {
        id: 3,
        Icon: IconEvaluate,
        label: "Evaluate",
        href: "/services/evaluate" as Route,
      },
      {
        id: 4,
        Icon: IconAssure,
        label: "Assure",
        href: "/services/assure" as Route,
      },
      {
        id: 5,
        Icon: IconAugment,
        label: "Augment",
        href: "/services/augment" as Route,
      },
    ],
  },
  {
    id: 2,
    heading: "Company",
    links: [
      {
        id: 1,
        label: "About",
        href: "/about",
      },
      {
        id: 2,
        label: "Careers",
        href: "/careers",
      },
      {
        id: 3,
        label: "Contact",
        href: "/contact",
      },
    ],
  },
  {
    id: 3,
    heading: "Resources",
    links: [
      {
        id: 1,
        label: "Faqs",
        href: "/resources/faqs",
      },
      {
        id: 2,
        label: "Testimonials",
        href: "/resources/testimonials",
      },
      {
        id: 3,
        label: "Case studies",
        href: "/resources/case-studies",
      },
      {
        id: 4,
        label: "Insights",
        href: "/resources/blogs",
      },
    ],
  },
  {
    id: 4,
    heading: "Locations",
    links: [
      {
        id: 1,
        label: "Dubai",
        href: "/",
      },
      {
        id: 2,
        label: "India",
        href: "/",
      },
    ],
  },
];

export const SOCIALS = [
  {
    id: 1,
    Icon: IconSocialLinkedin,
    href: "/",
  },
  {
    id: 2,
    Icon: IconSocialInstagram,
    href: "/",
  },
  {
    id: 3,
    Icon: IconSocialWhatsapp,
    href: "/",
  },
  {
    id: 4,
    Icon: IconSocialX,
    href: "/",
  },
];

export const BEST_AT = [
  {
    id: 1,
    title: "AI Platforms",
    description:
      "Smart, data-driven systems that evolve with your business - delivering insights, efficiency, and measurable growth.",
  },
  {
    id: 2,
    title: "Automation Frameworks",
    description:
      "Streamline enterprise operations through intelligent automation pipelines that cut errors, save time, and enhance compliance.",
  },
  {
    id: 3,
    title: "Proven Reliability",
    description:
      "Engineered to perform flawlessly - Sphere IT’s solutions ensure accuracy, transparency, and uptime at every level.",
  },
  {
    id: 4,
    title: "Scalable by Design",
    description:
      "Flexible architectures that integrate seamlessly with your existing stack, enabling growth without disruption.",
  },
];

export const CLIENTS = [
  {
    id: 1,
    src: "/brands/adcb.svg",
    name: "ADCB",
  },
  {
    id: 2,
    src: "/brands/al-ghurair.svg",
    name: "Al Ghurair",
  },
  {
    id: 3,
    src: "/brands/cbj.svg",
    name: "Capital Bank of Jordan",
  },
  {
    id: 4,
    src: "/brands/coforge.svg",
    name: "CoForge",
  },
  {
    id: 5,
    src: "/brands/enbd.svg",
    name: "Emirates NBD",
  },
  {
    id: 6,
    src: "/brands/igt-solution.svg",
    name: "IGT Solution",
  },
  {
    id: 7,
    src: "/brands/mashreq.svg",
    name: "Mashreq Bank",
  },
  {
    id: 8,
    src: "/brands/ag-cars.png",
    name: "AG Cars",
  },
  {
    id: 9,
    src: "/brands/cbd.svg",
    name: "Commercial Bank of Dubai",
  },
  {
    id: 10,
    src: "/brands/gems.png",
    name: "GEMS Education",
  },
];

export const WHY_MATTERS = [
  {
    badge: "Data Driven",
    title: "AI Platforms",
    description: "Deliver adaptive, data-driven systems that evolve with your business.",
  },
  {
    badge: "Core expertise",
    title: "Automation Framework",
    description: "Streamline enterprise operations through intelligent automation pipelines.",
  },
  {
    badge: "Built for enterprise",
    title: "Proven Reliability",
    description: "ISO/IEC 42001-aligned processes ensure trust, transparency, and governance",
  },
  {
    badge: "Modular Impact",
    title: "Scalable by Design",
    description: "Modular frameworks integrate wit your existing stack, reducing time-to-value.",
  },
];
