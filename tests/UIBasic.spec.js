const { test, expect } = require('@playwright/test');
test.only('first Browser playwright test', async ({ page }) => {
    const userName = page.locator('#username');
    const signIn = page.locator('#signInBtn');
    const cardTitle = page.locator('.card-body a');
    //const context = await browser.newContext();
    // const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await userName.fill("mays qasem");

    await page.locator("[type='password']").fill("Learning@830$3mK2");
    await signIn.click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');
    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await signIn.click();
    // console.log(await cardTitle.nth(0).textContent());
    const allTitel = await cardTitle.allTextContents();
    console.log(allTitel);

});
test('first page playwright test', async ({ page }) => {
    await page.goto("https://www.google.com/");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
});
test('Ui Controlls', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName = page.locator('#username');
    const signIn = page.locator('#signInBtn');
    // await userName.fill("rahulshettyacademy");
    // await signIn.click();
    const dropdown = page.locator("select.form-control");
    await dropdown.selectOption("consult");
    await page.locator(".radiotextsty").last().click();
    await page.locator("#okayBtn").click();
    await expect(page.locator(".radiotextsty").last()).toBeChecked();
    await page.pause();

});