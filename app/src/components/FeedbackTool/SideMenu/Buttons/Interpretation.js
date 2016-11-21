import React from 'react';
import sideMenu from './../sideMenu.css';

const InterpretationButton = () => {
  let commentIcon = "https://macmillanlearning.atlassian.net/secure/attachment/21936/comment.svg";

  return (
    <li data-id="interpretation">
      <img src={commentIcon}/>Interpretation/Analysis
    </li>
  );
};

export default InterpretationButton;
