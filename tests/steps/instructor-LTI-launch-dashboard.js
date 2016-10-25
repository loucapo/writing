var page = require('../pages/instructor-LTI-launch-dashboard.js');
var marvin = require('marvin-js');
var should = require('chai').should;
var expect = require('chai').expect;
var assert = require('chai').assert;

exports.define = function(steps) {

  steps.then('I see the "Create an Assignment" button', function (text) {
    expect(page.create_assignment).to.exist;
    });

  steps.then('I see "$text" on the page', function (text) {
    page.welcome_text.getText().then(function (text) {
      text.should.equal(text);
    });
  })
};
