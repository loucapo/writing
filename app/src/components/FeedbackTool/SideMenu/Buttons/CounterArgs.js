import React from 'react';
import CommentSVG from './Icons/CommentSVG';
import sideMenu from './../sideMenu.css';

const CounterArgsButton = () => {
  return (
    <li data-id="counterargs">
      <CommentSVG className="Icon" />
      <span className={sideMenu.sideMenuCaption}>Counterarguments</span>
    </li>
  );
};

export default CounterArgsButton;
