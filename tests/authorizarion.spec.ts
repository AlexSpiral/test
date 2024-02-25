import {expect, test} from "@playwright/test";
import { AuthorizationTestData, AuthorizationPage } from '@all';


//const { authorizationPage, authorization_test_data } = inject();

test.describe('Authorization test', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://github.com/login');
    });

    for (let testData of AuthorizationTestData) {
        test(`${testData.testCase}: ${testData.testName}`, async ({ page }) => {
            await AuthorizationPage.verifyLoginPage(page);
            await AuthorizationPage.logIn(page,testData);
        });
    }
});