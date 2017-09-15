import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FeedbackEditor } from '../components/FeedbackTool';
import { createFeedback, getFeedback } from '../modules/feedbackModule';

class FeedbackEditorContainer extends Component {
  componentWillMount() {
    this.loadData();
  }

  loadData() {
    this.props.getFeedback(this.props.studentDraftId);
  }

  render() {
    return this.props.feedback ? <FeedbackEditor {...this.props} /> : null;
  }
}

FeedbackEditorContainer.propTypes = {
  studentDraftId: PropTypes.string,
  feedback: PropTypes.array,
  getFeedback: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    feedback: state.feedback,
    lastFeedback: state.feedback[state.feedback.length - 1],
    createFeedbackError: state.messaging.createFeedbackError
  };
};

export default connect(mapStateToProps, {
  getFeedback,
  createFeedback
})(FeedbackEditorContainer);
