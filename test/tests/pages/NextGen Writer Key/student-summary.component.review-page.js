/* eslint-disable camelcase */
const Page = require('marvin-js').Page;
const Component = require('marvin-js').Component

class StudentReview extends Component {
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
      next_draft_button: {
        desc: `Button to start next draft`,
        locator: `[class^='MLButton__button__'][class*='MLButton__aqua']`
      },
      disabled_next_draft_button: {
        desc: `Button to start a future disabled draft`,
        locator: `[class^='MLButton__button__'][class*='MLButton__disabled']`
      },
      submitted_draft_text: {
        desc: `Read only submitted draft`,
        locator: `[class^='public-DraftEditor-content']`
      },
      submitted_reflection_question_textarea: {
        desc: `Read only submitted reflection question answers`,
        locator: `[data-id='MLCard-Reflection'] div div p`
      }
    }; }
}

module.exports = StudentReview;




