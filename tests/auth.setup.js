const { chromium } = require('@playwright/test');
const env = require('../config/env');

(async () => {

    const browser =
        await chromium.launch({
            headless: false
        });

    const context =
        await browser.newContext();

    const page =
        await context.newPage();

    await page.goto(env.baseURL);

    // Login manually
    // Enter OTP

    await page.pause();

    // Save authenticated session

    await context.storageState({
        path: 'auth.json'
    });

    await browser.close();

})();