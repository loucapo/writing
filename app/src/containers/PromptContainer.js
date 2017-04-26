import { connect } from 'react-redux';
import { updateActivityPrompt } from './../modules/activityModule';
import Prompt from '../components/Activity/ActivityPrompt/ActivityPrompt';

const mapStateToProps = (state, props) => {
  const role = state.auth.role;
  const activity = state.activities.filter(x => x.id === props.activityId)[0];
  return {
    role,
    prompt: activity ? activity.prompt : null
  };
};

export default connect(mapStateToProps, {updateActivityPrompt})(Prompt);


