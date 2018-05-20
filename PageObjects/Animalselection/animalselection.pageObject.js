var AnimalselectionPage = function () {

    this.georgeTheTurtleOption = element.all(by.tagName('option')).get(1);
    this.simbaTheLionOption = element.all(by.tagName('option')).get(2);
    this.nemoTheFishOption = element.all(by.tagName('option')).get(3);

};
module.exports = new AnimalselectionPage();