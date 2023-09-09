/*
Task 5: Dropdown: http://the-internet.herokuapp.com/dropdown
Using the Dropdown example, load the page and randomly select an option from the
list.
*/


const LoginPage = require('../../pageobjects/login.page');
const DropdownPage = require('../../pageobjects/dropdown.page');
const { expect } = require('chai');

describe('Dropdown List', async() => {
    before(async() => {
        await LoginPage.open("dropdown");
    });

    it('User should be able to select a random option from the dropdown', async() => {
        // Get all the dropdown options
        const options = await DropdownPage.dropdownOptions();

        // Filter out the disabled option based on its attribute
        const validOptions = [];
        for (const option of options) {
            const isDisabled = await option.getAttribute('disabled');
            if (!isDisabled) {
                validOptions.push(option);
            }
        }

        // Generate a random index
        const randomIndex = Math.floor(Math.random() * validOptions.length);


        // Get the text of the randomly selected option
        const selectedOptionText = await validOptions[randomIndex].getText();


        // Select the random option
        await validOptions[randomIndex].click();

        // Get the selected option from the dropdown
        const selectedDropdownOption = await DropdownPage.selectedOption.getText();

        // Verify that the selected option matches the randomly selected option
        expect(selectedDropdownOption).to.equal(selectedOptionText);
    });
});