import React from 'react';
import PropTypes from 'prop-types';
import { StudentDraftDisplay } from './../index';

import styles from './draftListDisplay.css';

const DraftListDisplay = ({activityId, drafts}) => {
  return (
    <div className={styles.wrapper}>
      {
        drafts.map((draft, idx) => {
          return (
            <StudentDraftDisplay
              key={draft.draftId}
              draft={draft}
              activityId={activityId}
              finalDraft={ idx === drafts.length - 1}
            />
          );
        })
      }
    </div>
  );
};

DraftListDisplay.propTypes = {
  drafts: PropTypes.array,
  activityId: PropTypes.string
};

export default DraftListDisplay;
