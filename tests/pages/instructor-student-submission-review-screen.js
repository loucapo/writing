var Page = require('marvin-js').Page;

module.exports = new Page({

  url: { value: '/activity' },

  'student submissions tab': { get: function() { return this.element("[data-id='student-submissions']"); }},
  'draft 1 header': { get: function() { return this.element("[data-id='draft-item-draft-name']"); }},
  'activity div': {get: function() { return this.element("//*[@data-id='activity-menu']/..", 'xpath'); }},
  'draft-picker option 1': {get: function() { return this.element("//select/option[1]", 'xpath'); }},
  draft_dropdown: { get: function () { return this.element("[data-id='draft_dropdown']"); } },

  review_type: { get: function () { return this.element("[data-id='review_type']"); } },

  draft_due_date: { get: function () { return this.element("[data-id='draft_due_date']"); } },

  send_all_completed_reviews_button: { get: function () { return this.element("[data-id='send_all_completed_reviews_button']"); } },

  //needs to be a css selector
  draft_status: { get: function () { return this.element("[data-id='draft_status']"); } },

  //css selector with indexing later

  //'student roster': { get: function () { return this.element("[data-id='student_roster']"); } },
  //body: { get: function() { return this.element("body"); }},
});
