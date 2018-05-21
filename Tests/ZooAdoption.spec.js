// Configuration requirements
var env = require('./../environment.js');
var baseUrl = env.serverBaseUrl;

// Page Objects
var IndexPage = require('./../PageObjects/Index/index.pageObject.js');
var AnimalselectionPage = require('./../PageObjects/Animalselection/animalselection.pageObject.js');
var ConfirmPage = require('./../PageObjects/Confirm/confirm.pageObject.js');

// Elements that can be found on different pages 
var continueButton = element(by.id('continue_button'));

describe('ZooAdoption', function () {

    beforeEach(function () {
        browser.get(baseUrl);
    });

    it('should adopt Nemo the Fish and then Simba the Lion', function () {
        IndexPage.nameInput.sendKeys('Stefan');
        IndexPage.messageShouldBe('Stefan');
        continueButton.click();
        AnimalselectionPage.nemoTheFishOption.click();
        continueButton.click();
        expect(browser.getCurrentUrl()).toContain('confirm.html');
        ConfirmPage.messageShouldBe('Thank you for your selection. Your animal adoption papers will be sent to you shortly with a lovely card from your selected animal.');
        ConfirmPage.backToHomeButton.click();
        IndexPage.nameInput.sendKeys('Stefan');
        IndexPage.messageShouldBe('Stefan');
        continueButton.click();
        AnimalselectionPage.simbaTheLionOption.click();
        continueButton.click();
        expect(browser.getCurrentUrl()).toContain('confirm.html');
    });

    // If there was an ng-if statement implemented on the continue-button this test won't fail
    it('should not be possible to adopt nemo the fish if I dont type in a name in the first place', function () {
        IndexPage.nameInput.sendKeys();
        continueButton.click();
        expect(browser.getCurrentUrl()).not.toContain('animalselection');
    });

});