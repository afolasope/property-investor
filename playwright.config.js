// playwright.config.js
// @ts-check
const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
    testDir: "./tests",
    timeout: 30 * 1000,
    expect: {
        timeout: 5000,
    },
    use: {
        headless: true,
        viewport: { width: 1280, height: 720 },
        actionTimeout: 10 * 1000,
        baseURL: "http://localhost:3000",
        trace: "on-first-retry",
    },
    reporter: [["list"], ["html", { open: "never" }]],

    // ✅ Start Next.js before tests
    webServer: {
        command: process.env.CI
            ? "pnpm run build && pnpm run start" // production mode in CI
            : "pnpm run dev", // dev mode locally
        url: "http://localhost:3000",
        reuseExistingServer: !process.env.CI,
        timeout: 120 * 1000, // Next build can take longer
    },
});
