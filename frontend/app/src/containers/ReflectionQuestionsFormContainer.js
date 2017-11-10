import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import { ReflectionQuestionsForm } from '../components/ReflectionQuestions';
import { getDraftsForActivity } from '../modules/draftModule';
import { getReflectionQuestions } from '../modules/reflectionQuestionsModule';
import { getReflectionAnswers, setReflectionAnswers } from '../modules/reflectionAnswersModule';
import { getStudentDraftByStudentDraftId, submitDraft } from '../modules/studentDraftModule';

class ReflectionQuestionsFormContainer extends Component {
  componentWillMount() {
    this.loadData();
  }

  loadData() {
    if (_.isEmpty(this.props.drafts)) {
      this.props.getDraftsForActivity(this.props.params.activityId);
    }
    if (_.isEmpty(this.props.reflectionQuestionsState)) {
      this.props.getReflectionQuestions();
    }
    this.props.getReflectionAnswers(this.props.params.studentDraftId);
    if (!this.props.studentDraft) {
      this.props.getStudentDraftByStudentDraftId(this.props.params.studentDraftId);
    }
  }

  render() {
    return <ReflectionQuestionsForm {...this.props} />;
  }
}

ReflectionQuestionsFormContainer.propTypes = {
  params: PropTypes.object,
  studentDraft: PropTypes.object,
  drafts: PropTypes.array,
  reflectionQuestionsState: PropTypes.array,
  reflectionAnswersState: PropTypes.array,
  getDraftsForActivity: PropTypes.func,
  getReflectionQuestions: PropTypes.func,
  getReflectionAnswers: PropTypes.func,
  getStudentDraftByStudentDraftId: PropTypes.func
};

const mapStateToProps = (state, props) => {
  const studentDraft = state.studentDraft[0];
  const drafts = state.drafts;
  const draft = drafts.find(draftInState =>
    draftInState.draftId === (studentDraft && studentDraft.draftId)
  );
  const reflectionQuestionsState = state.reflectionQuestions;
  const reflectionAnswersState = state.reflectionAnswers;

  const reflectionQuestions = draft && draft.studentReflectionQuestions.map(questionId =>
    reflectionQuestionsState.find(question =>
      question.studentReflectionQuestionId === questionId
    )
  );

  const reflectionAnswers = state.reflectionAnswers.filter(answer =>
    reflectionQuestions && reflectionQuestions.find(question =>
      question.studentReflectionQuestionId === answer.studentReflectionQuestionId
    )
  );

  return {
    activityId: props.params.activityId,
    studentActivityId: studentDraft && studentDraft.studentActivityId,
    studentDraftId: props.params.studentDraftId,
    studentDraft,
    drafts,
    draftId: draft && draft.draftId,
    homeRoute: state.defaults.homeRoute,
    saveReflectionMessage: state.messaging.saveReflection,
    reflectionQuestions: reflectionQuestions || [],
    reflectionAnswers,
    reflectionQuestionsState,
    reflectionAnswersState
  };
};

export default connect(mapStateToProps, {
  getDraftsForActivity,
  getReflectionAnswers,
  setReflectionAnswers,
  getReflectionQuestions,
  submitDraft,
  getStudentDraftByStudentDraftId
})(ReflectionQuestionsFormContainer);
