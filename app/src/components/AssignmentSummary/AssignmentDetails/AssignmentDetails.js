import React, {PropTypes} from 'react';

import assignmentDetails from './assignmentDetails.css';

// XXX need id's for testability/accessibility

const AssignmentDetails = ({activity}) => (
  <div className={ assignmentDetails.summary }>
    <h1 className={ assignmentDetails.title }>
      {activity.title}
    </h1>
    <div className={assignmentDetails.typeAndCourse}>
      {activity.desc}
    </div>
    <div className={assignmentDetails.rhetoricAndRubric}>
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
    <div className={ assignmentDetails['prompt-summary'] }>
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
