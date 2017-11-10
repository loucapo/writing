import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import { CompositionDisplay } from '../components/Composition/index';
import { getDraftsForActivity } from '../modules/draftModule';
import { getStudentDraftByStudentDraftId } from '../modules/studentDraftModule';
import { getReflectionQuestions } from '../modules/reflectionQuestionsModule';
import { getReflectionAnswers } from '../modules/reflectionAnswersModule';

class CompositionContainer extends Component {
  componentWillMount() {
    this.loadData();
  }

  loadData() {
    if (!this.props.studentDraft) {
      this.props.getStudentDraftByStudentDraftId(this.props.params.studentDraftId);
    }
    if (_.isEmpty(this.props.drafts)) {
      this.props.getDraftsForActivity(this.props.params.activityId);
    }
    if (_.isEmpty(this.props.reflectionQuestionsState)) {
      this.props.getReflectionQuestions();
    }
    if (_.isEmpty(this.props.reflectionAnswers)) {
      this.props.getReflectionAnswers(this.props.params.studentDraftId);
    }
  }

  render() {
    return this.props.studentDraft ? <CompositionDisplay {...this.props} /> : null;
  }
}

CompositionContainer.propTypes = {
  studentDraft: PropTypes.object,
  drafts: PropTypes.array,
  params: PropTypes.object,
  reflectionQuestionsState: PropTypes.array,
  reflectionAnswers: PropTypes.array,
  getStudentDraftByStudentDraftId: PropTypes.func,
  getDraftsForActivity: PropTypes.func,
  getReflectionQuestions: PropTypes.func,
  getReflectionAnswers: PropTypes.func
};

const mapStateToProps = (state) => {
  const studentDraft = state.studentDraft[0];
  const drafts = state.drafts;
  const draft = drafts.find(draftState => draftState.draftId === (studentDraft && studentDraft.draftId));
  const draftIndex = draft && draft.index;
  const draftTitle = (drafts.length === draftIndex) ? `Final Paper` : `Draft ${draftIndex + 1}`;
  const reflectionQuestionsState = state.reflectionQuestions;
  const reflectionAnswers = state.reflectionAnswers;
  const reflectionQuestions = draft && draft.studentReflectionQuestions.map(questionId => {
    const answer = reflectionAnswers.find(answerState =>
      answerState.studentReflectionQuestionId === questionId
    );
    const question = state.reflectionQuestions.find(
      questionState => questionState.studentReflectionQuestionId === questionId
    );
    return {
      question: question ? question.question : null,
      answer: answer ? answer.studentReflectionAnswer : null,
      questionType: question ? question.questionType : null
    };
  }) || [];

  return {
    studentDraft,
    drafts,
    reflectionAnswers,
    reflectionQuestions,
    reflectionQuestionsState,
    homeRoute: state.defaults.homeRoute,
    draftTitle
  };
};

export default connect(mapStateToProps, {
  getDraftsForActivity,
  getStudentDraftByStudentDraftId,
  getReflectionQuestions,
  getReflectionAnswers
})(CompositionContainer);
