import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import { updateActivityPrompt } from '../modules/activityModule';
import { getReflectionQuestions } from '../modules/reflectionQuestionsModule';
import { getStudentDrafts } from '../modules/studentDraftsModule';
import { CompositionDraftDetails } from '../components/Composition/index';
import { getActivity } from '../modules/activityModule';
import { getDraftsForActivity } from '../modules/draftModule';
import { getCriteria } from '../modules/criteriaModule';
import { getRubricList } from '../modules/rubricModule';
import { getGoals } from '../modules/goalModule';
import { addStudentInfoToDrafts } from './selectors';

class CompositionDraftDetailsContainer extends Component {
  componentWillMount() {
    this.loadData();
  }

  loadData() {
    if (!this.props.activity) {
      this.props.getActivity(this.props.activityId);
    }
    if (_.isEmpty(this.props.drafts)) {
      this.props.getDraftsForActivity(this.props.activityId);
    }
    if (_.isEmpty(this.props.studentDrafts) && this.props.studentActivityId) {
      this.props.getStudentDrafts(this.props.studentActivityId);
    }
    if (_.isEmpty(this.props.reflectionQuestionsState)) {
      this.props.getReflectionQuestions();
    }
    if (_.isEmpty(this.props.criteria)) {
      this.props.getCriteria();
    }
    if (_.isEmpty(this.props.rubric)) {
      this.props.getRubricList();
    }
    if (_.isEmpty(this.props.goals)) {
      this.props.getGoals();
    }
  }

  render() {
    return (<CompositionDraftDetails {...this.props} />);
  }
}

CompositionDraftDetailsContainer.propTypes = {
  activity: PropTypes.object,
  activityId: PropTypes.string,
  studentActivityId: PropTypes.string,
  drafts: PropTypes.array,
  reflectionQuestionsState: PropTypes.array,
  studentDrafts: PropTypes.array,
  criteria: PropTypes.array,
  rubric: PropTypes.array,
  goals: PropTypes.array,
  getDraftsForActivity: PropTypes.func,
  getReflectionQuestions: PropTypes.func,
  getStudentDrafts: PropTypes.func,
  getActivity: PropTypes.func,
  getCriteria: PropTypes.func,
  getRubricList: PropTypes.func,
  getGoals: PropTypes.func
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
  const reflectionQuestionsState = state.reflectionQuestions;

  const draft = state.drafts.find(
    draftInState => draftInState.draftId === props.studentDraft.draftId
  );

  let rubric;
  if (activity && activity.rubricId) {
    const currentRubric = state.rubric.find(rubricInState => rubricInState.rubricId === activity.rubricId);
    if (currentRubric && currentRubric.criteria) {
      rubric = {...currentRubric};
      rubric.criteria = currentRubric.criteria.map(criterionId =>
        state.criteria.find(criterion => criterion.criterionId === criterionId)
      );
    }
  }

  let reflectionQuestions = [];
  let goals = [];
  if (draft) {
    draft.studentReflectionQuestions.forEach(questionId => {
      let question = state.reflectionQuestions.find(
        questionState => questionState.studentReflectionQuestionId === questionId
      );
      if (question) {
        reflectionQuestions.push(question);
      }
    });

    goals = draft.goals ? draft.goals.map(goalId => {
      let draftGoal = state.goal.find(goal => goalId === goal.goalId);
      return draftGoal ? draftGoal.title : null;
    }) : [];
  }

  const draftInstructions = draft && draft.instructions;
  const draftDetails = (draftInstructions && draftInstructions !== '') || goals.length > 0 || reflectionQuestions.length > 0;
  const activityPrompt = activity && activity.prompt;
  const promptIsNotEmpty = activityPrompt && _.find(activityPrompt.blocks, block => _.get(block, 'text.length') > 0);

  return {
    activityPrompt,
    promptIsNotEmpty,
    draftInstructions,
    draft,
    rubric,
    reflectionQuestions,
    reflectionQuestionsState,
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
  getActivity,
  getCriteria,
  getRubricList,
  getGoals,
  getDraftsForActivity})(CompositionDraftDetailsContainer);
