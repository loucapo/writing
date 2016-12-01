import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { activityAction } from './../modules';
import Activity from '../components/CreateActivity/CreateActivity';

class CreateActivityContainer extends Component {
  render() {
    return (<Activity{...this.props} />);
  }
}

CreateActivityContainer.propTypes = {
  id: PropTypes.string,
  isFetching: PropTypes.string,
  errorMessage: PropTypes.string,
  activityAction: PropTypes.func
};

const mapStateToProps = (state, props) => {
  console.log(props);
  return (<div>hi mom</div>);
};
export default withRouter(connect(mapStateToProps, {activityAction})(CreateActivityContainer));


