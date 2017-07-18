/* eslint-disable camelcase */

const Page = require('marvin-js').Page;
const draftComponent = require('./instructor-summary.component.draft');
const refQuestionModal = require('./instructor-summary.component.add-student-reflection-questions-modal');

exports.InstructorSummaryPage = class extends Page {
  things() {
    return {
      add_draft_button: {
        locator: `[data-id='add-draft']`},
      draft_card: {
        locator: `[data-id='draft-section']`},
      draft_title: {
        locator: `[class^='Heading__headingText__']`},
      draft_count: {
        desc: `A link to show the drafts pane on the assignment summary page that should also display the current number of drafts associated with an assignemnt`, // eslint-disable-line
        locator: `[data-id='drafts']` },
      student_submissions: {
        desc: ``, // eslint-disable-line
        locator: `[data-id='student-submissions']` }
    };
  }

  // TODO: reimplement
  //url: { value: '/' },

  draft(arg) {
    return draftComponent.generate(arg, {
      locator: `//*[@data-id='draft-section']/ancestor::div[contains(@data-id, 'MLCard')]`,
      type: `xpath`}); }

  reflection_questions_modal(arg) {
    return refQuestionModal.generate(arg, {
      locator: `[data-id='modal']`}); }

};

// TODO: need to split the rest of this out into page objects
// module.exports = new Page({
//
//   // Activity overview
//   //
//   activity_title: basePageObj({
//     desc: ``,
//     locator: `[data-id='activity-title']`
//   }),
//
//   activity_type: basePageObj({
//     desc: ``,
//     locator: `[data-id='activity-type']`
//   }),
//
//   edit_title: basePageObj({
//     desc: `Button to make the activity title an editable field`,
//     locator: `[class^='ActivityTitle__editIcon__']`
//   }),
//
//   edit_title_cancel: basePageObj({
//     desc: ``,
//     locator: `[data-id='title-cancel']`
//   }),
//
//   edit_title_save: basePageObj({
//     desc: ``,
//     locator: `[data-id='title-save']`
//
//   }),
//
//   edit_title_textarea: basePageObj({
//     desc: ``,
//     locator: `[class^='ActivityTitle__editField__']`
//   }),
//
//   title_char_counter: basePageObj({
//     desc: ``,
//     locator: `[data-id='char-limit-count']`
//   }),
//
//   activity_prompt_edit: basePageObj({
//     desc: `Button to edit the assignment prompt`,
//     locator: `[data-id='prompt-edit']`
//   }),
//
//   activity_prompt_delete: basePageObj({
//     desc: `Button to delete the assignment prompt`,
//     locator: `[data-id='prompt-delete']`
//   }),
//
//   activity_prompt_description: basePageObj({
//     desc: `Text area for prompt description`,
//     locator: `[data-id='prompt-description']`
//   }),
//
//   activity_prompt_save: basePageObj({
//     desc: `Button to save prompt description`,
//     locator: `[data-id='prompt-save']`
//   }),
//
//   activity_prompt_cancel: basePageObj({
//     desc: `Button to cancel changes to prompt description`,
//     locator: `[data-id='prompt-cancel']`
//   }),
//
//   confirmation_message: basePageObj({
//     desc: `Green banner that shows instructor when assignment was created`,
//     locator: `[class*='MLMessage__message_success__']`
//   }),
//
//   // Draft goal modal
//   //
//
//   draft_goal_popup: basePageObj({
//     desc: ``,
//     locator: `[data-id='modal']`
//   }),
//
//   draft_goal_checkbox: basePageObj({
//     desc: ``,
//     locator: `[data-id='modal'] [data-id='input-fields'] [data-id='checkbox']`
//   }),
//
//   draft_goal_summary_list: basePageObj({
//     desc: ``,
//     locator: `[data-id='modal'] [data-id='selected-fields']`
//   }),
//
//   draft_goal_goal_description: basePageObj({
//     desc: ``,
//     locator: `[data-id='modal'] [data-id='input-fields'] [data-id='field-content']`
//   }),
//
//   draft_goal_goal: basePageObj({
//     desc: ``,
//     locator: `[data-id='modal'] [class^='CheckboxField__container__']`
//   }),
//
//   draft_goal_save: basePageObj({
//     desc: ``,
//     locator: `[data-id='save-button']`
//   }),
//
//   draft_goal_cancel: basePageObj({
//     desc: ``,
//     locator: `[data-id='cancel-button']`
//   }),
//








