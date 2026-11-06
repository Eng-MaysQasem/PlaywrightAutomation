const{test,expect}=require('@playwright/test');
test('login test',async({page})=>{
await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
const userName=await page.locator('#userEmail').fill("mbqasem7@gmail.com");
const Password=  page.locator('[type="password"]');
await Password.fill("12345");
const login= await page.locator('#login');
await login.click();
await expect(page.locator('#toast-container')).toContainText('Incorrect');
await Password.fill(process.env.TEST_PASSWORD);;
await login.click();
console.log(await login.inputValue());
const item=page.locator('.card-body b');
console.log(await item.nth(0).textContent());
});