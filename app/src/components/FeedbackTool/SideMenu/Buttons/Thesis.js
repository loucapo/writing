import React from 'react';
import ThesisSVG from './ThesisSVG';

import sideMenu from './../sideMenu.css';

const ThesisButton = () => {
  return (
    <li data-id="thesis">
      <ThesisSVG className="Icon" />
      <span className={sideMenu.sideMenuCaption}>Thesis</span>
    </li>
  );
};

export default ThesisButton;
