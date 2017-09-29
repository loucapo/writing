import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getDraftsForActivity,
  addDraftToActivity,
  removeDraftFromActivity,
  updateDraftInstructions} from './../modules/draftModule';
import {setReflectionQuestions, getReflectionQuestions} from './../modules/reflectionQuestionsModule';
import { DraftList } from '../components/Draft/index';

class DraftListContainer extends Component {
  componentWillMount() {
    this.props.getDraftsForActivity(this.props.activityId);
    this.props.getReflectionQuestions();
  }

  render() {
    return (<DraftList {...this.props} />);
  }
}

DraftListContainer.propTypes = {
  activityId: PropTypes.string,
  setReflectionQuestions: PropTypes.func,
  getReflectionQuestions: PropTypes.func,
  getDraftsForActivity: PropTypes.func
};

const mapStateToProps = (state, props) => {
  const drafts = state.drafts.filter(x => x.activityId === props.activityId);
  const denormalizedDraft = drafts.map(x => {
    let goals = [];
    let studentReflectionQuestions = [];
    if (x.goals) {
      goals = x.goals.map(y => state.goal.find(z => z.goalId === y).title);
    }
    if (x.studentReflectionQuestions) {
      studentReflectionQuestions = x.studentReflectionQuestions
        .map(y => {
          const question = state.reflectionQuestions.find(z => z.studentReflectionQuestionId === y);
          return {question: question.question, questionType: question.questionType};
        });
    }
    return {...x, goals, studentReflectionQuestions};
  }).sort((a, b) => a.index - b.index );

  return {
    activityId: props.activityId,
    drafts: denormalizedDraft
  };
};

export default connect(mapStateToProps, {
  getDraftsForActivity,
  addDraftToActivity,
  removeDraftFromActivity,
  updateDraftInstructions,
  getReflectionQuestions,
  setReflectionQuestions})(DraftListContainer);
