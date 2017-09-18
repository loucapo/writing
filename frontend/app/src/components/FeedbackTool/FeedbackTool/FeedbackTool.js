import React from 'react';
import PropTypes from 'prop-types';
import { MLCard } from '../../MLComponents';
import { FeedbackToolHeader, EndComment, FinalGrade } from '../index';
import { FeedbackEditorContainer, RubricContainer } from '../../../containers';
import styles from './feedbackTool.css';

const FeedbackTool = ({
  studentDraft,
  reflectionQuestions,
  homeRoute,
  draftTitle,
  instructorName,
  submitEndComment,
  submitFinalGrade,
  rubricId,
  lastDraft,
  updateFeedbackPaper,
  createFeedback,
  createFeedbackError
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
        <FeedbackEditorContainer
          studentActivityId={studentDraft.studentActivityId}
          studentDraftId={studentDraft.studentDraftId}
          updateFeedbackPaper={updateFeedbackPaper}
          createFeedback={createFeedback}
          content={studentDraft.feedbackPaper}
          createFeedbackError={createFeedbackError}
        />
      </MLCard>
      {lastDraft ?
        <FinalGrade
          studentActivityId={studentDraft.studentActivityId}
          studentDraftId={studentDraft.studentDraftId}
          submitFinalGrade={submitFinalGrade}
          finalGrade={studentDraft.finalGrade}
        />
        : null
      }
      <EndComment
        studentActivityId={studentDraft.studentActivityId}
        studentDraftId={studentDraft.studentDraftId}
        submitEndComment={submitEndComment}
        endComment={studentDraft.endComment}
      />
      { (rubricId && rubricId !== '0000' && lastDraft) ?
        <MLCard type="rubric" title="Final Rubric Evaluation">
          <RubricContainer
            studentActivityId={studentDraft.studentActivityId}
            studentDraftId={studentDraft.studentDraftId}
          />
        </MLCard>
        : null
      }
    </div>
  </div>
);

FeedbackTool.propTypes = {
  studentDraft: PropTypes.object,
  homeRoute: PropTypes.string,
  reflectionQuestions: PropTypes.array,
  draftTitle: PropTypes.string,
  instructorName: PropTypes.string,
  submitEndComment: PropTypes.func,
  submitFinalGrade: PropTypes.func,
  rubricId: PropTypes.string,
  lastDraft: PropTypes.bool,
  updateFeedbackPaper: PropTypes.func,
  createFeedback: PropTypes.func,
  createFeedbackError: PropTypes.object
};

export default FeedbackTool;
