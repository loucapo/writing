var Page = require('marvin-js').Page;

module.exports = new Page({

  // assignment header
  url: { value: '/activity' },
  confirmation_message: { get: function () { return this.element("[data-id='created-activity-alert'] div"); } },
  //close_confirmation: { get: function () { return this.element("[data-id='close-confirmation']"); } },
  title: { get: function () { return this.element("[data-id='activity-title']"); } },
  activity_type: { get: function () { return this.element("[data-id='activity-type']"); } },
  student_preview: { get: function () { return this.element("[data-id='student-preview']"); } },

  //activity_page_layout: { get: function () { return this.element("div[class^='Layout__app']"); } },

  // assignment details
  activity_prompt_header: { get: function () { return this.element("[data-id='prompt-section']"); } },
  add_activity_prompt_link: { get: function () { return this.element("[data-id='add-prompt']"); } },
  activity_prompt_edit: { get: function () { return this.element("[data-id='prompt-edit']"); } },
  activity_prompt_delete: { get: function () { return this.element("[data-id='prompt-delete']"); } },
  activity_prompt_description: { get: function () { return this.element("[data-id='prompt-description']"); } },
  activity_prompt_save: { get: function () { return this.element("[data-id='prompt-save']"); } },
  activity_prompt_cancel: { get: function () { return this.element("[data-id='prompt-cancel']"); } },

  // rubric
  final_rubric: { get: function () { return this.element("[data-id='rubric-section']"); } },
  final_rubric_delete: { get: function () { return this.element("[data-id='rubric-delete']"); } },
  rubric_selection: { get: function () { return this.element("[data-id='rubric-dropdown']"); } },
  create_custom_rubric: { get: function () { return this.element("[data-id='create-rubric']"); } },
  no_rubric_option: { get: function () { return this.element("[data-id='rubric-dropdown'] div ul li"); } },
  rubric_option_2: { get: function () { return this.element("[data-id='rubric-dropdown'] div ul li:nth-child(2)"); } },
  rubric_preview: { get: function () { return this.element("[data-id='rubric-preview']" )} },
  rubric_preview_list: { get: function () { return this.elements("[class^='Rubric__table']" )} },
  rubric_selection_open: { get: function () { return this.element("[data-id='rubric-selection-open']"); } },
  rubric_selection_content: { get: function () { return this.element("[data-id='rubric-selection-content']"); } },
  rubric_title: { get: function () { return this.element("[data-id='rubric-dropdown'] div div"); } },

  // sub menu
  drafts: { get: function () { return this.element("[data-id='drafts']"); } },
  student_submissions: { get: function () { return this.element("[data-id='student-submissions']"); } },


  // draft sequence
  draft_names: { get: function () { return this.element("[data-id='draft-name']"); } },
  add_draft_button: { get: function () { return this.element("[data-id='add-draft']"); } },
  draft_card: { get: function () { return this.element("[data-id='draft-section']"); } },
  add_draft_instructions: { get: function () { return this.element("[data-id='add-instructions']"); } },
  textarea_draft_instructions: { get: function () { return this.element("[data-id='textarea-draft-instructions']"); } },
  save_draft_instructions: { get: function () { return this.element("[data-id='save-draft-instructions']"); } },
  cancel_draft_instructions: { get: function () { return this.element("[data-id='cancel-draft-instructions']"); } },
  add_student_reflection_questions: { get: function () { return this.element("[data-id='add-reflections']"); } },
  draft_delete_button: { get: function () { return this.element("[data-id='draft-delete']"); } },
  draft_instructions_edit: { get: function () { return this.element("[data-id='draft-instructions-edit']"); } },

  // draft details
  drafts_review_type: { get: function() { return this.element("[data-id='review-type-dropdown']"); } },
  drafts_grade_type: { get: function() { return this.element("[data-id='grade-type-dropdown']"); } },
  draft_start_note: { get: function() { return this.elements("[data-id='add-draft-focus']"); } },
  // draft learning objectives
  draft_learning_focus: { get: function() { return this.element("[data-id='MLCard-Draft-2'] div section section:nth-child(2) div:nth-child(2) div:nth-child(3)"); } },
  draft_delete_alert: { get: function() { return this.element("[class^='MLDialog__alert']"); } },
  draft_alert_delete_button: { get: function() { return this.element("[data-id='prompt-cancel']"); } },
  draft_alert_cancel_button: { get: function() { return this.element("[data-id='prompt-save']"); } },
  final_draft_delete_button: { get: function() { return this.element("[data-id='MLCard-Final-Paper'] > [data-id='draft-section'] > div"); } },
  final_draft_alert_delete_button: { get: function() { return this.element("[data-id='MLCard-Final-Paper'] div > section > div > div > div > [class^='MLDialog__content'] > [class^='MLDialog__buttons'] > [class^='MLButton__button']"); } },
  final_paper_title: { get: function() { return this.element("[data-id='MLCard-Final-Paper'] [data-id='draft-section'] span [class^='Heading'] span"); } },


  // draft goals
  add_draft_goals_button: { get: function () { return this.element("[data-id='add-draft-goal']"); } },
  edit_draft_goals_button: { get: function () { return this.element("[data-id='draft-goal-edit']"); } },
  //close_confirmation: { get: function () { return this.element("[data-id='close-confirmation']"); } },
  draft_goal_popup: { get: function () { return this.element("[data-id='modal']"); } },
  draft_goal_header: { get: function () { return this.element("[data-id='goal-form-description']"); } },
  draft_goal_selection: { get: function () { return this.element("[data-id='draft_goal_selection']"); } },
  draft_goal_header_language: { value:'What are the primary goals of this draft?'},
  draft_goal_selection_language: { value:"Select the primary goals you would like students to focus on while they compose this draft. You will be able to link your feedback with these goals when you review students' drafts. "},
  first_draft_goal_expand: { get: function () { return this.element("[data-id='first_draft_goal_expand']"); } },
  draft_goal_list: { get: function () { return this.element("[data-id='goal-input-fields']"); } },
  draft_goal_summary_list: { get: function () { return this.element("[data-id='selected-goals']"); } },
  draft_goal_save_button: { get: function () { return this.element("[data-id='save-button']"); } },
  draft_goal_cancel_button: { get: function () { return this.element("[data-id='cancel-button']"); } },
  first_draft_goal_checkbox: { get: function () { return this.element("[data-id='goal-input-fields'] div  div [name=draftGoalOption]"); } },
  first_draft_goal: { get: function () { return this.element("[data-id='goal-input-fields'] div  div"); } },
  first_draft_goal_description: { get: function () { return this.element("[data-id='goal-input-fields'] div [data-id='goal-field-content']"); } },
  second_draft_goal_checkbox: { get: function () { return this.element("[data-id='goal-input-fields'] div:nth-child(2)  div [name=draftGoalOption]"); } },
  third_draft_goal_checkbox: { get: function () { return this.element("[data-id='goal-input-fields'] div:nth-child(3)  div [name=draftGoalOption]"); } },
  fourth_draft_goal_checkbox: { get: function () { return this.element("[data-id='goal-input-fields'] div:nth-child(4)  div [name=draftGoalOption]"); } },
  fifth_draft_goal_checkbox: { get: function () { return this.element("[data-id='goal-input-fields'] div:nth-child(5)  div [name=draftGoalOption]"); } },
  sixth_draft_goal_checkbox: { get: function () { return this.element("[data-id='goal-input-fields'] div:nth-child(6)  div [name=draftGoalOption]"); } },
  seventh_draft_goal_checkbox: { get: function () { return this.element("[data-id='goal-input-fields'] div:nth-child(7)  div [name=draftGoalOption]"); } },
  draft_goal_list_activity_summary: { get: function () { return this.element("[data-id='drafts-goal-list']"); } },
  draft_goal_list_activity_summary_selected: { get: function () { return this.element("[data-id='drafts-goal-list'] li"); } },
});
