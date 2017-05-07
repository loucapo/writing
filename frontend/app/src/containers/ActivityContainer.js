import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Activity from '../components/Activity/Activity';
import {getActivity} from '../modules/activityModule';
import { getCriteria } from '../modules/criteriaModule';

class ActivityContainer extends Component {
  componentWillMount() {
    this.loadData();
  }

  loadData() {
    if (this.props.activityId) {
      this.props.getActivity(this.props.activityId);
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
  getActivity: PropTypes.func,
  getCriteria: PropTypes.func,
  openDraftFocusModal: PropTypes.func,
  draftsCount: PropTypes.number
};

const mapStateToProps = (state) => {
  const activityId = state.auth.activity.activityId;
  let draftCount = state.drafts.filter(d => d.activityId === activityId).length;

  return {
    activityId,
    activity: state.activities.find(x => x.activityId === activityId),
    draftCount
  };
};

export default connect(mapStateToProps, {getCriteria, getActivity})(ActivityContainer);
