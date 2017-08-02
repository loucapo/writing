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
      }
    }; }
}

module.exports = StudentReview;




