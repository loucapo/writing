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


  comma_splice: { get: function () { return this.element("[data-id='comma_splice']"); } },

  fragment: { get: function () { return this.element("[data-id='fragment']"); } },

  usage: { get: function () { return this.element("[data-id='usage']"); } },

  pronoun_agreement: { get: function () { return this.element("[data-id='pronoun_agreement']"); } },

  subject_verb_agreement: { get: function () { return this.element("[data-id='subject_verb_agreement']"); } },

  wrong_word: { get: function () { return this.element("[data-id='wrong_word']"); } },

  needs_analysis: { get: function () { return this.element("[data-id='needs_analysis']"); } },

  comma_error: { get: function () { return this.element("[data-id='comma_error']"); } },

  example_essay: { value: 'TXTing: h8 it or wuv it'}
});
