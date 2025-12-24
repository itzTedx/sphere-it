import { expect, test } from "@playwright/test";

test.describe("Page Navigation", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("/");
	});

	test.describe("Hero Section Navigation", () => {
		test("should navigate to services page from 'Explore Services' button", async ({
			page,
		}) => {
			// Click the "Explore Services" button in the hero section
			await page
				.getByRole("link", { name: "Explore Services" })
				.first()
				.click();

			// Verify navigation to services page
			await expect(page).toHaveURL("/services");
			await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
		});

		test("should navigate to contact page from 'Contact us' button", async ({
			page,
		}) => {
			// Click the "Contact us" button in the hero section
			await page.getByRole("link", { name: "Contact us" }).first().click();

			// Verify navigation to contact page
			await expect(page).toHaveURL("/contact");
			await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
		});

		test("should scroll to services section when clicking 'Scroll to Explore' link", async ({
			page,
		}) => {
			// Find and click the scroll to explore link
			const scrollLink = page.getByRole("link", {
				name: /scroll to explore/i,
			});
			await expect(scrollLink).toBeVisible();
			await scrollLink.click();

			// Wait for scroll animation to complete
			await page.waitForTimeout(500);

			// Verify we're still on the same page but scrolled to #services
			await expect(page).toHaveURL("/#services");

			// Verify the services section is in viewport
			const servicesSection = page.locator("#services");
			await expect(servicesSection).toBeInViewport();
		});
	});

	test.describe("CTA Section Navigation", () => {
		test("should navigate to contact page from bottom CTA section button", async ({
			page,
		}) => {
			// Scroll to the bottom CTA section
			const ctaSection = page.locator('section[aria-labelledby="cta-heading"]');
			await ctaSection.scrollIntoViewIfNeeded();

			// Click the "Start the Conversation" button (default text)
			const ctaButton = ctaSection.getByRole("link", {
				name: /start the conversation/i,
			});
			await expect(ctaButton).toBeVisible();
			await ctaButton.click();

			// Verify navigation to contact page
			await expect(page).toHaveURL("/contact");
			await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
		});

		test("should display quick enquiry form when showForm is enabled", async ({
			page,
		}) => {
			// The home page has showForm={true} on the Cta component
			const ctaSection = page.locator('section[aria-labelledby="cta-heading"]');
			await ctaSection.scrollIntoViewIfNeeded();

			// Verify the form is visible
			const formHeading = page.getByRole("heading", {
				name: /shall we talk/i,
			});
			await expect(formHeading).toBeVisible();
		});
	});

	test.describe("Multiple Navigation Elements", () => {
		test("should have multiple 'Explore Services' links pointing to services page", async ({
			page,
		}) => {
			// Get all "Explore Services" links
			const exploreLinks = page.getByRole("link", {
				name: /explore services/i,
			});

			// Should have at least one (hero) and may have more (e.g., MiniCta)
			const count = await exploreLinks.count();
			expect(count).toBeGreaterThanOrEqual(1);

			// Verify all point to /services
			for (let i = 0; i < count; i++) {
				const href = await exploreLinks.nth(i).getAttribute("href");
				expect(href).toBe("/services");
			}
		});

		test("should have working navigation in header and hero section", async ({
			page,
		}) => {
			// Test that contact link exists and works
			const contactLinks = page.getByRole("link", { name: /contact us/i });
			const count = await contactLinks.count();

			expect(count).toBeGreaterThanOrEqual(1);

			// Click one of them
			await contactLinks.first().click();
			await expect(page).toHaveURL("/contact");
		});
	});
});
