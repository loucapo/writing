import React, {PropTypes} from 'react';
import uuid from 'uuid';
import draftItemDescription from './draftItemDescription.css';
import draftItem from './../draftItem.css';

// XXX May need to add id's for testability and accessibility

const DraftItemDescription = ({details}) => {
  const learningObjectives = Array.isArray(details.learningObjectives)
    ? details.learningObjectives
    : [details.learningObjectives];
  return (
    <div data-id="draft-item-description" className={ draftItemDescription.left }>
      { details.learningObjectives
        ? <div className={draftItem.summaryContainer}><div>
          <span data-id="draft-item-learning-objectives" className={draftItem.summaryLabel}>Learning Objectives</span>
          { learningObjectives.map(fbt => <div key={uuid.v4()}>{fbt}</div>) }
        </div></div> : null
      }

      { details.peerReviewGroups
        ? <div className={draftItem.summaryContainer}><div>
          <span data-id="draft-item-peer-review" className={draftItem.summaryLabel}>Post Instructor Feedback Survey Prompt</span>
          { [details.peerReviewGroups].map(fbt => <div key={uuid.v4()}>{fbt}</div>) }
        </div></div> : null
      }

      <div className={ draftItemDescription.grade }><span className={draftItemDescription.summaryLabel}>Grade:</span>
        <span data-id="grading-policy"> {details.gradingPolicy}</span>
      </div>
    </div>);
};

DraftItemDescription.propTypes = {
  id: PropTypes.string,
  details: PropTypes.object
};
export default DraftItemDescription;
