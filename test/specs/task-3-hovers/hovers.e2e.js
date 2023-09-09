/*
Task 3: Hovers: http://the-internet.herokuapp.com/hovers
Using the Hovers example, write tests that will navigate to each user’s profiles. Verify
the URL of the target page after it loads.
Note: The target page will say “Not Found”, you will not see a user profile.
 */
const { expect } = require('chai');
const HoversPage = require('../../pageobjects/hovers.page');
const LoginPage = require('../../pageobjects/login.page');

describe('Hovers', async() => {
    before(async() => {
        await LoginPage.open('hovers');
    });

    it('User should be able to navigate to user profiles and verify URLs', async() => {

        const numberOfUsers = await HoversPage.figureElements.length;

        for (let i = 0; i < numberOfUsers; i++) {
            await HoversPage.hoverOverFigure(i);
            const profileLinkHref = await HoversPage.getProfileLinkHref(i);
            const expectedUrl = `/users/${i + 1}`;

            // Verify that the extracted href matches the expected URL
            expect(profileLinkHref).to.equal(expectedUrl);

            // Click on the View profile link
            await HoversPage.getProfileLink(i).click();

            // Get the current page URL and verify that it contains the expected URL
            const currentUrl = await browser.getUrl();
            expect(currentUrl).to.include(expectedUrl);

            // Navigate back to the original page
            await browser.back();
        }
    });
});