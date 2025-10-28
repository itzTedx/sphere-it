import { expect, test } from "@playwright/test";

test.describe("About page", () => {
  test("renders critical sections and SEO metadata", async ({ page }) => {
    await page.goto("http://localhost:3000/about");

    await expect(page).toHaveTitle(/About Sphere IT Global - Digital Transformation & IT Innovation Partner/);

    const metaDescription = await page.locator('meta[name="description"]').getAttribute("content");
    expect(metaDescription).toContain(
      "Learn how Sphere IT drives enterprise transformation through AI, automation, and cloud engineering."
    );

    const main = page.getByRole("main");
    await expect(main.getByRole("heading", { level: 1 })).toHaveText(
      "We're driving the new era of scalable, future-ready IT solutions."
    );

    await expect(main.getByRole("link", { name: "Explore Open Opportunities" })).toBeVisible();

    await expect(
      main.getByRole("heading", {
        level: 2,
        name: "Our story started with our founders, in 2016",
      })
    ).toBeVisible();

    await expect(main.getByRole("heading", { level: 2, name: /Our Story/i })).toBeVisible();

    await expect(main.getByRole("heading", { level: 2, name: "Precision and Pragmatism" })).toBeVisible();

    await expect(main.getByRole("heading", { level: 2, name: "Meet the Minds Behind Sphere IT" })).toBeVisible();

    await expect(main.getByRole("heading", { level: 2, name: "Join team Sphere IT" })).toBeVisible();

    await expect(main.getByRole("list", { name: "Company timeline" })).toBeVisible();
    await expect(main.getByRole("list", { name: "Company core values" })).toBeVisible();
    await expect(main.getByRole("list", { name: "Leadership team" })).toBeVisible();
    await expect(main.getByRole("list", { name: "Expert team members" })).toBeVisible();
    await expect(main.getByRole("list", { name: "Career benefits" })).toBeVisible();
  });
});
