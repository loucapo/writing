/**
 * Created by wayneng on 10/25/16.
 */
var moodle_login_page = require('../pages/moodle-login-page.js');
var credentials = require('../pages/moodle-credentials.js');
var moodle_lti_launch_page = require('../pages/moodle-LTI-launch-page.js');
var dashboard = require('../pages/instructor-dashboard-page.js');
var marvin = require('marvin-js');
var driver = marvin.session.getDriver();
var until = require('selenium-webdriver').until;
var should = require('chai').should;
var expect = require('chai').expect;
var assert = require('chai').assert;


exports.define = function(steps) {

  steps.given("I log in to the Moodle Site", function () {
    moodle_login_page.visit();
    moodle_login_page.moodle_username.sendKeys(credentials.moodle_admin_username);
    moodle_login_page.moodle_password.sendKeys(credentials.moodle_admin_password);
    moodle_login_page.moodle_login.click();
  });

  steps.when("I launch Writing Tools from the Moodle LTI host", function () {
    moodle_lti_launch_page.visit();
    let launch_page_url = driver.getCurrentUrl();
    moodle_lti_launch_page.test_lti_link.click();
  });

  steps.when("Writing Tools Launch handles the request", function() {
    driver.getAllWindowHandles().then(function(handles) {
      if (handles.length > 1) {
        return driver.switchTo().window(handles[1]);
      }
    });
  });

  steps.then("I see the Writing Center dashboard", function() {
    let target_url = marvin.config.baseUrl + ':3666/dashboard';
    driver.wait(until.urlIs(target_url), 5000, 'target url does not equal ' + target_url);
  });

}
