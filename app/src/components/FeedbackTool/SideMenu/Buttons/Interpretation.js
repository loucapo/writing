import React from 'react';
import CommentSVG from './Icons/CommentSVG';
import sideMenu from './../sideMenu.css';

const InterpretationButton = () => {
  return (
    <li data-id="interpretation">
      <CommentSVG className="Icon" />
      <span className={sideMenu.sideMenuCaption}>Interpretation/Analysis</span>
    </li>
  );
};

export default InterpretationButton;
