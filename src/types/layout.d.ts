import { Route } from "next";

export type NavLink = {
  id: number;
  label: string;
  href?: Route;
  submenu?: SubmenuLink[];
  resources?: ResourcesSubmenu[];
};

export type ResourcesSubmenu = {
  id: string;
  links: ResourcesSubmenuLink[];
};

export type ResourcesSubmenuLink = {
  Icon: (props: SVGProps) => JSX.Element;
  label: string;
  description: string;
  href: Route;
};

export type SubmenuLink = {
  id: number;
  label: string;
  description?: string;
  href: Route;
  Icon?: (props: SVGProps) => JSX.Element;
};

export type Footer = {
  id: number;
  heading: string;
  href?: Route;
  links: FooterNavLink[];
};

export type FooterNavLink = {
  id: number;
  Icon?: (props: SVGProps) => JSX.Element;
  label: string;
  href: Route;
};
