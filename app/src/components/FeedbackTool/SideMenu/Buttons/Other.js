import React from 'react';
import image from './../../../../images/comment.svg';

import sideMenu from './../sideMenu.css';

const OtherButton = () => {
  return (
    <li data-id="other">
      <div className="Icon" dangerouslySetInnerHTML={{__html: image}} />
      <span className={sideMenu.sideMenuCaption}>Other</span>
    </li>
  );
};

export default OtherButton;
