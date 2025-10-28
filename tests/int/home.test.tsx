import { render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";

// Mock child sections to make the test resilient to content changes
vi.mock("@/modules/views", () => ({
  Hero: () => <div data-testid="hero" />,
  Services: () => <div data-testid="services" />,
  Clients: () => <div data-testid="clients" />,
  About: () => <div data-testid="about" />,
  WhyUs: () => <div data-testid="why-us" />,
  Resources: () => <div data-testid="resources" />,
  Testimonials: () => <div data-testid="testimonials" />,
}));

vi.mock("@/components/layout/cta", () => ({
  Cta: ({ showForm }: { showForm?: boolean }) => <div data-testid="cta">{showForm ? "form" : "noform"}</div>,
}));

import Home from "@/app/(root)/page";

test("Home renders main sections", () => {
  render(<Home />);

  // main landmark exists
  expect(screen.getByRole("main")).toBeDefined();

  // key sections are rendered
  expect(screen.getByTestId("hero")).toBeDefined();
  expect(screen.getByTestId("services")).toBeDefined();
  expect(screen.getByTestId("clients")).toBeDefined();
  expect(screen.getByTestId("about")).toBeDefined();
  expect(screen.getByTestId("why-us")).toBeDefined();
  expect(screen.getByTestId("resources")).toBeDefined();
  expect(screen.getByTestId("testimonials")).toBeDefined();
  expect(screen.getByTestId("cta")).toBeDefined();
});
