/* eslint-disable camelcase */
const Page = require('marvin-js').Page;
const Component = require('marvin-js').Component

class DraftEditor extends Component {
  things() {
    return {
      draft_area: {
        desc: `Main textarea in which students edit their draft.`,
        locator: `[class='public-DraftEditor-content']`
      },
      view_activity_summary_link: {
        desc: `Link on Draft Details panel to return user to activity summary page`,
        locator: `[data-id='details-panel-activity-link-div']`
      },
      activity_draft_panel: {
        desc: `Link on Draft Details panel to expand or collapse draft info`,
        locator: `[data-id='draft-activity-detail-panel']`
      },
      activity_prompt_panel: {
        desc: `Link on Draft Details panel to expand or collapse activity prompt info`,
        locator: `[data-id='activity-prompt-detail-panel']`
      },
      activity_final_rubric_panel: {
        desc: `Link on Draft Details panel to expand or collapse final rubric info`,
        locator: `[data-id='final-rubric-detail-panel']`
      },
      activity_draft_goals_panel: {
        desc: `Subheader on Draft Activity panel that displays draft goals`,
        locator: `[data-id='drafts-goal-list']`
      },
      activity_reflection_questions_panel: {
        desc: `Subheader on Draft Activity panel that displays reflection questions`,
        locator: `[data-id='reflections-list']`
      },
      activity_prompt_description_panel: {
        desc: `Subheader on Activity Prompt panel that displays description content`,
        locator: `[data-id='activity-prompt-content-detail-panel']`
      },
      final_rubric_panel_column_4: {
        desc: `Rubric level 4 in final rubric panel`,
        locator: `[data-id='rubric-column-4']`
      },
      final_rubric_panel_column_3: {
        desc: `Rubric level 3 in final rubric panel`,
        locator: `[data-id='rubric-column-3']`
      },
      return_to_activity_page_link: {
        desc: `Link at header of read only student submission page to return user to activity summary page`,
        locator: `[data-id='header-activity-link']`
      },
      final_rubric_panel_column_2: {
        desc: `Rubric level 2 in final rubric panel`,
        locator: `[data-id='rubric-column-2']`
      },
      final_rubric_panel_column_1: {
        desc: `Rubric level 1 in final rubric panel`,
        locator: `[data-id='rubric-column-1']`
      },
      final_rubric_panel_right_arrow: {
        desc: `Scroll right arrow in final rubric panel`,
        locator: `[data-id='rubric-arrow-right']`
      },
      final_rubric_panel_left_arrow: {
        desc: `Scroll left arrow in final rubric panel`,
        locator: `[data-id='rubric-arrow-left']`
      },
      save_draft: {
        desc: `Save draft button`,
        locator: `[data-id='save-draft']`
      },
      start_reflection: {
        desc: `Done, Start Reflection button`,
        locator: `[data-id='start-reflection']`
      },
      draft_submit: {
        desc: `Submit draft button`,
        locator: `[data-id='submit-draft']`
      },
      draft_submit_confirm: {
        desc: `Confirmation button on modal`,
        locator: `[data-id='dialog-submit']`
      },
      draft_submit_cancel: {
        desc: `Cancel button on modal`,
        locator: `[data-id='dialog-cancel']`
      },
      leave_page_alert: {
        desc: `Alert that appears when student tries to navigate away from page with unsaved work`,
        locator: `[class*='MLDialog__alert_container_show']`
      },
      leave_draft_page_button: {
        desc: `Button on alert that navigates student back to activity summary page`,
        locator: `[data-id='details-panel-activity-link-dialog-leave']`
      },
      stay_draft_page_button: {
        desc: `Button on alert that keeps student on drafting page`,
        locator: `[data-id='details-panel-activity-link-dialog-stay']`
      },
      leave_reflection_page_button: {
        desc: `Button on alert that navigates student back to drafting page`,
        locator: `[data-id='reflection-questions-dialog-leave']`
      },
      stay_reflection_page_button: {
        desc: `Button on alert that keeps student on reflection page`,
        locator: `[data-id='reflection-questions-dialog-stay']`
      },
      view_draft_link: {
        desc: `Link on the reflection page that takes user back to drafting page`,
        locator: `[data-id='return-to-draft-from-reflection-questions']`
      }
    }; }
}

module.exports = DraftEditor;




