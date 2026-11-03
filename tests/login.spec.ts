import { test, expect } from '@playwright/test';
import { SauceDemoLoginPage } from '../pages/sauceDemoLoginPage.js';

test('SauceDemo login succeeds', async ({ page }) => {
  const loginPage = new SauceDemoLoginPage(page);
  await loginPage.goto();

  await expect(page).toHaveTitle('Swag Labs');
  await loginPage.expectLoginPageVisible();
  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory.html/);
  await expect(page.getByText('Products', { exact: true })).toBeVisible();
});