//   // unsorted
//   //
//   add_draft_instructions: basePageObj({
//     desc: `Button that makes the draft instructions editable for the xth draft on the summary page`,
//     locator: `//*[@data-id='add-instructions']`,
//     type: 'xpath'
//   }),
//
//   draft_delete_button: basePageObj({
//     desc: `A button to display a modal prompting for confirmation to delete this draft from the assignment`,
//     locator: `[data-id='draft-delete']`
//   }),
//
//   draft_instructions: basePageObj({
//     desc: `Text of the Draft Instructions displayed (non-editable)`,
//     locator: `[data-id='draft-instructions']`
//   }),
//
//   save_draft_instructions: basePageObj({
//     desc: `Button to save Draft Instructions for the current draft.  Only visible when instructions are editable.`,
//     locator: `[data-id='save-draft-instructions']`
//   }),
//
//   draft_instructions_textarea: basePageObj({
//     desc: `The editable textarea where draft instructions for the current draft can be added and edited`,
//     locator: `[data-id='textarea-draft-instructions']`
//   }),
//
//   cancel_draft_instructions: basePageObj({
//     desc: `Button to discard unsaved changes made to a draft's instructions and sets the textarea back to uneditable`,
//     locator: `[data-id='cancel-draft-instructions']`
//   }),
//
//   draft_card_title: basePageObj({
//     desc: `The title (header area) of each draft on the assignment summary page`,
//     // TODO: get dev to give this title a data-id.  with the svg and whatever in there,
//     //  draft-section text itself is like `>Final Draft\n>`
//     locator: `//*[@data-id="draft-section"]/span/span`,
//     type: `xpath`
//   }),
//
//   draft_add_instructions: basePageObj({
//     desc: `Link to make visible and editable the draft instructions control`,
//     locator: `[data-id='add-instructions']`
//   }),
//
//   draft_add_goal: basePageObj({
//     desc: `Link to display the modal to edit a draft's reflections`,
//     locator: `[data-id='add-reflections']`
//   }),
//
//   draft_review_dropdown: basePageObj({
//     desc: `Select to set the type of review for a draft`,
//     locator: `[data-id='review-type-dropdown']`
//   }),
//
//   draft_delete: basePageObj({
//     desc: `Link to spawn a modal alert confirming deletion of a draft`,
//     locator: `[data-id='draft-delete']`
//   }),
//
//   // TODO: get dev to give this text block a data-id
//   draft_note: basePageObj({
//     desc: `Text block per draft describing necessary preconditions to start work on this particular draft`,
//     locator: "//*[starts-with(@class,'Draft__draftNote__')]",
//     type: 'xpath'
//   }),
//
//   draft_alert_delete_button: basePageObj({
//     desc: `The confirmation button in the alert dialog that is presented on attempting to delete a draft`,
//     locator: `[data-id='dialog-delete']`
//   }),
//
//   draft_alert_cancel_button: basePageObj({
//     desc: `The cancellation button in the alert dialog that is presented on attempting to delete a draft`,
//     locator: `[data-id='dialog-cancel']`
//   }),
//
//   // Student Page Object Stuff
//   //

//   draft_submission_confirmation_banner: basePageObj({
//     desc: `Green confirmation message for successful draft submission`,
//     locator: `[class*='MLMessage__message_success']`
//   }),
//   draft_select_dropdown_submission_grid: basePageObj({
//     desc: `Drop Down to change drafts`,
//     locator: `[data-id='submission-status-filter'] [data-id='rubric-dropdown']`
//   }),

//
//   draft_save_button_disabled: basePageObj({
//     desc: `Button to save draft in editor when no text written`,
//     locator: `[data-id='save-draft'][class*='MLButton__disabled_']`
//   }),
//   draft_save_button_enabled: basePageObj({
//     desc: `Button to save draft in editor when text exists in editor`,
//     locator: `[data-id='save-draft']:not([class*='MLButton__disabled_'])`
//   }),
//   start_reflection_button_disabled: basePageObj({
//     desc: `Button to go to reflection questions when text doesn't exists in editor`,
//     locator: `[data-id='start-reflection'][class*='MLButton__disabled_']`
//   }),
//   start_reflection_button_enabled: basePageObj({
//     desc: `Button to save draft in editor when text exists in editor`,
//     locator: `[data-id='start-reflection']:not([class*='MLButton__disabled_'])`
//   }),
//   view_final_draft_button: basePageObj({
//     desc: `Button to view submitted draft`,
//     locator: `[data-id='View Final Paper']`
//   }),
//   draft_submission_date: basePageObj({
//     desc: `Green checkmark that appears after successful draft submission on draft card`,
//     locator: `[data-id='submitted-date']`
//   }),
//   reflection_question_submission_textarea: basePageObj({
//     desc: `Textarea of reflection questions on view of submitted draft`,
//     locator: `[data-id='MLCard-Reflection'] div div p`
//   }),
//   student_preview: basePageObj({
//     desc: `Button in header to switch instructor view to student view`,
//     locator: `[data-id='student-preview']`
//   }),
//   student_draft_note: basePageObj({
//     desc: `Alert that draft is not startable yet`,
//     locator: `[class*='DraftDisplay__studentNote']`
//   }),
//   created_activity_alert: basePageObj({
//     desc: `Green alert banner upon creating activity`,
//     locator: `[data-id='created-activity-alert']`
//   }),
//
// });
