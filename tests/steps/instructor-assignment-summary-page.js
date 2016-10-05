var page = require('../pages/instructor-assignment-summary-page.js');
var marvin = require('marvin-js');
var should = require('chai').should;
var expect = require('chai').expect;

exports.define = function(steps) {
  steps.given("I visit the activity page", function() {
    page.visit();
  });

	steps.then('I should see the Assignment Header elements', function() {
		expect(page.title).to.exist;
		expect(page.type).to.exist;
		//expect(assignmentSummaryPage.course).to.exist;
	});

	steps.then('I should see the Assignment Details elements', function() {
		expect(page.rhetoric_genre).to.exist;
		//expect(page.rubric).to.exist;
		expect(page.prompt).to.exist;
		//expect(page.prompt_edit).to.exist;
	});
  
}
