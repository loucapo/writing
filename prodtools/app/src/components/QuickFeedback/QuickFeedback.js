import React from 'react';
import {Link} from 'react-router';
import MLButton from '../MLButton/MLbutton';

const QuickFeedback = () => {
  return (
    <div>
      <Link to="/quick-feedback-creation">
        <MLButton
          title="+ Add New Quick Feedback"
          dataId="add-quick-feedback-button" />
      </Link>
    </div>
  );
};

export default QuickFeedback;
