import React from 'react';
import sideMenu from './../sideMenu.css';

const OtherButton = () => {
  let commentIcon = "https://macmillanlearning.atlassian.net/secure/attachment/21936/comment.svg";

  return (
    <li data-id="other">
      <img src={commentIcon}/>Other
    </li>
  );
};

export default OtherButton;
