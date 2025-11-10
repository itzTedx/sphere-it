import { expect, test } from "@playwright/test";

test.describe("Page Navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test.describe("Home Page Navigation", () => {
    test("should navigate to services page from home page CTA button", async ({ page }) => {
      await page.getByRole("button", { name: "Explore Services" }).click();
      await expect(page).toHaveURL("/services");
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    });

    test("should navigate to contact page from home page CTA button", async ({ page }) => {
      await page.getByRole("button", { name: "Contact us" }).click();
      await expect(page).toHaveURL("/contact");
    });
  });

  test("should navigate to services page from navbar", async ({ page }) => {
    await page.getByRole("link", { name: "Services" }).first().click();
    await expect(page).toHaveURL("/services");
  });

  test("should navigate to about page from navbar", async ({ page }) => {
    await page.getByRole("link", { name: "About us" }).click();
    await expect(page).toHaveURL("/about");
  });

  test("should navigate to contact page from navbar", async ({ page }) => {
    await page.getByRole("link", { name: "Contact" }).click();
    await expect(page).toHaveURL("/contact");
  });

  test.describe("Services Submenu Navigation", () => {
    test("should navigate to elevate service page from services submenu", async ({ page }) => {
      const servicesButton = page.getByRole("button", { name: "Services" });
      await servicesButton.hover();
      // Wait for the specific link to be visible in the submenu
      const elevateLink = page.getByRole("link", { name: "Elevate" });
      await elevateLink.waitFor({ state: "visible" });
      await elevateLink.click();
      await expect(page).toHaveURL("/services/elevate");
    });

    test("should navigate to automate service page from services submenu", async ({ page }) => {
      const servicesButton = page.getByRole("button", { name: "Services" });
      await servicesButton.hover();
      const automateLink = page.getByRole("link", { name: "Automate" });
      await automateLink.waitFor({ state: "visible" });
      await automateLink.click();
      await expect(page).toHaveURL("/services/automate");
    });

    test("should navigate to evaluate service page from services submenu", async ({ page }) => {
      const servicesButton = page.getByRole("button", { name: "Services" });
      await servicesButton.hover();
      const evaluateLink = page.getByRole("link", { name: "Evaluate" });
      await evaluateLink.waitFor({ state: "visible" });
      await evaluateLink.click();
      await expect(page).toHaveURL("/services/evaluate");
    });

    test("should navigate to assure service page from services submenu", async ({ page }) => {
      const servicesButton = page.getByRole("button", { name: "Services" });
      await servicesButton.hover();
      const assureLink = page.getByRole("link", { name: "Assure" });
      await assureLink.waitFor({ state: "visible" });
      await assureLink.click();
      await expect(page).toHaveURL("/services/assure");
    });

    test("should navigate to augment service page from services submenu", async ({ page }) => {
      const servicesButton = page.getByRole("button", { name: "Services" });
      await servicesButton.hover();
      const augmentLink = page.getByRole("link", { name: "Augment" });
      await augmentLink.waitFor({ state: "visible" });
      await augmentLink.click();
      await expect(page).toHaveURL("/services/augment");
    });
  });

  test.describe("Resources Submenu Navigation", () => {
    test("should navigate to FAQs page from resources submenu", async ({ page }) => {
      const resourcesButton = page.getByRole("button", { name: "Resources" });
      await resourcesButton.hover();
      const faqsLink = page.getByRole("link", { name: "FAQs" });
      await faqsLink.waitFor({ state: "visible" });
      await faqsLink.click();
      await expect(page).toHaveURL("/resources/faqs");
    });

    test("should navigate to blogs page from resources submenu", async ({ page }) => {
      const resourcesButton = page.getByRole("button", { name: "Resources" });
      await resourcesButton.hover();
      const blogsLink = page.getByRole("link", { name: "Blogs" });
      await blogsLink.waitFor({ state: "visible" });
      await blogsLink.click();
      await expect(page).toHaveURL("/resources/blogs");
    });

    test("should navigate to about page from resources submenu", async ({ page }) => {
      const resourcesButton = page.getByRole("button", { name: "Resources" });
      await resourcesButton.hover();
      const aboutLink = page.getByRole("link", { name: "About" });
      await aboutLink.waitFor({ state: "visible" });
      await aboutLink.click();
      await expect(page).toHaveURL("/about");
    });

    test("should navigate to careers page from resources submenu", async ({ page }) => {
      const resourcesButton = page.getByRole("button", { name: "Resources" });
      await resourcesButton.hover();
      const careersLink = page.getByRole("link", { name: "Careers" });
      await careersLink.waitFor({ state: "visible" });
      await careersLink.click();
      await expect(page).toHaveURL("/careers");
    });

    test("should navigate to contact page from resources submenu", async ({ page }) => {
      const resourcesButton = page.getByRole("button", { name: "Resources" });
      await resourcesButton.hover();
      const contactLink = page.getByRole("link", { name: "Contact Support" });
      await contactLink.waitFor({ state: "visible" });
      await contactLink.click();
      await expect(page).toHaveURL("/contact");
    });

    test("should navigate to case studies page from resources submenu", async ({ page }) => {
      const resourcesButton = page.getByRole("button", { name: "Resources" });
      await resourcesButton.hover();
      const caseStudiesLink = page.getByRole("link", { name: "Case Studies" });
      await caseStudiesLink.waitFor({ state: "visible" });
      await caseStudiesLink.click();
      await expect(page).toHaveURL("/resources/case-studies");
    });

    test("should navigate to research papers page from resources submenu", async ({ page }) => {
      const resourcesButton = page.getByRole("button", { name: "Resources" });
      await resourcesButton.hover();
      const researchLink = page.getByRole("link", { name: "Research Papers" });
      await researchLink.waitFor({ state: "visible" });
      await researchLink.click();
      await expect(page).toHaveURL("/resources/research-papers");
    });

    test("should navigate to testimonials page from resources submenu", async ({ page }) => {
      const resourcesButton = page.getByRole("button", { name: "Resources" });
      await resourcesButton.hover();
      const testimonialsLink = page.getByRole("link", { name: "Testimonials" });
      await testimonialsLink.waitFor({ state: "visible" });
      await testimonialsLink.click();
      await expect(page).toHaveURL("/resources/testimonials");
    });
  });
});

