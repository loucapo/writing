import { connect } from 'react-redux';
import { updateActivityPrompt } from './../modules/activityModule';
import Prompt from '../components/Activity/ActivityPrompt/ActivityPrompt';

const mapStateToProps = (state, props) => {
  const activity = state.activities.filter(x => x.activityId === props.activityId)[0];
  return {
    prompt: activity ? activity.prompt : null
  };
};

export default connect(mapStateToProps, {updateActivityPrompt})(Prompt);

