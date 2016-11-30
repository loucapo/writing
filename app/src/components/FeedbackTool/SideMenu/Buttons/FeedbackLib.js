import React, {PropTypes} from 'react';
import image from './../../../../images/comment_quickfeedback.svg';

import sideMenu from './../sideMenu.css';

const FeedbackLibButton = ({toggleQuickFeedback}) => {
  return (
    <li data-id="feedbackLib" onClick={toggleQuickFeedback}>
      <div className="Icon" dangerouslySetInnerHTML={{__html: image}} />
      <span
        className={sideMenu.sideMenuCaption}>Quick Feedback Library
      </span>
    </li>
  );
};

FeedbackLibButton.propTypes = {
  toggleQuickFeedback: PropTypes.func
};

export default FeedbackLibButton;
