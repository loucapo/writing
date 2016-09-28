var Page = require('moonraker').Page;

module.exports = new Page({

  url: { value: '/editor' },

  draftEditor: { get: function() { return this.element(".public-DraftEditor-content");}},

  button_bold: { get: function() { return this.element("button[title='Bold']");}},

/*
  button_bold: { get: function() { return this.element(By.xpath("//*[contains(@title, 'Bold')]"))}},
  button_italic: { get: function() { return this.element(By.css("[class^='IconButton__icon-italic___']"))}},
  button_monospace: { get: function() { return this.element(By.css("[class^='IconButton__icon-monospace___']"))}},
  button_strikethrough: { get: function() { return this.element(By.css("[class^='IconButton__icon-strikethrough___']"))}},
  button_unordered_list: { get: function() { return this.element(By.css("[class^='IconButton__icon-unordered-list-item___']"))}},
*/
});
