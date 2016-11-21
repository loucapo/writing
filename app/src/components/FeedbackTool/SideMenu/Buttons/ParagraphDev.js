import React from 'react';
import sideMenu from './../sideMenu.css';

const ParagraphDevButton = () => {
  let commentIcon = "https://macmillanlearning.atlassian.net/secure/attachment/21936/comment.svg";

  return (
    <li data-id="paragraphDev">
      <img src={commentIcon}/>Paragraph Development
    </li>
  );
};

export default ParagraphDevButton;
