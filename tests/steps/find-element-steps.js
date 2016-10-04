var findElementPage = require('../pages/find-element.js');
var marvin = require('marvin-js');
var should = require('chai').should;

exports.define = function(steps) {
  steps.given("I visit the activity page", function() {
    findElementPage.visit();
  });

  steps.then('I should see header with data-id: "Assignment Title"', function() {
    findElementPage.heading.click()
      .then(function() {
        console.log('clicked');
      });
  });
}
