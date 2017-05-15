exports.define = function(steps) {
  steps.given("I launch the activity as a '$user'", function(user) {
    driver.get(marvin.config.baseUrl + '/' + user);
  });
};