test.describe("Service Pages Navigation", () => {
  const services = [
    { slug: "elevate", name: "Elevate" },
    { slug: "automate", name: "Automate" },
    { slug: "evaluate", name: "Evaluate" },
    { slug: "assure", name: "Assure" },
    { slug: "augment", name: "Augment" },
  ];

  for (const service of services) {
    test(`should navigate to ${service.name} service page directly`, async ({ page }) => {
      await page.goto(`/services/${service.slug}`);
      await expect(page).toHaveURL(`/services/${service.slug}`);
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    });

    test(`should navigate to ${service.name} service page from services listing`, async ({ page }) => {
      await page.goto("/services");
      await page
        .getByRole("link", { name: new RegExp(service.name, "i") })
        .first()
        .click();
      await expect(page).toHaveURL(`/services/${service.slug}`);
    });
  }
});

test.describe("Footer Navigation", () => {
  test("should navigate to services page from footer", async ({ page }) => {
    await page.getByRole("contentinfo").getByRole("link", { name: "Services" }).click();
    await expect(page).toHaveURL("/services");
  });

  test("should navigate to about page from footer", async ({ page }) => {
    await page.getByRole("contentinfo").getByRole("link", { name: "About" }).click();
    await expect(page).toHaveURL("/about");
  });

  test("should navigate to careers page from footer", async ({ page }) => {
    await page.getByRole("contentinfo").getByRole("link", { name: "Careers" }).click();
    await expect(page).toHaveURL("/careers");
  });

  test("should navigate to contact page from footer", async ({ page }) => {
    await page.getByRole("contentinfo").getByRole("link", { name: "Contact" }).click();
    await expect(page).toHaveURL("/contact");
  });

  test("should navigate to FAQs page from footer", async ({ page }) => {
    await page.getByRole("contentinfo").getByRole("link", { name: /Faqs/i }).click();
    await expect(page).toHaveURL("/resources/faqs");
  });

  test("should navigate to testimonials page from footer", async ({ page }) => {
    await page.getByRole("contentinfo").getByRole("link", { name: "Testimonials" }).click();
    await expect(page).toHaveURL("/resources/testimonials");
  });

  test("should navigate to case studies page from footer", async ({ page }) => {
    await page
      .getByRole("contentinfo")
      .getByRole("link", { name: /Case studies/i })
      .click();
    await expect(page).toHaveURL("/resources/case-studies");
  });

  test("should navigate to blogs page from footer", async ({ page }) => {
    await page.getByRole("contentinfo").getByRole("link", { name: "Insights" }).click();
    await expect(page).toHaveURL("/resources/blogs");
  });
});

