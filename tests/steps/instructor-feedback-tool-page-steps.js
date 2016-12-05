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

  steps.then("I see the '$elem'", function(elem) {
    page[elem].isDisplayed().should.eventually.equal(true);
  });

  steps.then("I see text '$text' in '$elem'", function(text, elem) {
    page[elem].getText()
      .then(function(t) {
        assert.include(t, text);
      });
  });

  steps.then("I see the '$elem' is empty", function(elem) {
    page[elem].getText()
      .then(function(t) {
        assert.equal(t, "");
      });
  });

  steps.then("I see the '$elem' has placeholder text '$str'", function(elem, str) {
    page[elem].getAttribute('placeholder')
      .then(function(t) {
        assert.equal(t, str);
      });
  });

  steps.then("I see responses to the reflection questions", function() {
    expect(page['Student Reflection Section']).to.exist;
  });

  steps.then("I see the end comment section", function() {
    expect(page.end_comment_header).to.not.exist;
    expect(page.end_comment_section).to.not.exist;
    expect(page.end_comment_textarea).to.not.exist;
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
          expect(y).to.equal(new_y);
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

  steps.then("I select some text in the text body", function() {
    var script = "var range = document.createRange();" +
    "var studentText = document.querySelector('div.public-DraftEditor-content div');" +
    "var textNode = studentText.getElementsByTagName('span')[0].firstChild;" +
    "range.selectNode(textNode);" +
    "window.getSelection().addRange(range);";
    driver.executeScript(script);
    console.log('selection attempted');
  });

  steps.then("I click on the '$element' feedback", function(elem) {
    page[elem].click();
  });

  steps.then("I see a comment popup appear", function() {
    page.comment_popup.isDisplayed().should.eventually.equal(true);
  });

  steps.then("I click '$element' on the comment popup", function(elem) {
    page[elem].click();
  });

  steps.then("I add '$text' to the comment popup", function(text) {
    page.comment_popup__textarea.sendKeys(text);
  });

  steps.then("The '$text' should persist on the page", function(text) {
    page.comment_popup.getText().then(function(text) {
      text.should.equal(text);
    });
  });

  steps.then("The '$text' should not persist on the page", function(text) {
    page.comment_popup.isDisplayed().should.eventually.equal(false);
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


