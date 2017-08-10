import React from 'react';
import PropTypes from 'prop-types';
import { MLButton } from '../../MLComponents/index';
import styles from './activityHeaderDisplay.css';

const ActivityHeaderDisplay = ({ drafts, activityId }) => {
  return (
    <header className={styles.studentHeader}>
      <div className={styles.rightContainer}>
        {drafts.map(draft => {
          let link = `/activity/${activityId}/draft/${draft.draftId}`;
          if (draft.studentInfo.reviewStatus === 'submitted' || draft.studentInfo.reviewStatus === 'viewed') {
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
              bordered={draft.studentInfo.reviewStatus === 'submitted' || draft.studentInfo.reviewStatus === 'viewed'}
              link={link}
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
