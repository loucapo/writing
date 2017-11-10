import React from 'react';
import PropTypes from 'prop-types';
import { MLButton } from '../../MLComponents/index';
import styles from './activityHeaderDisplay.css';

const ActivityHeaderDisplay = ({ drafts, activityId }) => {
  return (
    <header className={styles.studentHeader}>
      <div className={styles.rightContainer}>
        {drafts.map(draft => {
          const feedbackAvailable = draft.studentInfo.reviewStatus === 'submitted' || draft.studentInfo.reviewStatus === 'viewed';
          let link = `/activity/${activityId}/draft/${draft.draftId}`;
          if (feedbackAvailable) {
            link = `/studentDraft/${draft.studentInfo.studentDraftId}/feedbackdisplay`;
          } else if (draft.studentInfo.status === 'submitted') {
            link = `/activity/${activityId}/studentDraft/${draft.studentInfo.studentDraftId}/display`;
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
};

ActivityHeaderDisplay.propTypes = {
  activityId: PropTypes.string,
  drafts: PropTypes.array
};

export default ActivityHeaderDisplay;
