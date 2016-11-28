import React, {PropTypes} from 'react';
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

const spanClicked = (val) => {
  console.log(val); // just for verification that the links are clicking
};

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
        <div className={showQuickFeedbackTool ? '' : sideMenu.hiddenItem}>
          <li data-id="span5" className={sideMenu.list_Item} onClick={() => spanClicked(1)}>Appropriate Language</li>
          <li data-id="span1" className={sideMenu.list_Item} onClick={() => spanClicked(2)}>Comma Splice</li>
          <li data-id="span8" className={sideMenu.list_Item} onClick={() => spanClicked(3)}>Comma Error</li>
          <li data-id="span2" className={sideMenu.list_Item} onClick={() => spanClicked(4)}>Fragment</li>
          <li data-id="span4" className={sideMenu.list_Item} onClick={() => spanClicked(5)}>Pronoun Agreement</li>
          <li data-id="span5" className={sideMenu.list_Item} onClick={() => spanClicked(6)}>Subject Verb Agreement</li>
          <li data-id="span6" className={sideMenu.list_Item} onClick={() => spanClicked(7)}>Needs Analysis</li>
          <li data-id="span3" className={sideMenu.list_Item} onClick={() => spanClicked(8)}>Usage</li>
        </div>
      </ul>
    </div>
  );
  if (showQuickFeedbackTool) {
    result = (
      <div className={sideMenu.sidebarContainer}>
        {sideMenuContent}
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

