/* eslint-disable camelcase */

const Page = require('marvin-js').Page;

exports.KitchenSinkCDL = class extends Page {
  things() {
    return {
      alert_success: {
        desc: `An alert box with a success message`,
        locator: `[class^='MLMessage__message_success']`
      },
    };
  }
};
