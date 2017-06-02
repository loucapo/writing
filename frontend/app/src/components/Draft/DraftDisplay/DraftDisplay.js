import React from 'react';
import PropTypes from 'prop-types';

import {
  DraftGoalsDisplay,
  DraftInstructionsDisplay
} from './../index';

import {ReflectionQuestionsDisplay} from './../../ReflectionQuestions/index';

import styles from './draftDisplay.css';

const DraftDisplay = ({draft, draftNote, disabled}) => (
  <section>
    <section className={styles.draftType}>
      <div data-id="review-type-dropdown" className={styles.draftTypeLeft}>
        <div className={styles.subheader}>
          Review Type &nbsp;
          <span className={styles.studentReviewType}>Instructor Review</span>
        </div>
      </div>
    </section>
    {(disabled)
      ? <section className={`${styles.draftDetails} ${styles.studentNote}`}>{draftNote}</section>
      : <section className={styles.draftDetails}>
        <DraftGoalsDisplay goals={draft.goals} />
        <div className={styles.draftDetailsRight}>
          <DraftInstructionsDisplay instructions={draft.instructions} />
          <ReflectionQuestionsDisplay reflectionQuestions={draft.studentReflectionQuestions} />
        </div>
      </section>
    }
  </section>
);

DraftDisplay.propTypes = {
  draft: PropTypes.object,
  draftNote: PropTypes.string,
  disabled: PropTypes.bool
};

export default DraftDisplay;
