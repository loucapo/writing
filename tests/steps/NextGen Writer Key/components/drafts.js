var page = require('../../pages/NextGen Writer Key/instructor-assignment-summary-page.js');

exports.define = function(steps) {
  steps.given("A new draft will be added above the existing draft", function() {
    page[elem].isDisplayed().should.eventually.equal(true);
    add_draft_counter(1)
  });

  var drafts_count = { get: function () { return this.elements("[data-id='draft-name']"); } };

  function add_draft_counter(newdrafts) {
    var x = { get: function () { return this.elements("[data-id='draft-name']"); } }
    expect(x.length).to.equal(drafts_count.length+newdrafts);
  };

  steps.then("I see a prompt to '$action'", function(action) {
    expect(page[action].length).to.equal(drafts_count.length+1);
  });

  steps.then("The '$button' should be active", function() {
    expect(page[element]).is.active();
  });

  steps.then("the draft tally within header should be increased by one", function() {
    var x = { get: function () { return this.elements("[data-id='draft-name']"); } };
    console.log(x[1]);
    expect(x[1]).to.contain("2");
  });

  steps.then("the last draft should be '$title'", function(title) {
    var x = { get: function () { return this.elements("[data-id='draft-name']"); } };
    expect([x.length]-1).to.contain(title);
  });

  steps.then("I delete '$item'", function(item) {
    page[item].click();
  });

  steps.then("'$draft' should be removed", function(draft) {
    expect(page[draft]).to.not.exist();
  });

  steps.then("the draft tally within header should decrease by one", function() {
    var x = { get: function () { return this.elements("[data-id='draft-name']"); } };
    //x[1] may not even exist?
    expect(x).to.not.contain("2");
  });

  steps.then("the second to last draft should be renamed '$title'", function(title) {
    var x = { get: function () { return this.elements("[data-id='draft-name']"); } };
    expect([x.length]-1).to.contain(title);
  });

  steps.then("I cannot delete '$title'", function(title) {
    expect(page[element]).is.not.active();
  });
};
