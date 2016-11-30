import React from 'react';
import InterpretationSVG from './InterpretationSVG';

import sideMenu from './../sideMenu.css';

const InterpretationButton = () => {
  return (
    <li data-id="interpretation">
      <InterpretationSVG className="Icon" />
      <span className={sideMenu.sideMenuCaption}>Interpretation/Analysis</span>
    </li>
  );
};

export default InterpretationButton;
