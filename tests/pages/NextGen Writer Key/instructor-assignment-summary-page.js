var Page = require('marvin-js').Page;

console.log("yepp im required");

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
  draft_names: { get: function () { return this.elements("[data-id='draft-name']"); } },
  add_draft: { get: function () { return this.elements("[data-id='add-draft']"); } },
  final_draft_header: { get: function () { return this.element("[data-id='draft-section']"); } },
  add_draft_instructions: { get: function () { return this.elements("[data-id='add-instructions']"); } },


  add_student_reflection_questions: { get: function () { return this.element("[data-id='add-reflections']"); } },

  // selection modal
  reflection_questions_modal:  { get: function() { return this.element("[data-id='modal]"); }},
  // missing the 'a' around the X svg
  // reflection_questions_x_icon: { get: function() { return this.element("[data-id='modal]"); }},
  // the h1 'Select reflection...'
  // reflection_questions_header: { get: function() { return this.element("[data-id='modal]"); }},
  // the p with prompt text 'Customize the following'
  // reflection_questions_prompt: { get: function() { return this.element("[data-id='modal]"); }},
  reflection_questions_cancel: { get: function() { return this.element("[data-id='modal'] [data-id='cancel-button']"); }},
  reflection_questions_save:   { get: function() { return this.element("[data-id='modal'] [data-id='save-button]"); }},
  reflection_questions_questions_box: { get: function() { return this.element("[data-id='modal] [data-id='input-fields']"); }},
  reflection_questions_question_box:  { value: function(num) {
    return this.element(`[data-id='modal'] [data-id='input-fields'] > div:nth-child(${num})`);
  }},
  // each question should have a data-id around the title (the h4, the 'Question 1')
  // and the actual text of the question


  // draft details
  drafts_review_type: { get: function() { return this.element("[data-id='review-type-dropdown']"); } },
  drafts_grade_type: { get: function() { return this.element("[data-id='grade-type-dropdown']"); } },

  // draft learning objectives
  draft_learning_focus: { get: function() { return this.elements("[data-id='add-draft-focus']"); } },

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
  draft_goal_list: { get: function () { return this.element("[data-id='input-fields']"); } },
  draft_goal_summary_list: { get: function () { return this.element("[data-id='selected-fields']"); } },
  draft_goal_save_button: { get: function () { return this.element("[data-id='save-button']"); } },
  draft_goal_cancel_button: { get: function () { return this.element("[data-id='cancel-button']"); } },

  draft_goal_goal: { value: function(i) {
    return this.element(`[data-id='input-fields'] div:nth-child(${i}) div`);
  }},

  draft_goal_checkbox: { value: function(i) {
    return this.element(`[data-id='input-fields'] div:nth-child(${i}) div [name=draftGoalOption]`);
  }},

  draft_goal_description: { value: function(i) {
    return this.element(`[data-id='input-fields'] div:nth-child(${i}) [data-id='field-content']`);
  }},

  first_draft_goal: { get: function () { return this.element("[data-id='input-fields'] div  div"); } },
  first_draft_goal_description: { get: function () { return this.element("[data-id='input-fields'] div [data-id='field-content']"); } },
  first_draft_goal_checkbox: { get: function () { return this.element("[data-id='input-fields'] div  div [name=draftGoalOption]"); } },
  second_draft_goal_checkbox: { get: function () { return this.element("[data-id='input-fields'] div:nth-child(2)  div [name=draftGoalOption]"); } },
  third_draft_goal_checkbox: { get: function () { return this.element("[data-id='input-fields'] div:nth-child(3)  div [name=draftGoalOption]"); } },
  fourth_draft_goal_checkbox: { get: function () { return this.element("[data-id='input-fields'] div:nth-child(4)  div [name=draftGoalOption]"); } },
  fifth_draft_goal_checkbox: { get: function () { return this.element("[data-id='input-fields'] div:nth-child(5)  div [name=draftGoalOption]"); } },
  sixth_draft_goal_checkbox: { get: function () { return this.element("[data-id='input-fields'] div:nth-child(6)  div [name=draftGoalOption]"); } },
  seventh_draft_goal_checkbox: { get: function () { return this.element("[data-id='input-fields'] div:nth-child(7)  div [name=draftGoalOption]"); } },

  draft_goal_list_activity_summary: { get: function () { return this.element("[data-id='drafts-goal-list']"); } },
  draft_goal_list_activity_summary_selected: { get: function () { return this.element("[data-id='drafts-goal-list'] li"); } },
});
