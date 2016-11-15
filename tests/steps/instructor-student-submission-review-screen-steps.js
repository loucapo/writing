var student_submission_page = require('../pages/instructor-student-submission-review-screen.js');
var summary_page = require('../pages/instructor-assignment-summary-page.js');
var marvin = require('marvin-js');
var driver = require('marvin-js').session.getDriver();
var until = require('selenium-webdriver').until;

var chai = require('chai');
var assert = chai.assert;
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

exports.define = function(steps) {

  steps.then("I click on the '$element'", function(elem) {
    student_submission_page[elem].click();
  });

  steps.then("I see the '$elem'", function(elem) {
    student_submission_page[elem].isDisplayed().should.eventually.equal(true);
  });

  steps.then("I see text '$text' in '$elem'", function(text, elem) {
    student_submission_page[elem].getText()
      .then(function(t) {
        assert.include(t, text);
      });
  });

  steps.then("I click link '$linkText' in '$element'", function(text, element) {
    student_submission_page[element]
      .then(function(el) {
        return el.findElement({ 'xpath': '//a[text()="' + text + '"]'}).click();
      });
  });

  steps.then("the url includes '$url'", function(url) {
    var expected_url = marvin.config.baseUrl + '/feedbackTool/123';
    driver.wait(until.urlContains(expected_url), 5000, 'target url does not contain ' + expected_url);
  });

  steps.then("I navigate back", function() {
    driver.navigate().back();
  });


  // steps.then("I don't see the '$element'", function(elem) {
  //   var co = student_submission_page[elem];
  //   marvin.log.dir(co);
  // driver.isElementPresent(webdriver.By.id("someId"))
  //   .then(function(isPresent){
  //     assert.equal(false, isPresent , "message");
  //   });
  // });
};
