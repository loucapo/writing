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
      <span data-id="activity-rhetorical-genre">{activity.rhetoricalGenre}</span>
      <br />
      <span className={assignmentDetails.label}>
    Rubric:
      </span>
      <a data-id="activity-rubric" href="#">{activity.rubric}</a>
    </div>
    <div className={ assignmentDetails['prompt-summary'] }>
      <div className={assignmentDetails.label}>
        Prompt:
      </div>
      <span data-id="activity-prompt">{activity.prompt}</span>
    </div>
    <a data-id="edit-assignment" href="#">Edit Assignment Information</a>
  </div>);

AssignmentDetails.propTypes = {
  activity: PropTypes.object.isRequired
};

export default AssignmentDetails;
