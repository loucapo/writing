import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getDraftsForActivity } from './../modules/draftModule';
import { getStudentDrafts } from './../modules/studentDraftModule';
import {getReflectionQuestions} from './../modules/reflectionQuestionsModule';
import { DraftListDisplay } from '../components/Draft/index';
import { addStudentInfoToDrafts } from './selectors';

class DraftListDisplayContainer extends Component {
  componentWillMount() {
    this.props.getDraftsForActivity(this.props.activityId);
    if(this.props.studentActivityId) {
      this.props.getStudentDrafts(this.props.studentActivityId);
    }
    this.props.getReflectionQuestions();
  }

  render() {
    return (<DraftListDisplay {...this.props} />);
  }
}

DraftListDisplayContainer.propTypes = {
  activityId: PropTypes.string,
  studentActivityId: PropTypes.string,
  getDraftsForActivity: PropTypes.func,
  getStudentActivityByActivityId: PropTypes.func,
  getReflectionQuestions: PropTypes.func,
  getStudentDrafts: PropTypes.func
};

const mapStateToProps = (state, props) => {
  const studentActivity = state.studentActivities.find(x =>
  x.activityId === props.activityId
  && x.studentId === state.auth.id);

  const drafts = addStudentInfoToDrafts(state, props);

  return {
    activityId: props.activityId,
    studentActivityId: studentActivity ? studentActivity.studentActivityId : undefined,
    drafts
  };
};

export default connect(mapStateToProps, {
  getDraftsForActivity,
  getReflectionQuestions,
  getStudentDrafts
})(DraftListDisplayContainer);
