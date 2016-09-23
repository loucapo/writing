var Page = require('moonraker').Page;

module.exports = new Page({

  url: { value: '/editor' },

  draftEditor: { get: function() { return this.element(".public-DraftEditor-content")}},

});
