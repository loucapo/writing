import React, { PropTypes } from 'react';

const nl2br = require('react-nl2br');

import draftItem from './draftItem.css';

let DraftFeedbackItem = React.createClass({
  propTypes: {
    feedback: PropTypes.string
  },
  render() {
    let feedback = this.props.feedback;
    return (
      <div><span className={draftItem.summaryLabel}>{feedback.label}</span>
        <span className={draftItem.summaryContainer}>{nl2br(feedback.text)}</span>
      </div>
    );
  }
});

export default DraftFeedbackItem;
