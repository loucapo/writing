import React from 'react';
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
  return (
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
        <FeedbackLibButton />
      </ul>
    </div>
  );
};

export default SideMenu;

