var rtePage = require('../../pages/NextGen Writer Key/react-rte.js');

//  don't actually require bluebird here or anywhere
// to remove it though, this file needs to be rewritten
// but then the tests here are waiting to be migrated elsewhere
// whenever the editor actually comes back...
var Promise = require('bluebird');

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

  steps.when(['I type in "$text"'], function(text) {
    rtePage.draftEditor.sendKeys(text);
  });

  steps.then('I should see "$text" in the content editor', function(text) {
    rtePage.draftEditor.getText().then(function(text) {
      text.should.equal(text);
    });
  });

  steps.then("I see the rte '$elem'", function(elem) {
    rtePage[elem].isDisplayed().should.eventually.equal(true);
  });

  /*
   *	Embolden Text
   */
  steps.when('I select "$text"', function(text) {
    // can't seem to get command+a or control+a to select all
    // let's use shift and many lefts
    var lefts = '';
    for (i = 0; i< text.length; i++) {
      lefts += keys.LEFT;
    }
    rtePage.draftEditor.sendKeys(keys.SHIFT + lefts);
  });

  steps.when('I select all content', function() {
    // can't seem to get command+a or control+a to select all
    // let's use shift and many lefts
    rtePage.draftEditor.getText()
      .then(function(content) {
        var lefts = '';
        var content_length = content.length + 1;
        for (i = 0; i < content_length; i++) {
	  lefts += keys.LEFT;
        }
        rtePage.draftEditor.sendKeys(keys.SHIFT + lefts);
      });
  });

  steps.when('I delete text', function() {
    rtePage.draftEditor.sendKeys(keys.DELETE);
  });

  steps.when('I click the bold button', function(next) {
    rtePage.button_bold.click();
  });

  steps.then('Text "$text" should have bold styling', function(text) {
    return new Promise(function(resolve, reject) {
      return rtePage.draftEditor.findElement({css: "span[style*='bold']"});
    });
  });

  /*
   *	Italicize Text
   */
  steps.when('I click the italics button', function() {
    rtePage.button_italic.click();
  });

  steps.then('Text "$text" should have italicized styling', function() {
    return new Promise(function(resolve, reject) {
      return rtePage.draftEditor.findElement({css: "span[style*='italic']"});
    });
  });

  /*
   *	Monospace Text
   */
  steps.when('I click the monospace button', function() {
    rtePage.button_monospace.click();
  });

  steps.then('Text "$text" should have monospace styling', function() {
    return new Promise(function(resolve, reject) {
      return rtePage.draftEditor.findElement({css: "span[style*='monospace;']"});
    });
  });

  /*
   *	Strikethrough Text
   */
  steps.when('I click the strikethrough button', function() {
    rtePage.button_strikethrough.click();
  });

  steps.then('Text "$text" should have strikethrough styling', function() {
    return new Promise(function(resolve, reject) {
      return rtePage.draftEditor.findElement({css: "span[style*='line-through;']"});
    });
  });

  /*
   * Unordered List
   */
  steps.given('Enter "$number" lines of text', function(number) {
    rtePage.draftEditor.click();
    for (i=0; i<number; i++) {
      rtePage.draftEditor.sendKeys('line ' + i + keys.ENTER);
    }
  });

  steps.when('I click the unordered list button', function() {
    rtePage.button_unordered_list.click();
  });

  steps.then('there should be "$number" unordered list items', function(number) {
    return new Promise(function(resolve, reject) {
      var unordered_list_items = rtePage.draftEditor.findElements({css: "ul > li"});
    }).then(function() {
      return unordered_list_items.length.should.equal(number);
    });
  });

  /*
   * Ordered List
   */
  steps.when('I click the ordered list button', function() {
    rtePage.button_ordered_list.click();
  });

  steps.then('there should be "$number" ordered list items', function($number) {
    return new Promise(function(resolve, reject) {
      var ordered_list_items = rtePage.draftEditor.findElements({css: "ol > li"});
    }).then(function() {
      return ordered_list_items.length.should.equal($number);
    });
  });

  /*
   * Blockquote
   */
  steps.when('I click the blockquote button', function() {
    rtePage.button_blockquote.click();
  });

  steps.then('Text "happy" should have a blockquote', function() {
    return new Promise(function(resolve, reject) {
      return rtePage.draftEditor.findElement({css: "blockquote"});
    });
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
    return new Promise(function(resolve, reject) {
      return rtePage.draftEditor.findElement({css: "a"});
    });
  });

  /*
   * Remove Link
   * Needs work to make sure it can fail
   */
  steps.when('I click the remove link button', function() {
    rtePage.button_remove_link.click();
  });

  steps.then('Text "$text" should not have a link', function() {
    return new Promise(function(resolve, reject) {
      return rtePage.draftEditor.findElements({css: "a"})
        .then(function(links) {
	  if (links.length !== 0) {
	    throw new Error('Anchor tag should not have been found.');
	  }
        });
    });
  });

  /*
   *	Normal Header
   */
  steps.then('Text "$text" should have a normal header', function() {
    return new Promise(function(resolve, reject) {
      return rtePage.draftEditor.findElement({css: ".public-DraftEditor-content > div > div"});
    });
  });

  /*
   * h1 Heading
   */
  steps.when('I choose a large heading', function() {
    rtePage.dropdown_heading_large.click();
  });

  steps.then('Text "$text" should have a h1 header', function() {
    return new Promise(function(resolve, reject) {
      return rtePage.draftEditor.findElement({css: "h1"});
    });
  });

  /*
   * h2 Heading
   */
  steps.when('I choose a medium heading', function() {
    rtePage.dropdown_heading_medium.click();
  });

  steps.then('Text "$text" should have a h2 header', function() {
    return new Promise(function(resolve, reject) {
      return rtePage.draftEditor.findElement({css: "h2"});
    });
  });

  /*
   * h3 Heading
   */
  steps.when('I choose a small heading', function() {
    rtePage.dropdown_heading_small.click();
  });

  steps.then('Text "$text" should have a h3 header', function() {
    return new Promise(function(resolve, reject) {
      return rtePage.draftEditor.findElement({css: "h3"});
    });
  });

  /*
   * Code Block
   */
  steps.when('I choose a code block', function() {
    rtePage.dropdown_code_block.click();
  });

  steps.then('Text "$text" should have a code block', function() {
    return new Promise(function(resolve, reject) {
      return rtePage.draftEditor.findElement({css: "pre[class^='RichTextEditor__block___']"});
    });
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

  steps.then("The WYSIWYG editor should be closed", function() {
    rtePage.draftEditor.getAttribute("contenteditable").then(function(text) {
      text.should.equal("false");
    });
  });
};
