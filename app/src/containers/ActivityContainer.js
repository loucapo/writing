import { connect } from 'react-redux';
import { activityAction } from './../modules';
import Activity from '../components/Activity';

const mapStateToProps = (state) => {
  return {
    activity: state.activity.Activity,
    drafts: state.activity.Drafts
  };
};

const mapDispatchToProps = (dispatch, props) => {
  dispatch(activityAction(props.params.id));
  return {};
};

const ActivityContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Activity);

export default ActivityContainer;
