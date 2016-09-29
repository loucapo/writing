var rtePage = require('../pages/react-rte.js');
var marvin = require('marvin-js');
var keys = require('selenium-webdriver').Key;
var by = require('selenium-webdriver').By;
var driver = require('marvin-js').session.getDriver();
var should = require('chai').should;

exports.define = function(steps) {

  /*
   *	Say Hello
   */
  steps.given('I visit the wysiwyg wrapper page', function(next) {
    rtePage.visit();
    next();
  })

  steps.when(['I focus the content editor and type in Hello'], function(next) {
    rtePage.draftEditor.click();
    rtePage.draftEditor.sendKeys('Hello');
    next();
  })

  steps.then('I should see Hello in the content editor', function() {
    rtePage.draftEditor.getText().then(function(text) {
      text.should.equal('Hello');
      console.log('Hello done read');
    });
  });

  /*
   *	Embolden Text
   */
  steps.given('I visit the wysiwyg bold button', function() {
    return rtePage.visit();
  });

  steps.when('"$text" is in the editor', function(text) {
    // let's try to encapsulate the step's logic
    return new Promise(function(resolve, reject) {
      rtePage.draftEditor.click();
      rtePage.draftEditor.sendKeys(text);
      // let's try to break this step
      var poops;
      poops.element('asdasdasd');
    }).catch(function(reason) {
      throw 'poops failed';
    });
  });

  steps.when('I select "$text"', function(text) {
    // can't seem to get command+a or control+a to select all
    // let's use shift and many lefts
    var lefts = '';
    for (i = 0; i< text.length; i++) {
      lefts += keys.LEFT;
    }
    rtePage.draftEditor.sendKeys(keys.SHIFT + lefts);
  });

  steps.when('I select all "$text"', function(text) {
    // can't seem to get command+a or control+a to select all
    // let's use shift and many lefts
    var ups = '';
    for (i = 0; i< text.length; i++) {
      ups += keys.UP;
    }
    rtePage.draftEditor.sendKeys(keys.SHIFT + ups);
  });

  steps.when('I click the bold button', function(next) {
    rtePage.button_bold.click();
  });

  steps.then('Text "$text" should have bold styling', function(text) {
    return new Promise(function(resolve, reject) {
      return rtePage.draftEditor.findElement({css: "span[style*='bold']"})
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
      return rtePage.draftEditor.findElement({css: "span[style*='italic']"})
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
      return rtePage.draftEditor.findElement({css: "span[style*='monospace;']"})
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
      return rtePage.draftEditor.findElement({css: "span[style*='line-through;']"})
    });
  });

  /*
   * Unordered List
   */
  steps.given('Enter "$number" lines of text', function($number) {
    rtePage.visit();
    rtePage.draftEditor.click();
    for (i=0; i<$number; i++) {
      rtePage.draftEditor.sendKeys('line ' + i + keys.ENTER);
    }
  });

  steps.when('I click the unordered list button', function() {
    rtePage.button_unordered_list.click();
  });

  steps.then('there should be "$number" unordered list items', function($number) {
    return new Promise(function(resolve, reject) {
      var unordered_list_items = rtePage.draftEditor.findElements({css: "ul > li"});
    }).then(function() {
          return unordered_list_items.length.should.equal($number);
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


}
