import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ReflectionQuestionsForm } from './../components/ReflectionQuestions/index';
import { getReflectionQuestions } from '../modules/reflectionQuestionsModule';
import { setReflectionAnswers } from '../modules/reflectionAnswersModule';
import { submitDraft } from '../modules/studentDraftModule';

class ReflectionQuestionsFormContainer extends Component {
  componentWillMount() {
    this.loadData();
  }

  loadData() {
    this.props.getReflectionQuestions();
  }

  render() {
    return <ReflectionQuestionsForm {...this.props} />;
  }
}

ReflectionQuestionsFormContainer.propTypes = {
  studentReflectionQuestions: PropTypes.array,
  studentReflectionAnswers: PropTypes.array,
  setReflectionAnswers: PropTypes.func,
  studentActivityId: PropTypes.string,
  studentDraftId: PropTypes.string,
  getReflectionQuestions: PropTypes.func
};

const mapStateToProps = (state, props) => {
  let studentDraft = state.studentDraft.find(x => x.studentDraftId === props.params.studentDraftId);
  let draft = state.drafts.find(x => x.draftId === studentDraft.draftId);
  let reflectionQuestions = state.reflectionQuestions.length > 0
    ? draft.studentReflectionQuestions.map(x =>
        state.reflectionQuestions.find(y => y.studentReflectionQuestionId === x)
      )
    : [];

  let reflectionAnswers = state.reflectionAnswers.filter(x =>
    reflectionQuestions.find(y => y.studentReflectionQuestionId === x.studentReflectionQuestionId)
  );

  let draftName = draft.index ===
    state.studentDraft.filter(x => x.activityId === state.auth.activityId && x.studentId === state.auth.studentId)
      .length -
      1
    ? `Final Paper`
    : `Draft ${draft.index + 1}`;

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
  submitDraft
})(ReflectionQuestionsFormContainer);
