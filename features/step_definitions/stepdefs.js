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

    // Before(function () {
    //     Given('I go to the website {string}', function (string, callback) {
    //         browser.get(string)
    //             .then(callback);
    //     });
    // });

    Given('I go to the website {string}', function (string) {
        browser.get(string);
    });


    When('I type in my name {string} in the empty input field', function (string) {
        IndexPage.nameInput.sendKeys(string);
    });
    When('I click the CONTINUE button', function () {
        continueButton.click();
    });
    When('I click the BACK TO HOME button', function () {
        ConfirmPage.backToHomeButton.click();
    });
    When('I select Nemo the Fish', function () {
        AnimalselectionPage.nemoTheFishOption.click();
    });
    When('I select Simba the Lion', function () {
        AnimalselectionPage.simbaTheLionOption.click();
    });
    When('I don\'t type in a name in the empty input field', function () {
        IndexPage.nameInput.sendKeys();
    });



    Then('I should see my name {string} displayed below the text enter field', function (string) {
        // Needed cause the execution seems to be to fast for the expect statement to reach
        browser.sleep(1000);
        expect(IndexPage.nameOutput.getText()).to.eventually.equal(string);
    });
    Then('I should land on the {string} page', function (string) {
        expectUrlToContain(string);
    });
    Then('I should have the confirmation {string}', function (string) {
        expect(ConfirmPage.confirmationMessageBox.getText()).to.eventually.equal(string);
    });
    // Then('I should not be able to continue to the {string} page by clicking the CONTINUE button', function (string) {
    // });


});
