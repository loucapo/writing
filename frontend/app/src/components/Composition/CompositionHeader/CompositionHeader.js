import React from 'react';
import PropTypes from 'prop-types';
import { MLButton } from '../../MLComponents/index';

import styles from './compositionHeader.css';

const CompositionHeader = ({
  draftIsEmpty,
  studentDraftId,
  activityId,
  handleSave,
  hasStartedReflectionQuestions
}) => {
  const buttonTitle = hasStartedReflectionQuestions ? 'Done, Return to Reflection' : 'Done, Start Reflection';
  return (
    <header className={styles.header}>
      <div className={styles.buttonsContainer}>
        <MLButton
          handleClick={handleSave}
          title="Save"
          dataId="save-draft"
          disabled={draftIsEmpty}
        />
        <MLButton
          handleClick={handleSave}
          link={`/reflectionQuestions/${activityId}/studentdraft/${studentDraftId}`}
          title={buttonTitle}
          dataId="start-reflection"
          disabled={draftIsEmpty}
          color="green"
        />
      </div>
    </header>
  );
};

CompositionHeader.propTypes = {
  draftIsEmpty: PropTypes.bool,
  studentDraftId: PropTypes.string,
  activityId: PropTypes.string,
  handleSave: PropTypes.func,
  hasStartedReflectionQuestions: PropTypes.bool
};

export default CompositionHeader;
