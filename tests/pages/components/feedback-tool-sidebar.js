var Component = require('marvin-js').Component;

module.exports = new Component({

  thesis: { get: function () { return this.element("[data-id='thesis']"); } },

  reason_support: { get: function () { return this.element("[data-id='sideMenu'] [data-id='reasonSupport']"); } },

  interpretation: { get: function () { return this.element("[data-id='sideMenu'] [data-id='interpretation']"); } },

  paragraphDev: { get: function () { return this.element("[data-id='sideMenu'] [data-id='paragraphDev']"); } },

  research: { get: function () { return this.element("[data-id='sideMenu'] [data-id='research']"); } },

  other: { get: function () { return this.element("[data-id='sideMenu'] [data-id='other']"); } },

  counterargs: { get: function () { return this.element("[data-id='sideMenu'] [data-id='counterarg']"); } },

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

});
