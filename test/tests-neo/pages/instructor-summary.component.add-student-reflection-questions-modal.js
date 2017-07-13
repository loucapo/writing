/* eslint-disable camelcase */
const Page = require('marvin-js').Page;
const Component = require('marvin-js').Component

class AddStudentReflectionQuestionsModal extends Component {
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
        desc: `` },
      // TODO: great place to use method_missing? or, what, es6 proxies?  also hover, other psuedo selectors.
      // maybe.  maybe wildly unnecessary.
      // You could also go the site_prism route and make checkbox a subclass of basePageObject or decorate it.
      check: {
        desc: `Checkbox toggling selection of nth reflection question`,
        locator: `[data-id='checkbox']`
      },
      check__checked: {
        locator: `[data-id='modal'] [data-id='input-fields'] [data-id='checkbox']:checked`
      },
      check__unchecked: {
        locator: `[data-id='modal'] [data-id='input-fields'] [data-id='checkbox']:not(:checked)`
      },

      // TODO: dev: data-ids for this and surrounding bits needs to be added / reevaluated
      // there's no good way to get just the desc text here, since it's just a text-node
      // with sibling element-nodes.  when done, change the following to actually just be
      // the description.
      desc: {
        desc: ``,
        locator: `[data-id='field-title']>div`
      },
    }; }

}

module.exports = AddStudentReflectionQuestionsModal;
