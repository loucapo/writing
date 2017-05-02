import React from 'react';
import PropTypes from 'prop-types';
import MLCard from '../../../MLCard/MLCard';
import StudentDraftComponents from './StudentDraftComponents';
import styles from './draft.css';

const StudentDraft = ({draft, cardTitle, draftNote, disabled}) => (
  <MLCard
    type="draft"
    title={cardTitle}
    disabled={disabled}
  >
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
          : <StudentDraftComponents draft={draft} /> }
    </section>
  </MLCard>
);

StudentDraft.propTypes = {
  draft: PropTypes.object,
  cardTitle: PropTypes.string,
  draftNote: PropTypes.string,
  disabled: PropTypes.bool
};

export default StudentDraft;
