var IndexPage = function () {

    this.nameInput = element(by.css('input[ng-model="person.name"]'));
    this.nameOutput = element(by.css('.content h2'));

    // Function makes the test in the ZooAdoption.spec.js more readable
    this.messageShouldBe = function (text) {
        expect(this.nameOutput.getText()).toEqual(text);
    }

};
module.exports = new IndexPage();