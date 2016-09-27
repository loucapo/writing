import React, {PropTypes} from 'react';

import AssignmentDetails from './AssignmentDetails/AssignmentDetails';
import AssignmentAction from './AssignmentAction/AssignmentAction';

import assignmentSummary from './assignmentSummary.css';

const AssignmentSummary = ({activity}) => {
  return (
    <section className={ assignmentSummary.wrapper }>
      <AssignmentDetails activity={activity} />
      <AssignmentAction />
    </section>
  );
};

AssignmentSummary.propTypes = {
  activity: PropTypes.object
};

export default AssignmentSummary;
