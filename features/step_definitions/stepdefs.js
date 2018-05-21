// The defineSupportCode hook is Cucumber.js’s way of allowing you to provide code that it will use for a variety of different situations.
const defineSupportCode = require('cucumber').defineSupportCode;
const assert = require('assert');

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

defineSupportCode(function ({ Given, Then, When, Before }) {
    let answer;

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
});
