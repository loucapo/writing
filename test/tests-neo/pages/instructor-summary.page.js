/* eslint-disable camelcase */

const Page = require('marvin-js').Page;
const draftComponent = require('./instructor-summary.component.draft');
const refQuestionModal = require('./instructor-summary.component.add-student-reflection-questions-modal');

exports.InstructorSummaryPage = class extends Page {
  things() {
    return {
      add_draft_button: {locator: `[data-id='add-draft']`},
      draft_card: {locator: `[data-id='draft-section']`},
      draft_title: { locator: `[class^='Heading__headingText__']`}
    };
  }

  // TODO: reimplement
  //url: { value: '/' },

  draft(vx) {
    console.log("DRAFT IS getting called ");
    console.log(vx);
    return Page.componentGenerator(draftComponent, {
    locator: `//*[@data-id='draft-section']/ancestor::div[contains(@data-id, 'MLCard')]`,
    type: `xpath`}); }

  reflection_questions_modal() { return Page.componentGenerator(refQuestionModal, {
    locator: `[data-id='modal']`}); }
};
