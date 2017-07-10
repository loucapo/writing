import React from 'react';
import PropTypes from 'prop-types';
import { MLEditor, MLCard } from '../../MLComponents';
import { FeedbackToolHeader, EndComment } from '../index.js';
import styles from './feedbackTool.css';

const FeedbackTool = ({
  studentDraft,
  reflectionQuestions,
  homeRoute,
  draftTitle,
  instructorName,
  submitEndComment
}) => (
  <div className={styles.page}>
    <FeedbackToolHeader
      homeRoute={homeRoute}
      draftTitle={draftTitle}
      submittedDate={studentDraft.submittedDate}
      instructorName={instructorName}
    />
    <div className={styles.container}>
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
      <MLCard type="draft" title={draftTitle}>
        <MLEditor content={studentDraft.paper} editable={false} toolbarHidden={true} />
      </MLCard>
      <EndComment
        studentActivityId={studentDraft.studentActivityId}
        studentDraftId={studentDraft.studentDraftId}
        submitEndComment={submitEndComment}
        endComment={studentDraft.endComment}
      />
    </div>
  </div>
);

FeedbackTool.propTypes = {
  studentDraft: PropTypes.object,
  homeRoute: PropTypes.string,
  reflectionQuestions: PropTypes.array,
  draftTitle: PropTypes.string,
  instructorName: PropTypes.string,
  submitEndComment: PropTypes.func
};

export default FeedbackTool;
