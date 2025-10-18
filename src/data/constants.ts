import type { Route } from "next";

import { IconAssure, IconAugment, IconAutomate, IconElevate, IconEvaluate } from "@/assets/icons/services";

import { Footer, NavLink } from "@/types/layout";

export const NAV_LINKS: NavLink[] = [
  {
    id: 1,
    label: "Services",
    href: "/services",
    submenu: [
      { id: 1, label: "Elevate", href: "/services" },
      { id: 2, label: "Automate", href: "/services" },
    ],
  },
  {
    id: 2,
    label: "Resources",
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
        href: "/resources/insights",
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
