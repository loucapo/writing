import React from 'react';
import PropTypes from 'prop-types';
import { MLEditor, MLCard } from '../../MLComponents';
import { FeedbackToolHeader, EndComment } from '../index';
import { RubricContainer } from '../../../containers';
import styles from './feedbackTool.css';

const FeedbackTool = ({
  studentDraft,
  reflectionQuestions,
  homeRoute,
  draftTitle,
  instructorName,
  submitEndComment,
  rubricId
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
      { (rubricId && rubricId !== '0000') ?
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
  rubricId: PropTypes.string
};

export default FeedbackTool;
