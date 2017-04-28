import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getDraftsForActivity,
  addDraftToActivity,
  removeDraftFromActivity,
  updateDraftInstructions} from './../modules/draftModule';
import {setStudentReflectionQuestions, getStudentReflectionQuestions} from './../modules/studentReflectionQuestionsModule';
import DraftList from '../components/Activity/DraftList/DraftList';

class DraftListContainer extends Component {
  componentWillMount() {
    this.props.getDraftsForActivity(this.props.activityId);
    this.props.getStudentReflectionQuestions();
  }

  render() {
    return (<DraftList {...this.props} />);
  }
}

DraftListContainer.propTypes = {
  activityId: PropTypes.string,
  setStudentReflectionQuestions: PropTypes.func,
  getStudentReflectionQuestions: PropTypes.func,
  getDraftsForActivity: PropTypes.func
};

const mapStateToProps = (state, props) => {
  const role = state.auth.role;
  const drafts = state.drafts.filter(x => x.activityId === props.activityId);
  const denormalizedDraft = drafts.map(x => {
    let goals = [];
    let studentReflectionQuestions = [];
    if (x.goals) {
      goals = x.goals.map(y => state.criteria.find(z => z.id === y).title);
    }
    if(x.studentReflectionQuestions) {
      studentReflectionQuestions = x.studentReflectionQuestions
        .map(y => {
          const question = state.studentReflectionQuestions.find(z => z.id === y);
          return {question: question.question, questionType: question.questionType};
        });
    }
    return {...x, goals, studentReflectionQuestions};
  });

  return {
    role,
    activityId: props.activityId,
    drafts: denormalizedDraft
  };
};

export default connect(mapStateToProps, {
  getDraftsForActivity,
  addDraftToActivity,
  removeDraftFromActivity,
  updateDraftInstructions,
  getStudentReflectionQuestions,
  setStudentReflectionQuestions})(DraftListContainer);
