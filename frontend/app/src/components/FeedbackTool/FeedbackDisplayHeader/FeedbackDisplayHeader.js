import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import MLIcon from 'ml-react-cdl-icons';
import { MLButton } from '../../MLComponents';
import styles from './feedbackDisplayHeader.css';

const FeedbackDisplayHeader = ({ homeRoute, linkableDrafts }) => (
  <header className={styles.header}>
    <div className={styles.leftContainer} data-id="header-close-button">
      <Link to={homeRoute}>
        <MLIcon
          className={styles.icon}
          title="x"
          type="x"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        />
      </Link>
    </div>
    <div className={styles.rightContainer}>
      {linkableDrafts ? linkableDrafts.map(draft => {
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
      }) : null}
    </div>
  </header>
);

FeedbackDisplayHeader.propTypes = {
  homeRoute: PropTypes.string,
  linkableDrafts: PropTypes.array
};

export default FeedbackDisplayHeader;
