let page = require('../pages/instructor-assignment-summary-page');
//let rtePage = require('../../pages/NextGen Writer Key/react-rte.js');
const faker = require('faker');

exports.define = function(steps) {

  // TODO: common functions like gimmeNone need to be deduped and shared
  function gimmeNone(arr) {
    expect(arr.length).to.equal(0);
  }

  // TODO: review, ensure it's sane.
  const filterAsync = (array, filter) =>
        Promise.all(array.map(entry => filter(entry)))
        .then(bits => array.filter(entry => bits.shift()));

  const isViz = el => el.isDisplayed().then(bool => bool);

  steps.given(/I launch the activity as a[n] "(.+)"/, function(user) {
    driver.get(marvin.config.baseUrl + '/' + user);
  });

  steps.given(/I create a new activity as a[n] "(.+)"/, function(user) {
    const uuid = faker.random.uuid();
    const createUrl = `${marvin.config.baseUrl}/${user}/${uuid}`;
    driver.get(createUrl);
  });

  // TODO: move this one out of core.steps.js
  steps.then(/the draft goal summary list should have (\d+) goal/, function(goals) {
    goals = parseInt(goals);
    page.draft_goal_summary_list(1).then(el => el.getText()).then(text => {
      if (text === '') {
        expect(0).to.equal(goals);
      } else {
        let lead = `Selected Draft Goals: `;
        expect(text.startsWith(lead)).to.be.true;
        let blocks = text.substring(lead.length, text.length).split(`,`);
        expect(blocks.length).to.equal(goals);
      }
    });
  });

  steps.then(/I wait until there (?:are|is) (\d+) "(.+)"$/, (count, elem) => {
    driver.wait(() => {
      return page[elem]('all').then(els => els.length === parseInt(count) );
    }, 3500, `Couldn't find ${count} instances of ${elem}`);
  });

  steps.then(/I wait until there (?:are|is) (\d+) "(.+)" visible/, (count, elem) => {
    driver.wait(() => {
      return page[elem]('all').then(els => {
        return filterAsync(els, isViz).then(results => {
          return (results.length === parseInt(count));
        });
      });
    }, 3500, `Couldn't find ${count} instances of ${elem}`);
  });

  // TODO: doc this
  steps.then(/I delete all text in "(.+)"(?:\s*\[(\w*)\])?/, function(element, arg) {
    if (arg === undefined) { arg = 1; }
    arg = (isNaN(parseInt(arg))) ? arg : parseInt(arg);
    page[element](arg).then(el => el.clear());
  });

  //
  // PLEASE NOTE as always, an element will match if it exists in the dom _at all_, not only if it's currently visible.
  // I type "buncha text" in "some-page-object"       // => returns the 1st match it finds, or throws
  // I type "buncha text" in "some-page-object" [13]  // => returns the 13th match it finds, or throws.  must be > 0
  // I type "buncha text" in "some-page-object" [all] // => no, stop, why would you do this?  don't do this.
  steps.then(/I type "(.*)" in "(.*)"(?:\s*\[(\w*)\])?/, (input, elem, arg) => {
    // TODO: i bet these two lines get repeated a whoooole bunch and should be pulled out.
    if (arg === undefined) { arg = 1; }
    arg = (isNaN(parseInt(arg))) ? arg : parseInt(arg);
    page[elem](arg).then(el => el.sendKeys(input));
  });

  // TODO: doc this
  steps.when(/I click "(.+)"(?:\s*\[(\w*)\])?/, function(element, arg) {
    if (arg === undefined) { arg = 1; }
    arg = (isNaN(parseInt(arg))) ? arg : parseInt(arg);
    page[element](arg).then(el => el.click());
  });

  // NOTE that this is an IS match, not a contains.
  // the text of "some-page-object" is "some other string"      // => returns the 1st match it finds, or throws
  // the text of "some-page-object" [13] is "some other string" // => returns the 13th match it finds, or throws.
  // int arguments are 1-indexed, must be > 0
  // the text of "some-page-object" is ""                       // => empty string also works fine
  // TODO: is it worth it to switch to xregexp to actually get named capture groups?
  steps.then(/the text of "(.*)"(?:\s*\[(.*)\])? should be "(.*)"/, (elem, arg, text) => {
    // without named groups you do this dance
    if (text === undefined) {
      text = arg;
      arg = 1;
    }
    arg = (isNaN(parseInt(arg))) ? arg : parseInt(arg);
    page[elem](arg).then(el => el.getText())
      .then(actualText => { text.should.equal(actualText); });
  });

  // NOTE that this is an INCLUDES match, not an IS.
  // TODO: is it worth it to switch to xregexp to actually get named capture groups?
  steps.then(/the text of "(.*)"(?:\s*\[(.*)\])? should include "(.*)"/, (elem, arg, text) => {
    if (text === undefined) {
      text = arg;
      arg = 1;
    }
    arg = (isNaN(parseInt(arg))) ? arg : parseInt(arg);
    page[elem](arg).then(el => el.getText())
      .then(actualText => { actualText.should.have.string(text); });
  });

  steps.then('I should see a fresh assignment', function() {
    // FIXME: do it
    console.log('TODO check a fresh assignment');
  });

  steps.then('I sleep for $d seconds', function(d) {
    driver.sleep(d * 1000);
  });

  steps.when('I reload the page', function() {
    driver.navigate().refresh();
  });

};
