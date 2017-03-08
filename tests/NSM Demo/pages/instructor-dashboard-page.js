var Page = require('marvin-js').Page;

module.exports = new Page({

  url: { value: '/dashboard' },

  dashboard_title: { get: function () { return this.element("[data-id='credentials-title']"); } },

  course_title: { get: function () { return this.element("[data-id='class-title']"); } },

  writing_center_welcome: { get: function () { return this.element("[data-id='dashboard-heading']"); } },

  welcome_text: { get: function () { return this.element("[data-id='dashboard-introductory-text']"); } },

  create_assignment: { get: function () { return this.element("[data-id='create-assignment-button']"); } },

  assignment_type: { get: function () { return this.element("[data-id='drafting-revising-assignment-header']"); } },

  assignment_type_description: { get: function () { return this.element("[data-id='drafting-revising-assignment-explanation']"); } },

});
