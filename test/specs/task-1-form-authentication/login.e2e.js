/* 
Task 1: Form Authentication: http:/ / the - internet.herokuapp.com / login
Using the form authentication example, create a test script which does the following:
    1) Enter the username and password to login.
    2) Validate you have logged in
    3) Log Out
    4) Validate you’ ve logged out
*/

const LoginPage = require('../../pageobjects/login.page');
const SecurePage = require('../../pageobjects/secure.page');
const { expect } = require('chai');

describe('Form Authentication Test', async() => {
    const successLoginAlertMessage = 'You logged into a secure area!\n×'
    const successLogoutAlertMessage = 'You logged out of the secure area!\n×'

    before(async() => {
        await LoginPage.open('login');
    });

    it('User should be able to log in and log out successfully', async() => {

        // Login
        await LoginPage.login(process.env.USERNAME, process.env.PASSWORD);
        // Get login alert message
        const loginAlertMessage = await SecurePage.getFlashAlertText();
        // Verify that the expected login alert message is displayed
        expect(loginAlertMessage).to.equal(successLoginAlertMessage);

        // Logout
        await (await LoginPage.logoutLink).click();
        // Get logout alert message
        const logoutAlertMessage = await SecurePage.getFlashAlertText();
        // Verify that the expected logout alert message is displayed
        expect(logoutAlertMessage).to.equal(successLogoutAlertMessage);
    });
});