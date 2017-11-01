/* eslint-disable camelcase */

const Page = require('marvin-js').Page;
const Component = require('marvin-js').Component

class cdl extends Component {
  things() {
    return {
      message_success: {
        desc: `An alert box with a success message`,
        locator: `div[class*='MLMessage__message_success']`
      },
    };
  }
};

module.exports = cdl;
