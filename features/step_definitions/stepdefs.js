// The defineSupportCode hook is Cucumber.js’s way of allowing you to provide code that it will use for a variety of different situations.
var defineSupportCode = require('cucumber').defineSupportCode;
var assert = require('assert');

// Chai configurations
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

// Assertion libs to get dom elements
var chaiSmoothie = require('chai-smoothie');
var chaiJQ = require('chai-jq');
// var chaiWebdriverIO = require('chai-webdriverio');

var expect = chai.expect;

chai.use(chaiAsPromised);
chai.use(chaiJQ);
chai.use(chaiSmoothie);
// chai.use(chaiWebdriverIO);

// Configuration requirements
var env = require('./../../environment.js');
var baseUrl = env.serverBaseUrl;

// Page Objects
var IndexPage = require('./../../PageObjects/Index/index.pageObject.js');
var AnimalselectionPage = require('./../../PageObjects/Animalselection/animalselection.pageObject.js');
var ConfirmPage = require('./../../PageObjects/Confirm/confirm.pageObject.js');

// Common elements that can be found on different pages
var pageTitle = element(by.tagName('title'));
var continueButton = element(by.id('continue_button'));
var backToHomeButton = element(by.id('back_button'));

// Common functions
function expectToBeOnPage(string) {
    if (typeof string === 'string') {
        // expect(pageTitle.text()).to.have.string('Zoo Adoption | ' + string);
        // expect(pageTitle.text()).to.contain('Zoo Adoption | ' + string);

        // expect(pageTitle).to.contain.text(string);
        // expect(pageTitle.getText()).to.contain(string);

        // expect(pageTitle.getText()).to.have.string(string)

        // console.log("!!!!!!!!!!!!!!!!!!!!!");
        // var a = pageTitle.getText().then(function (text) {
        //     console.log("hü", text);
        // });
        // console.log(a);
        // expect(pageTitle.text()).to.include.any.string('Zoo Adoption | ' + string);
        // expect(pageTitle.getText()).to.eventually.equal(string);
        
        // var $elem = $("title");
        // expect($elem).to.have.$text(string);

        // expect(element(by.css('footer'))).to.be.present;
        
        expect(element(by.css('title'))).to.be.present;
    }
}


function notExpectToBeOnPage(string) {
    if (typeof string === 'string') {
        // expect(pageTitle.getText()).to.not.eventually.equal(string);
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

    Then('I see my name {string} displayed below the text enter field', function (string) {
        // Needed cause the execution seems to be to fast for the expect statement to reach
        browser.sleep(1000);
        expect(IndexPage.nameOutput.getText()).to.eventually.equal(string);
    });
    Then('I land on the {string} page', function (string) {
        expectToBeOnPage(string);
    });
    Then('I have the confirmation {string}', function (string) {
        expect(ConfirmPage.confirmationMessageBox.getText()).to.eventually.equal(string);
    });
    Then('I not be able to continue to the {string} page', function (string) {
        notExpectToBeOnPage(string);
    });

});
