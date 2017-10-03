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
        locator: `[class^='FeedbackEditor__feedbackEditorWrapper']`
      },
      add_open_comments_button: {
        desc: `Button to add comment to highlighted text`,
        locator: `[data-id='feedback-menu-open-comments']`
      },
      add_draft_goals_comment_button: {
        desc: `Button to add draft goals comment to highlighted text`,
        locator: `[data-id='feedback-menu-draft-goals']`
      },
      add_editing_marks_comment_button: {
        desc: `Button to add editing marks to highlighted text`,
        locator: `[data-id='feedback-menu-editing-marks']`
      },
      right_click_add_open_comments_button: {
        desc: `Button to add comment to highlighted text`,
        locator: `[data-id='comment-menu-open-comments']`
      },
      right_click_add_draft_goals_comment_button: {
        desc: `Button to add draft goals comment to highlighted text`,
        locator: `[data-id='comment-menu-draft-goals']`
      },
      right_click_add_editing_marks_comment_button: {
        desc: `Button to add editing marks to highlighted text`,
        locator: `[data-id='comment-menu-editing-marks']`
      },
      right_click_cancel_comment_button: {
        desc: `Button to cancel adding new comment`,
        locator: `[data-id='comment-menu-cancel']`
      },
      feedback_flag: {
        desc: `Feedback flag in margin`,
        locator: `[class*='FeedbackFlag__flag__']`
      },
      feedback_flag_title: {
        desc: `Feedback flag title`,
        locator: `[class^='FeedbackFlag__flagTitle']`
      },
      feedback_flag_title_text: {
        desc: `Feedback flag title text`,
        locator: `[class^='FeedbackFlag__flagTitleText']`
      },
      feedback_flag_content: {
        desc: `Feedback flag content`,
        locator: `[class*='FeedbackFlag__feedback__']`
      },
      feedback_flag_more_button: {
        desc: `Feedback flag three dots`,
        locator: `[class^='FeedbackFlag__moreIcon']`
      },
      comment_delete_option: {
        desc: `Delete comment button`,
        locator: `[data-id='menu-delete']`
      },
    };
  }

  comment_modal(arg) {
    return InstructorCommentModal.generate(arg, {
      locator: `[id='commentModal']`});
  }
};
