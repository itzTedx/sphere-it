import { Route } from "next";

export type NavLink = {
  id: number;
  label: string;
  href?: Route;
};
