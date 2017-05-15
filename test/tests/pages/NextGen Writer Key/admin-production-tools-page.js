let Page = require('marvin-js').Page;

module.exports = new Page({

  url: { value: '/prodtools' },

  prodtools_header: { get() { return this.element("[data-id='prod-tools-header']"); } },

  prodtools_title: { get() { return this.element("[data-id='prod-tools-title']"); } },

  prodtools_criteria: { get() { return this.element("[data-id='tab0']"); } },

  prodtools_rubrics: { get() { return this.element("[data-id='tab1']"); } },

  prodtools_quick_feedback: { get() { return this.element("[data-id='tab2']"); } },

  prodtools_student_reflection_questions: { get() { return this.element("[data-id='tab3']"); } }

});
