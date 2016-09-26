import React, {PropTypes} from 'react';

import DraftFeedbackItem from './../DraftFeedbackItem';
import draftItemFeedback from './DraftItemFeedback.css';

const DraftItemFeedback = ({id, details}) =>
  (<div className={ draftItemFeedback.right }>
    {details.studentReflectionQuestions
      ? <DraftFeedbackItem
        divKey1={id + 'studentReflectionQuestionsLabel'}
        divKey2={id + 'studentReflectionQuestionsContainer'}
        feedbackLabel="Student Reflection Questions"
        feedbackText={details.studentReflectionQuestions}
        /> : null }
    {details.finalReflectionSurvey
      ? <DraftFeedbackItem
        divKey1={id + 'finalReflectionSurveyLabel'}
        divKey2={id + 'finalReflectionSurveyContainer'}
        feedbackLabel="Final Reflection Questions"
        feedbackText={details.finalReflectionSurvey}
        /> : null }
    {details.postInstructorFeedback
      ? <DraftFeedbackItem
        divKey1={id + 'postInstructorFeedbackLabel'}
        divKey2={id + 'postInstructorFeedbackContainer'}
        feedbackLabel="Post Instructor Feedback Survey Prompt"
        feedbackText={details.postInstructorFeedback}
        /> : null }

    {details.peerFeedbackSurvey
      ? <DraftFeedbackItem
        divKey1={id + 'peerFeedbackSurveyLabel'}
        divKey2={id + 'peerFeedbackSurveyContainer'}
        feedbackLabel="Post Instructor Feedback Survey Prompt"
        feedbackText={details.peerFeedbackSurvey}
        /> : null }
  </div>);

DraftItemFeedback.propTypes = {
  id: PropTypes.string,
  details: PropTypes.object
};
export default DraftItemFeedback;
