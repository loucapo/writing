import React from 'react';
import CommentSVG from './Icons/CommentSVG';
import sideMenu from './../sideMenu.css';

const ParagraphDevButton = () => {
  return (
    <li data-id="paragraphDev">
      <CommentSVG className="Icon" />
      <span className={sideMenu.sideMenuCaption}>Paragraph Development</span>
    </li>
  );
};

export default ParagraphDevButton;
