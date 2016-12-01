import React from 'react';
import image from './../../../../images/comment.svg';

import sideMenu from './../sideMenu.css';

const InterpretationButton = () => {
  return (
    <li data-id="interpretation">
      <div className="Icon" dangerouslySetInnerHTML={{__html: image}} />
      <span className={sideMenu.sideMenuCaption}>Interpretation/Analysis</span>
    </li>
  );
};

export default InterpretationButton;
