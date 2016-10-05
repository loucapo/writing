import React, {PropTypes} from 'react';
import uuid from 'uuid';

import draftItemFeedback from './DraftItemFeedback.css';
import draftItem from './../draftItem.css';

// XXX may need id's to be added for testability/accessibility

const DraftItemFeedback = ({details}) => (
  <div data-id="draft-item-feedback" className={ draftItemFeedback.right }>
    { details.studentReflectionQuestions
      ? <div className={draftItem.summaryContainer}><div>
        <span
          data-id="draft-item-student-reflection-questions"
          className={draftItem.summaryLabel}>Student Reflection Questions
        </span>
        { details.studentReflectionQuestions.map(fbt => <div key={uuid.v4()}>{fbt}</div>) }
      </div></div> : null
    }

    { details.finalReflectionSurvey
      ? <div className={draftItem.summaryContainer}><div>
        <span
          data-id="draft-item-final-reflection-survey"
          className={draftItem.summaryLabel}>Final Reflection Questions
        </span>
        { details.finalReflectionSurvey.map(fbt => <div key={uuid.v4()}>{fbt}</div>) }
      </div> </div> : null
    }

    { details.postInstructorFeedback
      ? <div className={draftItem.summaryContainer}><div>
        <span
          data-id="draft-item-post-instructor-feedback"
          className={draftItem.summaryLabel}>Post Instructor Feedback Survey Prompt
        </span>
        { details.postInstructorFeedback.map(fbt => <div key={uuid.v4()}>{fbt}</div>) }
      </div></div> : null
    }

    { details.peerFeedbackSurvey
      ? <div className={draftItem.summaryContainer}><div>
        <span
          data-id="draft-item-peer-feedback-survey"
          className={draftItem.summaryLabel}>Post Instructor Feedback Survey Prompt
        </span>
        { details.peerFeedbackSurvey.map(fbt => <div key={uuid.v4()}>{fbt}</div>) }
      </div></div> : null
    }
  </div>);

DraftItemFeedback.propTypes = {
  id: PropTypes.string,
  details: PropTypes.object
};

export default DraftItemFeedback;
