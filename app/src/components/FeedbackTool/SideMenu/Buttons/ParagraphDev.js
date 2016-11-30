import React from 'react';
import ParagraphDevSVG from './ParagraphDevSVG';

import sideMenu from './../sideMenu.css';

const ParagraphDevButton = () => {
  return (
    <li data-id="paragraphDev">
      <ParagraphDevSVG className="Icon" />
      <span className={sideMenu.sideMenuCaption}>Paragraph Development</span>
    </li>
  );
};

export default ParagraphDevButton;
