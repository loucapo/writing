var Page = require('marvin-js').Page;

module.exports = new Page({

  url: { value: '/feedbackTool/123' },

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
