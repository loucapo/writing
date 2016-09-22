import React, { PropTypes } from 'react';

const nl2br = require('react-nl2br');

import draftItem from './draftItem.css';

let DraftFeedbackItem = React.createClass({
  propTypes: {
    divKey1: PropTypes.string,
    divKey2: PropTypes.string,
    feedbackLabel: PropTypes.string,
    feedbackText: PropTypes.array
  },
  render() {
    return (
      <div key={this.props.divKey1} className={draftItem.summaryContainer}>
        <div key={this.props.divKey2} ><span className={draftItem.summaryLabel}>{this.props.feedbackLabel}:</span>
          {
            this.props.feedbackText.map(function( feedbackText, index ) {
              return <div key={index}>{feedbackText}</div>;
            })
          }
        </div>
      </div>
    );
  }
});

export default DraftFeedbackItem;
