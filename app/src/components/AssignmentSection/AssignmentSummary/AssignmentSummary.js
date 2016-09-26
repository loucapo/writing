import React, {PropTypes} from 'react';

import assignmentSummary from './assignmentSummary.css';

const AssignmentSummary = ({activity}) => (
  <div className={ assignmentSummary.summary }>
    <h1 className={ assignmentSummary.title }>
      {activity.title}
    </h1>
    <div className={assignmentSummary.typeAndCourse}>
      {activity.desc}
    </div>
    <div className={assignmentSummary.rhetoricAndRubric}>
      <span className={assignmentSummary.label}>
      Rhetoric Genre:
      </span>
      {activity.rhetoricalGenre}
      <br />
      <span className={assignmentSummary.label}>
    Rubric:
      </span>
      <a href="#">{activity.rubric}</a>
    </div>
    <div className={ assignmentSummary['prompt-summary'] }>
      <div className={assignmentSummary.label}>
        Prompt:
      </div>
      {activity.prompt}
    </div>
    <a href="#">Edit Assignment Information</a>
  </div>);

AssignmentSummary.propTypes = {
  activity: PropTypes.object.isRequired
};

export default AssignmentSummary;
