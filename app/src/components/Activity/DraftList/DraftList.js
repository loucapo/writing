import React from 'react';
import PropTypes from 'prop-types';
import Draft from './Draft/Draft';
import MLButton from '../../MLButton/MLButton';

import styles from './draftList.css';

const DraftList = ({
                     activityId,
                     drafts,
                     role,
                     addDraftToActivity,
                     removeDraftFromActivity,
                     updateDraftInstructions
}) => {

  const addNewDraft = () => {
    addDraftToActivity(activityId, {index: 0});
  };

  const removeDraft = (draftId) => {
    removeDraftFromActivity(activityId, draftId);
  };

  const updateInstructions = (draftId, instructions) => {
    updateDraftInstructions(activityId, draftId, instructions);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.addDraft}>
        <MLButton dataId="add-draft" title="Add Another Draft" handleClick={addNewDraft} icon="plus" />
        <div className={styles.required}>
          *Grade type field is required
        </div>
      </div> {
      drafts.map((draft, idx) => {
        let cardTitle = 'Draft ' + (idx + 1);
        // substitute 'Final paper' for 'Draft #' on last element in array
        if (idx === (drafts.length - 1)) {
          cardTitle = 'Final Paper';
        }

        let finalInstruct = '';
        if (idx > 0) {
          finalInstruct = 'Students can view and start this draft once they\'ve received feedback for Draft ' + idx;
        }
        return (
          <Draft
            cardTitle={cardTitle}
            draft={draft}
            totalDrafts={drafts.length}
            role={role}
            key={draft.id}
            removeDraft={removeDraft}
            updateInstructions={updateInstructions}>
            {finalInstruct}
          </Draft>
        );
      })
    }
    </div>
  );
};

DraftList.propTypes = {
  activityId: PropTypes.string,
  drafts: PropTypes.array,
  role: PropTypes.string.isRequired,
  addDraftToActivity: PropTypes.func,
  removeDraftFromActivity: PropTypes.func,
  updateDraftInstructions: PropTypes.func
};

export default DraftList;
