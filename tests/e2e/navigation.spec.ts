import { expect, test } from "@playwright/test";

test.describe("Page Navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test.describe("Home Page Navigation", () => {
    test("should navigate to services page from home page CTA button", async ({ page }) => {
      await page.getByRole("link", { name: "Explore Services" }).first().click();
      await expect(page).toHaveURL("/services");
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    });

    test("should navigate to contact page from home page CTA button", async ({ page }) => {
      await page.getByRole("link", { name: "Contact us" }).click();
      await expect(page).toHaveURL("/contact");
    });
  });
});
