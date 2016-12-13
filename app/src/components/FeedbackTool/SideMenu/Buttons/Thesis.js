import React from 'react';
import CommentSVG from './CommentSVG';
import sideMenu from './../sideMenu.css';

const ThesisButton = () => {
  return (
    <li data-id="thesis">
      <CommentSVG className="Icon" />
      <span className={sideMenu.sideMenuCaption}>Thesis</span>
    </li>
  );
};

export default ThesisButton;
