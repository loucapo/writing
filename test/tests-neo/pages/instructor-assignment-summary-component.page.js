/* eslint-disable camelcase */
const Page = require('marvin-js').Page;
const Component = require('marvin-js').Component

module.exports = new Component({

  selLanguage: { get: function () { return this.element('.locale select'); } },
  selCurrency: { get: function () { return this.element('.currency select'); } }

});
////////////////////////

module.exports = new Component({

  // the root of a component should have a locator.
  // like, also, shouldn't the root of a page have a locator?  or just the url, which we also forgot.

  dropdown_drafts_submission_grid_title: basePageObj({
    desc: `Available drafts in drop down on submission grid`,
    locator: `[data-id='submission-status-filter'] [data-id='rubric-dropdown'] [class^='MLDropdown__dropdown'] [class^='MLDropdown__dropdownTitle']`
  }),


});
