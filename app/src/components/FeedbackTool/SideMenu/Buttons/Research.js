import React from 'react';
import ResearchSVG from './ResearchSVG';

import sideMenu from './../sideMenu.css';

const ResearchButton = () => {
  return (
    <li data-id="research">
      <ResearchSVG className="Icon" />
      <span className={sideMenu.sideMenuCaption}>Integration of Research</span>
    </li>
  );
};

export default ResearchButton;
