import React, {PropTypes} from 'react';
import MLIcon from 'ml-react-cdl-icons';
import sideMenu from './../sideMenu.css';

const FeedbackLibButton = ({toggleQuickFeedback}) => {
  return (
    <li className={ sideMenu.menu } data-id="feedbackLib" onClick={toggleQuickFeedback}>
      <div className={ sideMenu.listDiv }>
        <MLIcon
          title="Quick Feedback"
          fill="#DD5714"
          type="comment_text"
          width="20"
          height="20"
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
