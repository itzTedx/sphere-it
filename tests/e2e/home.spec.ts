import { expect, test } from "@playwright/test";

test.describe("Home page", () => {
  test("renders critical sections and SEO metadata", async ({ page }) => {
    await page.goto("http://localhost:3000");

    await expect(page).toHaveTitle(/Sphere IT - Digital Transformation Partner in UAE & GCC/);

    const metaDescription = await page.locator('meta[name="description"]').getAttribute("content");
    expect(metaDescription).toContain(
      "Empowering forward-looking organizations with talent and technology that deliver measurable outcomes. ISO/IEC 42001 certified AI platforms, automation frameworks, and scalable solutions"
    );

    await expect(page.getByRole("heading", { level: 1 })).toContainText("Delivering Accuracy. Driving Outcomes.");

    await expect(page.getByRole("button", { name: "Explore Services" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Contact us" })).toBeVisible();

    await expect(page.getByRole("tab", { name: "Elevate" })).toBeVisible();
    await expect(page.getByRole("tab", { name: "Automate" })).toBeVisible();
    await expect(page.getByRole("tab", { name: "Evaluate" })).toBeVisible();
    await expect(page.getByRole("tab", { name: "Assure" })).toBeVisible();
    await expect(page.getByRole("tab", { name: "Augment" })).toBeVisible();

    await expect(page.getByRole("heading", { name: /Trusted by .*Leading Organizations/i })).toBeVisible();

    await expect(
      page.getByRole("heading", { level: 2, name: /Delivering with .*Precision and Pragmatism/i })
    ).toBeVisible();

    await expect(page.getByRole("heading", { level: 2, name: /What sets .*Sphere IT apart/i })).toBeVisible();
  });
});
