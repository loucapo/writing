import React, {PropTypes} from 'react';
import sideMenu from './sideMenu.css';

const SideMenu = () => {
  return (
    <div className={sideMenu.sidebarContainer}>
      <div className={sideMenu.sidebar}>
        <ul>
          <li>Thesis</li>
          <li>Reason & Supports</li>
          <li>Interpretation/Analysis</li>
          <li>Expansion of Thesis</li>
          <li>Integration of Research</li>
          <li>Counterarguments</li>
          <li>Other</li>
          <li>Good Job!</li>
          <li>Qucik Feedback Library</li>
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;

