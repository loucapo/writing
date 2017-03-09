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
  activity_prompt_edit: { get: function () { return this.element("[data-id='prompt-edit']"); } },
  activity_prompt_delete: { get: function () { return this.element("[data-id='prompt-delete']"); } },
  activity_prompt_description: { get: function () { return this.element("[data-id='prompt-description']"); } },

  // rubric
  final_rubric: { get: function () { return this.element("[data-id='rubric-section']"); } },
  final_rubric_delete: { get: function () { return this.element("[data-id='rubric-delete']"); } },
  rubric_selection: { get: function () { return this.element("[data-id='rubric-dropdown']"); } },
  create_custom_rubric: { get: function () { return this.element("[data-id='create-rubric']"); } },

  // sub menu
  drafts: { get: function () { return this.element("[data-id='drafts']"); } },
  student_submissions: { get: function () { return this.element("[data-id='student-submissions']"); } },


  // draft sequence
  draft_names: { get: function () { return this.elements("[data-id='draft-name']"); } },
  add_draft_button: { get: function () { return this.elements("[data-id='add-draft']"); } },
  final_draft_header: { get: function () { return this.element("[data-id='draft-section']"); } },
  add_draft_instructions: { get: function () { return this.elements("[data-id='add-instructions']"); } },
  add_student_reflection_questions: { get: function () { return this.elements("[data-id='add-reflections']"); } },

  // draft details
  drafts_review_type: { get: function() { return this.element("[data-id='review-type-dropdown']"); } },
  drafts_grade_type: { get: function() { return this.element("[data-id='grade-type-dropdown']"); } },

  // draft learning objectives
  draft_learning_focus: { get: function() { return this.elements("[data-id='add-draft-focus']"); } },

});
