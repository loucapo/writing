import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FeedbackDisplay } from '../components/FeedbackTool';
import { getReflectionQuestions } from '../modules/reflectionQuestionsModule';
import { getReflectionAnswers } from '../modules/reflectionAnswersModule';
import { addStudentInfoToDrafts } from './selectors';
import { getStudentDraftByStudentDraftId, updateReviewStatus } from '../modules/studentDraftModule';
import { getStudentDrafts } from '../modules/studentDraftsModule';
import { getRubricScores } from '../modules/rubricScoresModule';

class FeedbackDisplayContainer extends Component {
  componentWillMount() {
    this.loadData();
  }

  loadData() {
    this.props.getStudentDraftByStudentDraftId(this.props.params.studentDraftId);
    this.props.getReflectionQuestions();
    this.props.getReflectionAnswers(this.props.params.studentDraftId);
    this.props.getRubricScores(this.props.params.studentDraftId);
  }

  componentWillUpdate(newProps) {
    if (newProps.studentDraft && newProps.studentDraft.reviewStatus === 'submitted') {
      this.props.updateReviewStatus(
        newProps.studentDraft.studentActivityId,
        newProps.studentDraft.studentDraftId,
        'viewed'
      );
    }

    if (newProps.studentDraft !== this.props.studentDraft) {
      this.props.getStudentDrafts(newProps.studentDraft.studentActivityId);
    }
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
  getStudentDraftByStudentDraftId: PropTypes.func,
  getStudentDrafts: PropTypes.func,
  noRubricScores: PropTypes.bool,
  getRubricScores: PropTypes.func,
  updateReviewStatus: PropTypes.func
};

const mapStateToProps = (state, props) => {
  const draftsWithInfo = addStudentInfoToDrafts(state, props);
  let studentDraft = state.studentDraft[0];
  let rubricId = state.activities[0].rubricId;
  let lastDraft;
  let numberOfDrafts = state.drafts.length;
  let reflectionQuestions = [];
  let draftTitle = '';
  let activityTitle = state.activities[0].title;
  let noRubricScores = state.rubricScores.length === 0;
  let draft = draftsWithInfo.find(draftWithInfo => draftWithInfo.draftId === (studentDraft && studentDraft.draftId));
  let linkableDrafts = draftsWithInfo.filter(
    draftWithInfo => draftWithInfo.draftId !== (studentDraft && studentDraft.draftId)
  );

  if (draft) {
    lastDraft = numberOfDrafts === draft.index + 1;
    draftTitle = draft.studentInfo.buttonText;

    reflectionQuestions = draft.studentReflectionQuestions.map(reflection => {
      let answer = state.reflectionAnswers.find(
        reflectionAnswer => reflectionAnswer.studentReflectionQuestionId === reflection.studentReflectionQuestionId
      );
      let question = state.reflectionQuestions.find(
        reflectionQuestion => reflectionQuestion.studentReflectionQuestionId === reflection.studentReflectionQuestionId
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
    rubricId,
    draftTitle,
    activityTitle,
    lastDraft,
    linkableDrafts,
    noRubricScores
  };
};

export default connect(mapStateToProps, {
  getReflectionQuestions,
  getReflectionAnswers,
  getStudentDraftByStudentDraftId,
  getStudentDrafts,
  getRubricScores,
  updateReviewStatus
})(FeedbackDisplayContainer);
