import { connect } from 'react-redux';
import { updateActivityPrompt } from '../modules/activityModule';
import ActivityPrompt from '../components/Activity/ActivityPrompt/ActivityPrompt';

const mapStateToProps = (state, props) => {
  return {
    promptText: props.prompt ? props.prompt.blocks[0].text : null
  };
};

export default connect(mapStateToProps, {updateActivityPrompt})(ActivityPrompt);
