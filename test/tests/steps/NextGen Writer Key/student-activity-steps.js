const studentPage = require('../../pages/NextGen Writer Key/student-assignment-draft-page.js');

exports.define = function(steps) {
  steps.given("I launch the activity as a '$user'", function(user) {
    driver.get(marvin.config.baseUrl + '/' + user);
  });

  steps.when("Student clicks '$elem'", function(elem) {
    studentPage[elem].click();
  });

  steps.then("Student sees '$elem'", function(elem) {
    studentPage[elem].isDisplayed().should.eventually.equal(true);
  });

  steps.then('Color Checker "$color" for "$elem"', function(color, elem) {
    studentPage[elem].getCssValue('background-color').then(function(backColor) {
      expect(backColor).to.equal(color);
    });
  });
};
