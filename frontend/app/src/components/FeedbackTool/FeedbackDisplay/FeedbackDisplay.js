import React from 'react';
import PropTypes from 'prop-types';
import { MLEditor, MLCard } from '../../MLComponents';
import { FeedbackDisplayHeader } from '../index.js';
import styles from './feedbackDisplay.css';

const FeedbackDisplay = ({
  studentDraft,
  reflectionQuestions,
  homeRoute,
  draftTitle,
  activityTitle,
  drafts
}) => (
  <div className={styles.page}>
    <FeedbackDisplayHeader
      homeRoute={homeRoute}
      draftTitle={draftTitle}
      activityTitle={activityTitle}
      drafts={drafts}
      studentDraft={studentDraft}
    />
    <div className={styles.container}>
      <MLCard type="end-comment" title="Instructor Comment">
        {studentDraft.endComment ? <span>{studentDraft.endComment}</span> : <span>No end comment added.</span>}
      </MLCard>

      <MLCard type="draft" title={draftTitle}>
        <MLEditor content={studentDraft.paper} editable={false} toolbarHidden={true} />
      </MLCard>

      <MLCard type="reflection" title="Reflection">
        <div>
          {reflectionQuestions.map(reflection => (
            <p key={reflection.questionId}>
              <strong>{reflection.question}</strong><br />
              {reflection.answer}
            </p>
          ))}
        </div>
      </MLCard>
    </div>
  </div>
);

FeedbackDisplay.propTypes = {
  studentDraft: PropTypes.object,
  homeRoute: PropTypes.string,
  reflectionQuestions: PropTypes.array,
  draftTitle: PropTypes.string,
  activityTitle: PropTypes.string,
  drafts: PropTypes.array
};

export default FeedbackDisplay;
