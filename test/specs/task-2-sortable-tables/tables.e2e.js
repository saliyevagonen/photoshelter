/* 
Task 2: Sortable Tables: http://the-internet.herokuapp.com/tables
Using Example 1 of the Sortable Tables come up with a set of test cases and automate
them.
*/

const chai = require("chai"),
    expect = chai.expect;
chai.use(require("chai-sorted"));
const TablesPage = require('../../pageobjects/tables.page');
const LoginPage = require('../../pageobjects/login.page');

describe('Data Tables Sorting', async() => {
    beforeEach(async() => {
        await LoginPage.open('tables');
        // Verify that the page header is displayed
        const isPageHeaderVisible = await TablesPage.tablesPageHeader.getText();
        expect(isPageHeaderVisible).to.equal('Data Tables');
    });

    it('[TC-01] Verify that the user can sort the table data by Last Name in ascending and descending order', async() => {

        // Click on the Last Name column header to sort in ascending order
        await TablesPage.sortTableByLastName();

        // Get the sorted Last Name values
        const sortedLastNamesAscending = await TablesPage.getAllLastNames();

        // Verify that the Last Names are in ascending order
        expect(sortedLastNamesAscending).to.be.ascending;

        // Click on the Last Name column header to sort in descending order
        await TablesPage.sortTableByLastName();

        // Get the sorted Last Name values
        const sortedLastNamesDescending = await TablesPage.getAllLastNames();

        // Verify that the Last Names are in descending order
        expect(sortedLastNamesDescending).to.be.descending;

    });

    it('[TC-02] Verify that the user can sort the table data by First Name in ascending and descending order', async() => {
        // Click on the First Name column header to sort in ascending order
        await TablesPage.sortTableByFirstName();

        // Get the sorted First Name values
        const sortedFirstNamesAscending = await TablesPage.getAllFirstNames();

        // Verify that the First Names are in ascending order
        expect(sortedFirstNamesAscending).to.be.ascending;

        // Click on the First Name column header to sort in descending order
        await TablesPage.sortTableByFirstName();

        // Get the sorted First Name values
        const sortedFirstNamesDescending = await TablesPage.getAllFirstNames();

        // Verify that the First Names are in descending order
        expect(sortedFirstNamesDescending).to.be.descending;
    });

    it('[TC-03] Verify that the user can sort the table data by Due Amount in ascending and descending order', async() => {

        // Click on the Due column header to sort in ascending order
        await TablesPage.sortTableByDueAmount();

        // Get the sorted Due Amount values
        const sortedDueAmountsAscending = await TablesPage.getAllDueAmounts();

        // Verify that the Due Amounts are in ascending order
        expect(sortedDueAmountsAscending).to.be.ascending;

        // Click on the Due column header to sort in descending order
        await TablesPage.sortTableByDueAmount();

        // Get the sorted Due Amount values
        const sortedDueAmountsDescending = await TablesPage.getAllDueAmounts();

        // Verify that the Due Amounts are in descending order
        expect(sortedDueAmountsDescending).to.be.descending;
    });

});