import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getDraftsForActivity } from './../modules/draftModule';
import StudentDraftList from '../components/Activity/DraftList/StudentDraftList';
import {getStudentReflectionQuestions} from './../modules/studentReflectionQuestionsModule';

class StudentDraftListContainer extends Component {
  componentWillMount() {
    this.props.getDraftsForActivity(this.props.activityId);
    this.props.getStudentReflectionQuestions();
  }

  render() {
    return (<StudentDraftList {...this.props} />);
  }
}

StudentDraftListContainer.propTypes = {
  activityId: PropTypes.string,
  getDraftsForActivity: PropTypes.func,
  getStudentActivityByActivityId: PropTypes.func,
  getStudentReflectionQuestions: PropTypes.func
};

const mapStateToProps = (state, props) => {
  const drafts = state.drafts.filter(x => x.activityId === props.activityId);
  const draftsWithGoals = drafts.map(x => {
    let goals = [];
    let studentReflectionQuestions = [];
    if (x.goals) {
      goals = x.goals.map(y => state.criteria.find(z => z.criteriaId === y).title);
    }
    if (x.studentReflectionQuestions) {
      studentReflectionQuestions = x.studentReflectionQuestions
        .map(y => {
          const question = state.studentReflectionQuestions.find(z => z.studentReflectionQuestionId === y);
          return {question: question.question, questionType: question.questionType};
        });
    }
    return {...x, goals, studentReflectionQuestions};
  }).sort((a, b) => a.index - b.index );

  return {
    activityId: props.activityId,
    drafts: draftsWithGoals
  };
};

export default connect(mapStateToProps, {
  getDraftsForActivity,
  getStudentReflectionQuestions
})(StudentDraftListContainer);
