/* eslint-disable camelcase */
const Page = require('marvin-js').Page;

// TODO: this should be moved into marvin itself once we hammer out usages and names and such
function basePageObj(opts) {
  return {value(v) {
    opts.type = (opts.type || 'css');
    switch (typeof v) {
      case undefined:
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
        // TODO: actually, does this _only_ support xpath?  and what do if true?
        return this.element(`(${opts.locator})[${v}]`, opts.type);
      default:
        throw new Error('WUTINTARNATION!');
    }
  }};
}

module.exports = new Page({

  // assignment header
  url: { value: '/activity' },
  default_activity_url: { value: '/lms/bbbe3f75-41f7-4b98-9d8e-89896a61d753/course/' +
  'ee0a7acd-2054-4129-b3fd-28563421cb0b/resource/d3e3c2d5-cf43-4f63-924f-3ec7a125a334' },
  confirmation_message: { get() { return this.element("[data-id='created-activity-alert'] div"); } },
  //close_confirmation: { get: function () { return this.element("[data-id='close-confirmation']"); } },
  title: { get() { return this.element("[data-id='activity-title']"); } },
  edit_title_button: { get() { return this.element("[class^='ActivityTitle__editIcon']"); } },
  edit_title_save_button: { get() { return this.element("[data-id='title-save']"); } },
  edit_title_cancel_button: { get() { return this.element("[data-id='title-cancel']"); } },
  edit_title_textarea_bar: { get() { return this.element("[data-id='activity-title-editField']"); } },
  edit_title_textarea: { get() { return this.element("[class^='ActivityTitle__editField']"); } },
  char_counter: { get() { return this.element("[data-id='char-limit-count']"); } },
  activity_type: { get() { return this.element("[data-id='activity-type']"); } },
  student_preview: { get() { return this.element("[data-id='student-preview']"); } },

  //activity_page_layout: { get: function () { return this.element("div[class^='Layout__app']"); } },

  // assignment details
  activity_prompt_header: { get() { return this.element("[data-id='prompt-section']"); } },
  add_activity_prompt_link: { get() { return this.element("[data-id='add-prompt']"); } },
  activity_prompt_edit: { get() { return this.element("[data-id='prompt-edit']"); } },
  activity_prompt_delete: { get() { return this.element("[data-id='prompt-delete']"); } },
  activity_prompt_description: { get() { return this.element("[data-id='prompt-description']"); } },
  activity_prompt_save: { get() { return this.element("[data-id='prompt-save']"); } },
  activity_prompt_cancel: { get() { return this.element("[data-id='prompt-cancel']"); } },

  // rubric
  final_rubric: { get() { return this.element("[data-id='rubric-section']"); } },
  final_rubric_delete: { get() { return this.element("[data-id='rubric-delete']"); } },
  rubric_selection: { get() { return this.element("[data-id='rubric-dropdown']"); } },
  create_custom_rubric: { get() { return this.element("[data-id='create-rubric']"); } },
  no_rubric_option: { get() { return this.element("[data-id='rubric-dropdown'] div ul li"); } },
  rubric_option_2: { get() { return this.element("[data-id='rubric-dropdown'] div ul li:nth-child(2)"); } },
  rubric_preview: { get() { return this.element("[data-id='rubric-preview']" );} },
  rubric_preview_list: { get() { return this.elements("[class^='Rubric__table']" );} },
  rubric_selection_open: { get() { return this.element("[data-id='rubric-selection-open']"); } },
  rubric_selection_content: { get() { return this.element("[data-id='rubric-selection-content']"); } },
  rubric_title: { get() { return this.element("[data-id='rubric-dropdown'] div div"); } },

  // sub menu
  drafts: { get() { return this.element("[data-id='drafts']"); } },
  student_submissions: { get() { return this.element("[data-id='student-submissions']"); } },

  // draft sequence
  draft_names: { get() { return this.element("[data-id='draft-name']"); } },
  add_draft_button: { get() { return this.element("[data-id='add-draft']"); } },

  // selection modal
  reflection_questions_modal: { get() { return this.element("[data-id='modal]"); }},
  reflection_questions_cancel: { get() { return this.element("[data-id='cancel-button']"); }},
  reflection_questions_save: { get() { return this.element("[data-id='save-button']"); }},
  reflection_questions_questions_box: { get() { return this.element("[data-id='modal] [data-id='input-fields']"); }},
  reflection_questions_question_box: { value(num) {
    return this.element(`[data-id='modal'] [data-id='input-fields'] > div:nth-child(${num})`);
  }},

  reflection_question_checkbox: { value(i) {
    return this.element(`[data-id='input-fields'] div:nth-child(${i}) div [name=draftGoalOption]`);
  }},

  add_ddraft_instructions: basePageObj({
    desc: `Button that makes the draft instructions editable for the xth draft on the summary page`,
    locator: `//*[@data-id='add-instructions']`,
    type: 'xpath'
  }),

  ddraft_card: basePageObj({
    desc: `Top container for a draft on the summary page`,
    locator: `//*[@data-id='draft-section']`,
    type: 'xpath'
  }),

  ddraft_instructions: basePageObj({
    desc: `Text of the Draft Instructions displayed (non-editable)`,
    locator: `//*[@data-id='draft-instructions']`,
    type: `xpath`
  }),

  save_ddraft_instructions: basePageObj({
    desc: `Button to save Draft Instructions for the current draft.  Only visible when instructions are editable.`,
    locator: `//*[@data-id='save-draft-instructions']`,
    type: `xpath`
  }),

  // save_ddraft_instructions: { value(i) {
  //   return this.element(`(//*[@data-id='save-draft-instructions'])[${i}]`, 'xpath');
  // }},

  // add_ddraft_instructions: { value(i) {
  //   return this.element(`(//*[@data-id='add-instructions'])[${i}]`, 'xpath');
  // }},

  textarea_ddraft_instructions: { value(i) {
    return this.element(`(//*[@data-id='textarea-draft-instructions'])[${i}]`, 'xpath');
  }},

  ddraft_delete: { value(i) {
    return this.element(`(//*[@data-id='draft-delete'])[${i}]`, 'xpath');
  }},

  cancel_ddraft_instructions: { value(i) {
    return this.element(`(//*[@data-id='cancel-draft-instructions'])[${i}]`, 'xpath');
  }},

  draft_card: { get() { return this.element("[data-id='draft-section']"); } },
  add_draft_instructions: { get() { return this.element("[data-id='add-instructions']"); } },
  textarea_draft_instructions: { get() { return this.element("[data-id='textarea-draft-instructions']"); } },
  save_draft_instructions: { get() { return this.element("[data-id='save-draft-instructions']"); } },
  cancel_draft_instructions: { get() { return this.element("[data-id='cancel-draft-instructions']"); } },

  edit_student_reflection_questions: { get() { return this.element("[data-id='reflections-edit']"); } },
  close_modal: { get() { return this.element("[data-id='close-modal']"); } },

  add_student_reflection_questions: { get() { return this.element("[data-id='add-reflections']"); } },
  draft_delete_button: { get() { return this.element("[data-id='draft-delete']"); } },
  draft_instructions_edit: { get() { return this.element("[data-id='draft-instructions-edit']"); } },

  // draft details
  drafts_review_type: { get() { return this.element("[data-id='review-type-dropdown']"); } },
  drafts_grade_type: { get() { return this.element("[data-id='grade-type-dropdown']"); } },
  draft_start_note: { get() { return this.elements("[data-id='add-draft-focus']"); } },

  // draft learning objectives
  draft_learning_focus: { get() { return this.element(
    "[data-id='MLCard-Draft-2'] div section section:nth-child(2) div:nth-child(2) div:nth-child(3)"); } },
  draft_delete_alert: { get() { return this.element("[class^='MLDialog__alert']"); } },
  draft_alert_delete_button: { get() { return this.element("[data-id='prompt-cancel']"); } },
  draft_alert_cancel_button: { get() { return this.element("[data-id='prompt-save']"); } },
  final_draft_delete_button: { get() { return this.element(
    "[data-id='MLCard-Final-Paper'] > [data-id='draft-section'] > div"); } },
  final_draft_alert_delete_button: { get() { return this.element(
    // TODO: but seriously fix this or file a bug
    "[data-id='MLCard-Final-Paper'] div > div > div > div > div > [class^='MLDialog__content'] > [class^='MLDialog__buttons'] > [class^='MLButton__button']"); } }, // eslint-disable-line
  final_paper_title: { get() { return this.element(
    "[data-id='MLCard-Final-Paper'] [data-id='draft-section'] span [class^='Heading'] span"); } },

  // draft goals
  add_draft_goals_button: { get() { return this.element("[data-id='add-draft-goal']"); } },
  edit_draft_goals_button: { get() { return this.element("[data-id='draft-goal-edit']"); } },
  //close_confirmation: { get: function () { return this.element("[data-id='close-confirmation']"); } },
  draft_goal_close_modal: { get() { return this.element("[data-id='close-modal']"); } },
  draft_goal_popup: { get() { return this.element("[data-id='modal']"); } },
  draft_goal_header: { get() { return this.element("[data-id='goal-form-description']"); } },
  draft_goal_selection: { get() { return this.element("[data-id='draft_goal_selection']"); } },
  draft_goal_header_language: { value: 'What are the primary goals of this draft?'},
  draft_goal_selection_language: {
    value: "Select the primary goals you would like students to focus on while they compose this draft. You will be able to link your feedback with these goals when you review students' drafts. "}, // eslint-disable-line
  first_draft_goal_expand: { get() { return this.element("[data-id='first_draft_goal_expand']"); } },
  draft_goal_list: { get() { return this.element("[data-id='input-fields']"); } },
  draft_goal_summary_list: { get() { return this.element("[data-id='selected-fields']"); } },
  draft_goal_save_button: { get() { return this.element("[data-id='save-button']"); } },
  draft_goal_cancel_button: { get() { return this.element("[data-id='cancel-button']"); } },

  first_draft_goal_description: { get() { return this.element(
    "[data-id='input-fields'] div [data-id='field-content']"); } },
  draft_goal_goal: { value(i) {
    return this.element(`[data-id='input-fields'] div:nth-child(${i}) div`);
  }},

  draft_goal_checkbox: { value(i) {
    return this.element(`[data-id='input-fields'] div:nth-child(${i}) div [name=draftGoalOption]`);
  }},

  draft_goal_description: { value(i) {
    return this.element(`[data-id='input-fields'] div:nth-child(${i}) [data-id='field-content']`);
  }},

  draft_goal_list_activity_summary: { get() { return this.element("[data-id='drafts-goal-list']"); } },
  draft_goal_list_activity_summary_selected: { get() { return this.element("[data-id='drafts-goal-list'] li"); } }
});
