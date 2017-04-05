var Page = require('marvin-js').Page;

module.exports = new Page({

  // assignment header
  url: { value: '/activity' },
  add_draft_goals_button: { get: function () { return this.element("[data-id='add-draft-goals-button']"); } },
  //close_confirmation: { get: function () { return this.element("[data-id='close-confirmation']"); } },
  draft_goal_popup: { get: function () { return this.element("[data-id='draft_goal_popup']"); } },
  draft_goal_header: { get: function () { return this.element("[data-id='draft_goal_header']"); } },
  draft_goal_selection: { get: function () { return this.element("[data-id='draft_goal_selection']"); } },
  draft_goal_header_language: { value:'What are the primary goals of this draft?'},
  draft_goal_selection_language: { value:"Select the primary goals you would like students to focus on while they compose this draft. You will be able to link your feedback with these goals when you review students' drafts. "},
  first_draft_goal_expand: { get: function () { return this.element("[data-id='first_draft_goal_expand']"); } },
  draft_goal_list: { get: function () { return this.element("[data-id='draft_goal_list']"); } },
  draft_goal_summary_list: { get: function () { return this.element("[data-id='draft_goal_summary_list']"); } },
  draft_goal_save_button: { get: function () { return this.element("[data-id='draft_goal_save_button']"); } },
  draft_goal_cancel_button: { get: function () { return this.element("[data-id=draft_goal_cancel_button']"); } },
  first_draft_goal: { get: function () { return this.element("[data-id='first_draft_goal']"); } },
  first_draft_goal_description: { get: function () { return this.element("[data-id='first_draft_goal_description']"); } },
  second_draft_goal: { get: function () { return this.element("[data-id='second_draft_goal']"); } },
  third_draft_goal: { get: function () { return this.element("[data-id='third_draft_goal']"); } },
  fourth_draft_goal: { get: function () { return this.element("[data-id='fourth_draft_goal']"); } },
  fifth_draft_goal: { get: function () { return this.element("[data-id='fifth_draft_goal']"); } },
  sixth_draft_goal: { get: function () { return this.element("[data-id='sixth_draft_goal']"); } },
  seventh_draft_goal: { get: function () { return this.element("[data-id='seventh_draft_goal']"); } },


});

