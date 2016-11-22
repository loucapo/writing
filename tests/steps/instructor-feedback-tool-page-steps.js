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

  steps.then("I see a menu of commenting options", function() {
    expect(page.thesis).to.exist;
    expect(page.reason_support).to.exist;
    expect(page.interpretation).to.exist;
    expect(page.paragraphDev).to.exist;
    expect(page.research).to.exist;
    expect(page.other).to.exist;
    expect(page.counterargs).to.exist;
    expect(page.goodJob).to.exist;
    expect(page.quick_feedback_library).to.exist;
  });

  steps.when("I scroll down the screen", function() {
    page.sidebar.getLocation().then(function(position) {
      var y = position.y;
      driver.executeScript(function() {
        window.scrollTo(0,500);
      }).then(function() {
        page.sidebar.getLocation().then(function(position) {
          var new_y = position.y;
          expect(y).to.not.equal(new_y);
        });
      });
    });
  });

  steps.then("The header and toolbar remain fixed", function() {
    // code to be added
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

  steps.then("I click on the '$element' feedback", function(elem) {
    page[elem].click();
  });

  steps.then("I see a comment popup appear", function() {
    page.comment_popup.isDisplayed().should.eventually.equal(true);
  });

  steps.then("I click '$element' on the comment popup", function() {
    page[elem].click();
  });

  steps.then("I add '$text' to the comment popup", function(text) {
    page.comment_popup.sendKeys(text);
  });

  steps.then("The '$text' should persist on the page", function(text) {
    page.comment_popup.getText().then(function(text) {
      text.should.equal(text);
    });
  });

  steps.then("The '$text' should not persist on the page", function(text) {
    page.comment_popup.isDisplayed().should.eventually.equal(false);
  });
};


