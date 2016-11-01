var Page = require('marvin-js').Page;

module.exports = new Page({

  url: { value: '/activity' },

  // placeholder: where do we want to put this?
  //student_submissions: { get: function () { return this.element("[data-id='student_submissions']"); } },

  draft_dropdown: { get: function () { return this.element("[data-id='draft_dropdown']"); } },

  review_type: { get: function () { return this.element("[data-id='review_type']"); } },

  draft_due_date: { get: function () { return this.element("[data-id='draft_due_date']"); } },

  send_all_completed_reviews_button: { get: function () { return this.element("[data-id='send_all_completed_reviews_button']"); } },

  //needs to be a css selector
  draft_status: { get: function () { return this.element("[data-id='draft_status']"); } },

  //css selector with indexing later
  student_roster: { get: function () { return this.element("[data-id='student_roster']"); } },

});
