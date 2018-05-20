const assert = require('assert');
const {
    Given,
    When,
    Then,
    And,
    But
} = require('cucumber');

// Chai configurations
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var chaiURL = require('chai-url');

chai.use(chaiAsPromised);
chai.use(chaiURL);

var expect = chai.expect;

// Configuration requirements
var env = require('./../../environment.js');
var baseUrl = env.serverBaseUrl;

// Page Objects
var IndexPage = require('./../../PageObjects/Index/index.pageObject.js');
var AnimalselectionPage = require('./../../PageObjects/Animalselection/animalselection.pageObject.js');
var ConfirmPage = require('./../../PageObjects/Confirm/confirm.pageObject.js');

// Common elements that can be found on different pages 
var continueButton = element(by.id('continue_button'));
var backToHomeButton = element(by.id('back_button'));

// Common functions
function expectUrlToContain(string) {
    if (typeof string === 'string') {
        expect(baseUrl + string + '.html').to.have.path('/jswebapp/' + string + '.html');
    }
}

// 1) Scenario: Typing in your name that gets displayed and adopt Nemo the Fish
// ==========================================================================

// ?Given I go to the website "http://www.thetestroom.com/jswebapp/index.html"
Given('I go to the website {string}', function (string, callback) {
    browser.get(string)
        .then(callback);
});

// ?When I type in my name "Stefan" in the empty input field
When('I type in my name {string} in the empty input field', function (string, callback) {
    IndexPage.nameInput.sendKeys(string)
        .then(callback);
});

// ?Then I should see my name "Stefan" displayed below the text enter field
Then('I should see my name {string} displayed below the text enter field', function (string) {
    expect(IndexPage.nameOutput.getText()).to.eventually.equal(string);
});

// ?When I click the CONTINUE button
When('I click the CONTINUE button', function () {
    continueButton.click();
});

// ?Then I should see the "animalselection" page
Then('I should land on the {string} page', function (string) {
    expectUrlToContain(string);
});

// ?When I select "Nemo the Fish"
When('I select Nemo the Fish', function () {
    AnimalselectionPage.nemoTheFishOption.click();
});

// ?And I click the CONTINUE button again
When('I click the CONTINUE button again', function () {
    continueButton.click();
});

// ?Then I should land on the "confirm" page
Then('I should see the {string} page', function (string) {
    expectUrlToContain(string);
});

// ?And I should have the confirmation "Thank you for your selection. Your animal adoption papers will be sent to you shortly with a lovely card from your selected animal."
Then('I should have the confirmation {string}', function (string) {
    expect(ConfirmPage.confirmationMessageBox.getText()).to.eventually.equal(string);
});


// // 2) Scenario: Adopting an animal should not be possible if I don't type in a name in the first place
// // ==========================================================================

// // ?Given I go to the website "http://www.thetestroom.com/jswebapp/index.html"
// Given('I go to the website {string} again', function (string, callback) {
//     browser.get(string)
//         .then(callback);
// });

// // ?When I don't type in a name in the empty input field
// When('I don\'t type in a name in the empty input field', function (callback) {
//     IndexPage.nameInput.sendKeys()
//         .then(callback);
// });

// Then('I should not be able to continue to the the {string} page by clicking the CONTINUE button', function (string) {
//     continueButton.click();
//     // not working - but in the ZooAdoption.spec it does - dont know the proper syntax here and googling for it was not successful
//     expect(browser.getCurrentUrl()).not.toContain('animalselection');
// });


// // 3) Scenario: Nemo the Fish and adopt another animal like Simba the Lion
// // ==========================================================================
// // ?Given I go to the website "http://www.thetestroom.com/jswebapp/animalselection.html"
// Given('I go to the website {string} again', function (string, callback) {
//     browser.get(string)
//         .then(callback);
// });

// // ?When I type in my name "Stefan" in the empty input field
// When('I type in my name {string} in the empty input field as before', function (string, callback) {
//     IndexPage.nameInput.sendKeys(string)
//         .then(callback);
// });

// // ?Then I should see my name "Stefan" displayed below the text enter field
// Then('I should see my name {string} displayed', function (string) {
//     expect(IndexPage.nameOutput.getText()).to.eventually.equal(string);
// });

// // ?When I click the CONTINUE button
// When('I hit the CONTINUE button', function () {
//     continueButton.click();
// });

// // ?Then I should see the "animalselection" page
// Then('I should land on the the {string} page', function (string) {
//     expectUrlToContain(string);
// });

// // ?When I select Nemo the Fish
// When('I select Nemo the Fish to adopt', function () {
//     AnimalselectionPage.nemoTheFishOption.click();
// });

// // ?And I click the CONTINUE button again
// When('I click the CONTINUE button once again', function () {
//     continueButton.click();
// });

// // ?Then I should land on the "confirm" page
// Then('I should land on the {string} page as expected', function (string) {
//     expectUrlToContain(string);
// });

// // ?When I click the BACK TO HOME button
// When('I click the BACK TO HOME button', function () {
//     ConfirmPage.backToHomeButton.click();
// });

// // ?Then I should see the "index" page
// Then('I should see the {string} page', function (string) {
//     expectUrlToContain(string);
// });

// // ?When I type in my name "Stefan" in the empty input field again
// When('I type in my name {string} in the empty input field again', function (string, callback) {
//     IndexPage.nameInput.sendKeys(string)
//         .then(callback);
// });

// // ?Then I should see my name "Stefan" displayed below the text enter field like before
// Then('I should see my name {string} displayed below the text enter field like before', function (string) {
//     expect(IndexPage.nameOutput.getText()).to.eventually.equal(string);
// });

// // ?When I click the CONTINUE button to procceed
// When('I click the CONTINUE button to procceed', function () {
//     continueButton.click();
// });

// // ?Then I should see the "animalselection" page again
// Then('I should see the {string} page again', function (string) {
//     expectUrlToContain(string);
// });

// // ?When I select Simba the Lion
// When('I select Simba the Lion', function () {
//     AnimalselectionPage.simbaTheLionOption.click();
// });

// // ?And I click the CONTINUE button to adopt Simba
// When('I click the CONTINUE button to adopt Simba', function () {
//     continueButton.click();
// });

// // ?Then I should land on the "confirm" page again
// Then('I should land on the {string} page again', function (string) {
//     expectUrlToContain(string);
// });

// // ?And I should once again have the confirmation "Thank you for your selection. Your animal adoption papers will be sent to you shortly with a lovely card from your selected animal."
// Then('I should once again have the confirmation {string}', function (string) {
//     expect(ConfirmPage.confirmationMessageBox.getText()).to.eventually.equal(string);
// });