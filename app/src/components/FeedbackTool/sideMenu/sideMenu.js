import React from 'react';
import sideMenu from './sideMenu.css';

const SideMenu = () => {
  let commentIcon = "https://macmillanlearning.atlassian.net/secure/attachment/21936/comment.svg",
      thumbsUpIcon = "https://macmillanlearning.atlassian.net/secure/attachment/22111/comment_thumbsup.svg",
      quickFeedbackIcon = "https://macmillanlearning.atlassian.net/secure/attachment/22112/comment_quickfeedback.svg";

  return (
    <div data-id="sideMenu" className={sideMenu.sideMenu}>
      <ul>
        <li data-id="thesis">
          <img src={commentIcon}/>Thesis
        </li>
        <li data-id="reason&support">
          <img src={commentIcon}/>Reason & Support
        </li>
        <li data-id="interpretation">
          <img src={commentIcon}/>Interpretation/Analysis
        </li>
        <li data-id="paraDev">
          <img src={commentIcon}/>Paragraph Development
        </li>
        <li data-id="research">
          <img src={commentIcon}/>Integration of Research
        </li>
        <li data-id="counterargs">
          <img src={commentIcon}/>Counterarguments
        </li>
        <li data-id="other">
          <img src={commentIcon}/>Other
        </li>
        <li data-id="goodJob">
          <img src={thumbsUpIcon}/>Good Job!
        </li>
        <li data-id="feedbackLib">
          <img src={quickFeedbackIcon}/>Quick Feedback Library
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;

