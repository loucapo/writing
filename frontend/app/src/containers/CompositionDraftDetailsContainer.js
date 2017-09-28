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
      x => x.draftId === props.studentDraft.draftId
    );
  }

  let newRubric;
  if (activity.rubricId) {
    let rubric = state.rubric.find(x => x.rubricId === activity.rubricId);
    if (rubric && rubric.criteria) {
      newRubric = {...rubric};
      newRubric.criteria = rubric.criteria.map(x => state.criteria.find(y => y.criteriaId === x));
    }
  }

  let reflectionQuestions = [];
  let goals = [];
  if (draft) {
    draft.studentReflectionQuestions.forEach(x => {
      let item = state.reflectionQuestions
        .find(y => y.studentReflectionQuestionId === x);
      if (item) {
        reflectionQuestions.push(item);
      }
    });

    goals = draft.goals ? draft.goals.map(goalId => {
      let draftGoal = state.goal.find(goal => goalId === goal.goalId);
      return draftGoal ? draftGoal.title : null;
    }) : [];
  }

  return {
    activity,
    draft,
    newRubric,
    reflectionQuestions,
    goals,
    lastDraftWithFeedback,
    homeRoute: state.defaults.homeRoute
  };
};

export default connect(mapStateToProps, {
  updateActivityPrompt,
  getStudentDrafts,
  getReflectionQuestions,
  getCriteria})(CompositionDraftDetailsContainer);
