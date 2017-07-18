/* eslint-disable camelcase */

const Page = require('marvin-js').Page;

exports.StudentSummaryPage = class extends Page {
  things() {
    return {
      success_flash: {
        desc: `Confirmation message that appears upon successful submission and save`,
        locator: `[class*='MLMessage__message_success__'] span[class*='MLMessage__message__']`
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
      }
    };
  }
};
