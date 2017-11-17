import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FeedbackEditor } from '../components/FeedbackTool';
import { createFeedback, deleteFeedback } from '../modules/feedbackModule';
import { getEditingMarks } from '../modules/editingMarksModule';
import { getGoals } from '../modules/goalModule';

class FeedbackEditorContainer extends Component {
  componentWillMount() {
    this.loadData();
  }

  loadData() {
    this.props.getEditingMarks();
    this.props.getGoals();
  }

  render() {
    return this.props.feedback ? <FeedbackEditor {...this.props} /> : null;
  }
}

FeedbackEditorContainer.propTypes = {
  draft: PropTypes.object,
  studentDraftId: PropTypes.string,
  feedback: PropTypes.array,
  createFeedback: PropTypes.func,
  getFeedback: PropTypes.func,
  getEditingMarks: PropTypes.func,
  getGoals: PropTypes.func
};

const mapStateToProps = (state, props) => {
  const draftGoals = state.goal && state.goal.length > 0 ? state.goal.filter(goal => {
    return props.draft.goals && props.draft.goals.includes(goal.goalId);
  }) : [];

  return {
    lastFeedback: state.feedback[state.feedback.length - 1],
    createFeedbackError: state.messaging.createFeedbackError,
    draftGoals,
    editingMarks: state.editingMarks
  };
};

export default connect(mapStateToProps, {
  getEditingMarks,
  getGoals,
  createFeedback,
  deleteFeedback
})(FeedbackEditorContainer);
