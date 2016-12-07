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


const SideMenu = (props) => {
  const spanClicked = (val) => {
    console.log(val); // just for verification that the links are clicking
  };

  const sideMenuContent = (
    <div data-id="sideMenu" className={sideMenu.sideMenu}>
      <ul>
        <ThesisButton />
        <ReasonSupportButton />
        <InterpretationButton />
        <ParagraphDevButton />
        <ResearchButton />
        <CounterArgsButton />
        <OtherButton {...props} />
        <GoodJobButton />
        <FeedbackLibButton toggleQuickFeedback={props.toggleQuickFeedback} />

        <div className={props.showQuickFeedbackTool ? sideMenu.quickFeedback : sideMenu.quickFeedback + ' ' + sideMenu.hiddenItem}>
          <li
            data-id="appropriate-language"
            className={sideMenu.list_Item}
            onClick={() => spanClicked(1)}>Appropriate Language
          </li>
          <li
            data-id="comma-splice"
            className={sideMenu.list_Item}
            onClick={() => spanClicked(2)}>Comma Splice
          </li>
          <li
            data-id="comma-error"
            className={sideMenu.list_Item}
            onClick={() => spanClicked(3)}>Comma Error
          </li>
          <li
            data-id="fragment"
            className={sideMenu.list_Item}
            onClick={() => spanClicked(4)}>Fragment
          </li>
          <li
            data-id="pronoun-agreement"
            className={sideMenu.list_Item}
            onClick={() => spanClicked(5)}>Pronoun Agreement
          </li>
          <li
            data-id="subject-verb-agreement"
            className={sideMenu.list_Item}
            onClick={() => spanClicked(6)}>Subject Verb Agreement
          </li>
          <li
            data-id="needs-analysis"
            className={sideMenu.list_Item}
            onClick={() => spanClicked(7)}>Needs Analysis
          </li>
          <li
            data-id="usage"
            className={sideMenu.list_Item}
            onClick={() => spanClicked(8)}>Usage
          </li>
        </div>
      </ul>
    </div>
  );

  return (<div className={sideMenu.sidebarContainer}>
    {sideMenuContent}
  </div>);
};

SideMenu.propTypes = {
  showQuickFeedbackTool: PropTypes.bool.isRequired,
  toggleQuickFeedback: PropTypes.func.isRequired
};

export default SideMenu;