test.describe("Breadcrumb Navigation", () => {
  test("should navigate back to services from service detail page", async ({ page }) => {
    await page.goto("/services/elevate");
    const breadcrumbLink = page.getByRole("link", { name: /Services/i });
    if (await breadcrumbLink.isVisible()) {
      await breadcrumbLink.click();
      await expect(page).toHaveURL("/services");
    }
  });
});

test.describe("Mobile Navigation", () => {
  test.use({ viewport: { width: 375, height: 667 } }); // iPhone SE size

  test("should open mobile menu and navigate to services", async ({ page }) => {
    // Open mobile menu
    await page.getByRole("button", { name: "Open navigation menu" }).click();

    // Click on Services submenu toggle
    await page.getByRole("button", { name: "Toggle Services submenu" }).click();

    // Navigate to a service page
    await page.getByRole("link", { name: "Elevate" }).click();
    await expect(page).toHaveURL("/services/elevate");
  });

  test("should open mobile menu and navigate to about", async ({ page }) => {
    // Open mobile menu
    await page.getByRole("button", { name: "Open navigation menu" }).click();

    // Click on Resources submenu toggle
    await page.getByRole("button", { name: "Toggle Resources submenu" }).click();

    // Navigate to About page
    await page.getByRole("link", { name: "About" }).click();
    await expect(page).toHaveURL("/about");
  });

  test("should open mobile menu and navigate to contact via footer button", async ({ page }) => {
    // Open mobile menu
    await page.getByRole("button", { name: "Open navigation menu" }).click();

    // Click the "Get in touch" button in drawer footer
    await page.getByRole("link", { name: "Get in touch" }).click();
    await expect(page).toHaveURL("/contact");
  });
});

test.describe("Navigation Flow", () => {
  test("should complete a full navigation flow", async ({ page }) => {
    // Start at home
    await expect(page).toHaveURL("/");

    // Navigate to services
    await page.getByRole("link", { name: "Services" }).first().click();
    await expect(page).toHaveURL("/services");

    // Navigate to a specific service
    await page
      .getByRole("link", { name: /Elevate/i })
      .first()
      .click();
    await expect(page).toHaveURL("/services/elevate");

    // Navigate back to home via logo
    await page
      .getByRole("link", { name: /Sphere IT/i })
      .first()
      .click();
    await expect(page).toHaveURL("/");

    // Navigate to about
    await page.getByRole("link", { name: "About us" }).click();
    await expect(page).toHaveURL("/about");

    // Navigate to contact
    await page.getByRole("link", { name: "Contact" }).click();
    await expect(page).toHaveURL("/contact");
  });
});

test.describe("Page Content Verification", () => {
  test("should verify services page has correct content", async ({ page }) => {
    await page.goto("/services");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.getByText(/Powering Business/i)).toBeVisible();
  });

  test("should verify about page has correct content", async ({ page }) => {
    await page.goto("/about");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("should verify contact page has correct content", async ({ page }) => {
    await page.goto("/contact");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("should verify careers page has correct content", async ({ page }) => {
    await page.goto("/careers");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("should verify FAQs page has correct content", async ({ page }) => {
    await page.goto("/resources/faqs");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("should verify blogs page has correct content", async ({ page }) => {
    await page.goto("/resources/blogs");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });
});
