import React from 'react';
import sideMenu from './sideMenu.css';

const SideMenu = () => {
  return (
    <div className={sideMenu.sidebarContainer}>
      <div className={sideMenu.sidebar}>
        <ul>
          <li className={sideMenu.commentIcon}>Thesis</li>
          <li className={sideMenu.commentIcon}>Reason & Supports</li>
          <li className={sideMenu.commentIcon}>Interpretation/Analysis</li>
          <li className={sideMenu.commentIcon}>Expansion of Thesis</li>
          <li className={sideMenu.commentIcon}>Integration of Research</li>
          <li className={sideMenu.commentIcon}>Counterarguments</li>
          <li className={sideMenu.commentIcon}>Other</li>
          <li className={sideMenu.thumbsUpIcon}>Good Job!</li>
          <li className={sideMenu.quickFeedbackIcon}>Quick Feedback Library</li>
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;

