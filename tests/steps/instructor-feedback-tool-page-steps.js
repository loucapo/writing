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
    page.thesis.isDisplayed().should.eventually.equal(true);
    page.reason_support.isDisplayed().should.eventually.equal(true);
    page.interpretation.isDisplayed().should.eventually.equal(true);
    page.paragraphDev.isDisplayed().should.eventually.equal(true);
    page.research.isDisplayed().should.eventually.equal(true);
    page.other.isDisplayed().should.eventually.equal(true);
    page.counterargs.isDisplayed().should.eventually.equal(true);
    page.goodJob.isDisplayed().should.eventually.equal(true);
    page.quick_feedback_library.isDisplayed().should.eventually.equal(true);
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
    "var textNode = studentText.getElementsByTagName('span')[0];" +
    "range.selectNode(textNode);" +
    "window.getSelection().addRange(range);";
    driver.executeScript(script);
  });

  steps.then("I see a comment popup appear", function() {
    page.comment_popup.isDisplayed().should.eventually.equal(true);
  });

  steps.then("on the feedback page I click the '$element' element", function(elem) {
    page[elem].click();
  });

  steps.then("I add '$text' to the comment popup", function(text) {
    page.comment_popup__textarea.sendKeys(text);
  });

  steps.then("the selected text highlight should persist", function(text) {
    page.draft_content_first_span.getAttribute('style').then(function (style) {
      expect(style.indexOf('background-color')).to.not.equal(-1);
    });
  });
  
  steps.then("the comment '$text' is inside a feedback flag", function(feedback_comment) {
    page.feedback_flags.then(function(flags) {
      flags[0].click();
      flags[0].getText().then(function(text) {
        expect(text).to.contain(feedback_comment);
      });
    });
  });

  steps.then("the selected text highlight should not persist", function(text) {
    page.draft_content_first_span.getAttribute('style').then(function (style) {
      expect(style.indexOf('background-color')).to.equal(-1);
    });
  });

  steps.then("the feedback flag should not exist", function() {
    page.feedback_flags.then(function(flags) {
      expect(flags.length).to.equal(0);
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

  steps.then("I should see the score rubric", function() {
    page.rubric.isDisplayed().should.eventually.equal(true);
  });

  steps.when("I click the '$elem'", function(elem) {
    page[elem].click();
  });

  steps.then("The rubric should disappear", function() {
    driver.findElements({css: "div[class^='Rubric__rubric_container"})
      .then(function(els) {
        expect(els.length).to.equal(0);
      });
  });

  steps.when("I click '$grade' for '$criteria'", function(elem,criteria) {
    if (elem == 'exceeds expectations') {
      var grade = 4;
    }
    else if (elem == 'meets expectations') {
      var grade = 3;
    }
    else if (elem == 'nearly meets expectations') {
      var grade = 2;
    }
    else if (elem == 'fails to meet expectations') {
      var grade = 1;
    }
    else {
      throw new Error('Unknown rubric grade selected');
    };

    if (criteria == 'thesis') {
      var column = 1;
    }
    else if (criteria == 'claims') {
      var column = 2;
    }
    else if (criteria == 'evidence') {
      var column = 3;
    }
    else if (criteria == 'logical appeals') {
      var column = 4;
    }
    else if (criteria == 'counterargument') {
      var column = 5;
    }
    else {
      throw new Error('Unknown rubric column selected');
    };
    var butter = (5-grade);
    driver.findElement({css: "div[class^='RubricCategory__category'] div[class^='RubricCategoryScore'] div:nth-child("+ column +") div:nth-child(" + butter + ")"}).click();
  });

  steps.then("I see the '$grade' '$criteria' box highlighted '$color'", function(elem,criteria) {
    if (elem == 'exceeds expectations') {
      var grade = 4;
      var color = 'green';
    }
    else if (elem == 'meets expectations') {
      var grade = 3;
      var color = 'yellow';
    }
    else if (elem == 'nearly meets expectations') {
      var grade = 2;
      var color = 'orange';
    }
    else if (elem == 'fails to meet expectations') {
      var grade = 1;
      var color = 'red';
    }
    else {
      throw new Error('Unknown rubric grade selected');
    };

    if (criteria == 'thesis') {
      var column = 1;
    }
    else if (criteria == 'claims') {
      var column = 2;
    }
    else if (criteria == 'evidence') {
      var column = 3;
    }
    else if (criteria == 'logical appeals') {
      var column = 4;
    }
    else if (criteria == 'counterargument') {
      var column = 5;
    }
    else {
      throw new Error('Unknown rubric column selected');
    };
    var butter = (5-grade);
    driver.findElement({css: "div[class^='RubricCategory__category'] div[class^='RubricCategoryScore'] div:nth-child("+ column +") div:nth-child(" + butter + ")[class*='RubricCategoryScore__selected'][class*='RubricCategoryScore__category_item_"+ color +"']"});

  });

  steps.then("I see the score '$grade' '$score' next to '$criteria'", function(elem,score,criteria) {
    if (criteria == 'thesis') {
      var column = 1;
    }
    else if (criteria == 'claims') {
      var column = 2;
    }
    else if (criteria == 'evidence') {
      var column = 3;
    }
    else if (criteria == 'logical appeals') {
      var column = 4;
    }
    else if (criteria == 'counterargument') {
      var column = 5;
    }
    else {
      throw new Error('Unknown rubric column selected');
    };
    driver.findElement({css: "div[class^='RubricCategory__category'] div[class^='RubricCategoryHeading'] div:nth-child("+ column +") [data-id='category-heading-value']"}).getText().then(function(text) {
      text.should.equal(score);
    });;
  });

  steps.then("I do not see the '$grade' '$criteria' box highlighted", function(elem,criteria) {
    if (elem == 'exceeds expectations') {
      var grade = 4;
    }
    else if (elem == 'meets expectations') {
      var grade = 3;
    }
    else if (elem == 'nearly meets expectations') {
      var grade = 2;
    }
    else if (elem == 'fails to meet expectations') {
      var grade = 1;
    }
    else {
      throw new Error('Unknown rubric grade selected');
    };

    if (criteria == 'thesis') {
      var column = 1;
    }
    else if (criteria == 'claims') {
      var column = 2;
    }
    else if (criteria == 'evidence') {
      var column = 3;
    }
    else if (criteria == 'logical appeals') {
      var column = 4;
    }
    else if (criteria == 'counterargument') {
      var column = 5;
    }
    else {
      throw new Error('Unknown rubric column selected');
    };
    var butter = (5-grade);
    driver.findElements({css: "div[class^='RubricCategory__category'] div[class^='RubricCategoryScore'] div:nth-child("+ column +") div:nth-child(" + butter + ")[class*='RubricCategoryScore__selected']"})
      .then(function(els) {
        expect(els.length).to.equal(0);
    });
  });

  steps.then("I do not see the score '$grade' '$score' next to '$criteria'", function(elem,score,criteria) {
    if (criteria == 'thesis') {
      var column = 1;
    }
    else if (criteria == 'claims') {
      var column = 2;
    }
    else if (criteria == 'evidence') {
      var column = 3;
    }
    else if (criteria == 'logical appeals') {
      var column = 4;
    }
    else if (criteria == 'counterargument') {
      var column = 5;
    }
    else {
      throw new Error('Unknown rubric column selected');
    }
    ;
    driver.findElement({css: "div[class^='RubricCategory__category'] div[class^='RubricCategoryHeading'] div:nth-child("+ column +") [data-id='category-heading-value']"}).getText().then(function(text) {
      text.should.not.equal(score);
    });;
  });

  steps.then("the feedback tool page shows $font font", function(display) {
    page.feedback_tool_page_layout.getCssValue('font').then(function(t) {
      var myDisplay = display.replace('\'','').replace('\'','');
      expect(t).to.contain(myDisplay);
    });
  });

  steps.then("the RTE shows $font font", function(display) {
    page.draft_content_first_span.getCssValue('font').then(function(t) {
      var myDisplay = display.replace('\'','').replace('\'','');
      expect(t).to.contain(myDisplay);
    });
  });

  steps.then("I should see three sentiment levels", function() {
    page.sentiment_goodJob.isDisplayed().should.eventually.equal(true);
    page.sentiment_extensiveRevision.isDisplayed().should.eventually.equal(true);
    page.sentiment_needsWork.isDisplayed().should.eventually.equal(true);
  });

  steps.then("the highlighting style should be '$color'", function(color) {
    page.draft_content_first_span.getAttribute('style')
      .then(function(t) {
        assert.equal(t, color);
      });
    });
};


