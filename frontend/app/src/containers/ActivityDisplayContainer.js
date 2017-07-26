import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { ActivityDisplay } from '../components/Activity/index';
import { getActivity } from '../modules/activityModule';
import { createStudentActivityIfNotCreated } from '../modules/studentActivityModule';
import { addStudentInfoToDrafts } from './selectors';
import { getDraftsForActivity } from '../modules/draftModule';
import { getStudentDrafts } from '../modules/studentDraftModule';
import { getReflectionQuestions } from '../modules/reflectionQuestionsModule';

class ActivityDisplayContainer extends Component {
  componentWillMount() {
    this.loadData();
  }

  loadData() {
    if (this.props.activityId) {
      // we can put this one in some kind of decorator perhaps
      this.props.createStudentActivityIfNotCreated(this.props.activityId);
      this.props.getActivity(this.props.activityId);
      this.props.getDraftsForActivity(this.props.activityId);
      this.props.getStudentDrafts(this.props.studentActivityId);
      this.props.getReflectionQuestions();
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.studentActivityId !== this.props.studentActivityId) {
      newProps.getStudentDrafts(newProps.studentActivityId);
    }
  }

  render() {
    return this.props.activity ? <ActivityDisplay {...this.props} /> : null;
  }
}

ActivityDisplayContainer.propTypes = {
  activity: PropTypes.object,
  activityId: PropTypes.string,
  studentActivityId: PropTypes.string,
  getActivity: PropTypes.func,
  createStudentActivityIfNotCreated: PropTypes.func,
  drafts: PropTypes.array,
  getStudentDrafts: PropTypes.func,
  getDraftsForActivity: PropTypes.func,
  getReflectionQuestions: PropTypes.func,
  hasStudentDrafts: PropTypes.bool
};

const mapStateToProps = (state, props) => {
  const activityId = state.auth.activity.activityId;

  const studentActivity = state.studentActivities.find(
    x => x.activityId === activityId && x.studentId === state.auth.id
  );

  const drafts = addStudentInfoToDrafts(state, props);

  //activityId coming from auth so it's there but activity may not be
  const activity = state.activities.find(x => x.activityId === activityId);

  return {
    activityId,
    activity,
    studentActivityId: studentActivity ? studentActivity.studentActivityId : undefined,
    submitDraftMessage: state.messaging.submitDraft,
    drafts
  };
};

export default connect(mapStateToProps, {
  getActivity,
  createStudentActivityIfNotCreated,
  getDraftsForActivity,
  getStudentDrafts,
  getReflectionQuestions
})(ActivityDisplayContainer);
