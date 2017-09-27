import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { FeedbackFlag } from '../index';

class FeedbackFlags extends Component {
  state = {
    expandedId: null
  };

  componentWillReceiveProps = (nextProps) => {
    // clear expandedId if it equals a feedbackId that was removed
    const nextFeedback = _.get(nextProps, 'feedback');
    const thisFeedback = _.get(this.props, 'feedback');
    if (thisFeedback.length > nextFeedback.length) {
      // a simple array of feedbackIds that are being removed
      const removedFeedbackIds = _.map(_.differenceBy(thisFeedback, nextFeedback, 'feedbackId'), 'feedbackId');
      if (removedFeedbackIds.indexOf(this.state.expandedId) !== -1) {
        // reset expandedId
        this.setState({ expandedId: null });
      }
    }
  }

  componentDidUpdate = () => {
    document.body.removeEventListener('click', this.handleCollapse);
    if(this.state.expandedId) {
      document.body.addEventListener('click', this.handleCollapse);
    }
  };

  componentWillUnmount = () => {
    document.body.removeEventListener('click', this.handleCollapse);
  }

  handleFlagClick = (feedbackId) => {
    this.setState({
      expandedId: (this.state.expandedId !== feedbackId) ? feedbackId : null
    });
  };

  handleCollapse = () => {
    let clickedElem = document.querySelector('[data-id="' + this.state.expandedId + '"]');
    if(clickedElem && !clickedElem.contains(event.target)) {
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
              isDisplay={this.props.isDisplay}
              handleDeleteFeedback={this.props.handleDeleteFeedback}
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
  feedback: PropTypes.array,
  isDisplay: PropTypes.bool,
  handleDeleteFeedback: PropTypes.func
};

export default FeedbackFlags;
