var Page = require('marvin-js').Page;

module.exports = new Page({

  url: { value: '/feedbackTool/123' },

  student_submission_body: { get: function () { return this.element("[data-id='student_submission_body']"); } },

  quick_feedback_library: { get: function () { return this.element("[data-id='feedbackLib']"); } },

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
  
  // RUBRIC
  'header button': { get: function() { return this.element("[data-id='header-button']"); } },
  'X button': { get: function() { return this.find_elements_by_xpath('//div[contains(text(), "X")]'); } }

});
