/* eslint-disable camelcase */
const Page = require('marvin-js').Page;

// TODO: this should be moved into marvin itself once we hammer out usages and names and such
function basePageObj(opts) {
  return {value(v) {
    opts.type = (opts.type || 'css');
    switch (typeof v) {
      case 'undefined':
        return this.element(opts.locator, opts.type);
      case 'string':
        // this is surprisingly vital even for things that guaranteed only appear once
        // .elements returns [], so can be empty.  .element throws if none are found
        // so you MUST use .elements to check for 0 on the page.
        if (v === 'all') { return this.elements(opts.locator, opts.type); }

        // used for when you need to reuse, transform, or combine the locator
        // but obv don't want to hardcode it in the steps
        if (v === 'opts') { return opts; }

        else {throw new Error(`Don't know how to '${v}' for {${opts.type}}: ${opts.locator}}`); }
      case 'number':
        return this.elements(opts.locator, opts.type).then(els => els[v - 1]);
      default:
        console.log(typeof v);
        console.log(v);
        throw new Error('WUTINTARNATION!');
    }
  }};
}

module.exports = new Page({

  // Activity overview
  //
  activity_title: basePageObj({
    desc: ``,
    locator: `[data-id='activity-title']`
  }),

  activity_type: basePageObj({
    desc: ``,
    locator: `[data-id='activity-type']`
  }),

  edit_title: basePageObj({
    desc: `Button to make the activity title an editable field`,
    locator: `[class^='ActivityTitle__editIcon__']`
  }),

  edit_title_cancel: basePageObj({
    desc: ``,
    locator: `[data-id='title-cancel']`
  }),

  edit_title_save: basePageObj({
    desc: ``,
    locator: `[data-id='title-save']`

  }),

  edit_title_textarea: basePageObj({
    desc: ``,
    locator: `[class^='ActivityTitle__editField__']`
  }),

  title_char_counter: basePageObj({
    desc: ``,
    locator: `[data-id='char-limit-count']`
  }),

  // Draft goal modal
  //

  draft_goal_popup: basePageObj({
    desc: ``,
    locator: `[data-id='modal']`
  }),

  draft_goal_checkbox: basePageObj({
    desc: ``,
    locator: `[data-id='modal'] [data-id='input-fields'] [data-id='checkbox']`
  }),

  draft_goal_summary_list: basePageObj({
    desc: ``,
    locator: `[data-id='modal'] [data-id='selected-fields']`
  }),

  draft_goal_goal_description: basePageObj({
    desc: ``,
    locator: `[data-id='modal'] [data-id='input-fields'] [data-id='field-content']`
  }),

  draft_goal_goal: basePageObj({
    desc: ``,
    locator: `[data-id='modal'] [class^='CheckboxField__container__']`
  }),

  draft_goal_save: basePageObj({
    desc: ``,
    locator: `[data-id='save-button']`
  }),

  draft_goal_cancel: basePageObj({
    desc: ``,
    locator: `[data-id='cancel-button']`
  }),

  // reflection questions modal
  //
  ref_question_popup: basePageObj({
    desc: ``,
    locator: `[data-id='modal']`
  }),

  ref_question_popup_close: basePageObj({
    desc: ``,
    locator: `[data-id='close-modal']`
  }),

  ref_question_title: basePageObj({
    desc: ``,
    locator: `[data-id='input-fields'] [data-id='question-title']`
  }),

  ref_question_type: basePageObj({
    desc: ``,
    locator: `[data-id='input-fields'] [data-id='question-type']`
  }),

  ref_question_save: basePageObj({
    desc: ``,
    locator: `[data-id='save-button']`
  }),
  ref_question_cancel: basePageObj({
    desc: ``,
    locator: `[data-id='cancel-button']`
  }),

  // TODO: great place to use method_missing? or, what, es6 proxies?  also hover, other psuedo selectors.
  // maybe.  maybe wildly unnecessary.
  // You could also go the site_prism route and make checkbox a subclass of basePageObject or decorate it.
  ref_question_check: basePageObj({
    desc: `Checkbox toggling selection of nth reflection question`,
    locator: `[data-id='modal'] [data-id='input-fields'] [data-id='checkbox']`
  }),
  ref_question_check__checked: basePageObj({
    locator: `[data-id='modal'] [data-id='input-fields'] [data-id='checkbox']:checked`
  }),
  ref_question_check__unchecked: basePageObj({
    locator: `[data-id='modal'] [data-id='input-fields'] [data-id='checkbox']:not(:checked)`
  }),

  // TODO: dev: data-ids for this and surrounding bits needs to be added / reevaluated
  // there's no good way to get just the desc text here, since it's just a text-node
  // with sibling element-nodes.  when done, change the following to actually just be
  // the description.
  ref_question_desc: basePageObj({
    desc: ``,
    locator: `[data-id='field-title']>div`
  }),

  // Draft component on summary page
  //



  // instructor summary nav
  //
  add_draft_button: basePageObj({
    desc: `Button to add another draft to the current assignment`,
    locator: `[data-id='add-draft']`
  }),
  draft_count: basePageObj({
    desc: `A link to show the drafts pane on the assignment summary page that should also display the current number of drafts associated with an assignemnt`, // eslint-disable-line
    locator: `[data-id='drafts']`
  }),
  student_submissions: basePageObj({
    desc: ``, // eslint-disable-line
    locator: `[data-id='student-submissions']`
  }),

  // submissions tab
  //
  submission_header_name: basePageObj({}),
  submission_header_date: basePageObj({}),
  submission_header_status: basePageObj({}),
  submission_header_sent: basePageObj({}),
  no_submissions_alert: basePageObj({
    desc: `blank data for submitted student assignments`,
    locator: `[class^='SubmissionStatusTable__notStartedAlert__']`
  }),
  submission_row_name: basePageObj({
    desc: ``,
    locator: `[class^='SubmissionStatusItem__row__'] [data-id='name']`
  }),
  submission_row_date: basePageObj({
    desc: ``,
    locator: `[class^='SubmissionStatusItem__row__'] [data-id='completion-date']`
  }),
  submission_row_status: basePageObj({
    desc: ``,
    locator: `[class^='SubmissionStatusItem__row__'] [data-id='review-status']`
  }),
  submission_row_sent: basePageObj({
    desc: ``,
    locator: `[class^='SubmissionStatusItem__row__'] [data-id='send-status']`
  }),

  // student top nav
  //
  start_next_draft: basePageObj({
    desc: ``,
    locator: ``
  }),

  success_flash: basePageObj({
    desc: ``,
    locator: `[class*='MLMessage__message_success__'] span[class*='MLMessage__message__']`
  }),

  // student activity draft card
  //
  start_draft: basePageObj({
    desc: ``,
    locator: `[data-id='start-draft']`
  }),
  start_draft_enabled: basePageObj({
    desc: ``,
    locator: `[data-id='start-draft']:not([class*='__disabled__'])`
  }),
  start_draft_disabled: basePageObj({
    desc: ``,
    locator: `[data-id='start-draft'][class*='__disabled__']`
  }),

  // student draft editor
  //
  draft_area: basePageObj({
    desc: `Main textarea in which students edit their draft.`,
    locator: `[class='public-DraftEditor-content']`
  }),

  save_draft: basePageObj({
    desc: ``,
    locator: `[data-id='save-draft']`
  }),
  start_reflection: basePageObj({
    desc: ``,
    locator: `[data-id='start-reflection']`
  }),
  draft_submit: basePageObj({
    desc: ``,
    locator: `[data-id='submit-draft']`
  }),
  draft_submit_confirm: basePageObj({
    desc: ``,
    locator: `[data-id='dialog-submit']`
  }),
  draft_submit_cancel: basePageObj({
    desc: ``,
    locator: `[data-id='dialog-cancel']`
  }),

  // student answering reflection questions
  // TODO: needs a lot of data-id dev love
  //
  student_reflection_answer: basePageObj({
    desc: ``,
    locator: `[class^='ReflectionQuestionsForm__reflection__']`
  }),
  student_reflection_text: basePageObj({
    desc: ``,
    locator: `[class^='ReflectionQuestionsForm__reflection__'] textarea`
  }),

  // unsorted
  //
  add_draft_instructions: basePageObj({
    desc: `Button that makes the draft instructions editable for the xth draft on the summary page`,
    locator: `//*[@data-id='add-instructions']`,
    type: 'xpath'
  }),

  draft_delete_button: basePageObj({
    desc: `A button to display a modal prompting for confirmation to delete this draft from the assignment`,
    locator: `[data-id='draft-delete']`
  }),

  draft_instructions: basePageObj({
    desc: `Text of the Draft Instructions displayed (non-editable)`,
    locator: `[data-id='draft-instructions']`
  }),

  save_draft_instructions: basePageObj({
    desc: `Button to save Draft Instructions for the current draft.  Only visible when instructions are editable.`,
    locator: `[data-id='save-draft-instructions']`
  }),

  draft_instructions_textarea: basePageObj({
    desc: `The editable textarea where draft instructions for the current draft can be added and edited`,
    locator: `[data-id='textarea-draft-instructions']`
  }),

  cancel_draft_instructions: basePageObj({
    desc: `Button to discard unsaved changes made to a draft's instructions and sets the textarea back to uneditable`,
    locator: `[data-id='cancel-draft-instructions']`
  }),

  draft_card_title: basePageObj({
    desc: `The title (header area) of each draft on the assignment summary page`,
    // TODO: get dev to give this title a data-id.  with the svg and whatever in there,
    //  draft-section text itself is like `>Final Draft\n>`
    locator: `//*[@data-id="draft-section"]/span/span`,
    type: `xpath`
  }),

  draft_add_instructions: basePageObj({
    desc: `Link to make visible and editable the draft instructions control`,
    locator: `[data-id='add-instructions']`
  }),

  draft_add_goal: basePageObj({
    desc: `Link to display the modal to edit a draft's reflections`,
    locator: `[data-id='add-reflections']`
  }),

  draft_review_dropdown: basePageObj({
    desc: `Select to set the type of review for a draft`,
    locator: `[data-id='review-type-dropdown']`
  }),

  draft_delete: basePageObj({
    desc: `Link to spawn a modal alert confirming deletion of a draft`,
    locator: `[data-id='draft-delete']`
  }),

  // TODO: get dev to give this text block a data-id
  draft_note: basePageObj({
    desc: `Text block per draft describing necessary preconditions to start work on this particular draft`,
    locator: "//*[starts-with(@class,'Draft__draftNote__')]",
    type: 'xpath'
  }),

  draft_alert_delete_button: basePageObj({
    desc: `The confirmation button in the alert dialog that is presented on attempting to delete a draft`,
    locator: `[data-id='dialog-delete']`
  }),

  draft_alert_cancel_button: basePageObj({
    desc: `The cancellation button in the alert dialog that is presented on attempting to delete a draft`,
    locator: `[data-id='dialog-cancel']`
  })

  // Student Page Object Stuff
  //
  reflection_button_submit_enabled: basePageObj({
    desc: `Final submit button for reflection questions and draft submission`,
    locator: `[data-id='submit-draft']:not([class*='MLButton__disabled']`
  }),
  draft_submission_confirmation_banner: basePageObj({
    desc: `Green confirmation message for successful draft submission`,
    locator: `[class*='MLMessage__message_success']`
  }),
  draft_select_dropdown_submission_grid: basePageObj({
    desc: `Drop Down to change drafts`,
    locator: `[data-id='submission-status-filter'] [data-id='rubric-dropdown']`
  }),
  reflection_polls_radio_button: basePageObj({
    desc: `Multiple choice reflection question answer choice`,
    locator: `[class^='ReflectionQuestionsForm__reflection'] form input[type='radio']`
  }),
  dropdown_drafts_submission_grid: basePageObj({
    desc: `Available drafts in drop down on submission grid`,
    locator: `[data-id='submission-status-filter'] [data-id='rubric-dropdown'] [class^='MLDropdown__dropdown'] [data-id='rubric-selection-content'] li`
  }),
  dropdown_drafts_submission_grid_selected: basePageObj({
    desc: `Available drafts in drop down on submission grid`,
    locator: `[data-id='submission-status-filter'] [data-id='rubric-dropdown'] [class^='MLDropdown__dropdown'] [data-id='rubric-selection-content'] li svg`
  }),
  dropdown_drafts_submission_grid_title: basePageObj({
    desc: `Available drafts in drop down on submission grid`,
    locator: `[data-id='submission-status-filter'] [data-id='rubric-dropdown'] [class^='MLDropdown__dropdown'] [class^='MLDropdown__dropdownTitle']`
  }),


});
