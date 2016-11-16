import React, {PropTypes} from 'react';
import QuickFeedbackTool from './QuickFeedbackTool/QuickFeedbackTool';

import sideMenu from './sideMenu.css';

const SideMenu = ({showQuickFeedbackTool, toggleQuickFeedback}) => {
  let result;
  if (showQuickFeedbackTool) {
    result = (
      <div className={sideMenu.sidebarContainer}>
        <div
          className={sideMenu.sidebar}
          onClick={toggleQuickFeedback}>hi mom
        </div>
        <QuickFeedbackTool />
      </div>
    );
  }
  else {
    result = (
      <div className={sideMenu.sidebarContainer}>
        <div
          className={sideMenu.sidebar}
          onClick={toggleQuickFeedback}>hi mom
        </div>
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

