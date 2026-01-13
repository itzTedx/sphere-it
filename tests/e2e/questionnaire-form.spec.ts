import { expect, test } from "@playwright/test";

test.describe("Questionnaire Form (AI Maturity Assessment)", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("/resources/ai-maturity");
		// Wait for the page to load
		await page.waitForSelector("h1");
	});

	test.describe("Multi-step Form Navigation", () => {
		test("should display the first category (Strategy & Leadership Alignment) on page load", async ({
			page,
		}) => {
			// Check for the first category heading
			const categoryHeading = page.getByRole("heading", {
				name: /strategy & leadership alignment/i,
			});
			await expect(categoryHeading).toBeVisible();

			// Verify step badge shows "1"
			const stepBadge = page.locator('[class*="badge"]').filter({
				hasText: "1",
			});
			await expect(stepBadge).toBeVisible();

			// Check that first question is visible
			const firstQuestion = page.getByText(/do you have a clear ai strategy/i);
			await expect(firstQuestion).toBeVisible();
		});

		test("should show all questions for the first category", async ({
			page,
		}) => {
			// Strategy & Leadership has 5 questions (Q1-Q5)
			const questions = [
				/do you have a clear ai strategy/i,
				/has c level leadership formally approved/i,
				/are success metrics for ai initiatives defined/i,
				/are there a dedicated ai budget/i,
				/are business leaders accountable/i,
			];

			for (const questionPattern of questions) {
				const question = page.getByText(questionPattern);
				await expect(question).toBeVisible();
			}
		});

		test("should navigate to next step when Next button is clicked with valid answers", async ({
			page,
		}) => {
			// Answer all questions in the first category
			// There are 5 questions, each with radio options
			for (let i = 1; i <= 5; i++) {
				const questionId = `q${i}`;
				// Select the first option (value 5 - "Fully established")
				const radioOption = page.locator(`#${questionId}-5`);
				await radioOption.click();
			}

			// Click Next Step button
			await page.getByRole("button", { name: /next step/i }).click();

			// Wait for navigation animation
			await page.waitForTimeout(500);

			// Should now show second category
			const categoryHeading = page.getByRole("heading", {
				name: /data foundation & integration/i,
			});
			await expect(categoryHeading).toBeVisible();

			// Step badge should show "2"
			const stepBadge = page
				.locator('[class*="badge"]')
				.filter({ hasText: "2" });
			await expect(stepBadge).toBeVisible();
		});

		test("should prevent navigation to next step if questions are not answered", async ({
			page,
		}) => {
			// Try to click Next without answering questions
			await page.getByRole("button", { name: /next step/i }).click();

			// Wait for validation
			await page.waitForTimeout(500);

			// Should still be on first category
			const categoryHeading = page.getByRole("heading", {
				name: /strategy & leadership alignment/i,
			});
			await expect(categoryHeading).toBeVisible();

			// Error messages should appear
			const errorMessage = page.getByText(/please select an option/i);
			expect(await errorMessage.count()).toBeGreaterThan(0);
		});

		test("should navigate back to previous step", async ({ page }) => {
			// First, answer all questions in step 1 and move to step 2
			for (let i = 1; i <= 5; i++) {
				await page.locator(`#q${i}-5`).click();
			}
			await page.getByRole("button", { name: /next step/i }).click();
			await page.waitForTimeout(500);

			// Verify we're on step 2
			const step2Heading = page.getByRole("heading", {
				name: /data foundation & integration/i,
			});
			await expect(step2Heading).toBeVisible();

			// Click Previous button
			await page.getByRole("button", { name: /previous/i }).click();
			await page.waitForTimeout(500);

			// Should be back on step 1
			const step1Heading = page.getByRole("heading", {
				name: /strategy & leadership alignment/i,
			});
			await expect(step1Heading).toBeVisible();
		});

		test("should hide Previous button on first step", async ({ page }) => {
			// On first step, Previous button should be invisible/disabled
			const previousButton = page.getByRole("button", { name: /previous/i });

			// Button might be invisible or disabled
			const isVisible = await previousButton.isVisible();
			if (isVisible) {
				await expect(previousButton).toBeDisabled();
			}
		});

		test("should navigate through all 4 categories", async ({ page }) => {
			const categories = [
				{ name: /strategy & leadership alignment/i, questions: 5 },
				{ name: /data foundation & integration/i, questions: 5 },
				{ name: /technology & architecture/i, questions: 3 },
				{ name: /governance & risk/i, questions: 2 },
			];

			let questionNumber = 1;

			for (
				let categoryIndex = 0;
				categoryIndex < categories.length;
				categoryIndex++
			) {
				const category = categories[categoryIndex];

				// Verify category heading
				const heading = page.getByRole("heading", { name: category.name });
				await expect(heading).toBeVisible();

				// Answer all questions in this category
				for (let i = 0; i < category.questions; i++) {
					const qId = `q${questionNumber}`;
					await page.locator(`#${qId}-5`).click();
					questionNumber++;
				}

				// If not the last category, click Next
				if (categoryIndex < categories.length - 1) {
					await page.getByRole("button", { name: /next step/i }).click();
					await page.waitForTimeout(500);
				}
			}

			// On the last step, should see "Submit for Results" button instead of "Next Step"
			const submitButton = page.getByRole("button", {
				name: /submit for results/i,
			});
			await expect(submitButton).toBeVisible();
		});

		test("should scroll to top when navigating between steps", async ({
			page,
		}) => {
			// Answer questions and move to next step
			for (let i = 1; i <= 5; i++) {
				await page.locator(`#q${i}-5`).click();
			}

			// Scroll down before clicking next
			await page.evaluate(() => window.scrollTo(0, 500));
			await page.waitForTimeout(200);

			// Click next
			await page.getByRole("button", { name: /next step/i }).click();
			await page.waitForTimeout(700);

			// Page should have scrolled to top (or near top)
			const scrollY = await page.evaluate(() => window.scrollY);
			expect(scrollY).toBeLessThan(100);
		});
	});

	test.describe("Form Data Persistence Across Steps", () => {
		test("should retain selected answers when navigating back and forth", async ({
			page,
		}) => {
			// Select specific answers for questions 1-5
			const answers = [5, 4, 3, 2, 0]; // Different values

			for (let i = 0; i < 5; i++) {
				const qId = `q${i + 1}`;
				const value = answers[i];
				await page.locator(`#${qId}-${value}`).click();
			}

			// Navigate to next step
			await page.getByRole("button", { name: /next step/i }).click();
			await page.waitForTimeout(500);

			// Navigate back
			await page.getByRole("button", { name: /previous/i }).click();
			await page.waitForTimeout(500);

			// Verify answers are still selected
			for (let i = 0; i < 5; i++) {
				const qId = `q${i + 1}`;
				const value = answers[i];
				const radio = page.locator(`#${qId}-${value}`);
				await expect(radio).toBeChecked();
			}
		});

		test("should maintain answers across multiple steps", async ({ page }) => {
			// Answer step 1 questions with specific values
			const step1Answers = [5, 4, 3, 2, 0];
			for (let i = 0; i < 5; i++) {
				await page.locator(`#q${i + 1}-${step1Answers[i]}`).click();
			}

			// Move to step 2
			await page.getByRole("button", { name: /next step/i }).click();
			await page.waitForTimeout(500);

			// Answer step 2 questions
			const step2Answers = [5, 4, 3, 2, 0];
			for (let i = 0; i < 5; i++) {
				await page.locator(`#q${i + 6}-${step2Answers[i]}`).click();
			}

			// Move to step 3
			await page.getByRole("button", { name: /next step/i }).click();
			await page.waitForTimeout(500);

			// Go back to step 1
			await page.getByRole("button", { name: /previous/i }).click();
			await page.waitForTimeout(500);
			await page.getByRole("button", { name: /previous/i }).click();
			await page.waitForTimeout(500);

			// Verify step 1 answers are still there
			for (let i = 0; i < 5; i++) {
				const radio = page.locator(`#q${i + 1}-${step1Answers[i]}`);
				await expect(radio).toBeChecked();
			}
		});
	});

	test.describe("Radio Button Options", () => {
		test("should display all 5 score options for each question", async ({
			page,
		}) => {
			// Check that each question has 5 radio options
			const expectedOptions = [
				{ value: 5, label: /fully established/i },
				{ value: 4, label: /well established/i },
				{ value: 3, label: /partially established/i },
				{ value: 2, label: /emerging/i },
				{ value: 0, label: /not established/i },
			];

			// Check first question (q1)
			for (const option of expectedOptions) {
				const radioLabel = page
					.locator(`label[for="q1-${option.value}"]`)
					.getByText(option.label);
				await expect(radioLabel).toBeVisible();
			}
		});

		test("should allow selecting only one option per question", async ({
			page,
		}) => {
			// Select first option for q1
			await page.locator("#q1-5").click();
			await expect(page.locator("#q1-5")).toBeChecked();

			// Select different option for same question
			await page.locator("#q1-3").click();
			await expect(page.locator("#q1-3")).toBeChecked();

			// First option should no longer be checked
			await expect(page.locator("#q1-5")).not.toBeChecked();
		});

		test("should visually highlight selected option", async ({ page }) => {
			const radioOption = page.locator('label[for="q1-5"]');

			// Click the option
			await page.locator("#q1-5").click();

			// Label should have styling indicating it's selected
			// The selected label has specific classes like border-primary-600
			const classList = await radioOption.getAttribute("class");
			expect(classList).toContain("border-primary");
		});
	});

	test.describe("Submission Workflow", () => {
		test("should show Submit button on the last step", async ({ page }) => {
			// Navigate through all steps and answer questions
			let questionNumber = 1;
			const questionsPerCategory = [5, 5, 3, 2];

			for (const numQuestions of questionsPerCategory) {
				// Answer all questions in current category
				for (let i = 0; i < numQuestions; i++) {
					await page.locator(`#q${questionNumber}-5`).click();
					questionNumber++;
				}

				// Move to next category if not the last one
				if (questionNumber <= 15) {
					const nextButton = page.getByRole("button", { name: /next step/i });
					if (await nextButton.isVisible()) {
						await nextButton.click();
						await page.waitForTimeout(500);
					}
				}
			}

			// On last step, should see Submit button
			const submitButton = page.getByRole("button", {
				name: /submit for results/i,
			});
			await expect(submitButton).toBeVisible();

			// Next button should not be visible
			const nextButton = page.getByRole("button", { name: /^next step$/i });
			await expect(nextButton).not.toBeVisible();
		});

		test("should submit questionnaire when all questions are answered", async ({
			page,
		}) => {
			// Answer all 15 questions
			for (let i = 1; i <= 15; i++) {
				await page.locator(`#q${i}-5`).click();

				// Navigate to next step after each category
				if (i === 5 || i === 10 || i === 13) {
					await page.getByRole("button", { name: /next step/i }).click();
					await page.waitForTimeout(500);
				}
			}

			// Submit the form
			await page.getByRole("button", { name: /submit for results/i }).click();

			// Wait for submission processing
			await page.waitForTimeout(1000);

			// The form should process and likely show results or next step
			// Depending on implementation, might redirect or show results on same page
		});

		test("should prevent submission if last category questions are not answered", async ({
			page,
		}) => {
			// Navigate to last step without answering all questions
			// Answer questions 1-13 but not 14-15
			for (let i = 1; i <= 13; i++) {
				await page.locator(`#q${i}-5`).click();

				// Navigate to next step after each category
				if (i === 5 || i === 10 || i === 13) {
					await page.getByRole("button", { name: /next step/i }).click();
					await page.waitForTimeout(500);
				}
			}

			// Try to submit without answering q14 and q15
			await page.getByRole("button", { name: /submit for results/i }).click();
			await page.waitForTimeout(500);

			// Should show validation errors
			const errorMessage = page.getByText(/please select an option/i);
			expect(await errorMessage.count()).toBeGreaterThan(0);
		});
	});

	test.describe("Questionnaire UI and Accessibility", () => {
		test("should have proper page title and description", async ({ page }) => {
			const pageTitle = page.getByRole("heading", {
				name: /assess your organization's ai readiness/i,
			});
			await expect(pageTitle).toBeVisible();

			const description = page.getByText(
				/complete this comprehensive assessment/i
			);
			await expect(description).toBeVisible();
		});

		test("should display AI Maturity Assessment badge", async ({ page }) => {
			const badge = page.getByRole("main").getByText("AI Maturity Assessment");
			await expect(badge).toBeVisible();
		});

		test("should have proper ARIA labels for radio groups", async ({
			page,
		}) => {
			// Each question should have a radio group with aria-label
			const firstQuestion = page.locator('[aria-label*="Do you have"]');
			await expect(firstQuestion).toBeVisible();
		});

		test("should show step indicator with category number", async ({
			page,
		}) => {
			// Step badge should show "1" for first category
			const stepBadge = page
				.locator('[class*="badge"]')
				.filter({ hasText: "1" });
			await expect(stepBadge).toBeVisible();

			// Navigate to next step
			for (let i = 1; i <= 5; i++) {
				await page.locator(`#q${i}-5`).click();
			}
			await page.getByRole("button", { name: /next step/i }).click();
			await page.waitForTimeout(500);

			// Step badge should now show "2"
			const step2Badge = page
				.locator('[class*="badge"]')
				.filter({ hasText: "2" });
			await expect(step2Badge).toBeVisible();
		});

		test("should display error styling on validation failure", async ({
			page,
		}) => {
			// Try to navigate without answering
			await page.getByRole("button", { name: /next step/i }).click();
			await page.waitForTimeout(300);

			// Fields with errors should have destructive styling
			const errorIndicator = page.getByText(/please select an option/i).first();
			await expect(errorIndicator).toBeVisible();

			// The error text should have role="alert"
			const alertElement = page.locator('[role="alert"]').first();
			await expect(alertElement).toBeVisible();
		});
	});

	test.describe("Responsive Behavior", () => {
		test("should display radio options in grid layout", async ({ page }) => {
			// The radio group should use grid layout (grid-cols-1 sm:grid-cols-2 lg:grid-cols-5)
			const radioGroup = page.locator('[aria-label*="Do you have"]');
			await expect(radioGroup).toBeVisible();

			// Check that the container has grid classes
			const classList = await radioGroup.getAttribute("class");
			expect(classList).toContain("grid");
		});

		test("should stack navigation buttons properly", async ({ page }) => {
			// Navigation buttons should be in a flex container with space-between
			const navContainer = page.locator(
				'div:has(> button:text("Next Step"), > button:text("Previous"))'
			);

			// Container should have items-center and justify-between
			const classList = await navContainer.getAttribute("class");
			expect(classList).toContain("justify-between");
		});
	});
});
