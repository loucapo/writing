import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FeedbackEditor } from '../components/FeedbackTool';
import { getFeedback, deleteFeedback } from '../modules/feedbackModule';

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
  getFeedback: PropTypes.func,
  getEditingMarks: PropTypes.func
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
  deleteFeedback
})(FeedbackEditorContainer);
