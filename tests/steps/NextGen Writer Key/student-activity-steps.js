var page = require('../../pages/NextGen Writer Key/instructor-assignment-summary-page.js');
var rtePage = require('../../pages/NextGen Writer Key/react-rte.js');

exports.define = function(steps) {
  steps.given("I launch the activity as a '$user'", function(user) {
    driver.get(marvin.config.baseUrl +'/'+user)
  });
};