import React, {PropTypes} from 'react';

import assignmentSummary from './assignmentSummary.css';

const AssignmentSummary = props => {
  if (props.Activity === undefined) {
    return (<div />);
  }
  else {
    return (
      <div className={ assignmentSummary.summary }>
        <h1 className={ assignmentSummary.title }>
          {props.Activity.title}
        </h1>
        <div className={assignmentSummary.typeAndCourse}>
          {props.Activity.desc}
        </div>
        <div className={assignmentSummary.rhetoricAndRubric}>
        <span className={assignmentSummary.label}>
          Rhetoric Genre:
        </span>
          {props.Activity.rhetoricalGenre}
          <br />
          <span className={assignmentSummary.label}>
        Rubric:
        </span>
          <a href="#">{props.Activity.rubric}</a>
        </div>
        <div className={ assignmentSummary['prompt-summary'] }>
          <div className={assignmentSummary.label}>
            Prompt:
          </div>
          {props.Activity.prompt}
        </div>
        <a href="#">Edit Assignment Information</a>
      </div>
    );
  }
};

AssignmentSummary.propTypes = {
  Activity: PropTypes.object
};

export default AssignmentSummary;
