/*
Task 4: Checkboxes: http://the-internet.herokuapp.com/checkboxes
Using the Checkboxes example, load the page and create a method which clicks on
both checkboxes. The method should click each checkbox at least 1 but no more than
10 times; the number of times clicked is randomly generated for each checkbox.
*/

const LoginPage = require('../../pageobjects/login.page');
const CheckboxesPage = require('../../pageobjects/checkboxes.page');

describe('Checkboxes', async() => {
    before(async() => {
        await LoginPage.open('checkboxes');
    });

    it('User should be able to click checkboxes randomly between 1 and 10 times', async() => {
        const checkboxes = await CheckboxesPage.checkboxes;

        const clickCount1 = await CheckboxesPage.clickCheckboxRandomly(checkboxes[0]);
        const clickCount2 = await CheckboxesPage.clickCheckboxRandomly(checkboxes[1]);

        console.log("Checkbox 1 clicked", clickCount1, "times.");
        console.log("Checkbox 2 clicked", clickCount2, "times.");
    });
});