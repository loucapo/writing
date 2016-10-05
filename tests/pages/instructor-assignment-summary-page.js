var Page = require('marvin-js').Page;

module.exports = new Page({


// header

  url: { value: '/activity/13630184-5955-4dbe-9908-ab065f1bcad2' },

  title: { get: function () { return this.element("[data-id='activity-title']"); } },

  type: { get: function () { return this.element("[data-id='activity-desc']"); } },

	rhetoric_genre: { get: function() { return this.element("[data-id='activity-rhetoric-rubric']"); } },

	rubric: { get: function () { return this.element("[data-id='activity-rubric']"); } },

	prompt: { get: function () { return this.element("[data-id='activity-prompt']"); } },

	prompt_edit: { get: function () { return this.element("[data-id='activity-desc'] > a"); } },


// sub menu

	sub_menu: { get: function () { return this.element("[data-id='assignment-menu']"); } },


// draft sequence

	draf: { get: function () { return this.element("[data-id='activity-prompt']"); } },

});

