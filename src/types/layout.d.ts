import { Route } from "next";

export type NavLink = {
  id: number;
  label: string;
  href?: Route;
  submenu?: SubmenuLink[];
};

export type SubmenuLink = {
  id: number;
  label: string;
  href: Route;
  Icon?: SVGProps;
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
