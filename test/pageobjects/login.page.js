const { $ } = require('@wdio/globals')
const Page = require('./page');

class LoginPage extends Page {
    get usernameInput() {
        return $('#username');
    }
    get passwordInput() {
        return $('#password');
    }
    get loginButton() {
        return $('button[type="submit"]');
    }
    get loginPageHeader() {
        return $('h2=Login Page');
    }
    get logoutLink() {
        return $('a[href="/logout"]');
    }


    async login(username, password) {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }
}

module.exports = new LoginPage();