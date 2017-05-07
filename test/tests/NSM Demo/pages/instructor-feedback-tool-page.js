var Page = require('marvin-js').Page;
var feedback_tool_sidebar = require('./components/feedback-tool-sidebar.js');

module.exports = new Page({

  url: { value: '/feedbackTool/123' },

  sidemenu: { get: function() { return this.component(feedback_tool_sidebar, "div[data-id='sideMenu']"); } },

  feedback_tool_page_layout: { get: function () { return this.element("div[class^='Layout__app']"); } },

  sidebar: { get: function() { return this.element("[data-id='sideMenu']"); }},


  'pre-defined feedback comment': { get: function () { return this.element("div[class^='Flag__triangle_border']"); } },

  'instructor feedback content': { get: function () { return this.element("div[class^='Flag__paragraph'"); } },

  resource_url: { get: function () { return this.element("[data-id='resource-url']"); } },

  'Student Reflection Header': { get: function () { return this.element("[data-id='studentReflections']"); } },

  'Student Reflection Section': { get: function () { return this.element("[class^='StudentReflection__section']"); } },

  'End Comment Section': { get: function () { return this.element("[data-id='endComment']"); } },

  'End Comment textarea': { get: function () { return this.element("//*[@data-id='endComment']/div/textarea", 'xpath'); } },

  end_comment_header: { get: function () { return this.element("[data-id='comma_error']"); } },

  end_comment_textarea: { get: function () { return this.element("[data-id='comma_error']"); } },

  example_essay: { value: 'TXTing: h8 it or wuv it'},

  // FEEDBACK FLAGS

  draft_content_first_span: { get: function() { return this.element("div.public-DraftEditor-content div div.css-RichTextEditor-block:first-child span"); }},
  
  draft_content_forth_span: { get: function() { return this.element("div.public-DraftEditor-content div div.css-RichTextEditor-block:nth-child(4) span"); }},

  comment_popup: { get: function () { return this.element("div[data-id='MLModal']"); } },

  comment_popup_wrapper: { get: function () { return this.element("div[data-id='MLModal'] > div"); } },

  comment_popup__textarea: { get: function() { return this.element("div[data-id='MLModal'] textarea"); } },

  submit: { get: function() { return this.element("div[data-id='MLModal'] div div form button[type='submit']");}},

  cancel: { get: function() { return this.element("div[data-id='MLModal'] button:not([type='submit'])");}},


  'sentiment level selection dropdown': { get: function() { return this.element("[data-id='sentimentLevel-select']"); }},

  sentiment_goodJob: { get: function() { return this.element("[data-id='sentimentLevel-select'] [value='goodJob']"); } },

  sentiment_needsWork: { get: function() { return this.element("[data-id='sentimentLevel-select'] [value='needsWork']"); } },

  sentiment_extensiveRevision: { get: function() { return this.element("[data-id='sentimentLevel-select'] [value='extensiveRevision']"); } },

  'Other Feedback Flag': { get: function() { return this.element("[class^='FeedbackToolContentFlag']"); }},

  feedback_flags: { get: function() { return this.elements("div[class^='FeedbackToolContentFlag__triangleBorder']");}},

  
  // RUBRIC
  rubric: { get: function () { return this.element("[class^='FeedbackTool__draftContainer']"); } },

  score_rubric_button: { get: function() { return this.element("[data-id='score-rubric-button']"); } },

  draft_revision_history: { get: function() { return this.element("[data-id='draft-revision-history-button']"); } },

  done_button: { get: function() { return this.element("[data-id='done-button']"); } },

  'X button': { get: function() { return this.element("span[class^='Rubric__close']"); } },


});
