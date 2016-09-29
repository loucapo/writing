var rtePage = require('../pages/react-rte.js');
var marvin = require('marvin-js');
var keys = require('selenium-webdriver').Key;
var by = require('selenium-webdriver').By;
var driver = require('marvin-js').session.getDriver();
var expect = require('chai').expect;

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

  steps.when('I click the bold button', function(next) {
    rtePage.button_bold.click();
  });

  steps.then('Text "$text" should have bold styling', function(text) {
    return new Promise(function(resolve, reject) {
      return rtePage.draftEditor.findElement({css: "span[style*='bold']"})
        .then(function(span) {
	  return span.getAttribute('style')
            .then(function(style) {
              // yeah, pretty much redundant
	      return expect(style).to.have.string('bold');
              // but we should assert on the contents of the string?  meh.
	});
      });
    });
  });

  /*
   *	Italicize Text
   */
  steps.given('Text-Italics is in the editor', function() {
    rtePage.visit();
    rtePage.draftEditor.click().sendKeys('Text-Italics');
  });
  steps.when('I select Text-Italics', function() {
    rtePage.sendKeys(Keys.chord(Keys.COMMAND, 'a'));
  });
  steps.when('I click the italic button', function() {
    rtePage.button_italic.click();
  });
  steps.then('Text should have italic styling', function() {
    var italic_span = rtePage.draftEditor.findElement(By.css("span[style*='italic;']"));
    italic_span.length.should.equal(1);
  });

  /*
   *	Monospace Text
   */
  steps.given('Text-Monospace is in the editor', function() {
    rtePage.visit();
    rtePage.draftEditor.click().sendKeys('Text-Monospace');
  });
  steps.when('I select Text-Monospace', function() {
    rtePage.sendKeys(Keys.chord(Keys.COMMAND, 'a'));
  });
  steps.when('I click the monospace button', function() {
    rtePage.button_monospace.click();
  });
  steps.then('Text should have monospace styling', function() {
    var monospace_span = rtePage.draftEditor.findElement(By.css("span[style*='monospace;']"));
    monospace_span.length.should.equal(1);
    assert.equal(monospace_span, 1);
  });

  /*
   *	Strikethrough Text
   */
  steps.given('Text-Strikethrough is in the editor', function() {
    rtePage.visit();
    rtePage.draftEditor.click().sendKeys('Text-Strikethrough');
    next();
  });
  steps.when('I select Text-Strikethrough', function() {
    rtePage.sendKeys(Keys.chord(Keys.COMMAND, 'a'));
    next();
  });
  steps.when('I click the strikethrough button', function() {
    // break the test
    //rtePage.button_strikethrough.click();
    next();
  });
  steps.then('Text should have strikethrough styling', function() {
    var strikethrough_span = rtePage.draftEditor.findElement(By.css("span[style*='strikethrough;']"));
    strikethrough_span.length.should.equal(1);
    assert.equal(strikethrough_span.length, 1);
    next();
  });

  /*
   * Unordered List
   */
  steps.given('3 lines exist to become an unordered list', function() {
    rtePage.visit();
    rtePage.draftEditor.click();
    for (i=0; i<3; i++) {
      rtePage.draftEditor.sendKeys('line ' + i + Keys.ENTER);
    }
  });
  steps.when('I select the 3 lines for unordered list', function() {
    rtePage.sendKeys(Keys.chord(Keys.COMMAND, 'a'));
  });
  steps.when('I click the unordered list button', function() {
    rtePage.button_unordered_list.click();
  });
  steps.when('I add one more unordered line', function() {
    // break the test
    rtePage.draftEditor.click().sendKeys(Keys.Enter + 'line 4');
    rtePage.draftEditor.click().sendKeys(Keys.Enter + 'line 4' + Keys.ENTER + Keys.ENTER);
  });
  steps.then('there should be 4 unordered list items', function() {
    var unordered_list_items = rtePage.draftEditor.findElements("ul > li");
    unordered_list_items.length.should.equal(4);
    assert.equal(unordered_list_items, 4);
    console.log(unordered_list_items.length);
  });

}
