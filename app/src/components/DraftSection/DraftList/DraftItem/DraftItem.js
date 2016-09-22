import React, {PropTypes} from 'react';

import DraftFeedbackItem from './DraftFeedbackItem';
import draftItem from './draftItem.css';

let DraftItem = React.createClass({
  propTypes: {
    draft: PropTypes.object,
    draftName: PropTypes.string
  },
  render() {
    let draft = this.props.draft;

    let studentReflectionQuestions = [];
    let postInstructorFeedback = [];
    let peerReviewGroups = [];
    let peerFeedbackSurvey = [];
    let finalReflectionQuestions = [];

    if (draft.type.indexOf('Instructor Review') !== -1) {
      if (draft.details.studentReflectionQuestions && draft.details.studentReflectionQuestions.length !== 0) {
        studentReflectionQuestions = (
          <DraftFeedbackItem
            divKey1={draft.id + 'studentReflectionQuestionsLabel'}
            divKey2={draft.id + 'studentReflectionQuestionsContainer'}
            feedbackLabel="Student Reflection Questions"
            feedbackText={draft.details.studentReflectionQuestions}
          />
        );
      }
      if (draft.details.postInstructorFeedback && draft.details.postInstructorFeedback.length !== 0) {
        postInstructorFeedback = (
          <DraftFeedbackItem
            divKey1={draft.id + 'postInstructorFeedbackLabel'}
            divKey2={draft.id + 'postInstructorFeedbackContainer'}
            feedbackLabel="Post Instructor Feedback Survey Prompt"
            feedbackText={draft.details.postInstructorFeedback}
          />
        );
      }
      if (draft.details.finalReflectionSurvey && draft.details.finalReflectionSurvey.length !== 0) {
        finalReflectionQuestions = (
          <DraftFeedbackItem
            divKey1={draft.id + 'finalReflectionSurveyLabel'}
            divKey2={draft.id + 'finalReflectionSurveyContainer'}
            feedbackLabel="Final Reflection Questions"
            feedbackText={draft.details.finalReflectionSurvey}
          />
        );
      }
    }
    else if (draft.type.indexOf('Peer Review') !== -1) {
      // peerReviewGroups  peerFeedbackSurvey
      if (draft.details.peerReviewGroups) {
        peerReviewGroups = (draft.details.peerReviewGroups);
      }
      if (draft.details.peerFeedbackSurvey && draft.details.peerFeedbackSurvey.length !== 0) {
        peerFeedbackSurvey = (
          <DraftFeedbackItem
            divKey1={draft.id + 'peerFeedbackSurveyLabel'}
            divKey2={draft.id + 'peerFeedbackSurveyContainer'}
            feedbackLabel="Post Instructor Feedback Survey Prompt"
            feedbackText={draft.details.peerFeedbackSurvey}
          />
        );
      }
    }

    let learningObjectives = {};
    // put together left side: learning objectives and grade type
    if (draft.details.learningObjectives && draft.details.learningObjectives.length !== 0) {
      learningObjectives = (
        <DraftFeedbackItem
          divKey1={draft.id + 'learningObjectivesLabel'}
          divKey2={draft.id + 'learningObjectivesContainer'}
          feedbackLabel="Learning Objectives"
          feedbackText={draft.details.learningObjectives}
        />
      );
    }
    else {
      learningObjectives = (
        <div className={draftItem.summaryContainer}>
          <div><span className={draftItem.summaryLabel}>Learning Objectives:</span>
            <div>(none)</div>
          </div>
        </div>
      );
    }
    let leftSideGrade = (
      <div className={ draftItem.grade }><span className={draftItem.summaryLabel}>Grade:</span>
        <span> {draft.details.gradingPolicy}</span>
      </div>
    );

    return (
      <li className={ draftItem.item }>
        <header className={ draftItem.header }>
          <div className={ draftItem.draftInfo}>
            <div className={draftItem.draftOrder}>
              {this.props.draftName}
            </div>
            <div className={draftItem.reviewLabel}>
              {draft.type}
            </div>
            <div>
              <a className={ draftItem.editAction } href="#">Edit {draft.id}</a>
            </div>
          </div>

          <div><span className={draftItem.strong}>Due:</span>
            &nbsp;
            {draft.dueDate}
          </div>
        </header>
        <section className={ draftItem.summary }>
          <div className={ draftItem.left }>
            {learningObjectives}
            {peerReviewGroups}
            {leftSideGrade}
          </div>
          <div className={ draftItem.right }>
            {finalReflectionQuestions}
            {studentReflectionQuestions}
            {peerFeedbackSurvey}
            {postInstructorFeedback}
          </div>
        </section>
      </li>
    );
  }
});

export default DraftItem;
