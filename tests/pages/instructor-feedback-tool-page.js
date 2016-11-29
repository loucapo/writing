var Page = require('marvin-js').Page;

module.exports = new Page({

  url: { value: '/feedbackTool/123' },

  student_submission_body: { get: function () { return this.element("[data-id='student_submission_body']"); } },

  quick_feedback_library: { get: function () { return this.element("[data-id='quick-feedback-library']"); } },

  comma_splice: { get: function () { return this.element("[data-id='comma_splice']"); } },

  fragment: { get: function () { return this.element("[data-id='fragment']"); } },

  usage: { get: function () { return this.element("[data-id='usage']"); } },

  pronoun_agreement: { get: function () { return this.element("[data-id='pronoun_agreement']"); } },

  subject_verb_agreement: { get: function () { return this.element("[data-id='subject_verb_agreement']"); } },

  wrong_word: { get: function () { return this.element("[data-id='wrong_word']"); } },

  needs_analysis: { get: function () { return this.element("[data-id='needs_analysis']"); } },

  comma_error: { get: function () { return this.element("[data-id='comma_error']"); } },

  'pre-defined feedback comment': { get: function () { return this.element(".Z7w9xyRDPPrxo2G9E_yBB"); } },

  'instructor feedback content': { get: function () { return this.element("._2UmKyh4Gg9lDJDi6C-lrUZ"); } },

  resource_url: { get: function () { return this.element("[data-id='resource-url']"); } },

  example_essay: { value: 'TXTing: h8 it or wuv it'}
});
