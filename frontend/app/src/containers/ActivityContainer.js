import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Activity } from '../components/Activity/index';
import { getActivity } from '../modules/activityModule';
import { getGoals } from '../modules/goalModule';
import { getDraftsForActivity } from '../modules/draftModule';

class ActivityContainer extends Component {
  componentWillMount() {
    this.loadData();
  }

  loadData() {
    if (this.props.activityId) {
      this.props.getActivity(this.props.activityId);
      this.props.getDraftsForActivity(this.props.activityId);
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
  getDraftsForActivity: PropTypes.func,
  openDraftFocusModal: PropTypes.func,
  draftsCount: PropTypes.number,
  getGoals: PropTypes.func
};

const mapStateToProps = state => {
  const activityId = state.auth.activity.activityId;
  const drafts = state.drafts;
  let draftCount = drafts ? drafts.filter(d => d.activityId === activityId).length : 0;
  let currentDraft = state.routing.locationBeforeTransitions.query.currentDraft || null;

  return {
    activityId,
    drafts,
    activity: state.activities.find(x => x.activityId === activityId),
    draftCount,
    currentDraft
  };
};

export default connect(mapStateToProps, {
  getActivity,
  getDraftsForActivity,
  getGoals})(ActivityContainer);
