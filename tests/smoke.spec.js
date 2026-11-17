
const { test, expect } = require('@playwright/test');

const pages = [
  { name: 'Homepage', path: '/' },
  { name: 'Login', path: '/login.html' },
  { name: 'Registration', path: '/register.html' },
  { name: 'Products', path: '/products.html' },
  { name: 'Cart', path: '/cart.html' },
  { name: 'Checkout', path: '/checkout.html' }
];

for (const item of pages) {
  test(`${item.name} page should load`, async ({ page }) => {
    const response = await page.goto(item.path);

    expect(response.status()).toBe(200);
    await expect(page.locator('body')).not.toBeEmpty();
  });
}
