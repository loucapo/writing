import React from 'react';
import sideMenu from './../sideMenu.css';

const FeedbackLibButton = () => {
  let quickFeedbackIcon = "https://macmillanlearning.atlassian.net/secure/attachment/22112/comment_quickfeedback.svg";

  return (
    <li data-id="feedbackLib">
      <img src={quickFeedbackIcon}/>Quick Feedback Library
    </li>
  );
};

export default FeedbackLibButton;
