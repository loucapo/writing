/* eslint-disable camelcase */
const Page = require('marvin-js').Page;
const Component = require('marvin-js').Component

class StudentReviewFeedback extends Component {
  things() {
    return {
      instructor_end_comment: {
        desc: `Instructor end comment given to student`,
        locator: `[data-id='MLCard-Instructor-Comment'] div span`
      },
      final_grade_comment: {
        desc: `Final Grade: text in end comment`,
        locator: `[data-id='end-comment-section'] [class^='FeedbackDisplay__finalGradeLabel']`
      },
      final_grade_display: {
        desc: `Actual grade given to student`,
        locator: `[data-id='end-comment-section'] [class^='FeedbackDisplay__finalGrade__']`
      },
      rubric_score_comment: {
        desc: `Rubric text if no rubric grade`,
        locator: `[data-id='rubric-section'] [class^='FeedbackDisplay__finalGradeLabel']`
      },
      rubric_row_1: {
        desc: `First row of the rubric table for grading`,
        locator: `[data-id= 'rubric-preview'] [class^='RubricDisplay__row'] div`
      },
      rubric_row_2: {
        desc: `Second row of the rubric table for grading`,
        locator: `[data-id= 'rubric-preview'] [class^='RubricDisplay__row']:nth-child(3) div`
      },
      rubric_row_3: {
        desc: `Third row of the rubric table for grading`,
        locator: `[data-id= 'rubric-preview'] [class^='RubricDisplay__row']:nth-child(4) div`
      },
      rubric_row_4: {
        desc: `Forth row of the rubric table for grading`,
        locator: `[data-id= 'rubric-preview'] [class^='RubricDisplay__row']:nth-child(5) div`
      },
      rubric_row_5: {
        desc: `Fifth row of the rubric table for grading`,
        locator: `[data-id= 'rubric-preview'] [class^='RubricDisplay__row']:nth-child(6) div`
      },
      submitted_draft_text: {
        desc: `Read only submitted draft`,
        locator: `[class^='public-DraftEditor-content']`
      },
      submitted_draft_paper: {
        desc: `Read only submitted draft`,
        locator: `[class^='FeedbackDisplay__feedbackPaper']`
      },
      submitted_reflection_question_textarea: {
        desc: `Read only submitted reflection question answers`,
        locator: `[data-id='MLCard-Reflection'] div div p`
      },
      submitted_message: {
        desc: `Read only submitted green message`,
        locator: `[data-id='message']`
      },
      view_activity_summary_link: {
        desc: `link to go back to main activity page`,
        locator: `[data-id='header-activity-link']`
      },
      start_next_draft: {
        desc: `Button to start next draft in the header`,
        locator: `[class^='FeedbackDisplayHeader__rightContainer'] a[class*=MLButton__aqua]`
      },
      instructor_draft_comment: {
        desc: `Feedback flag in the margin`,
        locator: `[class^='FeedbackFlag__flagHeader']`
      },
      instructor_draft_highlight: {
        desc: `Feedback highlight in student essay`,
        locator: `[class^='FeedbackEditor__highlight']`
      },
      comment_flag_title: {
        desc: `Generic Comment Title`,
        locator: `[class^='FeedbackFlag__flagTitleText']`
      },
      comment_flag_feedback: {
        desc: `Tag line of comment`,
        locator: `[class^='FeedbackFlag__feedback__']`
      },
      comment_flag_feedback_typed: {
        desc: `Tag line of comment`,
        locator: `[class^='FeedbackFlag__feedback__']`
      }
    }; }
}

module.exports = StudentReviewFeedback;
