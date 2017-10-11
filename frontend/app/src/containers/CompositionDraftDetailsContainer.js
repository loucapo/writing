import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import { updateActivityPrompt } from './../modules/activityModule';
import { getReflectionQuestions } from './../modules/reflectionQuestionsModule';
import { getStudentDrafts } from '../modules/studentDraftsModule';
import { CompositionDraftDetails } from './../components/Composition/index';
import { getCriteria } from '../modules/criteriaModule';
import { addStudentInfoToDrafts } from './selectors';

class CompositionDraftDetailsContainer extends Component {
  componentWillMount() {
    this.props.getReflectionQuestions();
    if (this.props.studentActivityId) {
      this.props.getStudentDrafts(this.props.studentActivityId);
    }
    this.props.getCriteria();
  }

  render() {
    return (<CompositionDraftDetails {...this.props} />);
  }
}

CompositionDraftDetailsContainer.propTypes = {
  getReflectionQuestions: PropTypes.func,
  studentActivityId: PropTypes.string,
  getStudentDrafts: PropTypes.func,
  getCriteria: PropTypes.func
};

const mapStateToProps = (state, props) => {
  const draftsWithInfo = addStudentInfoToDrafts(state, props);
  let lastDraftWithFeedback;

  if (draftsWithInfo.length > 0) {
    const finalDraftIndex = draftsWithInfo[draftsWithInfo.length - 1];
    lastDraftWithFeedback = _(draftsWithInfo)
      .filter((draft) => {
        const reviewStatus = draft.studentInfo.reviewStatus;
        return (reviewStatus === 'submitted' || reviewStatus === 'viewed') && draft.index !== finalDraftIndex;
      })
      .maxBy((draft) => {
        return draft.index;
      });
  }

  const activity = state.activities[0];

  let draft;
  if (props.studentDraft) {
    draft = state.drafts.find(
      draftInState => draftInState.draftId === props.studentDraft.draftId
    );
  }

  let rubric;
  if (activity.rubricId) {
    const currentRubric = state.rubric.find(rubricInState => rubricInState.rubricId === activity.rubricId);
    if (currentRubric && currentRubric.criteria) {
      rubric = {...currentRubric};
      rubric.criteria = currentRubric.criteria.map(criteriaId =>
        state.criteria.find(criteria => criteria.criteriaId === criteriaId)
      );
    }
  }

  let reflectionQuestions = [];
  let goals = [];
  if (draft) {
    draft.studentReflectionQuestions.forEach(questionId => {
      let item = state.reflectionQuestions.find(
        question => question.studentReflectionQuestionId === questionId
      );
      if (item) {
        reflectionQuestions.push(item);
      }
    });

    goals = draft.goals ? draft.goals.map(goalId => {
      let draftGoal = state.goal.find(goal => goalId === goal.goalId);
      return draftGoal ? draftGoal.title : null;
    }) : [];
  }

  const draftDetails = (draft && draft.instructions !== '') || goals.length > 0 || reflectionQuestions.length > 0;

  return {
    activityPrompt: activity && activity.prompt,
    draftInstructions: draft && draft.instructions,
    draft,
    rubric,
    reflectionQuestions,
    goals,
    lastDraftWithFeedback,
    homeRoute: state.defaults.homeRoute,
    draftDetails
  };
};

export default connect(mapStateToProps, {
  updateActivityPrompt,
  getStudentDrafts,
  getReflectionQuestions,
  getCriteria})(CompositionDraftDetailsContainer);
