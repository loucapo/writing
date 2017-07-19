/* eslint-disable camelcase */
const Page = require('marvin-js').Page;
const Component = require('marvin-js').Component

class DraftGoalModal extends Component {
  things() {
    return {
      draft_goal_popup: {
        desc: `modal that appears with the selectable draft goals`,
        locator: `[data-id='modal']`
      },
      draft_goal_checkbox: {
        desc: `checkbox that allows user to select draft goals`,
        locator: `[data-id='modal'] [data-id='input-fields'] [data-id='checkbox']`
      },
      draft_goal_summary_list: {
        desc: `list element that tracks which draft goals have been selected`,
        locator: `[data-id='modal'] [data-id='selected-fields']`
      },
      draft_goal_goal_description: {
        desc: `description of the draft goal`,
        locator: `[data-id='modal'] [data-id='input-fields'] [data-id='field-content']`
      },
      draft_goal_goal: {
        desc: `expandable portion of the draft goal to show more detials`,
        locator: `[data-id='modal'] [class^='CheckboxField__container__']`
      },
      draft_goal_save: {
        desc: `save button to add draft goals`,
        locator: `[data-id='save-button']`
      },
      draft_goal_cancel: {
        desc: `cancel button to `,
        locator: `[data-id='cancel-button']`
      }
    }; }
}

module.exports = DraftGoalModal;




