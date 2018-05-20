var ConfirmPage = function () {

    this.confirmationMessageBox = element(by.css('#table1 div p'));
    this.backToHomeButton = element(by.id('back_button'));

    // Function makes the test in the ZooAdoption.spec.js more readable
    this.messageShouldBe = function (text) {
        expect(this.confirmationMessageBox.getText()).toEqual(text);
    }

};
module.exports = new ConfirmPage();