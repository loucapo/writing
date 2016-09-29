import React from 'react';

import assignmentActionButton from './../../../styles/action-button.css';

const AssignmentAction = () => {
  return (
    <div className={ assignmentActionButton['assignment-action'] }>
      <div className={ assignmentActionButton['assign-button-wrapper'] }>
        <button className={ assignmentActionButton['assign-button'] }>Assign to Students</button>
      </div>
    </div>
  );
};

export default AssignmentAction;
