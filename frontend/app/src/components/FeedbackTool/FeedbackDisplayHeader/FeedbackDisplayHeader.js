import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import MLIcon from 'ml-react-cdl-icons';
import { MLButton } from '../../MLComponents';
import styles from './feedbackDisplayHeader.css';

const FeedbackDisplayHeader = ({ backLink, backText, linkableDrafts }) => (
  <header className={styles.header}>
    <div className={styles.leftContainer}>
      <div data-id="header-back-button" className={styles.leftSubContainer}>
        <Link to={backLink}>
          <MLIcon
            className={styles.arrowIcon}
            title="arrow left"
            type="arrow_left"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          />
        </Link>
      </div>
      <div>
        <span data-id="instructor-name" className={styles.instructorName}>{backText}</span>
      </div>
    </div>
    <div className={styles.rightContainer}>
      {linkableDrafts.map(draft => {
        const feedbackAvailable = draft.studentInfo.reviewStatus === 'submitted' || draft.studentInfo.reviewStatus === 'viewed';
        let link = `/activity/${draft.activityId}/draft/${draft.draftId}`;
        if (draft.studentInfo.reviewStatus === 'submitted' || draft.studentInfo.reviewStatus === 'viewed') {
          link = `/activity/${draft.activityId}/studentDraft/${draft.studentInfo.studentDraftId}/feedbackdisplay`;
        } else if (draft.studentInfo.status === 'submitted') {
          link = `/activity/${draft.activityId}/studentDraft/${draft.studentInfo.studentDraftId}/display`;
        }
        return (
          <MLButton
            key={draft.draftId}
            title={draft.studentInfo.buttonText}
            dataId={draft.studentInfo.buttonText}
            disabled={draft.studentInfo.disabled}
            bordered={feedbackAvailable}
            link={link}
            color={feedbackAvailable ? 'white' : ''}
          />
        );
      })}
    </div>
  </header>
);

FeedbackDisplayHeader.propTypes = {
  homeRoute: PropTypes.string,
  backLink: PropTypes.string,
  backText: PropTypes.string,
  linkableDrafts: PropTypes.array
};

export default FeedbackDisplayHeader;
