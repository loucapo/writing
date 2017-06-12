import React from 'react';
import PropTypes from 'prop-types';
import { MLButton } from '../../MLComponents/index';

import styles from './compositionHeader.css';

const CompositionHeader = ({
  draftIsEmpty,
  studentDraftId,
  studentActivityId,
  handleSave,
  hasStartedReflectionQuestions
}) => {
  const buttonTitle = hasStartedReflectionQuestions ? 'Done, Return to Reflection' : 'Done, Start Reflection';
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerRight}>
          <MLButton handleClick={handleSave} title="Save" dataId="save-draft" disabled={draftIsEmpty} bordered={true} />
          <MLButton
            handleClick={handleSave}
            link={`/reflectionQuestions/${studentActivityId}/studentdraft/${studentDraftId}`}
            title={buttonTitle}
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
  studentDraftId: PropTypes.string,
  studentActivityId: PropTypes.string,
  handleSave: PropTypes.func,
  hasStartedReflectionQuestions: PropTypes.bool
};

export default CompositionHeader;
