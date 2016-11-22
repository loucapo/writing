import React from 'react';
import image from './../../../../images/comment.svg';

import sideMenu from './../sideMenu.css';

const ParagraphDevButton = () => {
  return (
    <li data-id="paragraphDev">
      <div className="Icon" dangerouslySetInnerHTML={{__html: image}} />
      <span className={sideMenu.sideMenuCaption}>Paragraph Development</span>
    </li>
  );
};

export default ParagraphDevButton;
