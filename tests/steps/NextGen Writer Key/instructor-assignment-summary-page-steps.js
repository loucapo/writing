var page = require('../../pages/NextGen Writer Key/instructor-assignment-summary-page.js');

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
    //expect(page.final_rubric_delete).to.exist;
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
};


