import React from 'react';
import CommentSVG from './Icons/CommentSVG';
import sideMenu from './../sideMenu.css';

const ReasonSupportButton = () => {
  return (
    <li data-id="reason&support">
      <CommentSVG className="Icon" />
      <span className={sideMenu.sideMenuCaption}>Reason & Support</span>
    </li>
  );
};

export default ReasonSupportButton;
