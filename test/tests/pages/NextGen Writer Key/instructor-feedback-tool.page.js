const Page = require('marvin-js').Page;

exports.InstructorFeedbackPage = class extends Page {
  things() {
    return {
      end_comment: {
        desc: `End comment that will be shown to the student`,
        //locator: `[data-id='end-comment-textarea']`
        locator: `[data-id='MLCard-End-Comment-(optional)'] [class^='MLCard__body__']`
      },
      end_comment_textarea: {
        desc: `Text area for instructor to input end comments`,
        //locator: `[data-id='end-comment-textarea']`
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
      }
    };
  }
};
