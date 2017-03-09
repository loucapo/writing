var page = require('../../pages/NextGen Writer Key/instructor-assignment-summary-page.js');

exports.define = function(steps) {
  steps.given("A new draft will be added above the existing draft", function() {
    page[elem].isDisplayed().should.eventually.equal(true);

  });

  function one_more_draft(arr) {
    var x = { get: function () { return this.elements("[data-id='draft-name']"); } }
    expect(arr.length).to.equal(x+1);
  };

  steps.then("I see a prompt to '$action'", function(action) {
    page.visit();
  });

  steps.then("the trash can on the Final Paper should become activated", function() {
    page.visit();
  });

  steps.then("the draft tally within header should be increased by one", function() {
    page.visit();
  });

  steps.then("the last draft should be '$title'", function(title) {
    page.visit();
  });

  steps.then("I delete '$item'", function(item) {
    page.visit();
  });

  steps.then("'$draft' should be removed", function(draft) {
    page.visit();
  });

  steps.then("the draft tally within header should decrease by one", function() {
    page.visit();
  });

  steps.then("the second to last draft should be renamed '$title'", function(title) {
    page.visit();
  });

  steps.then("I cannot delete '$title'", function(title) {
    expect(page[element]).is.not.active();
  });
};
