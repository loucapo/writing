/* eslint-disable camelcase */
const Page = require('marvin-js').Page;
const Component = require('marvin-js').Component

class InstructorCommentModal extends Component {
  things() {
    return {
      save_comment: {
        desc: `Button to save instructor draft comment`,
        locator: `[data-id='save-comment-modal']`
      },
      add_comment_textarea: {
        desc: `Box to add text to a comment`,
        locator: `[class^='CommentModal__commentText']`
      },
      good_job_comment_button: {
        desc: `Button to quickly add good job comment`,
        locator: `[data-id='good-job-comment-modal']`
      },
      needs_extensive_work_comment_button: {
        desc: `Button to quickly add need a lot of work comment`,
        locator: `[data-id='needs-extensive-work-comment-modal']`
      },
      needs_work_comment_button: {
        desc: `Button to quickly add need work comment`,
        locator: `[data-id='needs-work-comment-modal']`
      }
    };
  }
}

module.exports = InstructorCommentModal;




