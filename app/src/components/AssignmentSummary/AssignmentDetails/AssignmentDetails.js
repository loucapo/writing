import React, {PropTypes} from 'react';

import assignmentDetails from './assignmentDetails.css';

// XXX need id's for testability/accessibility

const AssignmentDetails = ({activity}) => (
  <div className={ assignmentDetails.summary }>
    <h1 data-id="activity-title" className={ assignmentDetails.title }>
      {activity.title}
    </h1>
    <div data-id="activity-desc" className={assignmentDetails.typeAndCourse}>
      {activity.desc}
    </div>
    <div data-id="activity-rhetoric-rubric" className={assignmentDetails.rhetoricAndRubric}>
      <span className={assignmentDetails.label}>
      Rhetoric Genre:
      </span>
      {activity.rhetoricalGenre}
      <br />
      <span className={assignmentDetails.label}>
    Rubric:
      </span>
      <a href="#">{activity.rubric}</a>
    </div>
    <div data-id="activity-prompt" className={ assignmentDetails['prompt-summary'] }>
      <div className={assignmentDetails.label}>
        Prompt:
      </div>
      {activity.prompt}
    </div>
    <a href="#">Edit Assignment Information</a>
  </div>);

AssignmentDetails.propTypes = {
  activity: PropTypes.object.isRequired
};

export default AssignmentDetails;
