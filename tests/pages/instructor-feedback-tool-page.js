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

  example_essay: { value: 'TXTing: h8 it or wuv it'}
});
