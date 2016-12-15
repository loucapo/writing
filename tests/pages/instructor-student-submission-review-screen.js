var Page = require('marvin-js').Page;

module.exports = new Page({

  url: { value: '/activity' },

  'student submissions tab': { get: function() { return this.element("[data-id='student-submissions']"); }},
  'draft 1 header': { get: function() { return this.elements("(//*[@data-id='draft-item-draft-name'])[1]", 'xpath'); }},
  'Drafts tab': { get: function() { return this.element("[data-id='drafts']"); }},
  'drafts div': { get: function() { return this.element("div[class^='DraftItem__draftLeft']"); }},
  'activity div': { get: function() { return this.element("//*[@data-id='activity-menu']/..", 'xpath'); }},
  'draft-picker option 1': { get: function() { return this.element("[data-id='submission-filter']"); }},
  'Jane Austen row': { get: function() { return this.element("//td[text()='Austen, Jane']/..", 'xpath'); }},
  'Alice Walker row': { get: function() { return this.element("//td[text()='Walker, Alice']/..", 'xpath'); }},

});
