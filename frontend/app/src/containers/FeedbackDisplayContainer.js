import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import { FeedbackDisplay } from '../components/FeedbackTool';
import { addStudentInfoToDrafts } from './selectors';
import { getActivity } from '../modules/activityModule';
import { getDraftsForActivity } from '../modules/draftModule';
import { getStudentDraftByStudentDraftId, updateReviewStatus } from '../modules/studentDraftModule';
import { getStudentDrafts } from '../modules/studentDraftsModule';
import { getReflectionQuestions } from '../modules/reflectionQuestionsModule';
import { getReflectionAnswers } from '../modules/reflectionAnswersModule';
import { getRubricScores } from '../modules/rubricScoresModule';
import { getFeedback } from '../modules/feedbackModule';
import { getEditingMarks } from '../modules/editingMarksModule';
import { getGoals } from '../modules/goalModule';

class FeedbackDisplayContainer extends Component {
  componentWillMount() {
    this.loadData();
  }

  loadData() {
    const activityLoaded = this.props.activity && this.props.activity.activityId === this.props.params.activityId;
    if (!activityLoaded) {
      this.props.getActivity(this.props.params.activityId);
    }
    if (_.isEmpty(this.props.drafts) || !activityLoaded) {
      this.props.getDraftsForActivity(this.props.params.activityId);
    }
    if (!this.props.studentDraft || this.props.studentDraft.studentDraftId !== this.props.params.studentDraftId) {
      this.props.getStudentDraftByStudentDraftId(this.props.params.studentDraftId);
    }
    if (_.isEmpty(this.props.reflectionQuestionsState)) {
      this.props.getReflectionQuestions();
    }
    if (_.isEmpty(this.props.editingMarks)) {
      this.props.getEditingMarks();
    }
    if (_.isEmpty(this.props.goals)) {
      this.props.getGoals();
    }
    this.props.getReflectionAnswers(this.props.params.studentDraftId);
    this.props.getRubricScores(this.props.params.studentDraftId);
    this.props.getFeedback(this.props.params.studentDraftId);
  }

  componentWillUpdate(newProps) {
    if (newProps.studentDraft && newProps.studentDraft.reviewStatus === 'submitted') {
      this.props.updateReviewStatus(
        newProps.studentDraft.studentActivityId,
        newProps.studentDraft.studentDraftId,
        'viewed'
      );
    }

    if (newProps.studentDraft !== this.props.studentDraft) {
      this.props.getStudentDrafts(newProps.studentDraft.studentActivityId);
    }
  }

  render() {
    return this.props.studentDraft ? <FeedbackDisplay {...this.props} /> : null;
  }
}

FeedbackDisplayContainer.propTypes = {
  activity: PropTypes.object,
  params: PropTypes.object,
  studentDraft: PropTypes.object,
  drafts: PropTypes.array,
  reflectionQuestionsState: PropTypes.array,
  editingMarks: PropTypes.array,
  goals: PropTypes.array,
  getActivity: PropTypes.func,
  getDraftsForActivity: PropTypes.func,
  getReflectionQuestions: PropTypes.func,
  getReflectionAnswers: PropTypes.func,
  getStudentDraftByStudentDraftId: PropTypes.func,
  getStudentDrafts: PropTypes.func,
  getRubricScores: PropTypes.func,
  updateReviewStatus: PropTypes.func,
  getFeedback: PropTypes.func,
  getEditingMarks: PropTypes.func,
  getGoals: PropTypes.func
};

const mapStateToProps = (state, props) => {
  const activity = state.activities[0];
  const draftsWithInfo = addStudentInfoToDrafts(state, props);
  const studentDraft = state.studentDraft[0];
  const activityTitle = activity && activity.title;
  const noRubricScores = state.rubricScores.length === 0;
  const draft = draftsWithInfo.find(draftWithInfo => draftWithInfo.draftId === (studentDraft && studentDraft.draftId));
  const linkableDrafts = draftsWithInfo.filter(
    draftWithInfo => draftWithInfo.draftId !== (studentDraft && studentDraft.draftId)
  );
  const reflectionQuestionsState = state.reflectionQuestions;
  const editingMarks = state.editingMarks;
  const goals = state.goal;

  let lastDraft;
  let numberOfDrafts = state.drafts.length;
  let reflectionQuestions = [];
  let draftTitle = '';

  // Default back button goes to activity
  let backLink = `${state.defaults.homeRoute}?display=submissions`;
  let backText = activityTitle;

  if (draft) {
    lastDraft = numberOfDrafts === draft.index + 1;
    draftTitle = draft.studentInfo.buttonText;

    const routingState = state.routing.locationBeforeTransitions;
    if (routingState.query && routingState.query.fromDraftId) {
      const fromDraftId = routingState.query.fromDraftId;
      const fromDraft = draftsWithInfo.find(draftWithInfo => draftWithInfo.draftId === fromDraftId);
      if (fromDraft) {
        backLink = `/activity/${draft.activityId}/draft/${fromDraftId}`;
        backText = fromDraft.studentInfo.title;
      }
    }

    reflectionQuestions = draft.studentReflectionQuestions.map(reflection => {
      let answer = state.reflectionAnswers.find(
        reflectionAnswer => reflectionAnswer.studentReflectionQuestionId === reflection.studentReflectionQuestionId
      );
      let question = state.reflectionQuestions.find(
        reflectionQuestion => reflectionQuestion.studentReflectionQuestionId === reflection.studentReflectionQuestionId
      );
      return {
        questionId: reflection.studentReflectionQuestionId,
        question: question ? question.question : null,
        answer: answer ? answer.studentReflectionAnswer : null,
        questionType: question ? question.questionType : null
      };
    });
  }

  let feedback = state.feedback.map(item => {
    // Grabs feedback titles and predefined comments
    if (item.editingMarkId) {
      let editingMark = editingMarks.find(mark => mark.editingMarkId === item.editingMarkId);
      if (editingMark) {
        item.title = editingMark.title;
        item.predefined = editingMark.description;
      }
    } else if (item.goalId) {
      let draftGoal = goals.find(goal => goal.goalId === item.goalId);
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

  return {
    studentDraft,
    reflectionQuestions,
    homeRoute: state.defaults.homeRoute,
    rubricId: activity && activity.rubricId,
    draftTitle,
    activityTitle,
    lastDraft,
    backLink,
    backText,
    linkableDrafts,
    noRubricScores,
    feedback,
    reflectionQuestionsState,
    editingMarks
  };
};

export default connect(mapStateToProps, {
  getActivity,
  getDraftsForActivity,
  getReflectionQuestions,
  getReflectionAnswers,
  getStudentDraftByStudentDraftId,
  getStudentDrafts,
  getRubricScores,
  updateReviewStatus,
  getFeedback,
  getEditingMarks,
  getGoals
})(FeedbackDisplayContainer);
