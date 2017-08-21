/* eslint-disable camelcase */
const Page = require('marvin-js').Page;
const Component = require('marvin-js').Component

class InstructorCommentModal extends Component {
  things() {
    return {
      save_comment: {
        desc: `Button to save instructor draft comment`,
        locator: `[data-id='comment-save']`
      },
      good_job_comment_button: {
        desc: `Button to quickly add good job comment`,
        locator: `[data-id='good-job-comment-modal']`
      }
    };
  }
}

module.exports = InstructorCommentModal;




