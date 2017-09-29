/* eslint-disable camelcase */
const Page = require('marvin-js').Page;
const Component = require('marvin-js').Component

class InstructorCommentModal extends Component {
  things() {
    return {
      add_comment_textarea: {
        desc: `Box to add text to a comment`,
        locator: `[class*='CommentModal__commentText__']`
      },
      add_comment_tag_text: {
        desc: `Tags text inside the comment text area`,
        locator: `[class*='CommentModal__commentTextWrapper'] [data-id='tag-text']`
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
      },
      save_comment: {
        desc: `Button to save instructor draft comment`,
        locator: `[data-id='save-comment-modal']`
      },
      save_comment_disabled: {
        desc: `Disabled button to save instructor comment`,
        locator: `[data-id='save-comment-modal'][class*='MLButton__disabled']`
      }
    };
  }
}

module.exports = InstructorCommentModal;




