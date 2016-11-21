import React from 'react';
import sideMenu from './../sideMenu.css';

const GoodJobButton = () => {
  let thumbsUpIcon = "https://macmillanlearning.atlassian.net/secure/attachment/22111/comment_thumbsup.svg";

  return (
    <li data-id="goodJob">
      <img src={thumbsUpIcon}/>Good Job!
    </li>
  );
};

export default GoodJobButton;
