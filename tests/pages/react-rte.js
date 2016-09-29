var Page = require('marvin-js').Page;

module.exports = new Page({

  url: { value: '/editor' },

  draftEditor: { get: function() { return this.element(".public-DraftEditor-content");}},

  button_bold: { get: function() { return this.element("button[title='Bold']");}},

  button_italic: { get: function() { return this.element("button[title='Italic']");}},

  button_monospace: { get: function() { return this.element("button[title='Monospace']");}},

  button_strikethrough: { get: function() { return this.element("button[title='Strikethrough']")}},

  button_unordered_list: { get: function() { return this.element("button[title='UL']")}},

  button_ordered_list: { get: function() { return this.element("button[title='OL']")}},
});
