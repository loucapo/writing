import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FeedbackFlag } from '../index';

class FeedbackFlags extends Component {
  state = {
    expandedId: null
  };

  componentDidUpdate = () => {
    document.body.removeEventListener('click', this.handleCollapse);
    if(this.state.expandedId) {
      document.body.addEventListener('click', this.handleCollapse);
    }
  };

  handleFlagClick = (feedbackId) => {
    this.setState({
      expandedId: (this.state.expandedId !== feedbackId) ? feedbackId : null
    });
  };

  handleCollapse = () => {
    let clickedElem = document.querySelector('[data-id=' + this.state.expandedId + ']');
    if(!clickedElem.contains(event.target)) {
      this.setState({
        expandedId: null
      });
    }
  };

  render() {
    if(this.props.feedback.length < 1) {
      return null;
    }

    return (
      <div>
        {this.props.feedback.map(feedback => {
          let highlight = document.querySelector(`[data-feedback-id='${feedback.feedbackId}']`);
          if (highlight) {
            let flagTop = highlight.offsetTop - 8;
            return (<FeedbackFlag
              key={feedback.feedbackId}
              feedback={feedback}
              flagTop={flagTop}
              handleFlagClick={this.handleFlagClick}
              expandedId={feedback.feedbackId === this.state.expandedId}
            />);
          } else {
            return null;
          }
        })}
      </div>
    );
  }
}

FeedbackFlags.propTypes = {
  feedback: PropTypes.array
};

export default FeedbackFlags;
