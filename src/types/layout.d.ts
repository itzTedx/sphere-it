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
