import React from 'react';
import CommentSVG from './Icons/CommentSVG';
import sideMenu from './../sideMenu.css';

const ResearchButton = () => {
  return (
    <li data-id="research">
      <CommentSVG className="Icon" />
      <span className={sideMenu.sideMenuCaption}>Integration of Research</span>
    </li>
  );
};

export default ResearchButton;
