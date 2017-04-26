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


  steps.then("'$list' should be '$number' goal", function(list,number) {
    page[list].return('li').then(function(t) {
      expect(t).to.equal(number);
    });
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
    driver.findElements({css: "[class^='Rubric__table']"})
      .then(gimme_none)
    });

  steps.then("The draft goals modal does not appear", function() {
    driver.findElements({css: "[data-id='modal']"})
      .then(gimme_none)
  });

  function gimme_none(arr) {
    expect(arr.length).to.equal(0);
  };

  steps.then("The '$elem' does not exist", function(elem) {
    //expect(page.rubric_preview).to.not.exist;
    page.rubric_preview.then(function(flags) {
      expect(flags.length).to.equal(0);
    });
  });

  steps.then("The draft goal summary list should have '$goals' goal", function(goals) {
    page.draft_goal_summary_list.getText().then(function(t) {
      var content = t.split(',');
        // could use error handling if goals = 0. Empty space is counting as 1 right now.
        goals_number = parseInt(goals);
        expect(content.length).to.equal(goals_number);
    });
  });

  steps.then("Draft Goals on the Activity Summary should have '$goal' goal", function(goals) {
    driver.findElements({css: "[data-id='drafts-goal-list'] li"})
      .then(function(t) {
      goals_number = parseInt(goals);
      expect(t.length).to.equal(goals_number);
    });
  });

  steps.then("Draft Goals on the Activity Summary should contain '$goal'", function(goals) {
    page.draft_goal_list_activity_summary_selected.getText().then(function(t) {
      expect(t).to.contain(goals);
    });
  });

  steps.then("Draft Goals on the Activity Summary should not contain '$goal'", function(goals) {
    page.draft_goal_list_activity_summary_selected.getText().then(function(t) {
      expect(t).to.not.contain(goals);
    });
  });

  steps.then("'$first_draft_goal' should be selected in draft goal summary list", function(goal) {
    page.draft_goal_summary_list.getText().then(function(t) {
      expect(t).to.contain(goal);
    });
  });

  steps.then("'$first_draft_goal' should not be selected in draft goal summary list", function(goal) {
    page.draft_goal_summary_list.getText().then(function(t) {
      expect(t).to.not.contain(goal);
    });
  });

  steps.then("I should not see the '$elem'", function(elem) {
    page[elem].isDisplayed().should.eventually.equal(false);
  });

  steps.then("Draft Goals Cleanup '$number'", function(number) {
    page.edit_draft_goals_button.click();
    //can be improved so that it'll just uncheck all that are checked but couldn't figure it out on first pass
    k = 0;
    i = parseInt(number);
    while (k < i) {
      if (driver.findElement({css: "[name=draftGoalOption]:checked"})) {
        driver.findElement({css: "[name=draftGoalOption]:checked"}).click();
        k++;
      }
    }
      page.draft_goal_save_button.click();
    });
};


