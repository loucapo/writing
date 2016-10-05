import React from 'react';

import assignmentMenu from './assignmentMenu.css';

const AssignmentMenu = () => (
  <header data-id="assignment-menu" className={assignmentMenu.container}>
    <div className={assignmentMenu.active}>
      Drafts
    </div>
    <div>
      <a data-id="student-submissions" href="#">Student Submissions</a>
    </div>
  </header>);

export default AssignmentMenu;
