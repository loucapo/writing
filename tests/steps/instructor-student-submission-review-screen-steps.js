var student_submission_page = require('../pages/instructor-student-submission-review-screen.js');
var summary_page = require('../pages/instructor-assignment-summary-page.js');
var marvin = require('marvin-js');
//var driver = require('marvin-js').session.getDriver();

var chai = require('chai');
var assert = chai.assert;
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

exports.define = function(steps) {

  steps.then("I click on the '$element'", function(elem) {
    student_submission_page[elem].click();
  });

  steps.then("I see the '$elem'", function(elem) {
    student_submission_page[elem].isDisplayed().should.eventually.equal(true);
  });

  steps.then("I see text '$text' in '$elem'", function(text, elem) {
    student_submission_page[elem].getText().then(function(t) {
      assert.include(t, text);
      });
  });

  // steps.when("I see student submission information for '$text'", function() {
  //   return new Promise(function(resolve, reject) {
  //     return student_submission_page.draft_dropdown.then(function(draft) {
  //       draft.getText().then(function(text) {
  //           var draft_text = 'Draft 1';
  //           assert((text == draft_text), 'draft number is not first draft');
  //         });
  //       });
  //    });
  //  });

  // steps.then("I see submission status", function() {
  //   expect(student_submission_page.draft_status).to.exist;
  // });

  // steps.then("I see the draft due date", function() {
  //   expect(student_submission_page.draft_due_date).to.exist;
  // });

  // steps.then("The review type is Instructor Review", function() {
  //   return new Promise(function(resolve, reject) {
  //     return student_submission_page.review_type.then(function(review_types) {
  //       review_types.forEach(function(type) {
  //         type.getText().then(function(text) {
  //           var inst = 'Instructor Review';
  //           assert((text == inst), 'draft review type is not instructor review');
  //         });
  //       });
  //     });
  //   });
  // });

  // steps.then("I can send all completed reviews", function() {
  //   student_submission_page.send_all_completed_reviews_button.click();
  // });

  // steps.then("I switch drafts to Final Draft", function() {
  //   student_submission_page.draft_dropdown.click();
  // });
}
