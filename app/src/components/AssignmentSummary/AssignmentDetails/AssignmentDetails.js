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
      <span data-id="activity-rhetorical-genre" className={assignmentDetails.label}>
      Rhetoric Genre:
      </span>
      {activity.rhetoricalGenre}
      <br />
      <span className={assignmentDetails.label}>
    Rubric:
      </span>
      <a data-id="activity-rubric" href="#">{activity.rubric}</a>
    </div>
    <div className={ assignmentDetails['prompt-summary'] }>
      <div data-id="activity-prompt" className={assignmentDetails.label}>
        Prompt:
      </div>
      {activity.prompt}
    </div>
    <a data-id="edit-assignment" href="#">Edit Assignment Information</a>
  </div>);

AssignmentDetails.propTypes = {
  activity: PropTypes.object.isRequired
};

export default AssignmentDetails;
