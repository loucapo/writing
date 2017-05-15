import { connect } from 'react-redux';
import { updateActivityPrompt } from './../modules/activityModule';
import Prompt from '../components/Activity/ActivityPrompt/ActivityPrompt';

const mapStateToProps = (state, props) => {
  const activity = state.activities.find(x => x.activityId === props.activityId);
  return {
    prompt: activity ? activity.prompt : null
  };
};

export default connect(mapStateToProps, {updateActivityPrompt})(Prompt);


