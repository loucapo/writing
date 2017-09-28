import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Activity } from '../components/Activity/index';
import { getActivity } from '../modules/activityModule';
import { getGoals } from '../modules/goalModule';

class ActivityContainer extends Component {
  componentWillMount() {
    this.loadData();
  }

  loadData() {
    if (this.props.activityId) {
      this.props.getActivity(this.props.activityId);
      this.props.getGoals();
    }
  }
  render() {
    return this.props.activity ? <Activity {...this.props} /> : null;
  }
}

ActivityContainer.propTypes = {
  activity: PropTypes.object,
  activityId: PropTypes.string,
  getActivity: PropTypes.func,
  openDraftFocusModal: PropTypes.func,
  draftsCount: PropTypes.number,
  getGoals: PropTypes.func
};

const mapStateToProps = state => {
  const activityId = state.auth.activity.activityId;
  let draftCount = state.drafts.filter(d => d.activityId === activityId).length;
  let display = state.routing.locationBeforeTransitions.query.display || null;

  return {
    activityId,
    activity: state.activities.find(x => x.activityId === activityId),
    draftCount,
    display
  };
};

export default connect(mapStateToProps, { getActivity, getGoals })(ActivityContainer);
