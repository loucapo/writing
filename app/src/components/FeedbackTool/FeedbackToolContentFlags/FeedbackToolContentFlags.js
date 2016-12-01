import React, { PropTypes } from 'react';
import FeedbackToolContentFlag from './FeedbackToolContentFlag/FeedbackToolContentFlag';

const FeedbackToolContentFlags = ({feedbackToolContentItems}) => (
  <div>
    {
      feedbackToolContentItems.map((item, index) => (
        <FeedbackToolContentFlag item={item} key={index} />
      ))
    }
  </div>
);

FeedbackToolContentFlags.propTypes = {
  feedbackToolContentItems: PropTypes.array
};

export default FeedbackToolContentFlags;
