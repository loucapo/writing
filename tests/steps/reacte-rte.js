var rtePage = require('../pages/react-rte.js');
var moonraker = require('moonraker');
var keys = require('selenium-webdriver').Key;
var by = require('selenium-webdriver').By;
var driver = require('moonraker').session.getDriver();

exports.define = function(steps) {

	/*
	 *	Say Hello
	 */
	steps.given('I visit the wysiwyg wrapper page', function(next) {
		rtePage.visit();
		next();
	})
	
	.when(['I focus the content editor and type in Hello'], function(next) {
		rtePage.draftEditor.click();
		rtePage.draftEditor.sendKeys('Hello');
		next();
	})

	.then('I should see Hello in the content editor', function() {
		rtePage.draftEditor.getText().then(function(text) {
			text.should.equal('Hello');
			console.log('Hello done read');
		});
	});

	/*
	 *	Embolden Text
	 */
	steps.given('I visit the wysiwyg bold button', function(next) {
		rtePage.visit();
//		next();
	});
	steps.when('Text-Bold is in the editor', function(next) {
		rtePage.draftEditor.click();
		rtePage.draftEditor.sendKeys('Text-Bold')
		.then(function(next) {
			console.log('write the bold text');
//			next();
		});
	});
	steps.when('I select Text-Bold', function() {
		console.log('select the bolds');
		var key_chord = keys.chord(keys.COMMAND, 'a');
		var keysWait = rtePage.draftEditor.sendKeys(key_chord);
		keysWait.then(function(val) {
			console.log('keychord success');
		},
		function(err) {
			console.log('error : ' + err);
		})
		.catch(function(reason) {
			console.log('poop ' + reason);
		});
	});
	steps.when('I click the bold button', function(next) {
		console.log('click button?');
		console.log('button found!');
		rtePage.button_bold.click();
		console.log('clicked the bold button');
	});
	steps.then('Text should have bold styling', function(next) {
		console.log('assert teh bolds');

		console.log(rtePage.draftEditor);

		var bold_span = rtePage.findElement("span[style^='font-wieght: bold;']");
		//then(function() {
			console.log(bold_span);
		console.log('found bold span');
		//});
		//var bold_span = rtePage.draftEditor.findElement(By.css("span[style*='bold;']"));
		//bold_span.length.should.equal(1);
		console.log('did we find what we were looking for?');
		next();
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
