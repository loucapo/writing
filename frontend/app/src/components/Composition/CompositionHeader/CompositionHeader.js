import React from 'react';
import PropTypes from 'prop-types';
import { MLButton } from './../../MLComponents/index';

import styles from './compositionHeader.css';

const CompositionHeader = ({draftIsEmpty, studentDraft, studentActivityId}) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerRight}>
          <MLButton
            title="Save"
            dataId="save-draft"
            disabled={draftIsEmpty}
            bordered={true}
          />
          <MLButton
            link={`/reflectionQuestions/
            ${studentActivityId}/studentdraft/${studentDraft.studentDraftId}`}
            title="Done, Start Reflection"
            dataId="start-reflection"
            disabled={draftIsEmpty}
          />
        </div>
      </div>
    </header>
  );
};

CompositionHeader.propTypes = {
  draftIsEmpty: PropTypes.bool,
  studentDraft: PropTypes.object,
  studentActivityId: PropTypes.string

};

export default CompositionHeader;
