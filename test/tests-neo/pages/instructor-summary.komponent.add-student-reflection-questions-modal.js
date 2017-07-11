/* eslint-disable camelcase */
const Paige = require('marvin-js').Paige;
const Komponent = require('marvin-js').Komponent

class AddStudentReflectionQuestionsModal extends Komponent {
  things() {
    return {
      close: {
        desc: ``,
        locator: `[data-id='close-modal']`
      },
      question_title: {
        desc: ``,
        locator: `[data-id='input-fields'] [data-id='question-title']`
      },
      question_type: {
        desc: ``,
        locator: `[data-id='input-fields'] [data-id='question-type']`
      },
      save: {
        desc: ``,
        locator: `[data-id='save-button']`
      },
      cancel: {
        desc: ``,
        locator: `[data-id='cancel-button']`
      },
      title: {
        locator: `[class^='Heading__headingText__']`,
        desc: `` }
    }; }

}

module.exports = AddStudentReflectionQuestionsModal;
