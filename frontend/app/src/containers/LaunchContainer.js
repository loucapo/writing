import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import ActivityContainer from './../containers/ActivityContainer';
import StudentActivityContainer from './../containers/StudentActivityContainer';

const LaunchContainer = ({role}) => {
  switch (role) {
    case 'instructor': {
      return (<ActivityContainer />);
    }
    case 'student': {
      return (<StudentActivityContainer />);
    }
    default:
      return null;
  }
};

LaunchContainer.propTypes = {
  role: PropTypes.string
};

export default connect(state => ({role: state.auth.role}))(LaunchContainer);
