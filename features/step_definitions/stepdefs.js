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

function notExpectUrlToContain(string) {
    if (typeof string === 'string') {
        // False fail to remind testers that a special step has to fail
        expect(baseUrl + string + '.html').to.not.have.path('/jswebapp/' + string + '.html');
        
        // - Doesn't work cause browser.getCurrentUrl() returns a promise
        // ============================================================
        // expect(browser.getCurrentUrl()).not.toContain('animalselection');

        // - But the return with a promise doesn't work either cause I don't have the url in the "then"-block 
        // (no console.log in console output of cucumber test)
        // ============================================================
        // browser.driver.getCurrentUrl().then(function (url) {
        //     expect(url).to.not.have.path('/jswebapp/' + string + '.html');
        //     console.log("URL in then block", url);
        // });

        // - Doesn't make sense since doesn't validate the actual URL
        // ============================================================
        // expect(baseUrl + string + '.html').to.have.path('/jswebapp/' + string + '.html');
        
        // - JS-Approach not working 
        // (location undefined)
        // ============================================================
        // console.log(location.href);
    }
}

defineSupportCode(function ({ Given, Then, When, }) {

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
    Then('I should not be able to continue to the {string} page', function (string) {
        notExpectUrlToContain(string);
    });

});
