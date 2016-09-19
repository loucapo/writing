import React from 'react';

import assignmentAction from './assignmentAction.css';

const AssignmentAction = () => {
  return (
    <div className={ assignmentAction['assignment-action'] }>
      <div className={ assignmentAction['assign-button-wrapper'] }>
        <button className={ assignmentAction['assign-button'] }>Assign to Students</button>
      </div>
    </div>
  );
};

export default AssignmentAction;
