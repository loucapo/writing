import React, { PropTypes } from 'react';
import FeedbackToolContentFlag from './FeedbackToolContentFlag/FeedbackToolContentFlag';
import feedbackToolContentFlags from './feedbackToolContentFlags.css';

const FeedbackToolContentFlags = ({feedbackToolContentItems}) => (
  <div className={ feedbackToolContentFlags.flagContainer }>
    {feedbackToolContentItems.map((item, index) => (
      <FeedbackToolContentFlag item={item} key={index} />
      ))
    }
  </div>
);

FeedbackToolContentFlags.propTypes = {
  feedbackToolContentItems: PropTypes.array
};

export default FeedbackToolContentFlags;
