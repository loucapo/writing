import React from 'react';
import image from './../../../../images/comment.svg';

import sideMenu from './../sideMenu.css';

const ThesisButton = () => {
  return (
    <li data-id="thesis">
      <div className="Icon" dangerouslySetInnerHTML={{__html: image}} />
      <span className={sideMenu.sideMenuCaption}>Thesis</span>
    </li>
  );
};

export default ThesisButton;
