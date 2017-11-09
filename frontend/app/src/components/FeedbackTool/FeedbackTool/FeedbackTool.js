import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { MLCard } from '../../MLComponents';
import { FeedbackToolHeader, EndComment, FinalGrade } from '../index';
import { FeedbackEditorContainer, RubricContainer } from '../../../containers';
import { reflectionQuestionsConfig } from '../../../utilities/reflectionQuestions';
import styles from './feedbackTool.css';

const FeedbackTool = ({
  studentDraft,
  reflectionQuestions,
  homeRoute,
  draft,
  draftTitle,
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
      draftId={draft.draftId}
      draftTitle={draftTitle}
      submittedDate={studentDraft.submittedAt}
    />
    <div className={styles.container}>
      <MLCard type="reflection" title="Reflection">
        <div>
          {reflectionQuestions.map(reflection => {
            const reflectionText = reflection.questionType === 'agree/disagree' && _.get(_.find(reflectionQuestionsConfig.labels, {value: reflection.answer}), 'text');
            return (
              <p key={reflection.questionId}>
                <strong>{reflection.question}</strong><br />
                {reflectionText || reflection.answer}
              </p>
            );
          })}
        </div>
      </MLCard>
      <MLCard type="draft" title={draftTitle}>
        <FeedbackEditorContainer
          studentActivityId={studentDraft.studentActivityId}
          draft={draft}
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
      <MLCard type="end-comment" title="End Comment (optional)">
        <EndComment
          studentActivityId={studentDraft.studentActivityId}
          studentDraftId={studentDraft.studentDraftId}
          submitEndComment={submitEndComment}
          endComment={studentDraft.endComment}
        />
      </MLCard>
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
  draft: PropTypes.object,
  draftTitle: PropTypes.string,
  submitEndComment: PropTypes.func,
  submitFinalGrade: PropTypes.func,
  rubricId: PropTypes.string,
  lastDraft: PropTypes.bool,
  updateFeedbackPaper: PropTypes.func,
  createFeedback: PropTypes.func,
  createFeedbackError: PropTypes.object
};

export default FeedbackTool;
