var page = require('../pages/instructor-feedback-tool-page.js');
var marvin = require('marvin-js');
var expect = require('chai').expect;

exports.define = function(steps) {
  steps.given("I open the feedback tool", function() {
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
    expect(page.student_submission_body).to.exist;
    expect(page.quick_feedback_library).to.exist;
  });
}
