/* eslint-disable camelcase */
const Page = require('marvin-js').Page;
const Component = require('marvin-js').Component

class InstructorCommentModal extends Component {
  things() {
    return {
      add_comment_textarea: {
        desc: `Box to add text to a comment`,
        locator: `[class*='CommentModal__commentTextWrapper']`
      },
      nice_job_comment_button: {
        desc: `Button to quickly add nice job comment`,
        locator: `[data-id='nice-job-comment-modal']`
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
      },
      draft_goal_list: {
        desc: `List of draft goals for instructor to comment on`,
        locator: `ul[class^='MLMenuList__menulist']`
      },
      draft_goal_selected: {
        desc: `The currently selected draft goal for instructor comment`,
        locator: `ul[class^='MLMenuList__menulist'] li[class^='MLMenuList__active']`
      },
      draft_goal: {
        desc: `The currently selected draft goal for instructor comment`,
        locator: `ul[class^='MLMenuList__menulist'] li`
      },
      comment_level_button: {
        desc: `Any button used to define a comment level`,
        locator: `[class^='CommentModal__buttons'] button`
      }
    };
  }
}

module.exports = InstructorCommentModal;




