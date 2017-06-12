import { connect } from 'react-redux';
import { updateActivityTitle } from './../modules/activityModule';
import { ActivityTitle} from '../components/Activity/index.js';

const mapStateToProps = (state, props) => {
  const activity = state.activities.find(x => x.activityId === props.activityId);
  return {
    title: activity ? activity.title : null
  };
};

export default connect(mapStateToProps, {updateActivityTitle})(ActivityTitle);


