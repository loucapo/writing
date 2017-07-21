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
      draft_select_dropdown_submission_grid: {
        desc: `Drop Down to change drafts`,
        locator: `[data-id='submission-status-filter'] [data-id='rubric-dropdown']`
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
      row_name: {
        desc: `student name column`,
        locator: `[class^='SubmissionStatusItem__row__'] [data-id='name']`
      },
      row_date: {
        desc: `submission date column`,
        locator: `[class^='SubmissionStatusItem__row__'] [data-id='completion-date']`
      },
      row_status: {
        desc: `submission status column`,
        locator: `[class^='SubmissionStatusItem__row__'] [data-id='review-status']`
      },
      row_start: {
        desc: `start review link`,
        locator: `[class^='SubmissionStatusItem__row__'] [data-id='review-status'] a`
      },
      row_sent: {
        desc: `Text area cell of Send Status column`,
        locator: `[class^='SubmissionStatusItem__row__'] [data-id='send-status']`
      },
      send_review_link: {
        desc: `Send Review link that instructor hits on student submission grid to send student feedback`,
        locator: `[class^='SubmissionStatusItem__row__'] [data-id='send-status'] a`
      },
      start_review: {
        desc: `Link to launch feedback tool`,
        locator: `[data-id='review-status'] a`
      },
      draft_submission_date: {
        desc: `Green checkmark that appears after successful draft submission on draft card`,
        locator: `[data-id='submitted-date']`
      }
    };
  }
}

module.exports = StudentSubmissions;