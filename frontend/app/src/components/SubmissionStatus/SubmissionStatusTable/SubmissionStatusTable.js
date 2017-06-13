import React from 'react';
import PropTypes from 'prop-types';
import { SubmissionStatusItem } from '../index';

import styles from './submissionStatusTable.css';

const SubmissionStatusTable = ({ submissionStatuses }) => {
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
        {submissionStatuses && submissionStatuses.length > 0
          ? submissionStatuses.map(x => <SubmissionStatusItem key={x.studentId} item={x} />)
          :
          <tr>
            <td className={styles.notStartedAlert} colSpan="4">
              No students have started this assignment
            </td>
          </tr>}
      </tbody>
    </table>
  );
};

SubmissionStatusTable.propTypes = {
  submissionStatuses: PropTypes.array
};

export default SubmissionStatusTable;
