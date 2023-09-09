const Page = require('./page');

class SecurePage extends Page {
    get flashAlert() {
        return $('[data-alert]');
    }
    get securePageHeader() {
        return $('h2="Secure Page');
    }

    getFlashAlertText() {
        return this.flashAlert.getText();
    }

}

module.exports = new SecurePage();