import React, {PropTypes} from 'react';

import DraftFeedbackItem from './../DraftFeedbackItem';
import draftItemDescription from './draftItemDescription.css';

const DraftItemDescription = ({id, details}) => (
  <div className={ draftItemDescription.left }>
    {details.learningObjectives ?
      <DraftFeedbackItem
        divKey1={id + 'learningObjectivesLabel'}
        divKey2={id + 'learningObjectivesContainer'}
        feedbackLabel="Learning Objectives"
        feedbackText={details.learningObjectives}
      /> : null}
    {details.peerReviewGroups ?
      <DraftFeedbackItem
        divKey1={id + 'peerFeedbackSurveyLabel'}
        divKey2={id + 'peerFeedbackSurveyContainer'}
        feedbackLabel="Post Instructor Feedback Survey Prompt"
        feedbackText={[details.peerReviewGroups]}
      /> : null}
    <div className={ draftItemDescription.grade }><span className={draftItemDescription.summaryLabel}>Grade:</span>
      <span> {details.gradingPolicy}</span>
    </div>
  </div>);

DraftItemDescription.propTypes = {
  id: PropTypes.string,
  details: PropTypes.object
};
export default DraftItemDescription;
