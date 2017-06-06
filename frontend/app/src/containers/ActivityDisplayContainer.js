import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { ActivityDisplay } from './../components/Activity/index';
import {getActivity} from '../modules/activityModule';
import { getCriteria } from '../modules/criteriaModule';
import {getRubricList} from './../modules/rubricModule';
import {createStudentActivityIfNotCreated} from './../modules/studentActivityModule';

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
  getActivity: PropTypes.func,
  getCriteria: PropTypes.func,
  getRubricList: PropTypes.func,
  createStudentActivityIfNotCreated: PropTypes.func,
  drafts: PropTypes.array

};

const mapStateToProps = (state) => {
  const activityId = state.auth.activity.activityId;
  let drafts = state.drafts.filter(draft => draft.activityId === activityId);

  //activityId coming from auth so it's there but activity may not be
  return {
    activityId,
    activity: state.activities.find(x => x.activityId === activityId),
    submitDraftMessage: state.messaging.submit_draft,
    drafts
  };
};

export default connect(mapStateToProps, {
  getCriteria,
  getActivity,
  getRubricList,
  createStudentActivityIfNotCreated
})(ActivityDisplayContainer);
