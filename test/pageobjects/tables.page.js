const { $ } = require('@wdio/globals')

class TablesPage {

    get tablesPageHeader() {
        return $('h3=Data Tables');
    }

    sortTableByLastName() {
        // Click on the Last Name column header to sort in ascending order
        return $('span*=Last Name').click();
    }

    sortTableByDueAmount() {
        // Click on the Due column header to sort in descending order
        return $('span=Due').click();
    }

    sortTableByFirstName() {
        // Click on the First Name column header (incorrect sorting)
        return $('span=First Name').click();
    }

    // Extract and return all Last Names from the table
    getAllLastNames() {
        const lastNames = $$('#table1 tbody tr td:nth-child(1)');
        return lastNames.map(name => name.getText());
    }

    // Extract and return all Due Amounts from the table
    getAllDueAmounts() {
        const dueAmounts = $$('#table1 tbody tr td:nth-child(4)');
        return dueAmounts.map(async(amountElement) => {
            // Get the text and remove "$" and commas from the value
            const text = await amountElement.getText();
            const cleanedValue = text.replace(/[$,]/g, '');
            return parseFloat(cleanedValue);
        });
    }

    // Extract and return all First Names from the table
    getAllFirstNames() {
        const firstNames = $$('#table1 tbody tr td:nth-child(2)');
        return firstNames.map(name => name.getText());
    }
}

module.exports = new TablesPage();