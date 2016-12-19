import React, {PropTypes} from 'react';
import MLIcon from 'ml-react-cdl-icons';
import sideMenu from './../sideMenu.css';

const FeedbackLibButton = ({toggleQuickFeedback}) => {
  return (
    <li data-id="feedbackLib" onClick={toggleQuickFeedback}>
      <MLIcon
        iconTitle="Quick Feedback"
        iconFill="#DD5714"
        iconType="comment_text"
        iconWidth="20"
        iconHeight="20"
      />
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
