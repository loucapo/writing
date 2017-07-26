import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActivityRubricSelector } from '../components/Activity';
import { updateActivityRubric } from '../modules/activityModule';

class ActivityRubricSelectorContainer extends Component {
  render() {
    return <ActivityRubricSelector {...this.props} />;
  }
}

ActivityRubricSelectorContainer.propTypes = {
  activityId: PropTypes.string,
  rubricOptions: PropTypes.array,
  updateActivityRubric: PropTypes.func
};

const mapStateToProps = state => {
  let rubricOptions = state.rubric.map(stateRubric => ({
    id: stateRubric.rubricId,
    value: stateRubric.title
  }));

  return {
    rubricOptions
  };
};

export default connect(mapStateToProps, { updateActivityRubric })(ActivityRubricSelectorContainer);
