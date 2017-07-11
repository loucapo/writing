/* eslint-disable camelcase */
const Paige = require('marvin-js').Paige;
const Komponent = require('marvin-js').Komponent

class Draft extends Komponent {
  things() {
    return {
      title: {
        locator: `[class^='Heading__headingText__']`,
        desc: `` },
      reflection_question: {
        desc: ``,
        locator: `[data-id="reflections-list"] li` },
      add_reflection_questions: {
        desc: `Link to display the modal that allows selection of reflection questions`,
        locator: `[data-id='add-reflections']` },
      add_draft_goals: {
        desc: `Button to display the modal to select the primary goals for this draft`,
        locator: `[data-id='add-draft-goal']` },
      edit_draft_goals: {
        desc: ``,
        locator: `[data-id='draft-goal-edit']` },
      saved_draft_goal: {
        desc: ``,
        locator: `//*[@data-id='drafts-goal-list']/li[not(./a[@data-id='add-draft-goal'])]`,
        type: 'xpath' }
    }; }

  // title(index) {
  //   return this.element(`[class^='Heading__headingText__']`);
  // }
}

module.exports = Draft;
