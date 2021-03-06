import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { MLCard } from '../../MLComponents';
import { FeedbackDisplayHeader, FeedbackFlags } from '../index.js';
import { RubricDisplayContainer } from '../../../containers';
import { reflectionQuestionsConfig } from '../../../utilities/reflectionQuestions';
import styles from './feedbackDisplay.css';

const FeedbackDisplay = ({
  studentDraft,
  reflectionQuestions,
  homeRoute,
  draftTitle,
  rubricId,
  lastDraft,
  linkableDrafts,
  noRubricScores,
  feedback
}) => (
  <div className={styles.page}>
    <FeedbackDisplayHeader homeRoute={homeRoute} linkableDrafts={linkableDrafts} />
    <div className={styles.container}>
      <MLCard type="end-comment" title="Instructor Comment">
        { (lastDraft && studentDraft.finalGrade) ?
          <div>
            <span className={styles.finalGradeLabel}>Final Grade: </span>
            <span className={styles.finalGrade}>{studentDraft.finalGrade} / 100</span>
          </div>
          : null
        }
        { (lastDraft && !studentDraft.finalGrade) ?
          <span className={styles.finalGradeLabel}>Instructor did not select a final score</span>
          : null
        }
        {studentDraft.endComment ?
          <span className={styles.endComment}>
            {studentDraft.endComment}
          </span>
          : <span>No end comment added.</span>}
      </MLCard>

      <MLCard type="draft" title={draftTitle}>
        <div className={styles.feedbackPaperWrapper}>
          <div
            className={styles.feedbackPaper}
            dangerouslySetInnerHTML={{ __html: studentDraft.feedbackPaper }}
          />
          <FeedbackFlags feedback={feedback} isDisplay={true} />
        </div>
      </MLCard>

      <MLCard type="reflection" title="Reflection">
        <div>
          {reflectionQuestions.map(reflection => {
            const reflectionText = reflection.questionType === 'agree/disagree' && _.get(_.find(reflectionQuestionsConfig.labels, {value: reflection.answer}), 'text');
            return(
              <p key={reflection.questionId}>
                <strong>{reflection.question}</strong><br />
                {reflectionText || reflection.answer}
              </p>
            );
          })}
        </div>
      </MLCard>

      { (rubricId && rubricId !== '0000' && lastDraft) ?
        <MLCard type="rubric" title="Final Rubric">
          {noRubricScores ?
            <span className={styles.finalGradeLabel}>
              Instructor did not select rubric score
            </span>
            : null
          }
          <RubricDisplayContainer
            studentDraftId={studentDraft.studentDraftId}
            title="Rubric"
          />
        </MLCard>
        : null
      }
    </div>
  </div>
);

FeedbackDisplay.propTypes = {
  studentDraft: PropTypes.object,
  homeRoute: PropTypes.string,
  reflectionQuestions: PropTypes.array,
  draftTitle: PropTypes.string,
  rubricId: PropTypes.string,
  lastDraft: PropTypes.bool,
  linkableDrafts: PropTypes.array,
  noRubricScores: PropTypes.bool,
  feedback: PropTypes.array
};

export default FeedbackDisplay;
