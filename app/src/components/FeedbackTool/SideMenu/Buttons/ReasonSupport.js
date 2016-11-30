import React from 'react';
import ReasonSupportSVG from './ReasonSupportSVG';

import sideMenu from './../sideMenu.css';

const ReasonSupportButton = () => {
  return (
    <li data-id="reason&support">
      <ReasonSupportSVG className="Icon" />
      <span className={sideMenu.sideMenuCaption}>Reason & Support</span>
    </li>
  );
};

export default ReasonSupportButton;
