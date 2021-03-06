import React from 'react';
import PropTypes from 'prop-types';
import { SubmissionStatusItem } from '../index';

import styles from './submissionStatusTable.css';

const SubmissionStatusTable = ({ submissionStatuses, updateReviewStatus, activityId }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.heading}>
          <th data-id="name-header">Name</th>
          <th data-id="completion-date-header">Completion Date</th>
          <th data-id="review-status-header">Review Status</th>
          <th data-id="send-status-header">Send Status</th>
        </tr>
      </thead>
      <tbody>
        {(submissionStatuses && submissionStatuses.length > 0) ?
          submissionStatuses.map(statusItem => (
            <SubmissionStatusItem
              key={statusItem.studentId}
              item={statusItem}
              updateReviewStatus={updateReviewStatus}
              activityId={activityId}
            />
          ))
          :
          <tr>
            <td className={styles.notStartedAlert} colSpan="4">
              No students have started this assignment
            </td>
          </tr>
        }
      </tbody>
    </table>
  );
};

SubmissionStatusTable.propTypes = {
  activityId: PropTypes.string,
  submissionStatuses: PropTypes.array,
  updateReviewStatus: PropTypes.func
};

export default SubmissionStatusTable;
