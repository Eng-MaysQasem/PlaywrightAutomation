const { test, expect } = require('@playwright/test');
test.only('first Browser playwright test', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator('#username').fill("mays qasem");
    await page.locator("[type='password']").fill("mays");
    await page.locator('#signInBtn').click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');
});
test('first page playwright test', async ({ page }) => {
    await page.goto("https://www.google.com/");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
});