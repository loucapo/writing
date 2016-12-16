var Page = require('marvin-js').Page;
var rubric = require('./components/final-rubric');

module.exports = new Page({

  'final rubric': { get: function() { return this.component(rubric, '[class^="Activity__activity_container"] > div:nth-child(2)')}},

  // assignment header
  url: { value: '/activity/23630184-5955-4dbe-9908-ab065f1bcad2' },
  title: { get: function () { return this.element("[data-id='activity-type']"); } },
  course: { get: function () { return this.element("[data-id='course-name']"); } },
  type: { get: function () { return this.element("[data-id='activity-type']"); } },
  assign_date: { get: function () { return this.element("[data-id='due-date']"); } },

  activity_page_layout: { get: function () { return this.element("div[class^='Layout__app']"); } },

  // assignment details
  activity_purpose: { get: function() { return this.element("[data-id='activity-purpose']"); } },
  activity_requirements: { get: function () { return this.element("[data-id='activity-requirements']"); } },
  prompt: { get: function () { return this.element("[data-id='activity-prompt']"); } },
  prompt_edit: { get: function () { return this.element("[data-id='activity-edit-button']"); } },

  // sub menu
  sub_menu: { get: function () { return this.element("[data-id='assignment-menu']"); } },
  student_submissions: { get: function () { return this.element("[data-id='student-submissions']"); } },


  // draft sequence
  draft_names: { get: function () { return this.elements("[data-id='draft-name']"); } },


  // draft details
  drafts_review_type: { get: function() { return this.elements("[data-id='draft-item-type']"); } },
  drafts_due_dates: { get: function() { return this.elements("[data-id='draft-item-due-date']"); } },


  // draft learning objectives
  draft_learning_objectives: { get: function() { return this.elements("[data-id='draft-item-learning-objectives']"); } },

  // draft grading policies
  draft_grading_policies: { get: function () { return this.elements("[data-id='grading-policy']"); } },

});
