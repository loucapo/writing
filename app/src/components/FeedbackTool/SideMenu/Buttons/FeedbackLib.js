import React, {PropTypes} from 'react';
import MLIcon from 'ml-react-cdl-icons';
import sideMenu from './../sideMenu.css';

const FeedbackLibButton = ({toggleQuickFeedback}) => {
  return (
    <li className={ sideMenu.menu } data-id="feedbackLib" onClick={toggleQuickFeedback}>
      <div className={ sideMenu.listDiv }>
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
      </div>
    </li>
  );
};

FeedbackLibButton.propTypes = {
  toggleQuickFeedback: PropTypes.func
};

export default FeedbackLibButton;
