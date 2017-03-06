var Page = require('marvin-js').Page;

module.exports = new Page({

  // assignment header
  url: { value: '/activity' },
  confirmation_message: { get: function () { return this.element("[data-id='confirmation-message']"); } },
  close_confirmation: { get: function () { return this.element("[data-id='close-confirmation']"); } },
  title: { get: function () { return this.element("[data-id='activity-type']"); } },
  course: { get: function () { return this.element("[data-id='course-name']"); } },
  student_preview: { get: function () { return this.element("[data-id='student-preview']"); } },

  activity_page_layout: { get: function () { return this.element("div[class^='Layout__app']"); } },

  // assignment details
  activity_purpose: { get: function() { return this.element("[data-id='activity-purpose']"); } },
  activity_requirements: { get: function () { return this.element("[data-id='activity-requirements']"); } },
  activity_prompt: { get: function () { return this.element("[data-id='activity-prompt']"); } },
  activity_prompt_edit: { get: function () { return this.element("[data-id='activity-edit-button']"); } },

  // rubric
  final_rubric: { get: function () { return this.element("[data-id='final-rubric']"); } },
  rubric_selection: { get: function () { return this.element("[data-id='rubric-selection']"); } },
  create_custom_rubric: { get: function () { return this.element("[data-id='create-custom-rubric']"); } },

  // sub menu
  sub_menu: { get: function () { return this.element("[data-id='assignment-menu']"); } },
  student_submissions: { get: function () { return this.element("[data-id='student-submissions']"); } },


  // draft sequence
  draft_names: { get: function () { return this.elements("[data-id='draft-name']"); } },
  add_draft: { get: function () { return this.elements("[data-id='add-draft']"); } },
  final_draft: { get: function () { return this.elements("[data-id='final-draft']"); } },
  add_draft_instructions: { get: function () { return this.elements("[data-id='add-draft-instructions']"); } },
  add_student_reflection_questions: { get: function () { return this.elements("[data-id='add-draft-instructions']"); } },

  // draft details
  drafts_review_type: { get: function() { return this.elements("[data-id='draft-item-type']"); } },
  drafts_due_dates: { get: function() { return this.elements("[data-id='draft-item-due-date']"); } },


  // draft learning objectives
  draft_learning_focus: { get: function() { return this.elements("[data-id='draft-item-focus']"); } },

  // draft grading policies
  draft_grading_policies: { get: function () { return this.elements("[data-id='grading-policy']"); } },

});
