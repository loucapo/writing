import React from 'react';
import PropTypes from 'prop-types';
import { MLEditor, MLCard } from '../../MLComponents';
import { FeedbackDisplayHeader } from '../index.js';
import { RubricDisplayContainer } from '../../../containers';
import styles from './feedbackDisplay.css';

const FeedbackDisplay = ({
  studentDraft,
  reflectionQuestions,
  homeRoute,
  draftTitle,
  activityTitle,
  rubricId,
  lastDraft,
  linkableDrafts,
  noRubricScores
}) => (
  <div className={styles.page}>
    <FeedbackDisplayHeader
      homeRoute={homeRoute}
      draftTitle={draftTitle}
      activityTitle={activityTitle}
      linkableDrafts={linkableDrafts}
    />
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
          <div>
            <span className={styles.finalGradeLabel}>Instructor did not select a final score</span>
          </div>
          : null
        }
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
  activityTitle: PropTypes.string,
  rubricId: PropTypes.string,
  lastDraft: PropTypes.bool,
  linkableDrafts: PropTypes.array,
  noRubricScores: PropTypes.bool
};

export default FeedbackDisplay;
