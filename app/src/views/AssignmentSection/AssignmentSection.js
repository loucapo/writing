import React from 'react';
import AssignmentSummary from './AssignmentSummary/AssignmentSummary';
import AssignmentAction from './AssignmentAction/AssignmentAction';

import assignmentSection from './assignmentSection.css';
// const assignmentSection = require('./assignmentSection.css');

const AssignmentSection = () => {
  return (
    <section className={ assignmentSection.wrapper }>
      <AssignmentSummary />
      <AssignmentAction />
    </section>
  );
};

export default AssignmentSection;
