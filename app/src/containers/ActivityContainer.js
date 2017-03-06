import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Activity from '../components/Activity/Activity';
import { fetchActivityAction } from './../modules/activityModule';

class ActivityContainer extends Component {
  componentWillMount() {
    this.loadData();
  }

  loadData() {
    if (this.props.activityId) {
      this.props.fetchActivityAction(this.props.activityId);
    }
  }

  render() {
    if(!this.props.activity) {
      return null;
    }
    return (<Activity {...this.props} />);
  }
}

ActivityContainer.propTypes = {
  activity: PropTypes.object,
  activityId: PropTypes.string,
  fetchActivityAction: PropTypes.func,
  drafts: PropTypes.array
};

const mapStateToProps = (state) => {
  const role = state.auth.role;
  const activityId = state.auth.activity.activityId;
  return {
    role,
    activityId,
    activity: state.activities.find(x => x.id === activityId),
    drafts: state.drafts
  };
};

export default connect(mapStateToProps, {fetchActivityAction})(ActivityContainer);
