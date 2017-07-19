/* eslint-disable camelcase */
const Page = require('marvin-js').Page;
const Component = require('marvin-js').Component

class ActivityPrompt extends Component {
  things() {
    return {
      activity_prompt_edit: {
        desc: `Button to edit the assignment prompt`,
        locator: `[data-id='prompt-edit']`
      },
      activity_prompt_delete: {
        desc: `Button to delete the assignment prompt`,
        locator: `[data-id='prompt-delete']`
      },
      activity_prompt_description: {
        desc: `Text area for prompt description`,
        locator: `[data-id='prompt-description']`
      },
      activity_prompt_save: {
        desc: `Button to save prompt description`,
        locator: `[data-id='prompt-save']`
      },
      activity_prompt_cancel: {
        desc: `Button to cancel changes to prompt description`,
        locator: `[data-id='prompt-cancel']`
      }
    }; }
}

module.exports = ActivityPrompt;




