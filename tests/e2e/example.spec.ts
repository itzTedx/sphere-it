import { expect, test } from "@playwright/test";

test("should navigate to the about page", async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto("/");
  // Find an element with the text 'Explore Services' and click on it
  await page.click('text="Explore Services"');
  // The new URL should be "/services" (baseURL is used there)
  await expect(page).toHaveURL("/services");
  // The new page should contain an h1 with title
  await expect(page.locator("h1")).toContainText("Powering Business from Automation to Augmentation");
});
