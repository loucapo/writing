var helloPage = require('../pages/hello-world.js');
var marvin = require('marvin-js');
var should = require('chai').should;

exports.define = function(steps) {
  steps.given("I visit the home page", function() {
    helloPage.visit();
  });

  steps.then('I should see header "$text"', function(header) {
    helloPage.heading.getText()
      .then(function(text) {
        text.should.equal(header);
      });
  });

  steps.when("I click the button 'Click'", function() {
    console.log('CLIKKIT CLIKKIT');
  });

  steps.then("I should see a greeting", function() {
    console.log('DOOT DOOT')
  });
}
