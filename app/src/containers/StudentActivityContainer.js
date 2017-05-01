import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import StudentActivity from '../components/Activity/StudentActivity';
import {getActivity} from '../modules/activityModule';
import { getCriteria } from '../modules/criteriaModule';

class StudentActivityContainer extends Component {
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
    return (<StudentActivity {...this.props} />);
  }
}

StudentActivityContainer.propTypes = {
  activity: PropTypes.object,
  activityId: PropTypes.string,
  getActivity: PropTypes.func,
  getCriteria: PropTypes.func
};

const mapStateToProps = (state) => {
  const role = state.auth.role;
  const activityId = state.auth.activity.activityId;
  return {
    role,
    activityId,
    activity: state.activities.find(x => x.activityId === activityId)
  };
};

export default connect(mapStateToProps, {getCriteria, getActivity})(StudentActivityContainer);
