import { expect, Page } from '@playwright/test';

export const AuthorizationPage = {
    locators: {
        desktop: {
            loginInput: '//input[@id="login_field"]',
            passwordInput: '//input[@id="password"]',
            signInButton: '//input[@value="Sign in"]',
            avatarButton: '//*[@class="avatar circle"]'
        }
    },

    async verifyLoginPage(page: Page): Promise<void> {
        await expect(page.locator(`xpath=${this.locators.desktop.loginInput}`)).toBeVisible();
        await expect(page.locator(`xpath=${this.locators.desktop.passwordInput}`)).toBeVisible();
        await expect(page.locator(`xpath=${this.locators.desktop.signInButton}`)).toBeVisible();
    },

    async logIn(page: Page, testData: object): Promise<void> {
        await page.locator(`xpath=${this.locators.desktop.loginInput}`).fill(testData.email);
        await page.locator(`xpath=${this.locators.desktop.passwordInput}`).fill(testData.password);
        await page.locator(`xpath=${this.locators.desktop.signInButton}`).click();

        if (testData.positive) {
            await expect(page.locator(`xpath=${this.locators.desktop.avatarButton}`)).toBeVisible();
        } else {
            await  expect(page.locator(`xpath=//*[contains(text(),"${testData.errorMessage}")]`)).toBeVisible();
        }
    }
}