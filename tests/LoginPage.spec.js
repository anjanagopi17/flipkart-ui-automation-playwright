const {test, expect} = require('../fixtures/BaseFixture');
const LoginPage = require('../pages/LoginPage');
const env = require('../config/env');
const LoginData = require('../testdata/LoginData');

test1('Login using valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await expect(loginPage.loginText).toBeVisible();
//entering username
    await loginPage.login(LoginData.usernameInput); 

//clicking request otp button
    await loginPage.requestOTPButton.click();

//vefrifying URL changed
    await expect(loginPage.otptext).toBeVisible();

});




 
