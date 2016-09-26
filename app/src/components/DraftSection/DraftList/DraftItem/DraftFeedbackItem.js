import React, { PropTypes } from 'react';

import draftItem from './draftItem.css';

const DraftFeedbackItem = ({divKey1, divKey2, feedbackLabel, feedbackText}) => (
  <div key={divKey1} className={draftItem.summaryContainer}>
    <div key={divKey2} >
      <span className={draftItem.summaryLabel}>{feedbackLabel}:</span>
      {
        feedbackText.map(function processFeedback( fbt, index ) {
          return <div key={index}>{fbt}</div>;
        })
      }
    </div>
  </div>);

DraftFeedbackItem.propTypes = {
  divKey1: PropTypes.string,
  divKey2: PropTypes.string,
  feedbackLabel: PropTypes.string,
  feedbackText: PropTypes.array
};

export default DraftFeedbackItem;
