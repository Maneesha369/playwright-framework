// @ts-check

export class SauceDemoShopPage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;
    this.cartLink = page.locator('.shopping_cart_link');
    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.postalCodeInput = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
    this.finishButton = page.locator('[data-test="finish"]');
    this.backToProductsButton = page.locator('[data-test="back-to-products"]');
    this.menuButton = page.locator('#react-burger-menu-btn');
    this.logoutLink = page.locator('#logout_sidebar_link');
  }

  /** @param {string} itemId */
  async addItem(itemId) {
    await this.page.locator(`[data-test="add-to-cart-${itemId}"]`).click();
  }

  async openCart() {
    await this.cartLink.click();
  }

  /** @param {string} itemId */
  async removeItem(itemId) {
    await this.page.locator(`[data-test="remove-${itemId}"]`).click();
  }

  async beginCheckout() {
    await this.checkoutButton.click();
  }

  /** @param {string} firstName @param {string} lastName @param {string} postalCode */
  async enterCheckoutInformation(firstName, lastName, postalCode) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
    await this.continueButton.click();
  }

  async finishCheckout() {
    await this.finishButton.click();
  }

  async returnToProducts() {
    await this.backToProductsButton.click();
  }

  async logout() {
    await this.menuButton.click();
    await this.logoutLink.click();
  }
}