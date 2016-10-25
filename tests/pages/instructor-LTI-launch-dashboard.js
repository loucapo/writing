var Page = require('marvin-js').Page;

module.exports = new Page({
  
  // XXX placeholder
  url: { value: '/dashboard' },

  course_title: { get: function () { return this.element("[data-id='activity-title']"); } },

  writing_center: { get: function () { return this.element("[data-id='activity-title']"); } },

  welcome_text: { get: function () { return this.element("[data-id='activity-title']"); } },

  create_assignment: { get: function () { return this.element("[data-id='activity-title']"); } },

  assignment_type: { get: function () { return this.element("[data-id='activity-title']"); } },

  assignment_type_description: { get: function () { return this.element("[data-id='activity-title']"); } },

});
