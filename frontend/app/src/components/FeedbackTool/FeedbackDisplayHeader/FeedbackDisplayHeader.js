import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import MLIcon from 'ml-react-cdl-icons';
import { MLButton } from '../../MLComponents';
import styles from './feedbackDisplayHeader.css';

const FeedbackDisplayHeader = ({ homeRoute, draftTitle, activityTitle, linkableDrafts }) => (
  <header className={styles.header}>
    <div className={styles.leftContainer}>
      <div data-id="header-back-button" className={styles.leftSubContainer}>
        <Link to={`${homeRoute}?display=submissions`}>
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
        <span data-id="instructor-name" className={styles.instructorName}>{activityTitle} - {draftTitle}</span>
      </div>
    </div>
    <div className={styles.rightContainer}>
      {linkableDrafts.map(draft => {
        let link = `/activity/${draft.activityId}/draft/${draft.draftId}`;
        if (draft.studentInfo.reviewStatus === 'submitted') {
          link = `/studentDraft/${draft.studentInfo.studentDraftId}/feedbackdisplay`;
        } else if (draft.studentInfo.status === 'submitted') {
          link = `/studentDraft/${draft.studentInfo.studentDraftId}/display`;
        }
        return (
          <MLButton
            key={draft.draftId}
            title={draft.studentInfo.buttonText}
            dataId={draft.studentInfo.buttonText}
            disabled={draft.studentInfo.disabled}
            bordered={draft.studentInfo.reviewStatus === 'submitted'}
            link={link}
          />
        );
      })}
    </div>
  </header>
);

FeedbackDisplayHeader.propTypes = {
  homeRoute: PropTypes.string,
  draftTitle: PropTypes.string,
  activityTitle: PropTypes.string,
  linkableDrafts: PropTypes.array
};

export default FeedbackDisplayHeader;
