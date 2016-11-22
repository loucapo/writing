import React, {PropTypes} from 'react';
import QuickFeedbackTool from './QuickFeedbackTool/QuickFeedbackTool';
import ThesisButton from './Buttons/Thesis';
import ReasonSupportButton from './Buttons/ReasonSupport';
import InterpretationButton from './Buttons/Interpretation';
import ParagraphDevButton from './Buttons/ParagraphDev';
import ResearchButton from './Buttons/Research';
import CounterArgsButton from './Buttons/CounterArgs';
import OtherButton from './Buttons/Other';
import GoodJobButton from './Buttons/GoodJob';
import FeedbackLibButton from './Buttons/FeedbackLib';

import sideMenu from './sideMenu.css';

const SideMenu = ({showQuickFeedbackTool, toggleQuickFeedback}) => {
  let result;
  const sideMenuContent = (
    <div data-id="sideMenu" className={sideMenu.sideMenu}>
      <ul>
        <ThesisButton />
        <ReasonSupportButton />
        <InterpretationButton />
        <ParagraphDevButton />
        <ResearchButton />
        <CounterArgsButton />
        <OtherButton />
        <GoodJobButton />
        <FeedbackLibButton toggleQuickFeedback={toggleQuickFeedback} />
      </ul>
    </div>
  );
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

