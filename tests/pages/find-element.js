var Page = require('marvin-js').Page;

module.exports = new Page({

  url: { value: '/activity/13630184-5955-4dbe-9908-ab065f1bcad2' },

  heading: { get: function () { return this.element("[data-id='activity-title']"); } }

});
