var page = require('../../pages/NSM Demo/instructor-launch-sls-route-credentials.js');

exports.define = function(steps) {

  steps.given("I go to the launch url", function () {
    page.visit();
  });

};