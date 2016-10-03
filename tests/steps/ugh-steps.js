var helloPage = require('../pages/ugh.js');

exports.define = function(steps) {
  //var doot = function() { return console.log('dootDOOT!')};

  steps.given("I open an editor", function() {
    helloPage.visit()//.then(doot());
  });

  steps.when("I throw an error", function() {
    throw new Error('throwin\' it!');
  })

  // steps.then("I should see header '$HEADER'", function(header) {
  //   helloPage.heading.getText()
  //     .then(function(text) {
  //       text.should.equal(header);
  //     });
  // });

  // steps.when("I click the button 'Click'", function() {
  //   console.log('CLIKKIT CLIKKIT');
  // });

  // steps.then("I should see a greeting", function() {
  //   console.log('DOOT DOOT')
  // });
}
