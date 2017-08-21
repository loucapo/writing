const Page = require('marvin-js').Page;
const InstructorCommentModal = require('./instructor-feedback-tool.component.add-comment');

exports.InstructorFeedbackPage = class extends Page {
  things() {
    return {
      end_comment: {
        desc: `End comment that will be shown to the student`,
        locator: `[data-id='MLCard-End-Comment-(optional)'] [class^='MLCard__body__']`
      },
      end_comment_textarea: {
        desc: `Text area for instructor to input end comments`,
        locator: `[class^='EndComment__addComment__'] textarea`
      },
      add_end_comment: {
        desc: `Button to save changes made to the 'end comment' textarea`,
        locator: `[data-id='add-end-comment']`
      },
      back_button: {
        desc: `Back arrow button to navigate from feedback tool to activity summary page`,
        locator: `[data-id='header-back-button']`
      },
      done_button: {
        desc: `Done button to navigate from feedback tool to activity summary page`,
        locator: `[data-id='done']`
      },
      rubric_eval: {
        desc: `Interactive rubric to grade student final drafts`,
        locator: `[data-id='rubric']`
      },
      rubric_display: {
        desc: `Read only student rubric display`,
        locator: `[class^='RubricDisplay__rubric']`
      },
      rubric_save_disabled: {
        desc: `Grade rubric save button in disabled state`,
        locator: `[data-id='save-rubric'][class*='__disabled__']`
      },
      rubric_save_enabled: {
        desc: `Grade rubric save button in enabled state`,
        locator: `[data-id='save-rubric']`
      },
      rubric_save_cancel: {
        desc: `No button upon submit rubric`,
        locator: `[data-id='dialog-cancel']`
      },
      rubric_save_confirm: {
        desc: `Yes button upon submit rubric`,
        locator: `[data-id='dialog-submit']`
      },
      rubric_row_1: {
        desc: `First row of the rubric table for grading`,
        locator: `[class^= 'Rubric__table'] [class^='Rubric__row'] div`
      },
      yellow_criteria_selected: {
        desc: `Yellow highlighting`,
        locator: `[class^= 'Criteria__yellow']`
      },
      rubric_row_2: {
        desc: `Second row of the rubric table for grading`,
        locator: `[class^= 'Rubric__table'] [class^='Rubric__row']:nth-child(3) div`
      },
      rubric_row_3: {
        desc: `Third row of the rubric table for grading`,
        locator: `[class^= 'Rubric__table'] [class^='Rubric__row']:nth-child(4) div`
      },
      rubric_row_4: {
        desc: `Forth row of the rubric table for grading`,
        locator: `[class^= 'Rubric__table'] [class^='Rubric__row']:nth-child(5) div`
      },
      rubric_row_5: {
        desc: `Fifth row of the rubric table for grading`,
        locator: `[class^= 'Rubric__table'] [class^='Rubric__row']:nth-child(6) div`
      },
      final_grade_box_save_enabled: {
        desc: `Save button for instructor grade on a paper`,
        locator: `[data-id='add-final-grade']:not([class*='__disabled__'])`
      },
      final_grade_box_save_disabled: {
        desc: `Save button for instructor grade on a paper grayed out`,
        locator: `[data-id='add-final-grade'][class*='__disabled__']`
      },
      final_grade_box: {
        desc: `Final grade input for final paper`,
        locator: `[data-id='final-grade']`
      },
      final_grade_box_error: {
        desc: `Red warning for invalid input`,
        locator: `[class^='FinalGrade__infoSpan'][class*='FinalGrade__error']`
      },
      student_reflection_answer: {
        desc: `instructor view of student reflection question answer`,
        locator: `[data-id='MLCard-Reflection'] div div p`
      },
      student_submitted_draft_text: {
        desc: `Read only submitted draft from instructor view`,
        locator: `[class^='public-DraftEditor-content']`
      },
      add_comment_button: {
      desc: `Button to add comment to highlighted text`,
        locator: `[id='addCommentButton']`
    },
    };
  }

  comment_modal(arg) {
    return InstructorCommentModal.generate(arg, {
      locator: `[id='commentModal']`}); }
};

