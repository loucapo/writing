import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FeedbackTool } from '../components/FeedbackTool/index';
import { getReflectionQuestions } from '../modules/reflectionQuestionsModule';
import { getReflectionAnswers } from '../modules/reflectionAnswersModule';
import { getStudentDraftByStudentDraftId } from '../modules/studentDraftModule';

class FeedbackToolContainer extends Component {
  componentWillMount() {
    this.loadData();
  }

  loadData() {
    this.props.getStudentDraftByStudentDraftId(this.props.params.studentDraftId);
    this.props.getReflectionQuestions();
    this.props.getReflectionAnswers(this.props.params.studentDraftId);
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
  getStudentDraftByStudentDraftId: PropTypes.func
};

const mapStateToProps = (state, props) => {
  let studentDraft = state.studentDraft.find(x => x.studentDraftId === props.params.studentDraftId);
  let draft = state.drafts.find(x => x.draftId === (studentDraft && studentDraft.draftId));
  let numberOfDrafts = state.drafts.length;
  let draftTitle = '';
  let reflectionQuestions = [];
  if (draft) {
    draftTitle = numberOfDrafts === draft.index ? `Final Paper` : `Draft ${draft.index + 1}`;
    reflectionQuestions = draft.studentReflectionQuestions.map(questionId => {
      let answer = state.reflectionAnswers.find(x => x.studentReflectionQuestionId === questionId);
      let question = state.reflectionQuestions.find(x => x.studentReflectionQuestionId === questionId);
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
    draftTitle,
    instructorName: `${state.auth.firstName} ${state.auth.lastName}`
  };
};

export default connect(mapStateToProps, {
  getReflectionQuestions,
  getReflectionAnswers,
  getStudentDraftByStudentDraftId
})(FeedbackToolContainer);
