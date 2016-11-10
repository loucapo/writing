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

  steps.then("I see a menu of commenting options", function() {
    expect(page.comment_thesis).to.exist;
    expect(page.comment_reason_support).to.exist;
    expect(page.comment_interpretation_analysis).to.exist;
    expect(page.comment_expansion_thesis).to.exist;
    expect(page.comment_integration_research).to.exist;
    expect(page.comment_counterarguments).to.exist;
    expect(page.comment_other).to.exist;
    expect(page.comment_good_job).to.exist;
  });

  steps.when("I scroll down the screen", function() {
    window.scrollTo(0,500);
  });

  steps.then("The header and toolbar remain fixed", function() {
    // code to be added
  });
}

