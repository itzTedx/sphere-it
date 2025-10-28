import { expect, test } from "@playwright/test";

import { SERVICES } from "@/data/services";

test.describe("Services page", () => {
  test("renders critical sections, services list, CTA, and SEO metadata", async ({ page }) => {
    await page.goto("http://localhost:3000/services");

    // SEO: title and description
    await expect(page).toHaveTitle(/IT Services - AI, Automation & Digital Transformation \| Sphere IT/);

    const metaDescription = await page.locator('meta[name="description"]').getAttribute("content");
    expect(metaDescription).toContain(
      "Transform your business with Sphere IT's comprehensive IT services including AI solutions, process automation, data analytics, managed platforms, and talent augmentation. Certified professionals delivering measurable outcomes."
    );

    // Canonical link
    const canonicalHref = await page.locator('link[rel="canonical"]').getAttribute("href");
    expect(canonicalHref).toMatch(/\/services$/);

    // Header
    const main = page.getByRole("main");
    await expect(main.getByRole("heading", { level: 1 })).toHaveText(
      /Powering Business from .*Automation to Augmentation/
    );
    await expect(
      main.getByRole("heading", {
        level: 2,
        name: "We deliver solutions that are precise, pragmatic, and outcome-driven.",
      })
    ).toBeVisible();
    await expect(main.getByText("Services", { exact: true })).toBeVisible();

    // Services list section
    const servicesSection = main.locator("#main-content");
    await expect(servicesSection).toBeVisible();
    const serviceItems = servicesSection.locator("ul > li");
    await expect(serviceItems).toHaveCount(SERVICES.length);

    // Verify each known service is present with link
    for (const service of SERVICES) {
      await expect(servicesSection.getByRole("heading", { level: 2, name: service.serviceTitle })).toBeVisible();
      const link = servicesSection.locator(`a[title="${service.serviceTitle}"]`);
      await expect(link).toHaveAttribute("href", `/services/${service.id}`);
    }

    // Why Matters section
    await expect(page.getByRole("heading", { level: 2, name: "Why Our Approach Works" })).toBeVisible();
    await expect(page.getByRole("link", { name: /Explore our Capabilities/i })).toBeVisible();
    await expect(page.getByRole("heading", { level: 3, name: /Trusted by .*Leading Organizations/i })).toBeVisible();

    // CTA section
    await expect(
      page.getByRole("heading", { level: 4, name: /Let's build your next IT success story together\./ })
    ).toBeVisible();
    await expect(page.getByRole("button", { name: "Start the Conversation" })).toBeVisible();

    // Structured data scripts
    const jsonLdTexts = await page.locator('script[type="application/ld+json"]').allTextContents();
    expect(jsonLdTexts.length).toBeGreaterThanOrEqual(2);
    const parsed = jsonLdTexts.map((t) => JSON.parse(t));
    const types = parsed.map((p) => p["@type"]).flat();
    expect(types).toEqual(expect.arrayContaining(["Service", "BreadcrumbList"]));
  });
});
