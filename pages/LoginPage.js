
const BasePage = require('./BasePage');
const env = require('../config/env');   

class LoginPage extends BasePage {

    constructor(page) {
        super(page);
        this.loginText = page.getByText('New to Flipkart? Create an account', { exact: true });
        this.usernameInput =  page.getByRole('textbox')
        this.requestOTPButton =  page.getByText('Request OTP', { exact: true })
        this.otptext =  page.getByText('Please enter the OTP sent to')

    }

    async goto() {
        await this.navigateToURL(env.baseURL);
    }   


    async login(username) {
        await this.usernameInput.fill(username);
        await this.requestOTPButton.click();
    }

}

module.exports = LoginPage;
