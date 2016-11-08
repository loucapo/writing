import React from 'react';

import activityMenu from './activityMenu.css';

const ActivityMenu = () => (
  <header data-id="activity-menu" className={activityMenu.container}>
    <div className={activityMenu.active}>
      Drafts
    </div>
    <div>
      <a data-id="student-submissions" href="#">Student Submissions</a>
    </div>
  </header>);

export default ActivityMenu;
