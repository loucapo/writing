import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import MLIcon from 'ml-react-cdl-icons';

import styles from './submissionStatusItem.css';

const SubmissionStatusItem = ({item}) => (
  <tr className={ styles.row }>
    <td data-id="name">
      {item.studentId}
    </td>
    <td data-id="completion-date">
      {item.submittedDate ? item.submittedDate : <span>&mdash;</span>}
    </td>
    <td data-id="review-status">
      {item.status === 'submitted'
        ? (!item.reviewStatus || item.reviewStatus === 'notStarted')
          ? <Link to={`/studentdraft/${item.studentDraftId}/feedbacktool`}>Start Review</Link>
          : <MLIcon
            fill="#3B822E"
            title="check"
            type="check"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          />
        : <span>&mdash;</span> }
    </td>
    <td data-id="send-status" className={styles.reviewSent}>
      &mdash;
    </td>
  </tr>
);

SubmissionStatusItem.propTypes = {
  item: PropTypes.object
};


export default SubmissionStatusItem;
