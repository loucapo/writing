import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CompositionDisplay } from '../components/Composition/index';
import { getReflectionQuestions } from '../modules/reflectionQuestionsModule';
import { getReflectionAnswers } from '../modules/reflectionAnswersModule';

class CompositionContainer extends Component {
  componentWillMount() {
    this.loadData();
  }

  loadData() {
    this.props.getReflectionQuestions();
    this.props.getReflectionAnswers(this.props.params.studentDraftId);
  }

  render() {
    return this.props.studentDraft ? <CompositionDisplay {...this.props} /> : null;
  }
}

CompositionContainer.propTypes = {
  draft: PropTypes.object,
  studentDraft: PropTypes.object,
  params: PropTypes.object,
  homeRoute: PropTypes.string,
  getReflectionQuestions: PropTypes.func,
  getReflectionAnswers: PropTypes.func
};

const mapStateToProps = (state, props) => {
  let studentDraft = state.studentDrafts.find(x => x.studentDraftId === props.params.studentDraftId);

  let draft = state.drafts.find(x => x.draftId === studentDraft.draftId);
  let numberOfDrafts = state.drafts.length;
  let draftTitle = numberOfDrafts === draft.index ? `Final Paper` : `Draft ${draft.index + 1}`;
  let reflectionQuestions = draft.studentReflectionQuestions.map(questionId => {
    let answer = state.reflectionAnswers.find(x => x.studentReflectionQuestionId === questionId);
    let question = state.reflectionQuestions.find(x => x.studentReflectionQuestionId === questionId);
    return {
      question: question ? question.question : null,
      answer: answer ? answer.studentReflectionAnswer : null
    };
  });

  return {
    studentDraft,
    reflectionQuestions,
    homeRoute: state.defaults.homeRoute,
    draftTitle
  };
};

export default connect(mapStateToProps, {
  getReflectionQuestions,
  getReflectionAnswers
})(CompositionContainer);
