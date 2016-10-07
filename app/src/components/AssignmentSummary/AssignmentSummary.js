import React, {PropTypes} from 'react';

import AssignmentDetails from './AssignmentDetails/AssignmentDetails';
import ActionButton from '../ActionButton/ActionButton';

import assignmentSummary from './assignmentSummary.css';

const AssignmentSummary = ({activity}) => {
  return (
    <section className={ assignmentSummary.wrapper }>
      <AssignmentDetails activity={activity} />
      <ActionButton content="Assign to Student" />
    </section>
  );
};

AssignmentSummary.propTypes = {
  activity: PropTypes.object
};

export default AssignmentSummary;
