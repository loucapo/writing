/**
 * Created by wayneng on 10/25/16.
 */
var moodle_login_page = require('../../pages/NSM Demo/moodle-login-page.js');
var credentials = require('../../pages/NextGen Writer Key/sls-user-credentials.js');
var moodle_lti_launch_page = require('../../pages/NSM Demo/moodle-LTI-launch-page.js');
var dashboard_page = require('../../pages/NSM Demo/instructor-dashboard-page.js');
var assignment_summary_page = require('../../pages/NSM Demo/instructor-assignment-summary-page.js');

exports.define = function(steps) {

  steps.given("I log in to the Moodle Site", function () {
    moodle_login_page.visit();
    moodle_login_page.moodle_username.sendKeys(credentials.moodle_admin_username);
    moodle_login_page.moodle_password.sendKeys(credentials.moodle_admin_password);
    moodle_login_page.moodle_login.click();
  });

  steps.when("I launch Writing Tools from the Moodle LTI host", function () {
    moodle_lti_launch_page.visit();
    // unused?
    // let launch_page_url = driver.getCurrentUrl();
    moodle_lti_launch_page.test_lti_link.click();
  });

  steps.when("Writing Tools Launch handles the request", function() {
    driver.getAllWindowHandles()
      .then(function(handles) {
        if (handles.length > 1) {
          return driver.switchTo().window(handles[1]);
        }
      }).then(function() {
      driver.wait(until.urlContains(marvin.config.baseUrl), 5000, 'redirect did not hit target');
    });
  });

  steps.then("I see the Writing Center dashboard", function() {
    driver.wait(until.urlContains(dashboard_page.url), 5000, 'target url does not contain ' + dashboard_page.url);
  });

  steps.when("I close the current session", function () {
    driver.close();
  });

  steps.when("I open a new session", function () {
    session.create(session.browser);
  });

  steps.then("I get redirected to the activity summary page", function () {
    driver.wait(until.urlContains(assignment_summary_page.url), 5000, 'redirect did not hit target');
  });
};