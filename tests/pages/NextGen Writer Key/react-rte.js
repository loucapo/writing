var Page = require('marvin-js').Page;

module.exports = new Page({

  activity_prompt_editor: { get: function() { return this.element(".public-DraftEditor-content");}},

  draftEditor: { get: function() { return this.element(".public-DraftEditor-content");}},

  linkInput: { get: function() { return this.element("input[class^='InputPopover__input___']");}},

  button_bold: { get: function() { return this.element("button[title='Bold']");}},

  button_italic: { get: function() { return this.element("button[title='Italic']");}},

  button_monospace: { get: function() { return this.element("button[title='Monospace']");}},

  button_strikethrough: { get: function() { return this.element("button[title='Strikethrough']")}},

  button_unordered_list: { get: function() { return this.element("button[title='UL']")}},

  button_ordered_list: { get: function() { return this.element("button[title='OL']")}},

  button_blockquote: { get: function() { return this.element("button[title='Blockquote']")}},

  button_link: { get: function() { return this.element("button[title='Link']")}},

  button_remove_link: { get: function() { return this.element("button[title='Remove Link']")}},

  dropdown_heading_large: { get: function() { return this.element("option[value='header-one']")}},

  dropdown_heading_medium: { get: function() { return this.element("option[value='header-two']")}},

  dropdown_heading_small: { get: function() { return this.element("option[value='header-three']")}},

  dropdown_code_block: { get: function() { return this.element("option[value='code-block']")}},

  button_undo: { get: function() { return this.element("button[title='Undo']")}},

  button_redo: { get: function() { return this.element("button[title='Redo']")}},

  rte_toolbar: { get: function() { return this.element(".rdw-editor-toolbar");}},

});
