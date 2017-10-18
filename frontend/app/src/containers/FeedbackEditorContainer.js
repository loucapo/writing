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
  draft: PropTypes.object,
  studentDraftId: PropTypes.string,
  feedback: PropTypes.array,
  createFeedback: PropTypes.func,
  getFeedback: PropTypes.func,
  getEditingMarks: PropTypes.func,
  getGoals: PropTypes.func
};

const mapStateToProps = (state, props) => {

  let feedback = state.feedback.map(item => {
    // Grabs feedback titles and predefined comments
    if (item.editingMarkId && state.editingMarks) {
      let editingMark = state.editingMarks.find(mark => mark.editingMarkId === item.editingMarkId);
      if (editingMark) {
        item.title = editingMark.title;
        item.predefined = editingMark.description;
      }
    } else if (item.goalId && state.goal) {
      let draftGoal = state.goal.find(goal => goal.goalId === item.goalId);
      if (draftGoal) {
        item.title = draftGoal.title;
        item.predefined = draftGoal[`option${item.level}`];
      }
    } else {
      item.title = 'Comment';
      if (item.level === 1) {
        item.predefined = 'Needs extensive revision';
      } else if (item.level === 2) {
        item.predefined = 'Needs work';
      } else if (item.level === 3) {
        item.predefined = 'Nice job!';
      }
    }
    return item;
  });

  const draftGoals = state.goal && state.goal.length > 0 ? state.goal.filter(goal => {
    return props.draft.goals && props.draft.goals.includes(goal.goalId);
  }) : [];

  return {
    feedback,
    lastFeedback: state.feedback[state.feedback.length - 1],
    createFeedbackError: state.messaging.createFeedbackError,
    draftGoals,
    editingMarks: state.editingMarks
  };
};

export default connect(mapStateToProps, {
  getFeedback,
  getEditingMarks,
  getGoals,
  createFeedback,
  deleteFeedback
})(FeedbackEditorContainer);
