import { connect } from 'react-redux';
import { activityAction } from './../modules';
import Activity from '../components/Activity';

const mapStateToProps = (state) => {
  return {
    Activity: state.activity.Activity,
    Drafts: state.activity.Drafts
  };
};

const mapDispatchToProps = (dispatch, props) => {
  dispatch(activityAction(props.id));
  return {};
};

const ActivityContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Activity);

export default ActivityContainer;
