var page = require('../../pages/NSM Demo/instructor-assignment-summary-page.js');

exports.define = function(steps) {
  steps.given("I visit the activity page", function() {
    page.visit();
  });

  steps.when("I visit the activity page", function() {
    page.visit();
  });

  steps.then("I see '$elem' in component '$component'", function(elem, component) {
    component = 'co_' + component;
    expect(page[component][elem]).to.exist;
  });

  steps.then("I see a link with text '$text' in element '$element'", function(text, element) {
    page[element].findElements({xpath: ".//a[text()='" + text + "']"})
      .then(gimme_just_one);
  });

  steps.then("I see a button with text '$text' in element '$element'", function(text, element) {
    page[element].findElements({xpath: ".//button[text()='" + text + "']"})
      .then(gimme_just_one);
  });

  steps.then("I see text '$text' in element '$element'", function(text, element) {
    page[element].findElements({xpath: ".//*[contains(text(), '" + text + "')]"})
      .then(gimme_just_one);
  });

  function gimme_just_one(arr) {
    expect(arr.length).to.equal(1);
  };

  steps.then('the drafts should have sequence numbers and the last one is labeled "Final Draft"', function() {
    return new Promise(function(resolve, reject) {
      return page.draft_names.then(function(draft_names) {
      var final_draft_name = draft_names.pop();
      draft_names.forEach(function(name, index) {
        name.getText().then(function(text) {
            var expected_name = 'Draft ' + (index + 1);
            expect(text).contains(expected_name);
          });
        });
        final_draft_name.getText().then(function(text) {
          var expected_name = 'Final Draft';
          expect(text).contains(expected_name);
        });
      });
    });
  });

  steps.then('I can see the review types', function() {
    return new Promise(function(resolve, reject) {
      return page.drafts_review_type.then(function(review_types) {
        review_types.forEach(function(type) {
          type.getText().then(function(text) {
            var peer = 'Peer Review';
            var inst = 'Instructor Review';
            assert((text == peer || text == inst), 'draft review type is not peer or instructor review');
          });
        });
      });
    });
  });

  steps.then('I can also see the due dates', function() {
    return new Promise(function(resolve, reject) {
      return page.drafts_due_dates.then(function(due_dates) {
        due_dates.forEach(function(date) {
          date.getText().then(function(text) {
            expect(text).to.be.not.empty;
          });
        });
      });
    });
  });

  steps.then('I should see some draft learning objectives', function() {
    return new Promise(function(resolve, reject) {
      return page.draft_learning_objectives.then(function(objectives) {
        expect(objectives.length).to.be.above(0);
      });
    });
  });

  steps.then('I know how each draft will be graded', function() {
    return new Promise(function(resolve, reject) {
      return page.draft_grade_policies.then(function(draft_grade_policies) {
        var final_draft_grade_policy = draft_grade_policies.pop();
        var inc_comp = 'Incomplete/Complete';
        var letter_grade = 'Letter Grade';
        var percentage = '%';
        draft_grade_policies.forEach(function(policy, index) {
          policy.getText().then(function(text) {
            expect(text).to.equal(inc_comp);
          });
        });
        final_draft_grade_policy.getText().then(function(text) {
          assert((text == inc_comp || text == letter_grade || text == percentage), 'Final Draft grading policy incompatible');
        });
      });
    });
  });

  steps.then('I can see the student submission section', function() {
    page.student_submissions.click();
  });

  steps.then("I see the activity summary page", function() {
    driver.wait(until.urlContains(page.url), 5000, 'target url does not contain ' + page.url);
  });

  steps.when("I see my course data has reset", function () {
    //steps to be added once page has something changeable
  });

  steps.given("I visit the home page", function () {
    driver.get(marvin.config.baseUrl);
  });

  steps.then("the activity page should show $font font", function(display) {
    page.activity_page_layout.getCssValue('font').then(function(t) {
      var myDisplay = display.replace('\'','').replace('\'','');
      expect(t).to.contain(myDisplay);
    });
  });

  steps.then("I see a '$elem' icon", function(elem) {
    page[elem].isDisplayed().should.eventually.equal(true);
  });
};
