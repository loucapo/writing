import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { ReflectionQuestionsForm } from './../components/ReflectionQuestions/index';
import { getReflectionQuestions } from '../modules/reflectionQuestionsModule';
import {getReflectionAnswers, setReflectionAnswers} from '../modules/reflectionAnswersModule';
import { submitDraft } from '../modules/studentDraftModule';

class ReflectionQuestionsFormContainer extends Component {
  componentWillMount() {
    this.loadData();
  }

  loadData() {
    this.props.getReflectionQuestions();
    this.props.getReflectionAnswers(this.props.studentDraftId);
  }

  render() {
    return (<ReflectionQuestionsForm {...this.props} />);
  }
}

ReflectionQuestionsFormContainer.propTypes = {
  studentReflectionQuestions: PropTypes.array,
  studentReflectionAnswers: PropTypes.array,
  setReflectionAnswers: PropTypes.func,
  getReflectionAnswers: PropTypes.func,
  studentActivityId: PropTypes.string,
  studentDraftId: PropTypes.string,
  getReflectionQuestions: PropTypes.func
};

const mapStateToProps = (state, props) => {
  let studentDraft = state.studentDraft.find(x => x.studentDraftId === props.params.studentDraftId);
  let draft = state.drafts.find(x => x.draftId === studentDraft.draftId);
  let reflectionQuestions = state.reflectionQuestions.length > 0
    ? draft.studentReflectionQuestions
      .map(x => state.reflectionQuestions.find(y => y.studentReflectionQuestionId === x))
    : [];

  let reflectionAnswers = state.reflectionAnswers
    .filter(x => reflectionQuestions
      .find(y => y.studentReflectionQuestionId === x.studentReflectionQuestionId));
  return {
    reflectionQuestions,
    reflectionAnswers,
    studentActivityId: props.params.studentActivityId.trim(),
    studentDraftId: props.params.studentDraftId.trim(),
    homeRoute: state.defaults.homeRoute
  };
};

export default connect(mapStateToProps,
  {
    setReflectionAnswers,
    getReflectionAnswers,
    getReflectionQuestions,
    submitDraft
  })(ReflectionQuestionsFormContainer);
