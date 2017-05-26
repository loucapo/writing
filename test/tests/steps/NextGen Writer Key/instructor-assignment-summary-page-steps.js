let page = require('../../pages/NextGen Writer Key/instructor-assignment-summary-page');
let rtePage = require('../../pages/NextGen Writer Key/react-rte.js');
var faker = require('faker');

exports.define = function(steps) {
  steps.given('I open the Writer Key Next Gen Application', function() {
    page.visit();
  });

  steps.then("I see the '$elem'", function(elem) {
    page[elem].isDisplayed().should.eventually.equal(true);
  });

  steps.then("I see question $num has text '$text'", function(num, text) {
    page.reflection_questions_question_box(num).getText()
      .then(actual => {
        expect(actual).to.have.string(text);
      });
  });

  steps.then('I should see a fresh assignment', function() {
    // FIXME: do it
    console.log('TODO qqrx');
  });

  steps.then('I sleep for $d seconds', function(d) {
    driver.sleep(d * 1000);
  });

  steps.then('I should see a new assignment created', function() {
    page.confirmation_message.isDisplayed().should.eventually.equal(true);
  });

  steps.then('the confirmation message is green', function() {
    page.confirmation_message.getCssValue('background-color').then(function rgb2hex(rgb) {
      rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
      function hex(x) {
        return ('0' + parseInt(x).toString(16)).slice(-2);
      }
      let color = '#' + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
      expect(color).to.equal('#daf4d4');
    });
  });

  steps.when('I scroll down the activity page', function() {
    driver.executeScript(function() {
      window.scrollBy(0, 100);
    });
  });

  steps.when('I reload the page', function() {
    driver.navigate().refresh();
  });

  steps.when('I click on the page', function() {
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
    //expect(page.draft_names).to.exist;
    expect(page.add_draft_button).to.exist;
    expect(page.draft_card).to.exist;
    expect(page.add_draft_instructions).to.exist;
    expect(page.add_student_reflection_questions).to.exist;
    expect(page.drafts_review_type).to.exist;
    expect(page.drafts_grade_type).to.exist;
    //expect(page.draft_learning_focus).to.exist;
  });


  steps.then("'$list' should be '$number' goal", function(list, number) {
    page[list].return('li').then(function(t) {
      expect(t).to.equal(number);
    });
  });

  steps.then("The '$category' should be '$text'", function(category, text) {
    page[category].getText().then(function(t) {
      expect(t).to.contain(text);
    });
  });

  steps.when('I click the "$element"', function(elem) {
    page[elem].click();
  });

  steps.then('I reset the assignment prompt for the next test', function() {
    // https://bugs.chromium.org/p/chromedriver/issues/detail?id=30
    page.activity_prompt_edit.click();
    rtePage.draftEditor.getText()
      .then(text => {
        rtePage.draftEditor.sendKeys(keys.DELETE.repeat(text.length));
      });
    page.activity_prompt_save.click();
  });

  steps.then("I see '$rubric' is the '$number' element", function(elem, number) {
    page.rubric_selection_content.getText().then(function(t) {
      let content = t.split('\n');
      expect(content[number]).to.contain(elem);
    });
  });

  steps.then("I see '$rubric' is selected", function(elem) {
    page.rubric_title.getText().then(function(t) {
      expect(t).to.contain(elem);
    });
  });


  steps.then('There is no rubric to preview', function() {
    driver.findElements({css: "[class^='Rubric__table']"})
      .then(gimmeNone);
  });

  steps.then('The draft goals modal does not appear', function() {
    driver.findElements({css: "[data-id='modal']"})
      .then(gimmeNone);
  });

  // TODO: common functions like gimmeNone need to be deduped and shared
  // TODO: actually, need to grep for `steps.*`, sort the output, and dedupe
  //  there's a ton of shared steps
  function gimmeNone(arr) {
    expect(arr.length).to.equal(0);
  }

  // XXX: this doesn't actually use the elem it's passed, should it?
  steps.then("The '$elem' does not exist", function() {
    page.rubric_preview.then(function(flags) {
      expect(flags.length).to.equal(0);
    });
  });

  steps.then("The draft goal summary list should have '$goals' goal", function(goals) {
    page.draft_goal_summary_list.getText().then(function(t) {
      let content = t.split(',');
      // could use error handling if goals = 0. Empty space is counting as 1 right now.
      let goalsNumber = parseInt(goals);
      expect(content.length).to.equal(goalsNumber);
    });
  });

  steps.then("Draft Goals on the Activity Summary should have '$goal' goal", function(goals) {
    driver.findElements({css: "[data-id='drafts-goal-list'] li"})
      .then(function(t) {
        let goalsNumber = parseInt(goals);
        expect(t.length).to.equal(goalsNumber);
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

  steps.then('Draft Goals cleanup', function() {
    page.edit_draft_goals_button.click();
    driver.findElements({css: "[data-id='input-fields'] :checked"})
      .then(els => {
        Promise.all(els.map(el => el.click()));
      }).then(() => {
        page.draft_goal_save_button.click();
      });
  });

  steps.then('Reflection Questions cleanup', function() {
    page.edit_student_reflection_questions.click();
    driver.findElements({css: "[data-id='input-fields'] :checked"})
      .then(els => {
        Promise.all(els.map(el => el.click()));
      }).then(() => {
        page.reflection_questions_save.click();
      });
  });

  // TODO: this step does not do what it says.  whether it's just unclear, or out of date... it's wrong.
  steps.then("A new draft will be added above the '$number' existing draft", function(number) {
    if (number) {throw new Error('Explode mystic dove');}
    let draftCount = parseInt(number);
    let drafts = driver.findElements({css: "[data-id^='MLCard-Draft']"});
    let paper = driver.findElements({css: "[data-id^='MLCard-Final-Paper']"});
    expect(drafts.length + paper.length).to.equal(draftCount + 1);
  });

  steps.then('The draft tally within header should display correct number of drafts', function() {
    let drafts = driver.findElements({css: "[data-id^='MLCard-Draft']"});
    let paper = driver.findElements({css: "[data-id^='MLCard-Final-Paper']"});
    let draftCount = driver.findElement({css: "[data-id='drafts']"}).getText();
    let draftArray = draftCount.split(/\(([^)]+)\)/);
    let draftCountNumber = parseInt(draftArray[1]);
    expect(draftCountNumber).to.equal(drafts.length + paper.length);
  });

  // steps.then("The draft tally within header should display correct number of drafts", function() {
  //   driver.findElements({css: "[data-id^='MLCard-Draft']"}).then(function(drafts) {
  //     driver.findElements({css: "[data-id^='MLCard-Final-Paper']"}).then(function(paper) {
  //       driver.findElement({css: "[data-id='drafts']"}).getText().then(function(draft_count) {
  //         draft_array = draft_count.split(/\(([^)]+)\)/);
  //   draft_count_number = parseInt(draft_array[1]);
  //                expect(draft_count_number).to.equal(drafts.length+paper.length);
  //                                                                     });
  //                                                                       });
  //                                                               });
  //           });

  steps.then("Page Element Checker Verifies: '$number' '$elem'", function(number, elem) {
    let counter = parseInt(number);
    driver.findElements({css: elem})
      .then(function(count) {
        count.length.should.equal(counter);
      });
  });

  steps.then("Draft Delete Cleanup '$elem'", function(elem) {
    //tries to delete all, chokes after 3-4 right now with stale element issue
    driver.findElements({css: elem}).then(function(count) {
      let number = count.length;
      let k = number;
      while (k > 1) {
        driver.findElement({css: elem}).click();
        driver.findElement({css: "[data-id='prompt-cancel']"}).click();
        k--;
        driver.navigate().refresh();
      }
    });
  });

  steps.then("Page Element Checker Verifies Text: '$text' at '$elem'", function(text, elem) {
    driver.findElement({css: elem}).getText()
      .then(function(t) {
        expect(t).to.contain(text);
      });
  });

  steps.then(`I clear the text field '$elem'`, function(elem) {
    page[elem].getText()
      .then(text => {
        page[elem].sendKeys(keys.BACK_SPACE.repeat(text.length));
      });
  });

  steps.when('I clear the draft instructions', function() {
    page.textarea_draft_instructions.getText()
      .then(text => {
        page.textarea_draft_instructions.sendKeys(keys.BACK_SPACE.repeat(text.length));
      });
  });

  steps.when("I type '$text' in draft instructions $d", function(text, which) {
    page.textarea_ddraft_instructions(which).sendKeys(text);
  });

  steps.then("Text '$text' should appear in draft instructions $d", function(text, which) {
    page.textarea_ddraft_instructions(which).getText()
      .then(function(text2) {
        text.should.equal(text2);
      });
  });

  steps.then("Text '$text' should appear in the draft instructions", function(text) {
    page.textarea_draft_instructions.getText()
      .then(function(text2) {
        text.should.equal(text2);
      });
  });

  steps.then("the last draft should be '$title'", function(title) {
    let x = { get() { return this.elements("[data-id='draft-name']"); } };
    expect([x.length] - 1).to.contain(title);
  });

  steps.then("the second to last draft should be renamed '$title'", function(title) {
    let x = { get() { return this.elements("[data-id='draft-name']"); } };
    expect([x.length] - 1).to.contain(title);
  });
  steps.when(`I type '$text' in the activity title`, function(text) {
    page.edit_title_textarea.sendKeys(text);
  });
  steps.then('I see the default activity page', function() {
    driver.wait(until.urlContains(page.default_activity_url), 5000, 'redirect did not hit target');
  });

  steps.then('I am not on the default activity page', function() {
    driver.getCurrentUrl().then(function(url) {
      expect(url).to.not.contain(page.default_activity_url);
    });
  });

  steps.given("I create a new activity as '$user'", function(user) {
    var uuid = faker.random.uuid();
    var createUrl = marvin.config.baseUrl + user + '/' + uuid;
    driver.get(createUrl);
  });

  steps.then(/the assignment should have (\d+) "(.+)"/, function(count, elem) {
    page[elem]('all').then(cards => {
      expect(cards.length).to.equal(parseInt(count));
    });
  });

  steps.then(/I wait until there (?:are|is) (\d+) "(.+)"/, (count, elem) => {
    driver.wait(() => {
      return page[elem]('all').then(num => num.length === parseInt(count));
    }, 3500, `Couldn't find ${count} instances of ${elem}`);
  });

  //
  // PLEASE NOTE as always, an element will match if it exists in the dom _at all_, not only if it's currently visible.
  // I type "buncha text" in "some-page-object"       // => returns the 1st match it finds, or throws
  // I type "buncha text" in "some-page-object" [13]  // => returns the 13th match it finds, or throws.  must be > 0
  // I type "buncha text" in "some-page-object" [all] // => no, stop, why would you do this?  don't do this.
  steps.then(/I type "(.*)" in "(.*)"(?:\s*\[(\w*)\])?/, (input, elem, arg) => {
    // TODO: i bet these two lines get repeated a whoooole bunch and should be pulled out.
    if (arg === undefined) { arg = 1; }
    arg = (isNaN(parseInt(arg))) ? arg : parseInt(arg);
    page[elem](arg).then(el => el.sendKeys(input));
  });

  // TODO: doc this
  steps.when(/I click "(.+)"(?:\s*\[(\w*)\])?/, function(element, arg) {
    if (arg === undefined) { arg = 1; }
    arg = (isNaN(parseInt(arg))) ? arg : parseInt(arg);
    page[element](arg).then(el => el.click());
  });

  // NOTE that this is an IS match, not a contains.
  // the text of "some-page-object" is "some other string"      // => returns the 1st match it finds, or throws
  // the text of "some-page-object" [13] is "some other string" // => returns the 13th match it finds, or throws.  must be > 0
  // TODO: is it worth it to switch to xregexp to actually get named capture groups?
  steps.then(/the text of "(.*)"(?:\s*\[(.*)\])? should be "(.*)"/, (elem, arg, text) => {
    // without named groups you do this dance
    if (text === undefined) {
      text = arg;
      arg = 1;
    }
    arg = (isNaN(parseInt(arg))) ? arg : parseInt(arg);
    page[elem](arg).then(el => el.getText())
      .then(actualText => { text.should.equal(actualText); });
  });

  steps.when('I select "$text" in the activity title', function(text) {
    // can't seem to get command+a or control+a to select all
    // let's use shift and many lefts
    let lefts = '';
    for (let i = 0; i < text.length; i++) {
      lefts += keys.LEFT;
    }
    page.edit_title_textarea.sendKeys(keys.SHIFT + lefts);
  });


  steps.when('I delete text in the activity title', function() {
    page.edit_title_textarea.sendKeys(keys.DELETE);
  });
  //   steps.then("the second to last draft should be renamed '$title'", function(title) {
  //     var x = { get: function () { return this.elements("[data-id='draft-name']"); } };
  //     expect([x.length]-1).to.contain(title);
  //   });

};
