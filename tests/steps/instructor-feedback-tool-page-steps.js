var page = require('../pages/instructor-feedback-tool-page.js');
var rtePage = require('../pages/react-rte.js');

exports.define = function(steps) {
  steps.when("I open the feedback tool", function() {
    page.visit();
  });

  steps.when("I click on the Quick Feedback Library", function() {
    page.quick_feedback_library.click();
  });

  steps.then("I see a menu of common feedback marks", function() {
    expect(page.comma_splice).to.exist;
    expect(page.fragment).to.exist;
    expect(page.usage).to.exist;
    expect(page.pronoun_agreement).to.exist;
    expect(page.subject_verb_agreement).to.exist;
    expect(page.wrong_word).to.exist;
    expect(page.needs_analysis).to.exist;
    expect(page.comma_error).to.exist;
  });

  steps.then("The Quick Feedback Library should be closed", function() {
    expect(page.comma_splice).to.not.exist;
    expect(page.fragment).to.not.exist;
    expect(page.usage).to.not.exist;
    expect(page.pronoun_agreement).to.not.exist;
    expect(page.subject_verb_agreement).to.not.exist;
    expect(page.wrong_word).to.not.exist;
    expect(page.needs_analysis).to.not.exist;
    expect(page.comma_error).to.not.exist;
  });

  steps.then("I should see the student essay in the feedback tool", function() {
    rtePage.draftEditor.isDisplayed().should.eventually.equal(true);
    expect(page.button_bold).to.not.exist;
    rtePage.draftEditor.getText()
      .then(function(text) {
        expect(text).to.have.length.above(500);
        var essay = text;
        expect(essay).contains(page.example_essay);
        //future improvements to check if feedback tools exist
        //expect(page.quick_feedback_library).to.exist;
      });
  });

  steps.then("I see a '$elem'", function(elem) {
    page[elem].isDisplayed().should.eventually.equal(true);
  });

  steps.then("I click a '$element'", function(elem) {
    page[elem].click();
  });

  steps.then("I see content '$text' in '$elem'", function(text, elem) {
    page[elem].getText()
      .then(function(t) {
        assert.include(t, text);
      });
  });

  steps.then("I do not see the instructor feedback content", function() {
    driver.findElements({css: '._2UmKyh4Gg9lDJDi6C-lrUZ'})
      .then(function(els) {
        expect(els.length).to.equal(0);
      });
  });

  steps.then("I see publisher content", function() {
    page.resource_url.isDisplayed().should.eventually.equal(true);
  });

  steps.then("I do not see the publisher content", function() {
    driver.findElements({css: '#resource_url'})
      .then(function(els) {
        expect(els.length).to.equal(0);
      });
  });
};
