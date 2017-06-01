const studentPage = require('../../pages/NextGen Writer Key/student-assignment-draft-page.js');

exports.define = function(steps) {
  steps.given("I launch the activity as a '$user'", function(user) {
    driver.get(marvin.config.baseUrl + '/' + user);
  });

  steps.when("Student clicks '$elem'", function(elem) {
    studentPage[elem].click();
  });

  steps.when("I click '$element' on student assignment draft page", function(elem) {
    studentPage[elem].click();
  });

  steps.when("I fill out the reflection questions", () => {
    studentPage.reflection_textfields.then((elems) => {
      // single element is not an array
      if (!Array.isArray(elems)) {
        elems = [elems];
      }
      // add 'yay' to each text field
      elems.forEach((elem) => {
        elem.sendKeys('yay');
      });
    });
    studentPage.reflection_polls.then((elems) => {
      // single element is not an array
      if (!Array.isArray(elems)) {
        elems = [elems];
      }
      // click first radio of each poll
      elems.forEach((elem) => {
        console.log(elem);
        elem.findElement('css', "input[type='radio']:first-of-type").click();
      });
    });
  });

  steps.then("Student sees '$elem'", function(elem) {
    studentPage[elem].isDisplayed().should.eventually.equal(true);
  });

  steps.then('Color Checker "$color" for "$elem"', function(expColor, elem) {
    studentPage[elem].getCssValue('background-color').then(function(actColor) {
      expect(rgbaToHex(actColor)).to.equal(expColor);
    });
  });

  function rgbaToHex(rgba) {
    rgba = rgba.slice(5, -1).split(',');
    rgba = rgba.map(x => {
      x = parseInt(x.trim()).toString(16);
      return (x.length === 1) ? `0${x}` : x;
    });
    return `#${rgba[0]}${rgba[1]}${rgba[2]}`;
  }
};
