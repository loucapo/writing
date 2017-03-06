import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';
import RubricSelector from '../components/Activity/RubricSelector/RubricSelector';

class RubricContainer extends Component {

  render() {
    return (<RubricSelector {...this.props} />);
  }
}

RubricContainer.propTypes = {
  activityId: PropTypes.string
};

const mapStateToProps = (state) => {
  const role = state.auth.role;
  return {
    role,
    rubric: {
      title: ''
    }
  };
};

export default connect(mapStateToProps)(RubricContainer);
