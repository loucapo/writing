import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ReflectionQuestionsForm } from '../components/ReflectionQuestions/index';
import { getReflectionQuestions } from '../modules/reflectionQuestionsModule';
import { setReflectionAnswers } from '../modules/reflectionAnswersModule';
import { getStudentDraftByStudentDraftId } from '../modules/studentDraftModule';
import { submitDraft } from '../modules/studentDraftModule';

class ReflectionQuestionsFormContainer extends Component {
  componentWillMount() {
    this.loadData();
  }

  loadData() {
    this.props.getReflectionQuestions();
    this.props.getStudentDraftByStudentDraftId(this.props.params.studentDraftId);
  }

  render() {
    return <ReflectionQuestionsForm {...this.props} />;
  }
}

ReflectionQuestionsFormContainer.propTypes = {
  params: PropTypes.object,
  studentReflectionQuestions: PropTypes.array,
  studentReflectionAnswers: PropTypes.array,
  setReflectionAnswers: PropTypes.func,
  studentActivityId: PropTypes.string,
  studentDraftId: PropTypes.string,
  getReflectionQuestions: PropTypes.func,
  getStudentDraftByStudentDraftId: PropTypes.func
};

const mapStateToProps = (state, props) => {
  let studentDraft = state.studentDraft[0];

  let draft = state.drafts.find(draftInState => draftInState.draftId === studentDraft.draftId);

  let reflectionQuestions = (state.reflectionQuestions.length > 0) ?
    draft.studentReflectionQuestions.map(questionId =>
        state.reflectionQuestions.find(question => question.studentReflectionQuestionId === questionId)
      )
    : [];

  let reflectionAnswers = state.reflectionAnswers.filter(answer =>
    reflectionQuestions.find(question => question.studentReflectionQuestionId === answer.studentReflectionQuestionId)
  );

  let draftName = (draft.index === studentDraft.length - 1) ?
    `Final Paper` : `Draft ${draft.index + 1}`;

  return {
    reflectionQuestions,
    reflectionAnswers,
    studentActivityId: props.params.studentActivityId.trim(),
    studentDraftId: props.params.studentDraftId.trim(),
    draftId: draft.draftId,
    activityId: draft.activityId,
    homeRoute: state.defaults.homeRoute,
    draftName,
    saveReflectionMessage: state.messaging.saveReflection
  };
};

export default connect(mapStateToProps, {
  setReflectionAnswers,
  getReflectionQuestions,
  submitDraft,
  getStudentDraftByStudentDraftId
})(ReflectionQuestionsFormContainer);
