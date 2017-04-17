var page = require('../../pages/NextGen Writer Key/instructor-assignment-summary-page.js');
var rtePage = require('../../pages/NextGen Writer Key/react-rte.js');

exports.define = function(steps) {
  steps.given("I visit the SLS create activity page", function() {
    page.visit();
  });

  steps.then("I see the '$elem'", function(elem) {
    page[elem].isDisplayed().should.eventually.equal(true);
  });

  steps.then("I should see a new assignment created", function() {
    page.confirmation_message.isDisplayed().should.eventually.equal(true);
  });

  steps.then("the confirmation message is green", function() {
    page.confirmation_message.getCssValue('background-color').then(function rgb2hex(rgb) {
      rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
      function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
      }
      var color = "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
      expect(color).to.equal('#daf4d4');
    });
  });

  steps.when("I scroll down the activity page", function () {
    driver.executeScript(function() {
      window.scrollBy(0,100);
    })
  });

  steps.when("I reload the page", function () {
    driver.navigate().refresh();
  });

  steps.when("I click on the page", function () {
    page.activity_prompt_header.click();
  });
  steps.then('I should see the Assignment Header elements', function() {
    expect(page.title).to.exist;
    expect(page.activity_type).to.exist;
    expect(page.student_preview).to.exist;
  });

  steps.then('I should see the Assignment Details elements', function() {
    expect(page.activity_prompt_header).to.exist;
    expect(page.activity_prompt_edit).to.exist;
    expect(page.activity_prompt_delete).to.exist;
    expect(page.activity_prompt_description).to.exist;
  });

  steps.then('I should see the Rubric Details elements', function() {
    expect(page.final_rubric).to.exist;
    expect(page.final_rubric_delete).to.exist;
    expect(page.rubric_selection).to.exist;
    expect(page.create_custom_rubric).to.exist;
  });

  steps.then('I should see the Draft elements', function() {
    expect(page.draft_names).to.exist;
    expect(page.add_draft).to.exist;
    expect(page.final_draft_header).to.exist;
    expect(page.add_draft_instructions).to.exist;
    expect(page.add_student_reflection_questions).to.exist;
    expect(page.drafts_review_type).to.exist;
    expect(page.drafts_grade_type).to.exist;
    expect(page.draft_learning_focus).to.exist;
  });


  steps.then("The '$category' should be '$text'", function(category,text) {
    page[category].getText().then(function(t) {
      expect(t).to.contain(text);
    });
  });

  steps.when("I click a '$element'", function(elem) {
    page[elem].click();
  });

  steps.then("I reset the assignment prompt for the next test", function() {
    page.activity_prompt_edit.click();
    rtePage.draftEditor.click();
    rtePage.draftEditor.getText()
      .then(function(content) {
        var lefts = '';
        var content_length = content.length + 1;
        for (i = 0; i < content_length; i++) {
          lefts += keys.LEFT;
        }
        rtePage.draftEditor.sendKeys(keys.SHIFT + lefts);
        rtePage.draftEditor.sendKeys(keys.DELETE);
      });
    page.activity_prompt_save.click();
  });

  steps.then("I see '$rubric' is the '$number' element", function(elem,number) {
    page.rubric_selection_content.getText().then(function(t) {
      var content = t.split('\n');
      expect(content[number]).to.contain(elem);
    });
  });

  steps.then("I see '$rubric' is selected", function(elem) {
    page.rubric_title.getText().then(function(t) {
      expect(t).to.contain(elem);
    });
  });


  steps.then("There is no rubric to preview", function() {
    return new Promise(function(resolve, reject) {
      var unordered_list_items = page.rubric_preview_list.findElements({css: "[class^='Rubric__table']"});
    }).then(function(unordered_list_items) {
      return unordered_list_items.length.should.equal(0);
    });
    });


  steps.then("The '$elem' does not exist", function(elem) {
    //expect(page.rubric_preview).to.not.exist;
    page.rubric_preview.then(function(flags) {
      expect(flags.length).to.equal(0);
    });
  });
};


