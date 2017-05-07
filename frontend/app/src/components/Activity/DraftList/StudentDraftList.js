import React from 'react';
import PropTypes from 'prop-types';
import StudentDraft from './Draft/StudentDraft';

import styles from './draftList.css';

const StudentDraftList = ({studentActivityId, drafts}) => (
  <div className={styles.wrapper}>
    {
      drafts.map((draft, idx) => {
        let cardTitle = 'Draft ' + (idx + 1);
        // substitute 'Final paper' for 'Draft #' on last element in array
        if (idx === (drafts.length - 1)) {
          cardTitle = 'Final Paper';
        }

        let finalInstruct = '';
        if (idx > 0) {
          finalInstruct = 'You will be able to view and start this draft once you\'ve received feedback on Draft ' + idx;
        }
        return (
          <StudentDraft
            studentActivityId={studentActivityId}
            cardTitle={cardTitle}
            draft={draft}
            key={draft.draftId}
            draftNote={finalInstruct}
            // hack till we get draft.ActiveDraft prop
            disabled={idx > 0}
          />
        );
      })
    }
  </div>
);

StudentDraftList.propTypes = {
  drafts: PropTypes.array,
  studentActivityId: PropTypes.string
};

export default StudentDraftList;
