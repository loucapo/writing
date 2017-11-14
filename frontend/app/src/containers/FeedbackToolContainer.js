import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import { stateToHTML } from 'draft-js-export-html';
import { convertFromRaw } from 'draft-js';
import { FeedbackTool } from '../components/FeedbackTool';
import { getActivity } from '../modules/activityModule';
import { getDraftsForActivity } from '../modules/draftModule';
import { getReflectionQuestions } from '../modules/reflectionQuestionsModule';
import { getReflectionAnswers } from '../modules/reflectionAnswersModule';
import {
  getStudentDraftByStudentDraftId,
  submitEndComment,
  submitFinalGrade,
  updateReviewStatus,
  updateFeedbackPaper
} from '../modules/studentDraftModule';

class FeedbackToolContainer extends Component {
  componentWillMount() {
    this.loadData();
  }

  loadData() {
    if (!this.props.activity) {
      this.props.getActivity(this.props.params.activityId);
    }
    if (_.isEmpty(this.props.drafts)) {
      this.props.getDraftsForActivity(this.props.params.activityId);
    }
    if (!this.props.studentDraft) {
      this.props.getStudentDraftByStudentDraftId(this.props.params.studentDraftId);
    }
    if (_.isEmpty(this.props.reflectionQuestionsState)) {
      this.props.getReflectionQuestions();
    }
    this.props.getReflectionAnswers(this.props.params.studentDraftId);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.studentDraft && newProps.studentDraft.reviewStatus === 'notStarted') {
      this.props.updateReviewStatus(
        newProps.studentDraft.studentActivityId,
        newProps.studentDraft.studentDraftId,
        'inProgress'
      );
      let feedbackPaper = stateToHTML(convertFromRaw(newProps.studentDraft.paper));
      this.props.updateFeedbackPaper(
        newProps.studentDraft.studentActivityId,
        newProps.studentDraft.studentDraftId,
        feedbackPaper
      );
      newProps.studentDraft.feedbackPaper = feedbackPaper;
    }
  }

  render() {
    return this.props.studentDraft ? <FeedbackTool {...this.props} /> : null;
  }
}

FeedbackToolContainer.propTypes = {
  activity: PropTypes.object,
  drafts: PropTypes.array,
  draft: PropTypes.object,
  studentDraft: PropTypes.object,
  reflectionQuestionsState: PropTypes.array,
  params: PropTypes.object,
  getActivity: PropTypes.func,
  getDraftsForActivity: PropTypes.func,
  getReflectionQuestions: PropTypes.func,
  getReflectionAnswers: PropTypes.func,
  getStudentDraftByStudentDraftId: PropTypes.func,
  updateReviewStatus: PropTypes.func,
  updateFeedbackPaper: PropTypes.func
};

const mapStateToProps = (state) => {
  const activity = state.activities[0];
  const studentDraft = state.studentDraft[0];
  const drafts = state.drafts;
  const draft = drafts.find(draftState => draftState.draftId === (studentDraft && studentDraft.draftId));
  const rubricIsEmpty = activity && (!activity.rubricId || activity.rubricId === '0000');
  const reflectionQuestionsState = state.reflectionQuestions;
  let draftTitle = '';
  let reflectionQuestions = [];
  let lastDraft;
  if (draft) {
    lastDraft = drafts.length === draft.index + 1;
    draftTitle = lastDraft ? `Final Paper` : `Draft ${draft.index + 1}`;
    reflectionQuestions = draft.studentReflectionQuestions.map(questionId => {
      let answer = state.reflectionAnswers.find(
        reflectionAnswer => reflectionAnswer.studentReflectionQuestionId === questionId
      );
      let question = state.reflectionQuestions.find(
        reflectionQuestion => reflectionQuestion.studentReflectionQuestionId === questionId
      );
      return {
        questionId,
        question: question ? question.question : null,
        answer: answer ? answer.studentReflectionAnswer : null,
        questionType: question ? question.questionType : null
      };
    });
  }

  return {
    activity,
    studentDraft,
    reflectionQuestions,
    homeRoute: state.defaults.homeRoute,
    draft,
    drafts,
    draftTitle,
    rubricIsEmpty,
    lastDraft,
    reflectionQuestionsState
  };
};

export default connect(mapStateToProps, {
  getActivity,
  getDraftsForActivity,
  getReflectionQuestions,
  getReflectionAnswers,
  getStudentDraftByStudentDraftId,
  updateReviewStatus,
  submitEndComment,
  submitFinalGrade,
  updateFeedbackPaper
})(FeedbackToolContainer);
