var rtePage = require('../pages/react-rte.js');

exports.define = function(steps) {

	steps.given('I visit the wysiwyg wrapper page', function() {
		rtePage.visit();
	});
	
	steps.when(['I focus the content editor and type in Hello'], function() {
		rtePage.draftEditor.click();
		rtePage.draftEditor.sendKeys('Hello');
	});

	steps.then('I should see Hello in the content editor', function() {
		rtePage.draftEditor.getText()
			.then(function(text) {
				text.should.equal('Hello');
			});
	});
}
