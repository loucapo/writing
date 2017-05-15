let Page = require('marvin-js').Page;

module.exports = new Page({

  activity_prompt_editor: { get() { return this.element('.public-DraftEditor-content');}},

  draftEditor: { get() { return this.element('.public-DraftEditor-content');}},

  linkInput: { get() { return this.element("input[class^='InputPopover__input___']");}},

  button_bold: { get() { return this.element("button[title='Bold']");}},

  button_italic: { get() { return this.element("button[title='Italic']");}},

  button_monospace: { get() { return this.element("button[title='Monospace']");}},

  button_strikethrough: { get() { return this.element("button[title='Strikethrough']");}},

  button_unordered_list: { get() { return this.element("button[title='UL']");}},

  button_ordered_list: { get() { return this.element("button[title='OL']");}},

  button_blockquote: { get() { return this.element("button[title='Blockquote']");}},

  button_link: { get() { return this.element("button[title='Link']");}},

  button_remove_link: { get() { return this.element("button[title='Remove Link']");}},

  dropdown_heading_large: { get() { return this.element("option[value='header-one']");}},

  dropdown_heading_medium: { get() { return this.element("option[value='header-two']");}},

  dropdown_heading_small: { get() { return this.element("option[value='header-three']");}},

  dropdown_code_block: { get() { return this.element("option[value='code-block']");}},

  button_undo: { get() { return this.element("button[title='Undo']");}},

  button_redo: { get() { return this.element("button[title='Redo']");}},

  rte_toolbar: { get() { return this.element('.rdw-editor-toolbar');}}

});
