var page = require('../../pages/NextGen Writer Key/sls-user-credentials.js');

exports.define = function(steps) {
  steps.given('I login as "$user"', function(user) {
    credentials.visit();
    credentials.sls_username.sendKeys(credentials[user]);
    credentials.sls_password.sendKeys(credentials.sls_dev_password);
    credentials.sls_login.click();
  });

  steps.when("I launch into the writing production tool", function () {
    moodle_lti_launch_page.visit();
    // unused?
    // let launch_page_url = driver.getCurrentUrl();
    moodle_lti_launch_page.test_lti_link.click();
  });
};
