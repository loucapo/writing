/* eslint-disable camelcase */
const pages = [];
const { InstructorSummaryPage } = require('../pages/instructor-summary.page');
pages.instructor_summary = new InstructorSummaryPage();

let page = pages.instructor_summary;
const faker = require('faker');
// TODO: bust these out to here \/
//const ch = require('./core-helper');

exports.define = function(steps) {

  function splitPolocComp(poloc) {
    // shouldnt be giving it >1 '.', as we're effectively making an API to write tests to, be overly explicit.
    if (poloc.split('.').length > 2) { throw new Error(`Only use a single dot in the page-object-locator: ${poloc}`);}
    let [component, element] = poloc.split('.');
    let [comp, compArg] = extractArg(component);
    let [elem, elemArg] = extractArg(element);
    return [comp, compArg, elem, elemArg];
  }

  // PageObject-Locator to PageObject: return [] of WebElements
  // findAll will return the full set of elements,
  async function polocToPO(poloc, findAll = false, allowEmptyResult = false) {
    let result = null;
    if (poloc.includes('.')) {
      let [comp, compArg, elem, elemArg] = splitPolocComp(poloc);
      compArg = compArg || 1;
      elemArg = findAll ? 'all' : (elemArg || 1);
      try {
        result = await page[comp](compArg);
        result = await result[elem](elemArg);
      } catch (error) {
        if (allowEmptyResult) {
          result = findAll ? [] : null;
        } else {
          throw error;
        }
      }
    }
    else {
      let [elem, elemArg] = extractArg(poloc);
      elemArg = findAll ? 'all' : (elemArg || 1);
      try {
        result = await page[elem](elemArg);
      } catch (error) {
        if (allowEmptyResult) {
          result = findAll ? [] : null;
        } else { throw error; }
      }
    }
    return result;
  }

  function extractArg(poloc) {
    const re = /^([_a-zA-Z0-9]*)\((.*)\)$/; // variable(arg)
    let r = poloc.match(re);
    if (r) {
      r[2] = (isNaN(parseInt(r[2]))) ? r[2] : parseInt(r[2]);
      return [r[1], r[2]];
    } else {
      return [poloc, null];
    }
  }

  // TODO: common functions like gimmeNone need to be deduped and shared
  function gimmeNone(arr) {
    expect(arr.length).to.equal(0);
  }

  // TODO: review, ensure it's sane.
  const filterAsync = (array, filter) => {
    return Promise.all(array.map(entry => filter(entry)))
      .then(bits => array.filter(entry => bits.shift()));
  };

  const isViz = el => el.isDisplayed().then(bool => bool);

  /// ///

  //steps.given(/I launch the activity as a[n]? "(.+)"/, user => {
  steps.given(`I launch the activity as an "$user"`, function(user, done) {
    driver.get(marvin.config.baseUrl + '/' + user);
    done();
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
    return driver.wait(() => {
      return page[elem]('all').then(els => els.length === parseInt(count) );
    }, 3500, `Couldn't find ${count} instances of ${elem}`);
  });

  steps.then(/I wait until there (?:are|is) (\d+) "(.+)" visible/, (count, element) => {
    return driver.wait(() => {
      return polocToPO(element, true, true).then(els => {
        if (els.length === 0) {
          return false; }
        return filterAsync(els, isViz).then(results => {
          return (results.length === parseInt(count));
        });
      });
    }, 3500, `Couldn't find ${count} instances of ${element}`);
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
  steps.when(/I click "(.+)"/, function(element) {
    return polocToPO(element)
      .then(el => el.click());
  });

  // TODO: remove me
  steps.when('i add draft', async function() {
    page.add_draft_button.click();
  });

  // NOTE that this is an IS match, not a contains.
  // the text of "some-page-object" is "some other string"      // => returns the 1st match it finds, or throws
  // the text of "some-page-object" [13] is "some other string" // => returns the 13th match it finds, or throws.
  // int arguments are 1-indexed, must be > 0
  // the text of "some-page-object" is ""                       // => empty string also works fine
  // TODO: is it worth it to switch to xregexp to actually get named capture groups?
  steps.then(/the text of "(.*)" should be "(.*)"/, (elem, text) => {
    return polocToPO(elem)
      .then(el => el.getText())
      .then(actualText => text.should.equal(actualText));
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
    return driver.sleep(d * 1000);
  });

  steps.when('I maximize the browser', function() {
    driver.manage().window().maximize();
  });

  steps.when('I reload the page', function() {
    driver.navigate().refresh();
  });

};
