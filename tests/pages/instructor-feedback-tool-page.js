var Page = require('marvin-js').Page;

module.exports = new Page({

  url: { value: '/feedbackTool/123' },

  comment_thesis: { get: function () { return this.element("[data-id='comment_thesis']"); } },

  comment_reason_support: { get: function () { return this.element("[data-id='comment_reason_support']"); } },

  comment_interpretation_analysis: { get: function () { return this.element("[data-id='comment_interpretation_analysis']"); } },

  comment_expansion_thesis: { get: function () { return this.element("[data-id='comment_expansion_thesis']"); } },

  comment_integration_research: { get: function () { return this.element("[data-id='comment_integration_research']"); } },

  comment_counterarguments: { get: function () { return this.element("[data-id='comment_counterarguments']"); } },

  comment_other: { get: function () { return this.element("[data-id='comment_other']"); } },

  comment_good_job: { get: function () { return this.element("[data-id='comment_good_job']"); } },

  quick_feedback_library: { get: function () { return this.element("[data-id='quick-feedback-library']"); } },

  comma_splice: { get: function () { return this.element("[data-id='comma_splice']"); } },

  fragment: { get: function () { return this.element("[data-id='fragment']"); } },

  usage: { get: function () { return this.element("[data-id='usage']"); } },

  pronoun_agreement: { get: function () { return this.element("[data-id='pronoun_agreement']"); } },

  subject_verb_agreement: { get: function () { return this.element("[data-id='subject_verb_agreement']"); } },

  wrong_word: { get: function () { return this.element("[data-id='wrong_word']"); } },

  needs_analysis: { get: function () { return this.element("[data-id='needs_analysis']"); } },

  comma_error: { get: function () { return this.element("[data-id='comma_error']"); } },

});
