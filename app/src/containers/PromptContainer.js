import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Prompt from '../components/Activity/ActivityPrompt/ActivityPrompt';

class PromptContainer extends Component {

  render() {
    return (<Prompt {...this.props} />);
  }
}

PromptContainer.propTypes = {
  activityId: PropTypes.string
};

const mapStateToProps = (state) => {
  const role = state.auth.role;
  return {
    role,
    prompt: ''
  };
};

export default connect(mapStateToProps)(PromptContainer);


