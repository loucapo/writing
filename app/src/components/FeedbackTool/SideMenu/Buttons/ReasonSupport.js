import React from 'react';
import sideMenu from './../sideMenu.css';

const ReasonSupportButton = () => {
  let commentIcon = "https://macmillanlearning.atlassian.net/secure/attachment/21936/comment.svg";

  return (
    <li data-id="reason&support">
      <img src={commentIcon}/>Reason & Support
    </li>
  );
};

export default ReasonSupportButton;
