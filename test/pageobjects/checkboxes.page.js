class CheckboxesPage {

    get checkboxes() {
        return $$('input[type="checkbox"]');
    }

    // Create a reusable method to click a checkbox a random number of times
    async clickCheckboxRandomly(checkboxElement) {
        const clickCount = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
        for (let i = 0; i < clickCount; i++) {
            await checkboxElement.click();
        }
        return clickCount; // Return the actual number of clicks
    }

    isCheckboxSelected(index) {
        const checkbox = this.checkboxes[index];
        return checkbox.isSelected();
    }

}

module.exports = new CheckboxesPage();