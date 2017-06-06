import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { ActivityDisplay } from './../components/Activity/index';
import {getActivity} from '../modules/activityModule';
import { getCriteria } from '../modules/criteriaModule';
import {getRubricList} from './../modules/rubricModule';
import {createStudentActivityIfNotCreated} from './../modules/studentActivityModule';
import { addStudentInfoToDrafts } from './selectors';
import { getDraftsForActivity } from './../modules/draftModule';
import { getStudentDrafts } from './../modules/studentDraftModule';

class ActivityDisplayContainer extends Component {
  componentWillMount() {
    this.loadData();
  }

  loadData() {
    if (this.props.activityId) {
      // we can put this one in some kind of decorator perhaps
      this.props.createStudentActivityIfNotCreated(this.props.activityId);

      this.props.getActivity(this.props.activityId);
      this.props.getCriteria();
      this.props.getRubricList();
      this.props.getDraftsForActivity(this.props.activityId);
      this.props.getStudentDrafts(this.props.studentActivityId);
    }
  }

  componentWillReceiveProps(newProps) {
    if(newProps.studentActivityId !== this.props.studentActivityId) {
      newProps.getStudentDrafts(newProps.studentActivityId);
    }
  }

  render() {
    if(!this.props.activity) {
      return null;
    }
    return (<ActivityDisplay {...this.props} />);
  }
}

ActivityDisplayContainer.propTypes = {
  activity: PropTypes.object,
  activityId: PropTypes.string,
  studentActivityId: PropTypes.string,
  getActivity: PropTypes.func,
  getCriteria: PropTypes.func,
  getRubricList: PropTypes.func,
  createStudentActivityIfNotCreated: PropTypes.func,
  drafts: PropTypes.array,
  getStudentDrafts: PropTypes.func,
  getDraftsForActivity: PropTypes.func,
  hasStudentDrafts: PropTypes.bool
};

const mapStateToProps = (state, props) => {
  const activityId = state.auth.activity.activityId;

  const studentActivity = state.studentActivities.find(x =>
    x.activityId === activityId
    && x.studentId === state.auth.id);

  const drafts = addStudentInfoToDrafts(state, props);

  //activityId coming from auth so it's there but activity may not be
  return {
    activityId,
    studentActivityId: studentActivity ? studentActivity.studentActivityId : undefined,
    activity: state.activities.find(x => x.activityId === activityId),
    drafts
  };
};

export default connect(mapStateToProps, {
  getCriteria,
  getActivity,
  getRubricList,
  createStudentActivityIfNotCreated,
  getDraftsForActivity,
  getStudentDrafts
})(ActivityDisplayContainer);
