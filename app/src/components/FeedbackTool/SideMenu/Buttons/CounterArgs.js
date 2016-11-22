import React from 'react';
import image from './../../../../images/comment.svg';

import sideMenu from './../sideMenu.css';

const CounterArgsButton = () => {
  return (
    <li data-id="counterargs">
      <div className="Icon" dangerouslySetInnerHTML={{__html: image}} />
      <span className={sideMenu.sideMenuCaption}>Counterarguments</span>
    </li>
  );
};

export default CounterArgsButton;
