var Page = require('marvin-js').Page;

module.exports = new Page({

  url: { value: '/feedbackTool/123' },

  sidebar: { get: function() { return this.element("[data-id='sideMenu']"); }},

  thesis: { get: function () { return this.element("[data-id='sideMenu'] [data-id='thesis']"); } },

  reason_support: { get: function () { return this.element("[data-id='sideMenu'] [data-id='reason&support']"); } },

  interpretation: { get: function () { return this.element("[data-id='sideMenu'] [data-id='interpretation']"); } },

  paragraphDev: { get: function () { return this.element("[data-id='sideMenu'] [data-id='paragraphDev']"); } },

  research: { get: function () { return this.element("[data-id='sideMenu'] [data-id='research']"); } },

  other: { get: function () { return this.element("[data-id='sideMenu'] [data-id='other']"); } },

  counterargs: { get: function () { return this.element("[data-id='sideMenu'] [data-id='counterargs']"); } },

  goodJob: { get: function () { return this.element("[data-id='sideMenu'] [data-id='goodJob']"); } },

  quick_feedback_library: { get: function () { return this.element("[data-id='sideMenu'] [data-id='feedbackLib']"); } },

  comma_splice: { get: function () { return this.element("[data-id='comma-splice']"); } },

  fragment: { get: function () { return this.element("[data-id='fragment']"); } },

  usage: { get: function () { return this.element("[data-id='usage']"); } },

  pronoun_agreement: { get: function () { return this.element("[data-id='pronoun-agreement']"); } },

  subject_verb_agreement: { get: function () { return this.element("[data-id='subject-verb-agreement']"); } },

  appropriate_language: { get: function () { return this.element("[data-id='appropriate-language']"); } },

  needs_analysis: { get: function () { return this.element("[data-id='needs-analysis']"); } },

  comma_error: { get: function () { return this.element("[data-id='comma-error']"); } },

  'pre-defined feedback comment': { get: function () { return this.element("div[class^='Flag__triangle_border']"); } },

  'instructor feedback content': { get: function () { return this.element("div[class^='Flag__paragraph'"); } },

  resource_url: { get: function () { return this.element("[data-id='resource-url']"); } },

  'Student Reflection Section': { get: function () { return this.element("[data-id='studentReflections']"); } },

  'End Comment Section': { get: function () { return this.element("[data-id='endComment']"); } },

  'End Comment textarea': { get: function () { return this.element("//*[@data-id='endComment']/textarea", 'xpath'); } },

  end_comment_header: { get: function () { return this.element("[data-id='comma_error']"); } },

  end_comment_textarea: { get: function () { return this.element("[data-id='comma_error']"); } },

  example_essay: { value: 'TXTing: h8 it or wuv it'},

  draft_content_first_span: { get: function() { return this.element("div.public-DraftEditor-content div div.css-RichTextEditor-block:first-child span"); }},

  comment_popup: { get: function () { return this.element("div[data-id='MLModal']"); } },

  comment_popup__textarea: { get: function() { return this.element("div[data-id='MLModal'] textarea"); } },

  submit: { get: function() { return this.element("div[data-id='MLModal'] button[type='submit']");}},

  cancel: { get: function() { return this.element("div[data-id='MLModal'] button:not([type='submit'])");}},

});
