import React from 'react';
import PropTypes from 'prop-types';
import { MLButton } from '../../MLComponents/index';
import styles from './activityHeaderDisplay.css';

const ActivityHeaderDisplay = ({ drafts, activityId }) => {
  return (
    <header className={styles.studentHeader}>
      <div className={styles.rightContainer}>
        {drafts.map(draft => {
          return (
            <MLButton
              key={draft.draftId}
              title={draft.studentInfo.buttonText}
              dataId={draft.studentInfo.buttonText}
              disabled={draft.studentInfo.disabled}
              link={
                draft.studentInfo.status === 'submitted'
                  ? `/studentDraft/${draft.studentInfo.studentDraftId}/display`
                  : `/activity/${activityId}/draft/${draft.draftId}`
              }
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
