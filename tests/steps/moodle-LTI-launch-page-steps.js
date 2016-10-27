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
    moodle_lti_launch_page.test_lti_link.click().then(()=> {
      
      driver.getCurrentUrl().then((current_url) => {
        launch_page_url = current_url;
        console.log(current_url);
      });

    }).then(() => {
      console.log('async af');
      console.log(launch_page_url);
    }).then(() => {
      console.log('async af');
    driver.getCurrentUrl().then((current_url) => {
      console.log(current_url);
  }).
    then(() => {
      console.log('getting handles');
    driver.getAllWindowHandles().then((function(handles) {
      console.log('handles got');
      console.log(handles);
      var secondWindowHandle = handles[1];
      var firstWindowHandle = handles[0];
      driver.switchTo().window(secondWindowHandle).then(function () { //the focus moves on new tab
        driver.wait(until.urlContains('3666'), 5000, 'boo').then(() => {
          console.log('hit that dashboard');

      })
        ;
      });
    }));
  });
  });
  });

  steps.then("I see the Writing Center dashboard", function() {
    console.log('final');
    driver.getCurrentUrl().then((current_url) => {
      console.log(current_url);
    });
  });

}
