import React from 'react';
import CounterArgsSVG from './CounterArgsSVG';
import sideMenu from './../sideMenu.css';

const CounterArgsButton = () => {
  return (
    <li data-id="counterargs">
      <CounterArgsSVG className="Icon" />
      <span className={sideMenu.sideMenuCaption}>Counterarguments</span>
    </li>
  );
};

export default CounterArgsButton;
