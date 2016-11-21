import React from 'react';
import sideMenu from './../sideMenu.css';

const ResearchButton = () => {
  let commentIcon = "https://macmillanlearning.atlassian.net/secure/attachment/21936/comment.svg";

  return (
    <li data-id="research">
      <img src={commentIcon}/>Integration of Research
    </li>
  );
};

export default ResearchButton;
