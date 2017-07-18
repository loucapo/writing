/* eslint-disable camelcase */
const Page = require('marvin-js').Page;
const Component = require('marvin-js').Component

class StudentReflectionQuestions extends Component {
  things() {
    return {
      student_reflection_answer: {
        desc: `Reflection Question area`,
        locator: `[class^='ReflectionQuestionsForm__reflection__']`
      },
      student_reflection_text: {
        desc: `Text area where student answers free response reflection questions`,
        locator: `[class^='ReflectionQuestionsForm__reflection__'] textarea`
      },
      reflection_button_submit_enabled: {
        desc: `Final submit button for reflection questions and draft submission with properly filled out reflection questions`,
        locator: `[data-id='submit-draft']:not([class*='MLButton__disabled'])`
      },
      reflection_button_submit_disabled: {
        desc: `Final submit button for reflection questions and draft submission when reflection questions not answered fully`,
        locator: `[data-id='submit-draft'][class*='MLButton__disabled']`
      },
      reflection_polls_radio_button: {
        desc: `Multiple choice reflection question answer choice`,
        locator: `[class^='ReflectionQuestionsForm__reflection'] form input[type='radio']`
      }
    }; }
}

module.exports = StudentReflectionQuestions;




