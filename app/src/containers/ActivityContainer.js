import { connect } from 'react-redux';
import { activityAction } from './../modules';
import Activity from '../components/Activity';

const mapStateToProps = state => {
  let myDrafts = state.activity.Drafts ? state.activity.Drafts : [];
  let data = {
    Activity: state.activity.Activity,
    Drafts: myDrafts
  };
  return data;
};

const mapDispatchToProps = dispatch => {
  dispatch(activityAction('13630184-5955-4dbe-9908-ab065f1bcad2'));
  return {};
};

const ActivityContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Activity);

export default ActivityContainer;
