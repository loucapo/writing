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
import { getFeedback } from '../modules/feedbackModule';

class FeedbackDisplayContainer extends Component {
  componentWillMount() {
    this.loadData();
  }

  loadData() {
    this.props.getStudentDraftByStudentDraftId(this.props.params.studentDraftId);
    this.props.getReflectionQuestions();
    this.props.getReflectionAnswers(this.props.params.studentDraftId);
    this.props.getRubricScores(this.props.params.studentDraftId);
    this.props.getFeedback(this.props.params.studentDraftId);
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
  params: PropTypes.object,
  studentDraft: PropTypes.object,
  getReflectionQuestions: PropTypes.func,
  getReflectionAnswers: PropTypes.func,
  getStudentDraftByStudentDraftId: PropTypes.func,
  getStudentDrafts: PropTypes.func,
  getRubricScores: PropTypes.func,
  updateReviewStatus: PropTypes.func,
  getFeedback: PropTypes.func
};

const mapStateToProps = (state, props) => {
  const draftsWithInfo = addStudentInfoToDrafts(state, props);
  let studentDraft = state.studentDraft[0];
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

  // Default back button goes to activity
  let backLink = `${state.defaults.homeRoute}?display=submissions`;
  let backText = activityTitle;

  if (draft) {
    lastDraft = numberOfDrafts === draft.index + 1;
    draftTitle = draft.studentInfo.buttonText;

    const routingState = state.routing.locationBeforeTransitions;
    if (routingState.query && routingState.query.fromDraftId) {
      const fromDraftId = routingState.query.fromDraftId;
      const fromDraft = draftsWithInfo.find(draftWithInfo => draftWithInfo.draftId === fromDraftId);
      if (fromDraft) {
        backLink = `/activity/${draft.activityId}/draft/${fromDraftId}`;
        backText = fromDraft.studentInfo.title;
      }
    }

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
    rubricId: state.activities[0].rubricId,
    draftTitle,
    activityTitle,
    lastDraft,
    backLink,
    backText,
    linkableDrafts,
    noRubricScores,
    feedback: state.feedback
  };
};

export default connect(mapStateToProps, {
  getReflectionQuestions,
  getReflectionAnswers,
  getStudentDraftByStudentDraftId,
  getStudentDrafts,
  getRubricScores,
  updateReviewStatus,
  getFeedback
})(FeedbackDisplayContainer);
