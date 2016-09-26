import React from 'react';

import assignmentMenu from './assignmentMenu.css';

const AssignmentMenu = () => (
  <header className={assignmentMenu.container}>
    <div className={assignmentMenu.active}>
      Drafts
    </div>
    <div>
      <a href="#">Student Submissions</a>
    </div>
  </header>);

export default AssignmentMenu;
