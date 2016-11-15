import React, {PropTypes} from 'react';
import QuickFeedbackTool from './QuickFeedbackTool/QuickFeedbackTool';

import sideMenu from './sideMenu.css';

const SideMenu = ({showQuickFeedbackTool, toggleQuickFeedback}) => {
  let result;
  const sideMenuContent = <div
    className={sideMenu.sidebar}>
    <ul>
      <li className={sideMenu.commentIcon}>Thesis</li>
      <li className={sideMenu.commentIcon}>Reason & Supports</li>
      <li className={sideMenu.commentIcon}>Interpretation/Analysis</li>
      <li className={sideMenu.commentIcon}>Expansion of Thesis</li>
      <li className={sideMenu.commentIcon}>Integration of Research</li>
      <li className={sideMenu.commentIcon}>Counterarguments</li>
      <li className={sideMenu.commentIcon}>Other</li>
      <li className={sideMenu.thumbsUpIcon}>Good Job!</li>
      <li
        className={sideMenu.quickFeedbackIcon}
        onClick={toggleQuickFeedback}>Quick Feedback Library
      </li>
    </ul>
  </div>;
  if (showQuickFeedbackTool) {
    result = (
      <div className={sideMenu.sidebarContainer}>
        {sideMenuContent}
        <QuickFeedbackTool />
      </div>
    );
  }
  else {
    result = (
      <div className={sideMenu.sidebarContainer}>
        {sideMenuContent}
      </div>
    );
  }
  return result;
};

SideMenu.propTypes = {
  showQuickFeedbackTool: PropTypes.bool,
  toggleQuickFeedback: PropTypes.func
};

export default SideMenu;

