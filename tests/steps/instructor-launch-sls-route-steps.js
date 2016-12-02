var page = require('../pages/instructor-launch-sls-route-page.js');

exports.define = function(steps) {

  steps.given("I go to the launch url", function () {
    page.visit();
  });
};