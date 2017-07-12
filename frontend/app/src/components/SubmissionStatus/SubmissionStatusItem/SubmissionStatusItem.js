import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';

import styles from './submissionStatusItem.css';

const SubmissionStatusItem = ({item}) => {
  const renderReviewStatus = () => {
    if (item.status !== 'submitted') {
      return (<span>&mdash;</span>);
    }
    const createLink = (text) => {
      return (<Link to={`/studentdraft/${item.studentDraftId}/feedbacktool`}>{text}</Link>);
    };

    switch(item.reviewStatus) {
      case 'inProgress': {
        return createLink('Return to Review');
      }
      case 'notStarted' :
      default: {
        return createLink('Start Review');
      }
    }
  };

  return (
    <tr className={ styles.row }>
      <td data-id="name">
        {item.studentId}
      </td>
      <td data-id="completion-date">
        {item.submittedDate ? item.submittedDate : <span>&mdash;</span>}
      </td>
      <td data-id="review-status">
        {renderReviewStatus()}
      </td>
      <td data-id="send-status" className={styles.reviewSent}>
        &mdash;
      </td>
    </tr>
  );
};

SubmissionStatusItem.propTypes = {
  item: PropTypes.object
};


export default SubmissionStatusItem;
