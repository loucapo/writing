import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FeedbackEditor } from '../components/FeedbackTool';
import { getEditingMarks } from '../modules/editingMarksModule';
import { createFeedback, getFeedback, deleteFeedback } from '../modules/feedbackModule';

class FeedbackEditorContainer extends Component {
  componentWillMount() {
    this.loadData();
  }

  loadData() {
    this.props.getEditingMarks();
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
  let editingMarks = state.editingMarks.map(mark => {
    mark.id = mark.editingMarkId;
    return mark;
  });

  return {
    feedback: state.feedback,
    lastFeedback: state.feedback[state.feedback.length - 1],
    createFeedbackError: state.messaging.createFeedbackError,
    editingMarks
  };
};

export default connect(mapStateToProps, {
  getEditingMarks,
  getFeedback,
  createFeedback,
  deleteFeedback
})(FeedbackEditorContainer);
