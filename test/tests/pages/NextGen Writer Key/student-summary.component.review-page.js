/* eslint-disable camelcase */
const Page = require('marvin-js').Page;
const Component = require('marvin-js').Component

class StudentReview extends Component {
  things() {
    return {
      instructor_end_comment: {
        desc: `Instructor end comment given to student`,
        locator: `[data-id='MLCard-Instructor-Comment'] div span`
      }
    }; }
}

module.exports = StudentReview;




