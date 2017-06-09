let rtePage = require('../../pages/NextGen Writer Key/react-rte.js');

exports.define = function(steps) {

  /*
   *	Say Hello
   */
  steps.given('I visit the wysiwyg editor page', function() {
    rtePage.visit();
  });

  steps.when(['I focus the content editor'], function() {
    rtePage.draftEditor.click();
  });

  steps.when(`I type in '$text'`, function(text) {
    rtePage.draftEditor.sendKeys(text);
  });

  steps.then('I should see "$text" in the content editor', function(text) {
    rtePage.draftEditor.getText()
      .then(function(text2) {
        text.should.equal(text2);
      });
  });

  steps.then("I see the rte '$elem'", function(elem) {
    rtePage[elem].isDisplayed().should.eventually.equal(true);
  });

  /*
   *	Embolden Text
   */
  // XXX this doesn't actually use the text it's given- is it supposed to?
  steps.when('I select "$text"', function(text) {
    // TODO: there's like 6 places that reuse this pattern or close to it.
    // put it in a common-steps.js and refactor the tests to fit.
    rtePage.draftEditor.sendKeys(keys.BACK_SPACE.repeat(text.length));
  });

  steps.when('I select all content', function() {
    rtePage.draftEditor.getText()
      .then(text => {
        rtePage.draftEditor.sendKeys(keys.BACK_SPACE.repeat(text.length));
      });
  });

  steps.when('I delete text', function() {
    rtePage.draftEditor.sendKeys(keys.DELETE);
  });

  steps.when('I click the bold button', function() {
    rtePage.button_bold.click();
  });

  // XXX this doesn't actually use the text it's given- is it supposed to?
  steps.then('Text "$text" should have bold styling', function() {
    rtePage.draftEditor.findElement({css: "span[style*='bold']"});
  });

  /*
   *	Italicize Text
   */
  steps.when('I click the italics button', function() {
    rtePage.button_italic.click();
  });

  steps.then('Text "$text" should have italicized styling', function() {
    rtePage.draftEditor.findElement({css: "span[style*='italic']"});
  });

  /*
   *	Monospace Text
   */
  steps.when('I click the monospace button', function() {
    rtePage.button_monospace.click();
  });

  steps.then('Text "$text" should have monospace styling', function() {
    rtePage.draftEditor.findElement({css: "span[style*='monospace;']"});
  });

  /*
   *	Strikethrough Text
   */
  steps.when('I click the strikethrough button', function() {
    rtePage.button_strikethrough.click();
  });

  steps.then('Text "$text" should have strikethrough styling', function() {
    rtePage.draftEditor.findElement({css: "span[style*='line-through;']"});
  });

  /*
   * Unordered List
   */
  steps.given('Enter "$number" lines of text', function(number) {
    rtePage.draftEditor.click();
    for (let i = 0; i < number; i++) {
      rtePage.draftEditor.sendKeys('line ' + i + keys.ENTER);
    }
  });

  steps.when('I click the unordered list button', function() {
    rtePage.button_unordered_list.click();
  });

  steps.then('there should be "$number" unordered list items', function(number) {
    let unorderedListItems = rtePage.draftEditor.findElements({css: 'ul > li'});
    unorderedListItems.length.should.equal(number);
  });

  /*
   * Ordered List
   */
  steps.when('I click the ordered list button', function() {
    rtePage.button_ordered_list.click();
  });

  steps.then('there should be "$number" ordered list items', function(number) {
    let orderedListItems = rtePage.draftEditor.findElements({css: 'ol > li'});
    orderedListItems.length.should.equal(number);
  });

  /*
   * Blockquote
   */
  steps.when('I click the blockquote button', function() {
    rtePage.button_blockquote.click();
  });

  steps.then('Text "happy" should have a blockquote', function() {
    rtePage.draftEditor.findElement({css: 'blockquote'});
  });

  /*
   * Link
   */
  steps.when('I click the link button', function() {
    rtePage.button_link.click();
  });

  steps.when('Add "$link"', function($link) {
    rtePage.linkInput.sendKeys($link + keys.ENTER);
  });

  steps.then('Text "$text" should have a link', function() {
    rtePage.draftEditor.findElement({css: 'a'});
  });

  /*
   * Remove Link
   * Needs work to make sure it can fail
   */
  steps.when('I click the remove link button', function() {
    rtePage.button_remove_link.click();
  });

  steps.then('Text "$text" should not have a link', function() {
    let links = rtePage.draftEditor.findElements({css: 'a'});
    if (links.length !== 0) {
      throw new Error('Anchor tag should not have been found.');
    }
  });

  /*
   *	Normal Header
   */
  steps.then('Text "$text" should have a normal header', function() {
    rtePage.draftEditor.findElement({css: '.public-DraftEditor-content > div > div'});
  });

  /*
   * h1 Heading
   */
  steps.when('I choose a large heading', function() {
    rtePage.dropdown_heading_large.click();
  });

  steps.then('Text "$text" should have a h1 header', function() {
    rtePage.draftEditor.findElement({css: 'h1'});
  });

  /*
   * h2 Heading
   */
  steps.when('I choose a medium heading', function() {
    rtePage.dropdown_heading_medium.click();
  });

  steps.then('Text "$text" should have a h2 header', function() {
    rtePage.draftEditor.findElement({css: 'h2'});
  });

  /*
   * h3 Heading
   */
  steps.when('I choose a small heading', function() {
    rtePage.dropdown_heading_small.click();
  });

  steps.then('Text "$text" should have a h3 header', function() {
    rtePage.draftEditor.findElement({css: 'h3'});
  });

  /*
   * Code Block
   */
  steps.when('I choose a code block', function() {
    rtePage.dropdown_code_block.click();
  });

  steps.then('Text "$text" should have a code block', function() {
    rtePage.draftEditor.findElement({css: "pre[class^='RichTextEditor__block___']"});
  });

  /*
   * Undo
   */
  steps.when('I click the undo button', function() {
    rtePage.button_undo.click();
  });

  steps.then('Text "$text" should not appear', function(happytext) {
    rtePage.draftEditor.getText()
      .then(function(text) {
        text.should.not.equal(happytext);
      });
  });

  /*
   * Redo
   */
  steps.when('I click the redo button', function() {
    rtePage.button_redo.click();
  });

  steps.then('The WYSIWYG editor should be closed', function() {
    rtePage.draftEditor.getAttribute('contenteditable').then(function(text) {
      text.should.equal('false');
    });
  });
};
