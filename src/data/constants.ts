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
