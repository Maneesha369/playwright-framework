import { test, expect } from '@playwright/test';
import { SauceDemoLoginPage } from '../pages/sauceDemoLoginPage.js';
import { SauceDemoShopPage } from '../pages/sauceDemoShopPage.js';

test('add and remove items from the cart', async ({ page }) => {
  const loginPage = new SauceDemoLoginPage(page);
  const shopPage = new SauceDemoShopPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await shopPage.addItem('sauce-labs-backpack');
  await shopPage.addItem('sauce-labs-bike-light');
  await expect(page.locator('.shopping_cart_badge')).toHaveText('2');

  await shopPage.openCart();
  await shopPage.removeItem('sauce-labs-bike-light');

  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  await expect(page.locator('.cart_item')).toHaveCount(1);
  await expect(page.locator('.cart_item')).toContainText('Sauce Labs Backpack');
});