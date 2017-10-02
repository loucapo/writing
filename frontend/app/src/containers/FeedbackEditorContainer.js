import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FeedbackEditor } from '../components/FeedbackTool';
import { getFeedback, createFeedback, deleteFeedback } from '../modules/feedbackModule';
import { getEditingMarks } from '../modules/editingMarksModule';
import { getGoals } from '../modules/goalModule';

class FeedbackEditorContainer extends Component {
  componentWillMount() {
    this.loadData();
  }

  loadData() {
    this.props.getFeedback(this.props.studentDraftId);
    this.props.getEditingMarks();
    this.props.getGoals();
  }

  render() {
    return this.props.feedback ? <FeedbackEditor {...this.props} /> : null;
  }
}

FeedbackEditorContainer.propTypes = {
  studentDraftId: PropTypes.string,
  feedback: PropTypes.array,
  getFeedback: PropTypes.func,
  getEditingMarks: PropTypes.func,
  getGoals: PropTypes.func
};

const mapStateToProps = (state) => {
  let editingMarks = state.editingMarks.map(mark => {
    // Parses editingMarkId to generic id so it can be used in MLMenuList
    mark.id = mark.editingMarkId;
    return mark;
  });

  let feedback = state.feedback.map(item => {
    // Grabs feedback titles and predefined comments
    if (item.editingMarkId) {
      let editingMark = state.editingMarks.find(mark => mark.id === item.editingMarkId);
      if (editingMark) {
        item.title = editingMark.title;
        item.predefined = editingMark.description;
      }
    } else if (item.goalId) {
      let draftGoal = state.goals.find(goal => goal.goalId === item.goalId);
      if (draftGoal) {
        item.title = draftGoal.title;
        item.predefined = draftGoal[`option${item.level}`];
      }
    } else {
      item.title = 'Comment';
      item.predefined = item.level;
    }
    return item;
  });

  return {
    feedback,
    lastFeedback: state.feedback[state.feedback.length - 1],
    createFeedbackError: state.messaging.createFeedbackError,
    editingMarks
  };
};

export default connect(mapStateToProps, {
  getFeedback,
  getEditingMarks,
  getGoals,
  createFeedback,
  deleteFeedback
})(FeedbackEditorContainer);
