import React from 'react';
import sideMenu from './sideMenu.css';

const SideMenu = () => {
  let commentIcon = "https://macmillanlearning.atlassian.net/secure/attachment/21936/comment.svg",
      thumbsUpIcon = "https://macmillanlearning.atlassian.net/secure/attachment/22111/comment_thumbsup.svg",
      quickFeedbackIcon = "https://macmillanlearning.atlassian.net/secure/attachment/22112/comment_quickfeedback.svg";

  return (
    <div className={sideMenu.sidebarContainer}>
      <div className={sideMenu.sidebar}>
        <ul>
          <li><img src={commentIcon}/>Thesis</li>
          <li><img src={commentIcon}/>Reason & Support</li>
          <li><img src={commentIcon}/>Interpretation/Analysis</li>
          <li><img src={commentIcon}/>Paragraph Development</li>
          <li><img src={commentIcon}/>Integration of Research</li>
          <li><img src={commentIcon}/>Counterarguments</li>
          <li><img src={commentIcon}/>Other</li>
          <li><img src={thumbsUpIcon}/>Good Job!</li>
          <li><img src={quickFeedbackIcon}/>Quick Feedback Library</li>
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;

