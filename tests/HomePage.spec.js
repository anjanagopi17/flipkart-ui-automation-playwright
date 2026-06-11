const { test, expect } = require('../fixtures/BaseFixture');
const BasePage = require('../pages/BasePage');
const env = require('../config/env');

test('Homepage validation', async ({ page }) => {

    const basePage = new BasePage(page);

    await test.step('Navigate to homepage', async () => {

        await basePage.navigateToURL(env.baseURL);

        await expect(page).toHaveURL(env.baseURL);

    });

});