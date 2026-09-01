// tests/example.spec.js
const { test, expect } = require("@playwright/test");

test("homepage has text Homely Realtor", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("Skip the hurdle")).toBeVisible();
});
