import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FeedbackDisplay } from '../components/FeedbackTool';
import { getReflectionQuestions } from '../modules/reflectionQuestionsModule';
import { getReflectionAnswers } from '../modules/reflectionAnswersModule';
import { addStudentInfoToDrafts } from './selectors';
import { getStudentDraftByStudentDraftId } from '../modules/studentDraftModule';

class FeedbackDisplayContainer extends Component {
  componentWillMount() {
    this.loadData();
  }

  loadData() {
    this.props.getStudentDraftByStudentDraftId(this.props.params.studentDraftId);
    this.props.getReflectionQuestions();
    this.props.getReflectionAnswers(this.props.params.studentDraftId);
  }

  render() {
    return this.props.studentDraft ? <FeedbackDisplay {...this.props} /> : null;
  }
}

FeedbackDisplayContainer.propTypes = {
  draft: PropTypes.object,
  studentDraft: PropTypes.object,
  params: PropTypes.object,
  homeRoute: PropTypes.string,
  getReflectionQuestions: PropTypes.func,
  getReflectionAnswers: PropTypes.func,
  getStudentDraftByStudentDraftId: PropTypes.func
};

const mapStateToProps = (state, props) => {
  const draftsWithInfo = addStudentInfoToDrafts(state, props);
  let studentDraft = state.studentDraft.find(studentDraftInState =>
    studentDraftInState.studentDraftId === props.params.studentDraftId
  );
  let draft = draftsWithInfo.find(draftWithInfo => draftWithInfo.draftId === (studentDraft && studentDraft.draftId));
  let numberOfDrafts = state.drafts.length;
  let reflectionQuestions = [];
  let draftTitle = '';
  let activityTitle = '';

  if (draft) {
    activityTitle = state.activities.find(activity => activity.activityId === draft.activityId).title;
    draftTitle = numberOfDrafts === draft.index ? `Final Paper` : `Draft ${draft.index + 1}`;
    reflectionQuestions = draft.studentReflectionQuestions.map(reflection => {
      let answer = state.reflectionAnswers.find(reflectionAnswer =>
        reflectionAnswer.studentReflectionQuestionId === reflection.studentReflectionQuestionId
      );
      let question = state.reflectionQuestions.find(reflectionQuestion =>
        reflectionQuestion.studentReflectionQuestionId === reflection.studentReflectionQuestionId
      );
      return {
        questionId: reflection.studentReflectionQuestionId,
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
    activityTitle,
    drafts: draftsWithInfo
  };
};

export default connect(mapStateToProps, {
  getReflectionQuestions,
  getReflectionAnswers,
  getStudentDraftByStudentDraftId
})(FeedbackDisplayContainer);
