/* eslint-disable camelcase */

const Page = require('marvin-js').Page;
const draftComponent = require('./instructor-summary.component.draft');
const refQuestionModal = require('./instructor-summary.component.add-student-reflection-questions-modal');
const activityPromptComponent = require('./instructor-summary.component.activity-prompt');
const draftGoalsModal = require('./instructor-summary.component.draft-goals-modal');
const rubricComponent = require('./instructor-summary.component.rubric');
const studentSubmissionsComponent = require('./instructor-summary.component.student-submissions');

exports.InstructorSummaryPage = class extends Page {
  things() {
    return {
      add_draft_button: {
        desc: `button to add additional drafts to the activity`,
        locator: `[data-id='add-draft']`
      },
      draft_card: {
        desc: `container for each individual draft`,
        locator: `[data-id='draft-section']`
      },
      draft_title: {
        desc: `Header where draft title lives`,
        locator: `[class^='Heading__headingText__']`
      },
      draft_count: {
        desc: `A link to show the drafts pane on the assignment summary page that should also display the current number of drafts associated with an assignemnt`, // eslint-disable-line
        locator: `[data-id='drafts']`
      },
      student_submissions: {
        desc: `tab that allows user to toggle to student submissions`,
        locator: `[data-id='student-submissions']`
      },
      activity_title: {
        desc: `div that contains the activity title`,
        locator: `[data-id='activity-title']`
      },
      activity_type: {
        desc: `line underneath the title that tells user what kind of writing activity assignment is`,
        locator: `[data-id='activity-type']`
      },
      edit_title: {
        desc: `Button to make the activity title an editable field`,
        locator: `[class^='ActivityTitle__editIcon__']`
      },
      edit_title_cancel: {
        desc: `Button to cancel any changes made while editing title`,
        locator: `[data-id='title-cancel']`
      },
      edit_title_save: {
        desc: `Button to save changes that were edited to title`,
        locator: `[data-id='title-save']`
      },
      edit_title_textarea: {
        desc: `editable text area that contains the activity title`,
        locator: `[class^='ActivityTitle__editField__']`
      },
      title_char_counter: {
        desc: `counter at end of activity title that tells user how many title characters they have left`,
        locator: `[data-id='char-limit-count']`
      },
      confirmation_message: {
        desc: `Green banner that shows instructor when assignment was created`,
        locator: `[class*='MLMessage__message_success__']`
      },
      created_activity_alert: {
        desc: `Green alert banner upon creating activity`,
        locator: `[data-id='created-activity-alert']`
      },
      student_preview: {
        desc: `Button in header to switch instructor view to student view`,
        locator: `[data-id='student-preview']`
      }
    };
  }

  // TODO: reimplement
  //url: { value: '/' },

  draft(arg) {
    return draftComponent.generate(arg, {
      locator: `//*[@data-id='draft-section']/ancestor::div[contains(@data-id, 'MLCard')]`,
      type: `xpath`}); }

  reflection_questions_modal(arg) {
    return refQuestionModal.generate(arg, {
      locator: `[data-id='modal'] [class^='MLModal__modalWrapper']`}); }

  activity_prompt(arg) {
    return activityPromptComponent.generate(arg, {
      locator: `[data-id='MLCard-Assignment-Prompt']`}); }

  rubric(arg) {
    return rubricComponent.generate(arg, {
      locator: `[data-id='MLCard-Final-Rubric']`}); }

  submissions(arg) {
    return studentSubmissionsComponent.generate(arg, {
      locator: `[class^='SubmissionStatus__wrapper']`}); }

  draft_goals_modal(arg) {
    return draftGoalsModal.generate(arg, {
      locator: `[data-id='modal']`}); }
};

