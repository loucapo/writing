/* eslint-disable camelcase */
const Paige = require('marvin-js').Paige;
const Komponent = require('marvin-js').Komponent

// TODO: this should be moved into marvin itself once we hammer out usages and names and such
function basePageObj(opts) {
  return {value(v) {
    opts.type = (opts.type || 'css');
    console.log("OOPS?");
    console.log(opts.locator);
    switch (typeof v) {
      case 'undefined':
        return this.element(opts.locator, opts.type);
      case 'string':
        // this is surprisingly vital even for things that guaranteed only appear once
        // .elements returns [], so can be empty.  .element throws if none are found
        // so you MUST use .elements to check for 0 on the page.
        if (v === 'all') { return this.elements(opts.locator, opts.type); }

        // used for when you need to reuse, transform, or combine the locator
        // but obv don't want to hardcode it in the steps
        if (v === 'opts') { return opts; }

        else {throw new Error(`Don't know how to '${v}' for {${opts.type}}: ${opts.locator}}`); }
      case 'number':
        return this.elements(opts.locator, opts.type).then(els => els[v - 1]);
      default:
        console.log(typeof v);
        console.log(v);
        throw new Error('WUTINTARNATION!');
    }
  }};
}

class Draft extends Komponent {
  get url() {}

}

module.exports = Draft;


//module.exports = new Komponent({
let a = new Komponent({

  // selLanguage: { get: function () { return this.element('.locale select'); } },
  // selCurrency: { get: function () { return this.element('.currency select'); } }

  // draft_card: basePageObj({
  //   desc: `Top container for a draft on the summary page`,
  //   locator: `[data-id='draft-section']`
  // }),

  //title: { get() { return this.element(`[class^='Heading__headingText__']`); }},
  title: basePageObj({
    desc: `Top container for a draft on the summary page`,
    locator: `[class^='Heading__headingText__']`
  }),

  reflection_question: basePageObj({
    desc: ``,
    locator: `[data-id="reflections-list"] li`
  }),

  add_draft_goals: basePageObj({
    desc: `Button to display the modal to select the primary goals for this draft`,
    locator: `[data-id='add-draft-goal']`
  }),

  edit_draft_goals: basePageObj({
    desc: ``,
    locator: `[data-id='draft-goal-edit']`
  }),

  saved_draft_goal: basePageObj({
    desc: ``,
    locator: `//*[@data-id='drafts-goal-list']/li[not(./a[@data-id='add-draft-goal'])]`,
    type: 'xpath'
  }),

  add_reflection_questions: basePageObj({
    desc: ``,
    locator: `[data-id='add-reflections']`
  }),

  reflection_question: basePageObj({
    desc: ``,
    locator: `[data-id='reflections-list'] li`
  }),
  edit_reflections: basePageObj({
    desc: ``,
    locator: `[data-id='reflections-edit']`
  }),

});
