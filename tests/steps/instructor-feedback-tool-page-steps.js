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
    page.comma_splice.isDisplayed().should.eventually.equal(true);
    page.fragment.isDisplayed().should.eventually.equal(true);
    page.usage.isDisplayed().should.eventually.equal(true);
    page.pronoun_agreement.isDisplayed().should.eventually.equal(true);
    page.subject_verb_agreement.isDisplayed().should.eventually.equal(true);
    page.appropriate_language.isDisplayed().should.eventually.equal(true);
    page.needs_analysis.isDisplayed().should.eventually.equal(true);
    page.comma_error.isDisplayed().should.eventually.equal(true);
  });

  steps.then("The Quick Feedback Library should be closed", function() {
    page.comma_splice.isDisplayed().should.eventually.equal(false);
    page.fragment.isDisplayed().should.eventually.equal(false);
    page.usage.isDisplayed().should.eventually.equal(false);
    page.pronoun_agreement.isDisplayed().should.eventually.equal(false);
    page.subject_verb_agreement.isDisplayed().should.eventually.equal(false);
    page.appropriate_language.isDisplayed().should.eventually.equal(false);
    page.needs_analysis.isDisplayed().should.eventually.equal(false);
    page.comma_error.isDisplayed().should.eventually.equal(false);
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
};
