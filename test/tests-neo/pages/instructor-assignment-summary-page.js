/* eslint-disable camelcase */
const Page = require('marvin-js').Page;

// TODO: this should be moved into marvin itself once we hammer out usages and names and such
function basePageObj(opts) {
  return {value(v) {
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
  }};
}

module.exports = new Page({

  add_draft_button: basePageObj({
    desc: `Button to add another draft to the current assignment`,
    locator: `[data-id='add-draft']`
  }),

  add_draft_goals_button: basePageObj({
    desc: `Button to display the modal to select the primary goals for this draft`,
    locator: `[data-id='add-draft-goal]`
  }),

  add_draft_instructions: basePageObj({
    desc: `Button that makes the draft instructions editable for the xth draft on the summary page`,
    locator: `//*[@data-id='add-instructions']`,
    type: 'xpath'
  }),

  draft_card: basePageObj({
    desc: `Top container for a draft on the summary page`,
    locator: `[data-id='draft-section']`
  }),

  draft_delete_button: basePageObj({
    desc: `A button to display a modal prompting for confirmation to delete this draft from the assignment`,
    locator: `[data-id='draft-delete']`
  }),

  draft_instructions: basePageObj({
    desc: `Text of the Draft Instructions displayed (non-editable)`,
    locator: `[data-id='draft-instructions']`
  }),

  save_draft_instructions: basePageObj({
    desc: `Button to save Draft Instructions for the current draft.  Only visible when instructions are editable.`,
    locator: `[data-id='save-draft-instructions']`
  }),

  draft_instructions_textarea: basePageObj({
    desc: `The editable textarea where draft instructions for the current draft can be added and edited`,
    locator: `[data-id='textarea-draft-instructions']`
  }),

  cancel_draft_instructions: basePageObj({
    desc: `Button to discard unsaved changes made to a draft's instructions and sets the textarea back to uneditable`,
    locator: `[data-id='cancel-draft-instructions']`
  }),

  draft_card_title: basePageObj({
    desc: `The title (header area) of each draft on the assignment summary page`,
    // TODO: get dev to give this title a data-id.  with the svg and whatever in there,
    //  draft-section text itself is like `>Final Draft\n>`
    locator: `//*[@data-id="draft-section"]/span/span`,
    type: `xpath`
  }),

  draft_add_instructions: basePageObj({
    desc: `Link to make visible and editable the draft instructions control`,
    locator: `[data-id='add-instructions']`
  }),

  draft_add_goal: basePageObj({
    desc: `Link to display the modal to edit a draft's reflections`,
    locator: `[data-id='add-reflections']`
  }),

  draft_review_dropdown: basePageObj({
    desc: `Select to set the type of review for a draft`,
    locator: `[data-id='review-type-dropdown']`
  }),

  draft_delete: basePageObj({
    desc: `Link to spawn a modal alert confirming deletion of a draft`,
    locator: `[data-id='draft-delete']`
  }),

  draft_count: basePageObj({
    desc: `A link to show the drafts pane on the assignment summary page that should also display the current number of drafts associated with an assignemnt`, // eslint-disable-line
    locator: `[data-id='drafts']`
  }),

  // TODO: get dev to give this text block a data-id
  draft_note: basePageObj({
    desc: `Text block per draft describing necessary preconditions to start work on this particular draft`,
    locator: "//*[starts-with(@class,'Draft__draftNote__')]",
    type: 'xpath'
  }),

  draft_alert_delete_button: basePageObj({
    desc: `The confirmation button in the alert dialog that is presented on attempting to delete a draft`,
    locator: `[data-id='dialog-delete']`
  }),

  draft_alert_cancel_button: basePageObj({
    desc: `The cancellation button in the alert dialog that is presented on attempting to delete a draft`,
    locator: `[data-id='dialog-cancel']`
  })

});
