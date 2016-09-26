import React, {PropTypes} from 'react';

import AssignmentSummary from './AssignmentSummary/AssignmentSummary';
import AssignmentAction from './AssignmentAction/AssignmentAction';

import assignmentSection from './assignmentSection.css';

const AssignmentSection = ({activity}) => {
  return (
    <section className={ assignmentSection.wrapper }>
      <AssignmentSummary activity={activity} />
      <AssignmentAction />
    </section>
  );
};

AssignmentSection.propTypes = {
  activity: PropTypes.object
};

export default AssignmentSection;
