import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { stateToHTML } from 'draft-js-export-html';
import { convertFromRaw } from 'draft-js';
import { FeedbackTool } from '../components/FeedbackTool';
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
    this.props.getStudentDraftByStudentDraftId(this.props.params.studentDraftId);
    this.props.getReflectionQuestions();
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
  draft: PropTypes.object,
  studentDraft: PropTypes.object,
  params: PropTypes.object,
  homeRoute: PropTypes.string,
  getReflectionQuestions: PropTypes.func,
  getReflectionAnswers: PropTypes.func,
  getStudentDraftByStudentDraftId: PropTypes.func,
  updateReviewStatus: PropTypes.func,
  updateFeedbackPaper: PropTypes.func
};

const mapStateToProps = (state) => {
  let studentDraft = state.studentDraft[0];
  let draft = state.drafts.find(draftInState => draftInState.draftId === (studentDraft && studentDraft.draftId));
  let numberOfDrafts = state.drafts.length;
  let draftTitle = '';
  let reflectionQuestions = [];
  let rubricId = state.activities[0].rubricId;
  let lastDraft;
  if (draft) {
    lastDraft = numberOfDrafts === draft.index + 1;
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
        answer: answer ? answer.studentReflectionAnswer : null
      };
    });
  }

  return {
    studentDraft,
    reflectionQuestions,
    homeRoute: state.defaults.homeRoute,
    draft,
    draftTitle,
    rubricId,
    lastDraft
  };
};

export default connect(mapStateToProps, {
  getReflectionQuestions,
  getReflectionAnswers,
  getStudentDraftByStudentDraftId,
  updateReviewStatus,
  submitEndComment,
  submitFinalGrade,
  updateFeedbackPaper
})(FeedbackToolContainer);
