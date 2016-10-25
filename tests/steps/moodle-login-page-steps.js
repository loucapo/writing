/**
 * Created by wayneng on 10/25/16.
 */
var page = require('../pages/moodle-login-page.js');
var marvin = require('marvin-js');
var should = require('chai').should;
var expect = require('chai').expect;
var assert = require('chai').assert;

exports.define = function(steps) {
  steps.given("I visit the Moodle Page", function() {
    page.visit();
  });

  steps.when("I log in to the Moodle Site", function() {

    var admin_username = "admin";
    var admin_password = "Passw0rd!";

    page.moodle_username.sendKeys(admin_username);
    page.moodle_password.sendKeys(admin_password);
    page.moodle_login.click();
  });

  steps.when("I launch Writing Tools from an LTI host", function() {
    page.lti_link.click()
  });
}
