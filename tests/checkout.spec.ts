import { test, expect } from '@playwright/test';
import { SauceDemoLoginPage } from '../pages/sauceDemoLoginPage.js';
import { SauceDemoShopPage } from '../pages/sauceDemoShopPage.js';

test('checkout an item and log out', async ({ page }) => {
  const loginPage = new SauceDemoLoginPage(page);
  const shopPage = new SauceDemoShopPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await shopPage.addItem('sauce-labs-backpack');
  await shopPage.openCart();
  await shopPage.beginCheckout();
  await shopPage.enterCheckoutInformation('Test', 'User', '12345');
  await shopPage.finishCheckout();

  await expect(page.getByText('Thank you for your order!')).toBeVisible();
  await shopPage.returnToProducts();
  await shopPage.logout();
  await expect(loginPage.loginButton).toBeVisible();
});