import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { assignmentAction } from './../modules';
import Assignment from '../components/CreateAssignment/CreateAssignment';

class CreateAssignmentContainer extends Component {
  render() {
    if (this.props.isFetching) {
      return (<p style={{ 'padding-top': '100px' }}> Loading... </p>);
    }
    if (this.props.errorMessage) {
      return (<p style={{ 'padding-top': '100px' }}>ERROR! -> {this.props.errorMessage}</p>);
    }
    return (<Assignment{...this.props} />);
  }
}

CreateAssignmentContainer.propTypes = {
  id: PropTypes.string,
  isFetching: PropTypes.string,
  errorMessage: PropTypes.string,
  activityAction: PropTypes.func
};

const mapStateToProps = (state, props) => {
  console.log(props);
  return (<div>hi mom</div>);
};
export default withRouter(connect(mapStateToProps, {assignmentAction})(CreateAssignmentContainer));


