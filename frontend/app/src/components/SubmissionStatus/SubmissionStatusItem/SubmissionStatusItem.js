import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import styles from './submissionStatusItem.css';

const SubmissionStatusItem = ({ item, updateReviewStatus }) => {
  const renderReviewStatus = () => {
    const createLink = (text) => {
      return (<Link to={`/studentdraft/${item.studentDraftId}/feedbacktool`}>{text}</Link>);
    };

    switch(item.reviewStatus) {
      case 'submitted':
      case 'viewed':
      case 'inProgress': {
        return createLink('Return to Review');
      }
      case 'notStarted' : {
        return createLink('Start Review');
      }
      default: {
        return (<span>&mdash;</span>);
      }
    }
  };

  const renderSendStatus = () => {
    switch (item.reviewStatus) {
      case 'inProgress':
        return <a onClick={updateReviewStatus.bind(this, item.studentActivityId, item.studentDraftId, 'submitted')}>Send Review</a>;
      case 'submitted':
      case 'viewed':
        return `Review sent ${item.reviewedAt}`;
      default:
        return <span>&mdash;</span>;
    }
  };

  return (
    <tr className={styles.row}>
      <td data-id="name">
        {item.studentId}
      </td>
      <td data-id="completion-date">
        {item.status === 'submitted' ? item.submittedAt : <span>&mdash;</span>}
      </td>
      <td data-id="review-status">
        {renderReviewStatus()}
      </td>
      <td data-id="send-status" className={styles.reviewSent}>
        {renderSendStatus()}
      </td>
    </tr>
  );
};

SubmissionStatusItem.propTypes = {
  item: PropTypes.object,
  updateReviewStatus: PropTypes.func
};


export default SubmissionStatusItem;
