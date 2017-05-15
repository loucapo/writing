let credentials = require('../../pages/NextGen Writer Key/sls-user-credentials.js');
let tools = require('../../pages/NextGen Writer Key/admin-production-tools-page.js');

exports.define = function(steps) {
  steps.given('I login as "$user"', function(user) {
    credentials.visit();
    credentials.sls_username.sendKeys(credentials[user]);
    credentials.sls_password.sendKeys(credentials.sls_dev_password);
    credentials.sls_login.click();
  });

  steps.given('I launch into the writing production tool', function() {
    tools.visit();
  });

  steps.then('I land on the Writing Activity Content Tool', function() {
    tools.prodtools_header.isDisplayed().should.eventually.equal(true);
    tools.prodtools_title.isDisplayed().should.eventually.equal(true);
  });
};
