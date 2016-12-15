import React from 'react';
import GoodJobSVG from './Icons/GoodJobSVG';
import sideMenu from './../sideMenu.css';

const GoodJobButton = () => {
  return (
    <li data-id="goodJob">
      <GoodJobSVG className="Icon" />
      <span className={sideMenu.sideMenuCaption}>Good Job!</span>
    </li>
  );
};

export default GoodJobButton;
