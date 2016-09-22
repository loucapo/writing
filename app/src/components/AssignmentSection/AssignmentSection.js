import React, {PropTypes} from 'react';

import AssignmentSummary from './AssignmentSummary/AssignmentSummary';
import AssignmentAction from './AssignmentAction/AssignmentAction';

import assignmentSection from './assignmentSection.css';

const AssignmentSection = props => {
  return (
    <section className={ assignmentSection.wrapper }>
      <AssignmentSummary Activity={props.Activity} />
      <AssignmentAction />
    </section>
  );
};

AssignmentSection.propTypes = {
  Activity: PropTypes.object
};

export default AssignmentSection;
