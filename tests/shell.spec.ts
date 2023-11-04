import { test, expect } from "@playwright/test";

test.describe("Shell", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:4180");
  });

  test("Has title", async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Test shell/);
  });

  test("Has an x-hello tag", async ({ page }) => {
    await expect(await page.locator("x-hello").count()).toBe(1);
  });

  test("Has a greeting", async ({ page }) => {
    await expect(await page.locator("body")).toHaveText(/Hello!/);
  });
});
