/**
 * Created by wayneng on 10/25/16.
 */
var page = require('../pages/moodle-LTI-launch-page.js');
var credentials = require('../pages/credentials.js');
var marvin = require('marvin-js');
var should = require('chai').should;
var expect = require('chai').expect;
var assert = require('chai').assert;

exports.define = function(steps) {
  steps.given("I visit the Moodle Page", function () {
    page.visit();
  });

  steps.when("I log in to the Moodle Site", function () {

    page.moodle_username.sendKeys(credentials.moodle_admin_username);
    page.moodle_password.sendKeys(credentials.moodle_admin_password);
    page.moodle_login.click();
  });

  steps.when("I launch Writing Tools from an LTI host", function () {
    page.test_lti_link.click()
  });

  steps.then('I see "$text" on the page', function (text) {
    page.moodle_login.getText().then(function (text) {
      text.should.equal(text);
    });
  })
}