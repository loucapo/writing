var page = require('../pages/instructor-student-submission-review-screen.js');

exports.define = function(steps) {

  steps.then("I click on the '$element'", function(elem) {
    page[elem].click();
  });

  steps.then("I see thee '$elem'", function(elem) {
    page[elem].isDisplayed().should.eventually.equal(true);
  });

  steps.then("I see some text '$text' in '$elem'", function(text, elem) {
    page[elem].getText()
      .then(function(t) {

        assert.include(t, text);
      });
  });

  steps.then("I click link '$linkText' in '$element'", function(text, element) {
    page[element]
      .then(function(el) {
        return el.findElement({ 'xpath': '//a[text()="' + text + '"]'}).click();
      });
  });

  steps.then("the extended url is '$url'", function(url) {
    var extended_url = marvin.config.baseUrl + '/' + url;
    driver.wait(until.urlContains(extended_url), 5000, 'extended url failed to be' + extended_url);
  });

  steps.then("I navigate back", function() {
    driver.navigate().back();
  });

};
