import React, {PropTypes} from 'react';
import image from './../../../../images/comment_thumbsup.svg';

import sideMenu from './../sideMenu.css';

const FeedbackLibButton = ({toggleQuickFeedback}) => {
  return (
    <li data-id="feedbackLib">
      <div className="Icon" dangerouslySetInnerHTML={{__html: image}} />
      <span
        className={sideMenu.sideMenuCaption}
        onClick={toggleQuickFeedback}>Quick Feedback Library
      </span>
    </li>
  );
};

FeedbackLibButton.propTypes = {
  toggleQuickFeedback: PropTypes.func
};

export default FeedbackLibButton;
