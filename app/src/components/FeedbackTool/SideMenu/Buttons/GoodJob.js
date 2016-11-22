import React from 'react';
import image from './../../../../images/comment_thumbsup.svg';

import sideMenu from './../sideMenu.css';

const GoodJobButton = () => {
  return (
    <li data-id="goodJob">
      <div className="Icon" dangerouslySetInnerHTML={{__html: image}} />
      <span className={sideMenu.sideMenuCaption}>Good Job!</span>
    </li>
  );
};

export default GoodJobButton;
