var Page = require('marvin-js').Page;

module.exports = new Page({

  url: { value: '/prodtools' },

  prodtools_header: { get: function () { return this.element("[data-id='prod-tools-header']"); } },

  prodtools_title: { get: function () { return this.element("[data-id='prod-tools-title']"); } },

  prodtools_criteria: { get: function () { return this.element("[data-id='tab0']"); } },

  prodtools_rubrics: { get: function () { return this.element("[data-id='tab1']"); } },

  prodtools_quick_feedback: { get: function () { return this.element("[data-id='tab2']"); } },

  prodtools_student_reflection_questions: { get: function () { return this.element("[data-id='tab3']"); } },

});
