import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Activity from '../components/Activity/Activity';
import {fetchActivityAction} from '../modules/activityModule';
import { getCriteria } from '../modules/criteriaModule';

class ActivityContainer extends Component {
  componentWillMount() {
    this.loadData();
  }

  loadData() {
    if (this.props.activityId) {
      this.props.fetchActivityAction(this.props.activityId);
      this.props.getCriteria();
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
  getCriteria: PropTypes.func,
  openDraftFocusModal: PropTypes.func,
  draftsCount: PropTypes.number
};

const mapStateToProps = (state) => {
  const role = state.auth.role;
  const activityId = state.auth.activity.activityId;
  let draftCount = state.drafts.filter(d => d.activityId === activityId).length;

  return {
    role,
    activityId,
    activity: state.activities.find(x => x.id === activityId),
    draftCount
  };
};

export default connect(mapStateToProps, {getCriteria, fetchActivityAction})(ActivityContainer);
