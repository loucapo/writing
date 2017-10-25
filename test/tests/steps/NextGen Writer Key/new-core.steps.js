/* eslint-disable camelcase */
const pages = [];
const { InstructorSummaryPage } = require('../../pages/NextGen Writer Key/instructor-summary.page');
const { StudentSummaryPage } = require('../../pages/NextGen Writer Key/student-summary.page');
const { InstructorFeedbackPage } = require('../../pages/NextGen Writer Key/instructor-feedback-tool.page');

pages.instructor_summary = new InstructorSummaryPage();
pages.student_summary = new StudentSummaryPage();
pages.instructor_feedback = new InstructorFeedbackPage();

let page = pages.instructor_summary;
const faker = require('faker');
const fs = require('fs');
// TODO: bust these out to here \/
//const ch = require('./core-helper');

exports.define = function(steps) {

  function rgbaToHex(rgba) {
    rgba = rgba.slice(5, -1).split(',');
    rgba = rgba.map(x => {
      x = parseInt(x.trim()).toString(16);
      return (x.length === 1) ? `0${x}` : x;
    });
    return `#${rgba[0]}${rgba[1]}${rgba[2]}`;
  }

  function splitPolocComp(poloc) {
    // shouldnt be giving it >1 '.', as we're effectively making an API to write tests to, be overly explicit.
    if (poloc.split('.').length > 2) { throw new Error(`Only use a single dot in the page-object-locator: ${poloc}`);}
    let [component, element] = poloc.split('.');
    let [comp, compArg] = extractArg(component);
    let [elem, elemArg] = extractArg(element);
    return [comp, compArg, elem, elemArg];
  }

  async function polocToPO(poloc) {
    let result = null;
    if (poloc.includes('.')) {
      let [comp, compArg, elem, elemArg] = splitPolocComp(poloc);
      compArg = compArg || 1;
      elemArg = elemArg || 1;
      let result = await page[comp](compArg);
      return result[elem](undefined);
    } else {
      let [elem, elemArg] = extractArg(poloc);
      elemArg = elemArg || 1;
      return page[elem](undefined);
    }
  }

  // PageObject-Locator to PageObject: return [] of WebElements
  // findAll will return the full set of elements,
  async function polocToElem(poloc, findAll = false, allowEmptyResult = false) {
    let result = null;
    if (poloc.includes('.')) {
      let [comp, compArg, elem, elemArg] = splitPolocComp(poloc);
      compArg = compArg || 1;
      elemArg = findAll ? 'all' : (elemArg || 1);
      try {
        result = await page[comp](compArg);
        if (!result[elem]) {
          console.log(`No such object ${elem} found defined on component ${comp}`);
          throw new Error(`No such object ${elem} found defined on component ${comp}`);
        }
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

  const isDisabled = el => {
    return el.getAttribute('disabled').then((attributeValue) => {
      return !!attributeValue;
    });
  }

  steps.given(/I launch the activity as a[n]? "(.+)"/, async function(user) {
    driver.get(marvin.config.baseUrl + '/' + user);
    if (user === 'student') { page = pages.student_summary; }
    if (user === 'instructor') { page = pages.instructor_summary; }
    await driver.sleep(2000);

  });

  steps.when(/Changing to using page "(.+)"/, function(newPage, done) {
    page = pages[newPage];
    done();
  });

  steps.given(/I create a new activity as a[n] "(.+)"/, function(user, done) {
    const uuid = faker.random.uuid();
    const createUrl = `${marvin.config.baseUrl}/${user}/${uuid}`;
    driver.get(createUrl);
    done();
  });

  // TODO: move this one out of core.steps.js
  steps.then(/the draft goal summary list should have (\d+) goal/, function(goals) {
    goals = parseInt(goals);
    page.draft_goals_modal(1).goal_summary_list(1).then(el => el.getText()).then(text => {
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

  steps.then(/I wait until there (?:are|is) (\d+) "(.+)"$/, (count, element) => {
    return driver.wait(() => {
      return polocToElem(element, true, true)
        .then(els => (els.length === parseInt(count)));
    }, 3500, `Couldn't find ${count} instances of ${element}`);
  });

  steps.then(/I wait until there (?:are|is) (\d+) "(.+)" visible/, (count, element) => {
    count = parseInt(count);
    return driver.wait(() => {
      return polocToElem(element, true, true).then(els => {
        if (els.length === 0) {
          if (count === 0) { return true; } // 0 present necessitates 0 visible
          return false; }
        return filterAsync(els, isViz).then(results => {
          return (results.length === count);
        });
      });
    }, 3500, `Couldn't find ${count} instances of ${element}`);
  });

  // TODO: doc this
  steps.then(/I delete all text in "(.+)"/, function(poloc) {
    return polocToElem(poloc).then(el => el.clear());
  });

  //
  // PLEASE NOTE as always, an element will match if it exists in the dom _at all_, not only if it's currently visible.
  // I type "buncha text" in "some-page-object"       // => returns the 1st match it finds, or throws
  // I type "buncha text" in "some-page-object(1)"    // => identical to the above
  // I type "buncha text" in "some-page-object(4)"    // => returns the 4th match it finds, or throws
  // I type "buncha text" in "some-page-component.some-page-object        // => returns the first object match scoped under the first component match
  // I type "buncha text" in "some-page-component(1).some-page-object(1)  // => identical to the above
  // I type "buncha text" in "some-page-component(2).some-page-object(2)  // => returns the 2nd object match scoped under the 2nd component match
  steps.then(/I type "(.*)" in "(.*)"/, (input, poloc) => {
    return polocToElem(poloc).then(el => el.sendKeys(input));
  });

  // TODO: doc this
  steps.when(/I click "(.+)"/, function(element) {
    return polocToElem(element).then(el => el.click());
  });

  // NOTE that this is an IS match, not a contains.
  steps.then(/the text of "(.*)" should be "(.*)"/, (elem, text) => {
    return polocToElem(elem)
      .then(el => el.getText())
      .then(actualText => text.should.equal(actualText));
  });

  // NOTE that this is an INCLUDES match, not an IS.
  steps.then(/the text of "(.*)" should include "(.*)"/, (elem, text) => {
    return polocToElem(elem)
      .then(el => el.getText())
      .then(actualText => actualText.should.have.string(text));
  });

  // NOTE that this is an INCLUDES match, not an IS.
  steps.then(/the text of "(.*)" should not include "(.*)"/, (elem, text) => {
    return polocToElem(elem)
      .then(el => el.getText())
      .then(actualText => actualText.should.not.have.string(text));
  });

  steps.then('I should see a fresh assignment', function() {
    // FIXME: do it
    console.log('TODO check a fresh assignment');
  });

  steps.then('I sleep for $d seconds', function(d) {
    return driver.sleep(d * 1000);
  });

  steps.when('I maximize the browser', function() {
    return driver.manage().window().maximize();
  });

  let rangySelectStartTextToEndText =
      // TODO: make rangy only subselect from the text of `element`, instead of the entire page.
    `function rangySelectStartTextToEndText(startText, endText, selector) {
    let sel = rangy.createRange();
    let rgx = new RegExp(startText.concat("(.*)", endText));

    sel.findText(rgx);
    sel.select();
    let e = new MouseEvent("mousedown", {
      bubbles: true,
      cancelable: true,
      view: window
    });
    let elem = document.querySelector(selector);
    elem.dispatchEvent(e);
    e = new MouseEvent("mouseup", {
      bubbles: true,
      cancelable: true,
      view: window
    });
    elem.dispatchEvent(e);
    return;
  }`;

  async function loadAndExecuteScript(files, strings) {
    let scripts = files.map(scr => fs.readFileSync(marvin.config.stepsDir + '/../external/' + scr, 'utf8'));
    let execStr = scripts.reduce(function(full, part) {
      return full.concat(`\r\n`, part);
    }, ``);
    execStr = strings.reduce(function(full, part) {
      return full.concat(`\r\n`, part);
    }, execStr);
    return await driver.executeScript(execStr);
  }

  async function selectStartTextToEndText(startText, endText, selector) {
    /*eslint-disable indent */
    let scripts = ['rangy-core.js', 'rangy-textrange.js'];
    return await loadAndExecuteScript(scripts,
                                      [rangySelectStartTextToEndText,
                                       `return rangySelectStartTextToEndText("${startText}", "${endText}", "${selector}");`]);
    /*eslint-enable indent */
  }

  steps.when(/I select "(.*)" text/, async function(element) {
    let pageObject = await polocToPO(element);
    return await selectStartTextToEndText(0, 0, pageObject.locator);
  });

  steps.when(/I select text from "(.*)" to "(.*)" in "(.*)"/, async function(startText, endText, element) {
    let pageObject = await polocToPO(element);
    return await selectStartTextToEndText(startText, endText, pageObject.locator);
  });

  steps.when('I delete all content on the draft editor', function() {
    let elem;
    page.draft_area(1).then(el => {
      elem = el;
      return el.getText();
    }).then(text => {
      elem.sendKeys(keys.BACK_SPACE.repeat(text.length));
    });
  });

  steps.then(/the color of "(.*)" should be "(.*)"/, (poloc, color) => {
    return polocToElem(poloc).then(el => {
      return el.getCssValue('background-color');
    }).then(actualColor => {
      expect(rgbaToHex(actualColor)).to.equal(color);
    });
  });

  steps.when('I reload the page', function() {
    return driver.navigate().refresh();
  });

  steps.when(/I right click "(.+)"/, function(element) {
    return polocToElem(element).then(el => {
      return driver.actions()
        .click(el, selenium.Button["RIGHT"])
        .perform();

    });
  });

  steps.then(/"(.+)" should be disabled/, (element) => {
    return polocToElem(element).then(el => {
      return isDisabled(el).then(isDisabled => {
        return expect(isDisabled).to.equal(true);
      });
    });
  });
};
