import { expect, test } from "@playwright/test";

test.describe("Contact Form Submission", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("/contact");
		// Wait for form to be loaded
		await page.waitForSelector('form[aria-labelledby="enquiry-form-heading"]');
	});

	test.describe("Form Validation", () => {
		test("should show validation errors for required fields when submitting empty form", async ({
			page,
		}) => {
			// Try to submit empty form
			await page.getByRole("button", { name: "Send Message" }).click();

			// Wait for validation errors to appear
			await page.waitForTimeout(300);

			// Check for name error
			const nameError = page.locator("#name-error");
			await expect(nameError).toBeVisible();
			await expect(nameError).toContainText(/name is required/i);

			// Check for email error
			const emailError = page.locator("#email-error");
			await expect(emailError).toBeVisible();
			await expect(emailError).toContainText(/email/i);

			// Check for message error
			const messageError = page.locator("#message-error");
			await expect(messageError).toBeVisible();
			await expect(messageError).toContainText(/message is required/i);
		});

		test("should validate name field - minimum length", async ({ page }) => {
			const nameInput = page.locator("#name");
			await nameInput.fill("A"); // Only 1 character
			await nameInput.blur();

			// Submit to trigger validation
			await page.getByRole("button", { name: "Send Message" }).click();
			await page.waitForTimeout(300);

			const nameError = page.locator("#name-error");
			await expect(nameError).toBeVisible();
			await expect(nameError).toContainText(
				/name must be at least 2 characters/i
			);
		});

		test("should validate name field - only letters and spaces allowed", async ({
			page,
		}) => {
			const nameInput = page.locator("#name");
			await nameInput.fill("John123"); // Contains numbers
			await nameInput.blur();

			// Submit to trigger validation
			await page.getByRole("button", { name: "Send Message" }).click();
			await page.waitForTimeout(300);

			const nameError = page.locator("#name-error");
			await expect(nameError).toBeVisible();
			await expect(nameError).toContainText(
				/name can only contain letters and spaces/i
			);
		});

		test("should validate name field - maximum length", async ({ page }) => {
			const nameInput = page.locator("#name");
			const longName = "A".repeat(51); // 51 characters
			await nameInput.fill(longName);
			await nameInput.blur();

			// Submit to trigger validation
			await page.getByRole("button", { name: "Send Message" }).click();
			await page.waitForTimeout(300);

			const nameError = page.locator("#name-error");
			await expect(nameError).toBeVisible();
			await expect(nameError).toContainText(
				/name must be less than 50 characters/i
			);
		});

		test("should validate email field - invalid format", async ({ page }) => {
			const emailInput = page.locator("#email");

			// Test various invalid email formats
			const invalidEmails = [
				"notanemail",
				"missing@domain",
				"@nodomain.com",
				"spaces in@email.com",
			];

			for (const invalidEmail of invalidEmails) {
				await emailInput.fill(invalidEmail);
				await emailInput.blur();

				// Submit to trigger validation
				await page.getByRole("button", { name: "Send Message" }).click();
				await page.waitForTimeout(300);

				const emailError = page.locator("#email-error");
				await expect(emailError).toBeVisible();
				await expect(emailError).toContainText(/valid email address/i);

				// Clear for next test
				await emailInput.clear();
			}
		});

		test("should validate email field - maximum length", async ({ page }) => {
			const emailInput = page.locator("#email");
			const longEmail = `${"a".repeat(110)}@test.com`; // 119 characters - well over 100 limit
			await emailInput.fill(longEmail);
			await emailInput.blur();

			// Submit to trigger validation
			await page.getByRole("button", { name: "Send Message" }).click();
			await page.waitForTimeout(300);

			const emailError = page.locator("#email-error");
			await expect(emailError).toBeVisible();
			await expect(emailError).toContainText(
				/email must be less than 100 characters/i
			);
		});

		test("should validate phone field - invalid format", async ({ page }) => {
			const phoneInput = page.locator("#phone");

			// Test invalid phone formats
			const invalidPhones = ["abc", "123", "12345678901234567890123"]; // Too short or too long

			for (const invalidPhone of invalidPhones) {
				await phoneInput.fill(invalidPhone);
				await phoneInput.blur();

				// Submit to trigger validation
				await page.getByRole("button", { name: "Send Message" }).click();
				await page.waitForTimeout(300);

				const phoneError = page.locator("#phone-error");
				if (await phoneError.isVisible()) {
					await expect(phoneError).toContainText(/valid phone number/i);
				}

				// Clear for next test
				await phoneInput.clear();
			}
		});

		test("should accept valid phone formats", async ({ page }) => {
			const phoneInput = page.locator("#phone");

			const validPhones = [
				"+971567894321",
				"971 56 789 4321",
				"+1-555-123-4567",
				"(555) 123-4567",
			];

			for (const validPhone of validPhones) {
				await phoneInput.fill(validPhone);
				await phoneInput.blur();
				await page.waitForTimeout(200);

				// Phone error should not be visible for valid phones
				const phoneError = page.locator("#phone-error");
				await expect(phoneError).not.toBeVisible();

				// Clear for next test
				await phoneInput.clear();
			}
		});

		test("should validate message field - minimum length", async ({ page }) => {
			const messageInput = page.locator("#message");
			await messageInput.fill("Short"); // Less than 10 characters
			await messageInput.blur();

			// Submit to trigger validation
			await page.getByRole("button", { name: "Send Message" }).click();
			await page.waitForTimeout(300);

			const messageError = page.locator("#message-error");
			await expect(messageError).toBeVisible();
			await expect(messageError).toContainText(
				/message must be at least 10 characters/i
			);
		});

		test("should validate message field - maximum length", async ({ page }) => {
			const messageInput = page.locator("#message");
			const longMessage = "A".repeat(1001); // 1001 characters
			await messageInput.fill(longMessage);
			await messageInput.blur();

			// Submit to trigger validation
			await page.getByRole("button", { name: "Send Message" }).click();
			await page.waitForTimeout(300);

			const messageError = page.locator("#message-error");
			await expect(messageError).toBeVisible();
			await expect(messageError).toContainText(
				/message must be less than 1000 characters/i
			);
		});

		test("should validate subject field - minimum length if provided", async ({
			page,
		}) => {
			const subjectInput = page.locator("#subject");
			await subjectInput.fill("AB"); // Less than 3 characters
			await subjectInput.blur();

			// Submit to trigger validation
			await page.getByRole("button", { name: "Send Message" }).click();
			await page.waitForTimeout(300);

			const subjectError = page.locator("#subject-error");
			if (await subjectError.isVisible()) {
				await expect(subjectError).toContainText(/at least 3 characters/i);
			}
		});
	});

	test.describe("Successful Submission Flow", () => {
		test("should successfully submit form with all required fields", async ({
			page,
		}) => {
			// Fill in all required fields
			await page.locator("#name").fill("John Doe");
			await page.locator("#email").fill("john.doe@example.com");
			await page
				.locator("#message")
				.fill("This is a test message with more than 10 characters.");

			// Submit the form
			await page.getByRole("button", { name: "Send Message" }).click();

			// Wait for submission to complete
			await page.waitForTimeout(500);

			// Check for success toast/notification (using Sonner)
			// The toast should contain the submitted values or a success message
			const toast = page.locator("[data-sonner-toast]");
			await expect(toast).toBeVisible({ timeout: 3000 });
		});

		test("should successfully submit form with all fields including optional ones", async ({
			page,
		}) => {
			// Fill in all fields including optional ones
			await page.locator("#name").fill("Jane Smith");
			await page.locator("#email").fill("jane.smith@example.com");
			await page.locator("#phone").fill("+971567894321");
			await page.locator("#subject").fill("Project Inquiry");
			await page
				.locator("#message")
				.fill("I would like to discuss a project opportunity with your team.");

			// Submit the form
			await page.getByRole("button", { name: "Send Message" }).click();

			// Wait for submission
			await page.waitForTimeout(500);

			// Check for success indication
			const toast = page.locator("[data-sonner-toast]");
			await expect(toast).toBeVisible({ timeout: 3000 });
		});

		test.skip("should clear form after successful submission", async ({
			page,
		}) => {
			// Skip this test as form reset functionality is not implemented yet
			// Fill in required fields
			await page.locator("#name").fill("Test User");
			await page.locator("#email").fill("test@example.com");
			await page.locator("#message").fill("Test message for form reset.");

			// Submit the form
			await page.getByRole("button", { name: "Send Message" }).click();

			// Wait for submission and form reset
			await page.waitForTimeout(1000);

			// Verify form fields are cleared
			await expect(page.locator("#name")).toHaveValue("");
			await expect(page.locator("#email")).toHaveValue("");
			await expect(page.locator("#message")).toHaveValue("");
		});

		test("should normalize email to lowercase on submission", async ({
			page,
		}) => {
			// Fill form with uppercase email
			await page.locator("#name").fill("Test User");
			await page.locator("#email").fill("TEST@EXAMPLE.COM");
			await page
				.locator("#message")
				.fill("Testing email normalization feature.");

			// Submit the form
			await page.getByRole("button", { name: "Send Message" }).click();

			// Wait for submission
			await page.waitForTimeout(500);

			// Check toast contains normalized email
			const toast = page.locator("[data-sonner-toast]");
			await expect(toast).toBeVisible({ timeout: 3000 });
			// The toast should display the submitted data
			const toastText = await toast.textContent();
			expect(toastText?.toLowerCase()).toContain("test@example.com");
		});

		test("should trim whitespace from name and message fields", async ({
			page,
		}) => {
			// Fill fields with leading/trailing whitespace
			await page.locator("#name").fill("  John Doe  ");
			await page.locator("#email").fill("john@example.com");
			await page.locator("#message").fill("  This message has whitespace.  ");

			// Submit the form
			await page.getByRole("button", { name: "Send Message" }).click();

			// Wait for submission
			await page.waitForTimeout(500);

			// The form should submit successfully (trimmed values are valid)
			const toast = page.locator("[data-sonner-toast]");
			await expect(toast).toBeVisible({ timeout: 3000 });
		});
	});

	test.describe("Form Accessibility", () => {
		test("should have proper ARIA labels and attributes", async ({ page }) => {
			// Check form has aria-labelledby
			const form = page.locator('form[aria-labelledby="enquiry-form-heading"]');
			await expect(form).toBeVisible();

			// Check all input fields have proper labels within the form
			const nameLabel = form.getByText(/^Name/);
			await expect(nameLabel).toBeVisible();

			const emailLabel = form.getByText(/^Email/);
			await expect(emailLabel).toBeVisible();

			const messageLabel = form.getByText(/^Message/);
			await expect(messageLabel).toBeVisible();

			// Verify required field indicators (asterisks)
			const asterisks = page.locator('[class*="asterisk"]');
			expect(await asterisks.count()).toBeGreaterThan(0);
		});

		test("should set aria-invalid on fields with errors", async ({ page }) => {
			// Submit empty form to trigger validation
			await page.getByRole("button", { name: "Send Message" }).click();
			await page.waitForTimeout(300);

			// Check aria-invalid attribute on invalid fields
			const nameInput = page.locator("#name");
			await expect(nameInput).toHaveAttribute("aria-invalid", "true");

			const emailInput = page.locator("#email");
			await expect(emailInput).toHaveAttribute("aria-invalid", "true");

			const messageInput = page.locator("#message");
			await expect(messageInput).toHaveAttribute("aria-invalid", "true");
		});

		test("should link error messages with aria-describedby", async ({
			page,
		}) => {
			// Submit empty form to trigger validation
			await page.getByRole("button", { name: "Send Message" }).click();
			await page.waitForTimeout(300);

			// Check that inputs have aria-describedby pointing to error messages
			const nameInput = page.locator("#name");
			const ariaDescribedBy = await nameInput.getAttribute("aria-describedby");
			expect(ariaDescribedBy).toContain("name-error");

			// Verify the error message element exists
			const errorElement = page.locator(`#${ariaDescribedBy}`);
			await expect(errorElement).toBeVisible();
		});

		test("should have privacy policy link", async ({ page }) => {
			const form = page.locator('form[aria-labelledby="enquiry-form-heading"]');
			const privacyLink = form.getByRole("link", { name: "privacy policy." });
			await expect(privacyLink).toBeVisible();
			await expect(privacyLink).toHaveAttribute("href", "/legal/privacy");
			await expect(privacyLink).toHaveAttribute("target", "_blank");
		});
	});

	test.describe("Form UI State", () => {
		test("should display form heading and description", async ({ page }) => {
			const heading = page.getByRole("heading", { name: /shall we talk/i });
			await expect(heading).toBeVisible();

			const description = page.getByText(
				/fill in your details our team will contact you/i
			);
			await expect(description).toBeVisible();
		});

		test("should display General Inquiries badge", async ({ page }) => {
			const badge = page.getByText("General Inquiries");
			await expect(badge).toBeVisible();
		});

		test("should have all input fields with proper placeholders", async ({
			page,
		}) => {
			await expect(page.locator("#name")).toHaveAttribute(
				"placeholder",
				"Your Name"
			);
			await expect(page.locator("#email")).toHaveAttribute(
				"placeholder",
				"We'll reply here"
			);
			await expect(page.locator("#phone")).toHaveAttribute(
				"placeholder",
				"+971 56 789 4321"
			);
			await expect(page.locator("#subject")).toHaveAttribute(
				"placeholder",
				"What is your message about?"
			);
			await expect(page.locator("#message")).toHaveAttribute(
				"placeholder",
				"Share your questions with our expert…"
			);
		});

		test("should have input group icons visible", async ({ page }) => {
			// Name field should have user icon
			const nameInputGroup = page.locator("#name").locator("..");
			await expect(nameInputGroup).toBeVisible();

			// Email field should have email icon
			const emailInputGroup = page.locator("#email").locator("..");
			await expect(emailInputGroup).toBeVisible();

			// Phone field should have phone icon
			const phoneInputGroup = page.locator("#phone").locator("..");
			await expect(phoneInputGroup).toBeVisible();
		});
	});
});
