/* eslint-disable camelcase */
const Page = require('marvin-js').Page;
const Component = require('marvin-js').Component

class AddCommentModal extends Component {
  things() {
    return {
      save_comment: {
        desc: `Button to save instructor draft comment`,
        locator: `[data-id='comment-save']`
      }
    }; }
}

module.exports = AddCommentModal;




