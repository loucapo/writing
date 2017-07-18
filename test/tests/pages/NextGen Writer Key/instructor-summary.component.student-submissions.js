/* eslint-disable camelcase */
const Page = require('marvin-js').Page;
const Component = require('marvin-js').Component

class StudentSubmissions extends Component {
  things() {
    return {
      dropdown_drafts_submission_grid: {
        desc: `Available drafts in drop down on submission grid`,
        locator: `[data-id='submission-status-filter'] [data-id='rubric-dropdown'] [class^='MLDropdown__dropdown'] [data-id='rubric-selection-content'] li`
      },
      dropdown_drafts_submission_grid_selected: {
        desc: `Available drafts in drop down on submission grid`,
        locator: `[data-id='submission-status-filter'] [data-id='rubric-dropdown'] [class^='MLDropdown__dropdown'] [data-id='rubric-selection-content'] li svg`
      },
      dropdown_drafts_submission_grid_title: {
        desc: `Available drafts in drop down on submission grid`,
        locator: `[data-id='submission-status-filter'] [data-id='rubric-dropdown'] [class^='MLDropdown__dropdown'] [class^='MLDropdown__dropdownTitle']`
      },
      no_submissions_alert: {
        desc: `blank data for submitted student assignments`,
        locator: `[class^='SubmissionStatusTable__notStartedAlert__']`
      },
      submission_row_name: {
        desc: ``,
        locator: `[class^='SubmissionStatusItem__row__'] [data-id='name']`
      },
      submission_row_date: {
        desc: ``,
        locator: `[class^='SubmissionStatusItem__row__'] [data-id='completion-date']`
      },
      submission_row_status: {
        desc: ``,
        locator: `[class^='SubmissionStatusItem__row__'] [data-id='review-status']`
      },
      submission_row_start: {
        desc: ``,
        locator: `[class^='SubmissionStatusItem__row__'] [data-id='review-status'] a`
      },
      submission_row_sent: {
        desc: `Text area cell of Send Status column`,
        locator: `[class^='SubmissionStatusItem__row__'] [data-id='send-status']`
      },
      submission_row_send_review_link: {
        desc: `Send Review link that instructor hits on student submission grid to send student feedback`,
        locator: `[class^='SubmissionStatusItem__row__'] [data-id='send-status'] a`
      },
      review_status_start_review: {
        desc: `Link to launch feedback tool`,
        locator: `[data-id='review-status'] a`
      }
    };
  }
}

module.exports = StudentSubmissions;
