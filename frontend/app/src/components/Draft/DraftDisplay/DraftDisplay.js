import React from 'react';
import PropTypes from 'prop-types';
import { DraftGoalsDisplay, DraftInstructionsDisplay } from './../index';
import {ReflectionQuestionsDisplay} from './../../ReflectionQuestions';

import styles from './draftDisplay.css';

const DraftDisplay = ({draft, disabled}) => {
  const draftNote = draft.studentInfo.disabled && !draft.studentInfo.status ?
    `You will be able to view and start this draft once you've received and viewed feedback on Draft ${draft.index}`
    : '';
  return (
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
};

DraftDisplay.propTypes = {
  draft: PropTypes.object,
  disabled: PropTypes.bool
};

export default DraftDisplay;
