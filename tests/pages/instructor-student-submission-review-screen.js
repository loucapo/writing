var Page = require('marvin-js').Page;

module.exports = new Page({

  url: { value: '/activity' },

  'student submissions tab': { get: function() { return this.element("[data-id='student-submissions']"); }},
  'draft 1 header': { get: function() { return this.elements("(//*[@data-id='draft-item-draft-name'])[1]", 'xpath'); }},
  'Drafts tab': { get: function() { return this.element("[data-id='drafts']"); }},
  'drafts div': { get: function() { return this.element("//*[@data-id='draft-item-description']/../../../..", 'xpath'); }},
  'activity div': { get: function() { return this.element("//*[@data-id='activity-menu']/..", 'xpath'); }},
  'draft-picker option 1': { get: function() { return this.element("//select/option[1]", 'xpath'); }},
  'Jane Austen row': { get: function() { return this.element("//a[text()='Austen, Jane']/../..", 'xpath'); }},
  'Alice Walker row': { get: function() { return this.element("//a[text()='Walker, Alice']/../..", 'xpath'); }},

});
