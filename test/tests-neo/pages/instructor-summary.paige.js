/* eslint-disable camelcase */
// tests/pages/home.js
const Paige = require('marvin-js').Paige;
const draftComponent = require('./instructor-summary.komponent.draft');
//const draft = require('./instructor-summary.component.draft');

// TODO: this should be moved into marvin itself once we hammer out usages and names and such
function basePageObj(opts) {
  //return {value(v) {
  return function(v) {
    opts.type = (opts.type || 'css');
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
  };
};
//}

module.exports = new Paige({
  url: { value: '/' },
  add_draft_button: basePageObj({locator: `[data-id='add-draft']`}),
  draft_card: basePageObj({locator: `[data-id='draft-section']`}),
  //draft_card: {get() { return this.element(`[data-id='draft-section']`); } },
  draft_title: basePageObj({ locator: `[class^='Heading__headingText__']`}),

  draft: Paige.componentGenerator(draftComponent, `[data-id='draft-section']`)
  // draft: { get() {
  //   return this.component(draft, `[data-id='draft-section']`);
  // } }

});
