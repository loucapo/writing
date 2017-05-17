import { connect } from 'react-redux';
import StudentPrompt
  from '../components/Activity/ActivityPrompt/StudentActivityPrompt';

const mapStateToProps = (state, props) => {
  const activity = state.activities.filter(
    x => x.activityId === props.activityId
  )[0];
  return {
    prompt: activity ? activity.prompt : null
  };
};

export default connect(mapStateToProps)(StudentPrompt);
