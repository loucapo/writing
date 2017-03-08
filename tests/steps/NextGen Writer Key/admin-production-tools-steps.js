var credentials = require('../../pages/NextGen Writer Key/sls-user-credentials.js');
var tools = require('../../pages/NextGen Writer Key/admin-production-tools-page.js');

exports.define = function(steps) {
  steps.given('I login as "$user"', function(user) {
    credentials.visit();
    credentials.sls_username.sendKeys(credentials[user]);
    credentials.sls_password.sendKeys(credentials.sls_dev_password);
    credentials.sls_login.click();
  });

  steps.when("I launch into the writing production tool", function () {
    tools.visit();
  });

  steps.then("I land on the Writing Activity Content Tool", function () {
    tools[elem].isDisplayed().should.eventually.equal(true);
  });

  steps.then("I receive a 401 error", function () {
    driver.wait(until.urlContains("/401"), 5000, 'target url does not contain ' + dashboard_page.url);
  });
};
