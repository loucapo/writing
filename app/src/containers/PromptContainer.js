import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { updateActivityPrompt } from './../modules/activityModule';
import Prompt from '../components/Activity/ActivityPrompt/ActivityPrompt';

class PromptContainer extends Component {

  render() {
    return (<Prompt {...this.props} />);
  }
}

PromptContainer.propTypes = {
  activityId: PropTypes.string
};

const mapStateToProps = (state, props) => {
  const role = state.auth.role;
  const activity = state.activities.filter(x => x.id === props.activityId)[0];
  return {
    role,
    prompt: activity ? activity.prompt : null
  };
};

export default connect(mapStateToProps, {updateActivityPrompt})(PromptContainer);


