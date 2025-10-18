import { NavLink } from "@/types/layout";

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
