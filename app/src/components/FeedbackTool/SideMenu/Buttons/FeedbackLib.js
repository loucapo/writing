import React, {PropTypes} from 'react';
import FeedbackLibSVG from './FeedbackLibSVG';

import sideMenu from './../sideMenu.css';

const FeedbackLibButton = ({toggleQuickFeedback}) => {
  return (
    <li data-id="feedbackLib" onClick={toggleQuickFeedback}>
      <FeedbackLibSVG className="Icon" />
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
