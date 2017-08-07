/* eslint-disable camelcase */

const Page = require('marvin-js').Page;
const draftEditor = require('./student-summary.component.draft.editor');
const refQuestions = require('./student-summary.component.reflection-questions');
const StudentReview = require('./student-summary.component.review-page');

exports.StudentSummaryPage = class extends Page {
  things() {
    return {
      success_flash: {
        desc: `Confirmation message that appears upon successful submission and save`,
        locator: `[class*='MLMessage__message_success__'] span[class*='MLMessage__message__']`
      },
      feedback_waiting_message: {
        desc: `Message to notify user has feedback`,
        locator: `[data-id='message']`
      },
      feedback_message_link: {
        desc: `Link to instructor feedback`,
        locator: `[data-id='message-link']`
      },
      view_feedback_button: {
        desc: `Link to instructor feedback`,
        locator: `[data-id='View Draft 1 Feedback']`
      },
      draft_submission_confirmation_banner: {
        desc: `Green confirmation message for successful draft submission`,
        locator: `[class*='MLMessage__message_success']`
      },
      start_draft: {
        desc: `Start draft button for user to enter drafting tool`,
        locator: `[data-id='start-draft']`
      },
      start_draft_enabled: {
        desc: `Start draft button in clickable state`,
        locator: `[data-id='start-draft']:not([class*='__disabled__'])`
      },
      start_draft_disabled: {
        desc: `Start draft button in grayed out state`,
        locator: `[data-id='start-draft'][class*='__disabled__']`
      },
      start_final_paper: {
        desc: `Start final paper button in enabled out state`,
        locator: `[data-id='Start Final Paper']`
      },
      start_final_paper_disabled: {
        desc: `Start final paper button in disabled state`,
        locator: `[data-id='Start Final Paper'][class*='__disabled__']`
      },
      view_final_draft_button: {
        desc: `Button to view submitted draft`,
        locator: `[data-id='View Final Paper']`
      },
      student_draft_note: {
        desc: `Alert that draft is not startable yet`,
        locator: `[class*='DraftDisplay__studentNote']`
      },
    };
  }

  draft_editor(arg) {
    return draftEditor.generate(arg, {
      locator: `[class^='Composition__page']`}); }

  student_read_only(arg) {
    return StudentReview.generate(arg, {
      locator: `[class^='FeedbackDisplay__page']`}); }

  student_reflection_questions(arg) {
    return refQuestions.generate(arg, {
      locator: `[class^='ReflectionQuestionsForm__page']`}); }
};
