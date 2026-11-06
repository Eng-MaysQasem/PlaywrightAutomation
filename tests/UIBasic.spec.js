const {test} = require('@playwright/test');
test('first Browser playwright test', async ({browser} )=>{
 const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
});
test.only('first page playwright test',async({page})=>{
await page.goto("https://www.google.com/");
});